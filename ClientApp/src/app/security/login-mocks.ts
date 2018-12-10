import { AppUserAuth } from "./app-user-auth";

export const LOGIN_MOCKS: AppUserAuth[] = [
  {
    userName: "Rupom",
    bearerToken: "abi393kdkd9393ikd",
    isAuthenticated: true,
    canAccessProduct: true,
    canAddProduct: true,
    canSaveProduct: true,
    canAccessCategories: true,
    canAddCategories: false
  },
  {
    userName: "Ahsan",
    bearerToken: "sdi393kdkd9393ikd",
    isAuthenticated: true,
    canAccessProduct: true,
    canAddProduct: false,
    canSaveProduct: false,
    canAccessCategories: true,
    canAddCategories: true
  }
];
