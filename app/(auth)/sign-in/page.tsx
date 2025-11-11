export const dynamic = 'force-dynamic';

import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/actions/auth.action";
import AuthForm from "@/components/AuthForm";

const Page = async () => {
  const user = await getCurrentUser();

  // If signed in already ➜ redirect home
  if (user) redirect("/");

  return <AuthForm type="sign-in" />;
};

export default Page;
