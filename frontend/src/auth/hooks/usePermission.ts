import { ROLE_PERMISSIONS } from '../config/role-permissions';
import type { Role } from '../types/role.type';
import type { Permission } from '../types/permission.type';

export function usePermission(role: Role) {
  function can(permission: Permission) {
    return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
  }

  return { can, role };
}
