import { useQuery } from "@tanstack/react-query";
import { forumReplyService } from "../../services/reply/forum-reply.service";


interface Props {
  topicId: number;
}

export default function ForumReplyList({ topicId }: Props) {
  const { data } = useQuery({
    queryKey: ["replies", topicId],
    queryFn: () => forumReplyService.getReplies(topicId),
  });

  if (!data?.length) {
    return <p>Nenhuma resposta ainda.</p>;
  }

  return (
    <div>
      {data.map(reply => (
        <div key={reply.id}>
          <div
            dangerouslySetInnerHTML={{ __html: reply.text }}
          />
        </div>
      ))}
    </div>
  );
}
