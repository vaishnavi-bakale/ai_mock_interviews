export const dynamic = 'force-dynamic';

import Agent from "@/components/Agent";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { getInterviewByUserId } from "@/lib/actions/auth.action";
import { getLatestInterviews } from "@/lib/actions/general.action";

const Page = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-in"); // ✅ redirect instead of returning JSX
  }

  const [userInterviews, latestInterviews] = await Promise.all([
    getInterviewByUserId(user.id),
    getLatestInterviews({ userId: user.id }),
  ]);

  return (
    <>
      <h3>Interview Generation</h3>

      <Agent
        userName={user.name}
        userId={user.id}
        profileImage={user.profileURL}
        type="generate"
      />
    </>
  );
};

export default Page;
