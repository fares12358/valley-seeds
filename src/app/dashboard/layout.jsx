"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

const PAGE_TITLES = {
  "/dashboard":            "Overview",
  "/dashboard/hero":       "Hero Section",
  "/dashboard/about":      "About Section",
  "/dashboard/why-us":     "Why Us Section",
  "/dashboard/mission":    "Mission & Vision",
  "/dashboard/services":   "Core Values",
  "/dashboard/technology": "Technology Section",
  "/dashboard/erp":        "ERP Section",
  "/dashboard/contact":    "Contact Section",
  "/dashboard/footer":     "Footer",
  "/dashboard/messages":   "Messages",
  "/dashboard/settings":   "Settings",
};

// Auth pages render WITHOUT the dashboard shell (no sidebar, no topbar)
const PUBLIC_PATHS = [
  "/dashboard/login",
  "/dashboard/forgot-password",
  "/dashboard/reset-password",
];

export default function DashboardLayout({ children }) {
  const { user, isLoading } = useAuth();
  const router   = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isPublicPath = PUBLIC_PATHS.some((p) => pathname.startsWith(p));

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Redirect unauthenticated users away from protected routes
  useEffect(() => {
    if (!isLoading && !user && !isPublicPath) {
      router.replace("/dashboard/login?from=" + encodeURIComponent(pathname));
    }
  }, [user, isLoading, isPublicPath, router, pathname]);

  // Auth pages (login, forgot, reset) — render directly, no shell
  if (isPublicPath) {
    return (
      <>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3500,
            style: { fontFamily: "Alexandria, sans-serif", fontSize: "14px" },
          }}
        />
        {children}
      </>
    );
  }

  // Protected routes — show spinner while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 size={28} className="animate-spin text-[#037338]" />
      </div>
    );
  }

  // Not authenticated and not a public path — render nothing (redirect fires above)
  if (!user) return null;

  const pageTitle = PAGE_TITLES[pathname] || "Dashboard";

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          style: { fontFamily: "Alexandria, sans-serif", fontSize: "14px" },
          success: { iconTheme: { primary: "#037338", secondary: "#fff" } },
        }}
      />

      <Sidebar mobileOpen={mobileOpen} onMobileClose={() => setMobileOpen(false)} />

      <div className="lg:pl-64 flex flex-col min-h-screen">
        <TopBar title={pageTitle} onMenuClick={() => setMobileOpen(true)} />
        <main className="flex-1 flex flex-col">
          <div className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
