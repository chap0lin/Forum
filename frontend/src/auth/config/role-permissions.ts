import type { Role } from '../types/role.type';
import type { Permission } from '../types/permission.type';

export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  MEMBER: [
    'forum:create_post',
    'forum:delete_own_post'
  ],

  COORDINATOR: [
    'forum:create_post',
    'forum:delete_own_post',
    'forum:close_topic',
    'forum:block_comments'
  ],

  ADMIN: [
    'forum:create_post',
    'forum:delete_own_post',
    'forum:delete_any_post',
    'forum:close_topic',
    'forum:highlight_topic',
    'forum:block_comments'
  ]
};
    