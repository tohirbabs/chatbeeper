// This file is responsible for state management

import create from "zustand";
import { persist } from "zustand/middleware";

let store = (set) => ({
  userReg: {
    data: {
      firstname: "",
      lastname: "",
      username: "",
      phone: "",
      email: "",
      dob: new Date().now,
      gender: "",
      password: "",
    },
    auth: null,
  },

  updateRegValues: (data) =>
    set((state) => ({
      userReg: { ...state.userReg.data, data },
    })),
  authenticateUser: (auth) =>
    set((state) => ({
      userReg: { ...state.userReg.auth, auth },
    })),
  feeds: [],
  comments: [],
});

store = persist(store, { name: "userInfo" });
export const useStore = create(store);
