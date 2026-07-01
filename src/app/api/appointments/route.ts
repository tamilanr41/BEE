import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const appointments = await prisma.appointment.findMany({
      include: { patient: { include: { user: true } }, staff: { include: { user: true } } },
      orderBy: { startTime: "desc" },
      take: 50,
    });
    return NextResponse.json(appointments);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch appointments" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const appointment = await prisma.appointment.create({
      data: {
        clinicId: body.clinicId,
        patientId: body.patientId,
        staffId: body.staffId,
        type: body.type,
        startTime: new Date(body.startTime),
        endTime: new Date(body.endTime),
        duration: body.duration || 30,
        isEmergency: body.isEmergency || false,
        isVideoConsult: body.isVideoConsult || false,
        notes: body.notes,
      },
    });
    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create appointment" }, { status: 500 });
  }
}
