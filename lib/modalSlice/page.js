import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signUpModalOpen: false,
  loginModalOpen: false,
  commentModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignupModal: (state) => {
      state.signUpModalOpen = true;
    },
    closeSignupModal: (state) => {
      state.signUpModalOpen = false;
    },
    openLoginModal: (state) => {
      state.loginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.loginModalOpen = false;
    },
    openCommentModal: (state) => {
      state.commentModalOpen = true;
    },
    closeCommentModal: (state) => {
      state.commentModalOpen = false;
    },
  },
});

export const {
  openSignupModal,
  closeSignupModal,
  closeLoginModal,
  openLoginModal,
  openCommentModal,
  closeCommentModal
} = modalSlice.actions;

export default modalSlice.reducer;
