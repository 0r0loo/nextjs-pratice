import { useRouter } from "next/router";

function TopicPage() {
  const router = useRouter();

  console.log("-> router", router.query);
  return (
    <div>
      <h1>topic</h1>
    </div>
  );
}

export default TopicPage;
