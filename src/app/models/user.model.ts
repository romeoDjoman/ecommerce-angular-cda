import {UserRoleModel} from "./user-role.model";

export interface UserModel {
  userId?: number;
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  phoneNumber: string;
  userRole?: UserRoleModel;
}


export interface LoginModel {
  username: string;
  email: string;
}
