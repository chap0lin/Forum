
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { forumApi } from "../../services/api";
import RichTextEditor from "../../components/Editor/RichTextEditor";

export default function TopicDetail() {
    const { id } = useParams();
    const [topic, setTopic] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [replyContent, setReplyContent] = useState("");

    useEffect(() => {
        if (id) loadTopic(parseInt(id));
    }, [id]);

    const loadTopic = async (topicId: number) => {
        try {
            const res = await forumApi.getTopic(topicId);
            setTopic(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleReply = async () => {
        if (!id || !replyContent) return;
        try {
            await forumApi.reply(parseInt(id), { content: replyContent });
            setReplyContent("");
            loadTopic(parseInt(id)); // Reload to see new reply
        } catch (err) {
            alert("Failed to post reply");
        }
    };

    if (loading || !topic) return <div>Loading...</div>;

    return (
        <div className="topic-detail">
            <h1>{topic.title}</h1>
            <div className="topic-content" dangerouslySetInnerHTML={{ __html: topic.content }} />

            <hr />

            <h3>Replies</h3>
            {topic.posts && topic.posts.map((p: any) => (
                <div key={p.id} className="post">
                    <div dangerouslySetInnerHTML={{ __html: p.content }} />
                    <small>By {p.firstName}</small>
                </div>
            ))}

            <hr />

            <h3>Reply</h3>
            <RichTextEditor value={replyContent} onChange={setReplyContent} />
            <button onClick={handleReply} style={{ marginTop: 10 }}>Post Reply</button>
        </div>
    );
}
