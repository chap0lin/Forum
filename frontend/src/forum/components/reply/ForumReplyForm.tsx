import { useState } from "react";
import RichTextEditor from "../RichTextEditor";
import { forumReplyService } from "../../services/reply/forum-reply.service";


interface Props {
  topicId: number;
  onCreated: () => void;
}

export default function ForumReplyForm({ topicId, onCreated }: Props) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!text) return;

    try {
      setLoading(true);

      await forumReplyService.create({
        topic_id: topicId,
        text,
      });

      setText("");
      onCreated();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <RichTextEditor value={text} onChange={setText} />

      <button onClick={handleSubmit} disabled={loading}>
        Responder
      </button>
    </div>
  );
}
