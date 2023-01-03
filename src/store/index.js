// This file is responsible for state management

import create from "zustand";

export const useStore = create((set) => ({
  authUser: null,
  requestLoading: false,
  setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
  setRequestLoading: (isLoading) =>
    set((state) => ({ ...state, requestLoading: isLoading })),
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
  updateRegValues: (data) =>
    set((state) => ({
      userReg: { ...state.userReg.data, data },
    })),
  feeds: [],
  comments: [],
}));
