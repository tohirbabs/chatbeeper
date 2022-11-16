// This file is responsible for state management

import create from 'zustand'

export const useStore = create((set) => ({
    userReg: {
        data: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            dob: new Date().now,
            gender: '',
            password: '',
            username: ''
        }
    },
    updateRegValues: (data) => set((state) => ({
        userReg: { ...state.userReg.data, data }
    })),
    feeds: [],
    comments: [],

}))