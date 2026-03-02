export type ForumPermission =
  | 'forum:create_post'
  | 'forum:delete_own_post'
  | 'forum:delete_any_post'
  | 'forum:close_topic'
  | 'forum:highlight_topic'
  | 'forum:block_comments';

export type Permission = ForumPermission;
