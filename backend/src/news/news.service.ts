import knex from "../db";

export interface NewsItem {
    id?: number;
    title: string;
    content: string;
    tags?: string;
    user_id?: number;
    created_at?: string;
    updated_at?: string;
}

export const createNews = async (news: NewsItem) => {
    const [id] = await knex("news").insert(news);
    return { id, ...news };
};

export const getNews = async (page: number = 1, limit: number = 10) => {
    const offset = (page - 1) * limit;

    const news = await knex("news")
        .select("*")
        .orderBy("created_at", "desc")
        .limit(limit)
        .offset(offset);

    const [countResult] = await knex("news").count("id as total");
    const total = countResult?.total as number || 0;

    return {
        data: news,
        pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit)
        }
    };
};

export const deleteNews = async (id: number) => {
    const deletedRows = await knex("news").where({ id }).del();
    return deletedRows > 0;
};