import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
	name: "tv",
	initialState: {
		popularTv: null,
		onAirTv: null,
		topRatedTv: null,
	},
	reducers: {
		addPopularTv: (state, action) => {
			state.popularTv = action.payload;
		},
		addOnAirTv: (state, action) => {
			state.onAirTv = action.payload;
		},
		addTopRatedTv: (state, action) => {
			state.topRatedTv = action.payload;
		},
	},
});

export const { addPopularTv, addOnAirTv, addTopRatedTv } = tvSlice.actions;

export default tvSlice.reducer;
