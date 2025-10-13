import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/actions/auth.action";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  let isUserAuthenticated = false;

  try {
    isUserAuthenticated = await isAuthenticated();
  } catch (error) {
    console.error("Auth check failed:", error);
  }

  if (isUserAuthenticated) redirect("/");

  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
