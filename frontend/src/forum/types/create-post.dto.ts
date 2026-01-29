import type { ForumStatus } from './forum-status.type';

export interface CreatePostDTO {
  title: string;
  content: string;
  tags?: string;
  status: ForumStatus;
}
