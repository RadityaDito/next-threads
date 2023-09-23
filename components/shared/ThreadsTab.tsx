import { FC } from "react";
import { TabsDemo } from "./TabsDemo";
import { fetchUserPosts } from "@/lib/actions/user.action";
import ThreadCard from "../cards/ThreadCard";

interface ThreadsTabProps {
  currentUserId: string;
  accountId: string;
  accountType: string;
}

const ThreadsTab: FC<ThreadsTabProps> = async ({
  currentUserId,
  accountId,
  accountType,
}) => {
  let result = await fetchUserPosts(accountId);
  return (
    <section className={"mt-9 flex flex-col gap-10"}>
      {result.threads.map((thread: any) => (
        <ThreadCard
          key={thread._id}
          id={thread._id}
          currentUserId={currentUserId}
          parentId={thread.parentId}
          content={thread.text}
          author={
            accountType === "User"
              ? { name: result.name, image: result.image, id: result.id }
              : {
                  name: thread.author.name,
                  image: thread.author.image,
                  id: thread.author.id,
                }
          } //todo
          community={thread.community} //todo
          createdAt={thread.createdAt}
          comments={thread.children}
        />
      ))}
    </section>
  );
};

export default ThreadsTab;
