
import React, { useState } from "react";
import { pageApi } from "../../services/api";
import RichTextEditor from "../../components/Editor/RichTextEditor";

export default function PageEditor() {
    const [slug, setSlug] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [message, setMessage] = useState("");

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (!slug || !title || !content) {
                alert("All fields required");
                return;
            }
            await pageApi.savePage({ slug, title, content });
            setMessage("Page saved successfully!");
        } catch (err) {
            console.error(err);
            setMessage("Failed to save page.");
        }
    };

    return (
        <div className="page-editor" style={{ maxWidth: 800, margin: "auto" }}>
            <h1>Page Editor</h1>
            {message && <div className="p-4 bg-gray-100 mb-4">{message}</div>}
            <form onSubmit={handleSave}>
                <div style={{ marginBottom: 10 }}>
                    <label>Slug (URL): </label>
                    <input
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        placeholder="e.g. privacy-policy"
                        style={{ width: "100%", padding: 5 }}
                        required
                    />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <label>Title: </label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Page Title"
                        style={{ width: "100%", padding: 5 }}
                        required
                    />
                </div>
                <div style={{ marginBottom: 20 }}>
                    <label>Content: </label>
                    <RichTextEditor value={content} onChange={setContent} />
                </div>
                <button type="submit">Save Page</button>
            </form>
        </div>
    );
}
