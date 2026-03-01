
import React, { useEffect, useState } from "react";
import { messageApi } from "../../services/api";

export default function Chat() {
    const [conversations, setConversations] = useState<any[]>([]);
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const [messages, setMessages] = useState<any[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadConversations();
    }, []);

    useEffect(() => {
        if (selectedUser) {
            loadMessages(selectedUser.id);
        }
    }, [selectedUser]);

    const loadConversations = async () => {
        try {
            const res = await messageApi.getConversations();
            setConversations(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const loadMessages = async (userId: number) => {
        try {
            const res = await messageApi.getMessages(userId);
            setMessages(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim() || !selectedUser) return;
        try {
            const res = await messageApi.sendMessage(selectedUser.id, newMessage);
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) return <div>Loading chats...</div>;

    return (
        <div className="chat-container" style={{ display: "flex", height: "80vh" }}>
            <div className="sidebar" style={{ width: 250, borderRight: "1px solid #ccc", padding: 10 }}>
                <h3>Conversations</h3>
                {conversations.length === 0 && <p>No recent chats.</p>}
                {conversations.map(u => (
                    <div
                        key={u.id}
                        onClick={() => setSelectedUser(u)}
                        style={{
                            padding: 10,
                            cursor: "pointer",
                            backgroundColor: selectedUser?.id === u.id ? "#f0f0f0" : "transparent"
                        }}
                    >
                        {u.firstName} {u.lastName}
                    </div>
                ))}
            </div>
            <div className="chat-window" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {selectedUser ? (
                    <>
                        <div className="messages-list" style={{ flex: 1, padding: 20, overflowY: "auto" }}>
                            {messages.map(m => (
                                <div key={m.id} style={{
                                    marginBottom: 10,
                                    textAlign: m.sender_id === selectedUser.id ? "left" : "right"
                                }}>
                                    <span style={{
                                        background: m.sender_id === selectedUser.id ? "#eee" : "#dcf8c6",
                                        padding: "5px 10px",
                                        borderRadius: 5
                                    }}>
                                        {m.content}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={handleSend} style={{ padding: 10, borderTop: "1px solid #ccc" }}>
                            <input
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                style={{ width: "80%", padding: 10 }}
                                placeholder="Type a message..."
                            />
                            <button type="submit" style={{ width: "18%", marginLeft: "2%", padding: 10 }}>Send</button>
                        </form>
                    </>
                ) : (
                    <div style={{ margin: "auto" }}>Select a conversation to start chatting</div>
                )}
            </div>
        </div>
    );
}
