"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useAuth(requiredRole?: string[]) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push("/auth/login");
      return;
    }

    if (requiredRole && session.user?.role) {
      if (!requiredRole.includes((session.user as any).role)) {
        router.push("/");
      }
    }
  }, [session, status, router, requiredRole]);

  return {
    user: session?.user,
    isAuthenticated: !!session,
    isLoading: status === "loading",
    role: (session?.user as any)?.role,
  };
}
