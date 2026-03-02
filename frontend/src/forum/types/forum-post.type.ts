import type { ForumStatus } from './forum-status.type';

export interface ForumPost {
  id: number;
  title: string;
  content: string;
  tags: string;
  created_at: string;
  status: ForumStatus;
}
