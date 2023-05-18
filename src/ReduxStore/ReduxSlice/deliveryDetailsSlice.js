import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {},
};
const delivyDetailsSlice = createSlice({
  name: "deliveryDetails",
  initialState,
  reducers: {
    setFormData: (state, { payload }) => {
      state.formData = payload;
    },
  },
});
const { reducer, actions } = delivyDetailsSlice;
export const { setFormData } = actions;
export default reducer;
