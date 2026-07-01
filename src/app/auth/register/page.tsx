"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Eye, EyeOff, Loader2, UserPlus } from "lucide-react";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate registration
    setTimeout(() => {
      toast.success("Account created! Please sign in.");
      router.push("/auth/login");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-100 p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-lg font-bold text-white">S</div>
            <span className="text-xl font-bold text-secondary-900">SmileCare Dental</span>
          </Link>
        </div>

        <div className="rounded-xl border border-secondary-200 bg-white p-8 shadow-lg">
          <h1 className="mb-2 text-2xl font-bold text-secondary-900">Create Account</h1>
          <p className="mb-6 text-sm text-secondary-500">Join SmileCare Dental for seamless appointment management.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input label="First Name" required placeholder="John" />
              <Input label="Last Name" required placeholder="Doe" />
            </div>
            <Input label="Email" type="email" required placeholder="john@example.com" />
            <Input label="Phone" type="tel" required placeholder="(123) 456-7890" />
            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Create a strong password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-secondary-400"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            <div className="flex items-start gap-2 text-sm text-secondary-500">
              <input type="checkbox" className="mt-1 rounded border-secondary-300 text-primary-600" />
              <span>I agree to the <a href="#" className="text-primary-600 hover:underline">Terms of Service</a> and <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a>.</span>
            </div>

            <Button type="submit" fullWidth size="lg" loading={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <UserPlus className="h-4 w-4" />}
              Create Account
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-secondary-500">
            Already have an account?{" "}
            <Link href="/auth/login" className="font-medium text-primary-600 hover:text-primary-700">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
