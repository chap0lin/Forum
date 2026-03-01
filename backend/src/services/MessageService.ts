
import { MessageModel, Message } from "../models/Message";
import { AppError } from "../api/middlewares/errorMiddleware";

export const MessageService = {
    async sendMessage(senderId: number, receiverId: number, content: string) {
        if (!content) throw new AppError("Message content required", 400);
        if (senderId === receiverId) throw new AppError("Cannot message yourself", 400);

        const message = await MessageModel.create({
            sender_id: senderId,
            receiver_id: receiverId,
            content,
            is_read: false
        });
        return message;
    },

    async getConversation(userId1: number, userId2: number) {
        // Mark as read when fetching? Maybe separate action or implicit
        // Let's mark as read for received messages
        await MessageModel.markAsRead(userId2, userId1); // userId2 sent, userId1 reading

        return MessageModel.getConversation(userId1, userId2);
    },

    async getRecentConversations(userId: number) {
        return MessageModel.getRecentConversations(userId);
    }
};
