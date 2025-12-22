import { Request, Response } from "express";
import * as newsService from "./news.service";

export const createNews = async (req: Request, res: Response) => {
    try {
        const { title, content, tags } = req.body;
        // Assuming user is attached to req by auth middleware
        // const userId = (req as any).user?.id; 
        // For now, we might not have auth fully set up or we can mock it/make it optional
        const userId = (req as any).user?.id || null;

        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required" });
        }

        const news = await newsService.createNews({
            title,
            content,
            tags: Array.isArray(tags) ? tags.join(",") : tags, // Ensure tags are string
            user_id: userId
        });

        res.status(201).json(news);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating news" });
    }
};

export const getNews = async (req: Request, res: Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        const result = await newsService.getNews(page, limit);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching news" });
    }
};

export const deleteNews = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "News ID is required" });
        }

        const newsId = parseInt(id);

        if (isNaN(newsId)) {
            return res.status(400).json({ message: "Invalid news ID" });
        }

        const deleted = await newsService.deleteNews(newsId);

        if (!deleted) {
            return res.status(404).json({ message: "News not found" });
        }

        res.status(200).json({ message: "News deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting news" });
    }
};