export interface ForumReply {
  id: number;
  title?: string;
  text: string;

  user_id: number;
  topic_id: number;

  created_at: string;
  updated_at: string;
}
