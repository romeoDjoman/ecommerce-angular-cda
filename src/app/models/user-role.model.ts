import {UserRoleType} from "../enum/user-role-type";

export interface UserRoleModel {
  userRoleId?: number;
  roleName: UserRoleType;
}
