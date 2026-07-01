import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const adminPassword = await bcrypt.hash("admin123", 12);
  const admin = await prisma.user.upsert({
    where: { email: "admin@smilecaredental.com" },
    update: {},
    create: {
      email: "admin@smilecaredental.com",
      passwordHash: adminPassword,
      firstName: "Admin",
      lastName: "User",
      phone: "(123) 456-7890",
      role: "ADMIN",
    },
  });

  // Create main clinic
  const clinic = await prisma.clinic.upsert({
    where: { id: "default-clinic" },
    update: {},
    create: {
      id: "default-clinic",
      name: "SmileCare Dental - Main Clinic",
      address: "123 Dental Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "US",
      phone: "(123) 456-7890",
      email: "info@smilecaredental.com",
      timezone: "America/New_York",
      emergencyPhone: "(123) 456-7899",
      parkingInfo: "Free parking available in building garage",
      directions: "Located at the corner of Dental Street and Care Avenue",
    },
  });

  // Create sample patients
  const patientPassword = await bcrypt.hash("patient123", 12);
  const patients = [
    { email: "jessica@example.com", firstName: "Jessica", lastName: "Martinez" },
    { email: "robert@example.com", firstName: "Robert", lastName: "Kim" },
    { email: "amanda@example.com", firstName: "Amanda", lastName: "Foster" },
  ];

  for (const p of patients) {
    const user = await prisma.user.upsert({
      where: { email: p.email },
      update: {},
      create: {
        email: p.email,
        passwordHash: patientPassword,
        firstName: p.firstName,
        lastName: p.lastName,
        role: "PATIENT",
        patient: {
          create: {
            clinicId: clinic.id,
          },
        },
      },
    });
  }

  // Create sample appointments
  const patientUsers = await prisma.user.findMany({ where: { role: "PATIENT" }, include: { patient: true } });
  for (const pu of patientUsers) {
    if (pu.patient) {
      await prisma.appointment.create({
        data: {
          clinicId: clinic.id,
          patientId: pu.patient.id,
          type: "CHECKUP",
          status: "SCHEDULED",
          startTime: new Date("2026-07-15T14:00:00Z"),
          endTime: new Date("2026-07-15T14:30:00Z"),
          duration: 30,
        },
      });
    }
  }

  console.log("Seed data created successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
