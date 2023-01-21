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
  },
  userData: {},
  auth: null,
  userAvatar: "",

  updateRegValues: (data) =>
    set((state) => ({
      userReg: { ...state.userReg.data, data },
    })),
  updateUserData: (data) =>
    set((state) => ({
      userData: data,
    })),
  authenticateUser: (auth) =>
    set((state) => ({
      auth: { ...state.auth, auth },
    })),
  updateAvatar: (avatar) =>
    set((state) => ({
      userAvatar: avatar,
    })),
  feeds: [],
  addToFeed: (beep) =>
    set((state) => ({
      feeds: [beep, ...state.feeds],
    })),

  comments: [],
});

store = persist(store, { name: "userInfo" });
export const useStore = create(store);
