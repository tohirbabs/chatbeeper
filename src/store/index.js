// This file is responsible for state management
import { POST } from "../utils/request";

import create from "zustand";

let store = (set) => ({});

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

  fetchPost: async (urlPath, postBody) => {
    //   try {
    const body = JSON.stringify({
      postBody,
    });

    const response = await POST(urlPath, body);

    // if (response.ok) {
    const result = await response.json();
    //   location(`/home`);
    console.log("result is: ", JSON.stringify(result));
    // }

    // response.json().then((text) => {
    //   console.log(text);
    //   toast.error(`${text.message}`, {
    //     style: {
    //       backgroundColor: "#386fa4",
    //       color: "white",
    //     },
    //   });
    // });
    //       } catch (err) {
    //         setErr(err.message);
    //       } finally {
    //         setIsLoading(false);
    //       }

    // const response = await fetch(API_URL);
    // const json = await response.json();
  },
}));
