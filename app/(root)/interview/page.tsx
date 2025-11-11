import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { getInterviewByUserId } from "@/lib/actions/auth.action";

import { getLatestInterviews } from "@/lib/actions/general.action";
import { redirect } from "next/navigation";

// 👇 Add this line
export const dynamic = 'force-dynamic';

const Page = async () => {
  const user = await getCurrentUser();

  if (!user) {
  redirect("/sign-in");
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
