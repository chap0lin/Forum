
import { PageModel, Page } from "../models/Page";
import { AppError } from "../api/middlewares/errorMiddleware";

export const PageService = {
    async getPage(slug: string) {
        const page = await PageModel.findBySlug(slug);
        if (!page) throw new AppError("Page not found", 404);
        return page;
    },

    async createOrUpdatePage(slug: string, data: Partial<Page>) {
        const existing = await PageModel.findBySlug(slug);
        if (existing) {
            await PageModel.update(slug, data);
            return PageModel.findBySlug(slug);
        } else {
            return PageModel.create({ ...data, slug });
        }
    }
};
