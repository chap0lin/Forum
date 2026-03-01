
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pageApi } from "../services/api";

export default function PageViewer() {
    const { slug } = useParams();
    const [page, setPage] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (slug) loadPage(slug);
    }, [slug]);

    const loadPage = async (slug: string) => {
        try {
            setLoading(true);
            const res = await pageApi.getPage(slug);
            setPage(res.data);
        } catch (err) {
            setError("Page not found");
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading content...</div>;
    if (error) return <div>{error}</div>;
    if (!page) return null;

    return (
        <div className="page-viewer" style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
            <h1>{page.title}</h1>
            <div className="content" dangerouslySetInnerHTML={{ __html: page.content }} />
        </div>
    );
}
