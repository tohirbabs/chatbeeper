// This file is responsible for state management

import create from "zustand";
import { persist } from "zustand/middleware";

let beeperStore = (set) => ({
  userData: {
    email: "",
    createdAt: "",
    dob: "",
    firstname: "",
    gender: "",
    id: "",
    lastname: "",
    profilePic: null,
    updatedAt: "",
    userId: "",
    username: "",
  },
  updateUserData: (data) =>
    set((state) => ({
      userData: { data, ...state.userData },
    })),
  auth: {},
  authenticateUser: (auth) =>
    set((state) => ({
      auth: auth,
    })),

  feeds: [],
  addToFeed: (beep) =>
    set((state) => ({
      feeds: [beep, ...state.feeds],
    })),
});

export const useBeeperStore = create(
  persist(beeperStore, { name: "beeperStore" })
);
