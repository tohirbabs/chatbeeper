// This file is responsible for state management

import create from "zustand";

export const useStore = create((set) => ({
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
