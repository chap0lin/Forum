
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { forumApi } from "../../services/api";

export default function TopicList() {
    const [topics, setTopics] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadTopics();
    }, []);

    const loadTopics = async () => {
        try {
            const res = await forumApi.listTopics();
            setTopics(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading topics...</div>;

    return (
        <div className="topic-list">
            <h1>Forum</h1>
            <Link to="/topics/new" className="btn btn-primary">New Topic</Link>
            <ul>
                {topics.map((t) => (
                    <li key={t.id}>
                        <Link to={`/topics/${t.id}`}>
                            <h3>{t.title}</h3>
                        </Link>
                        <p>By {t.firstName} {t.lastName}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
