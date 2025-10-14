import Agent from "@/components/Agent";
import { getCurrentUser, getInterviewByUserId } from "@/lib/actions/auth.action";
import { getLatestInterviews } from "@/lib/actions/general.action";

const Page = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return <div>Please sign in to continue.</div>;
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

      {/* Example display */}
      <div>
        <h4>Your Interviews</h4>
        <pre>{JSON.stringify(userInterviews, null, 2)}</pre>
      </div>

      <div>
        <h4>Latest Interviews</h4>
        <pre>{JSON.stringify(latestInterviews, null, 2)}</pre>
      </div>
    </>
  );
};

export default Page;
