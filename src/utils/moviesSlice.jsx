import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		mainMovieTrailer: null,
		allTrending: null,
		popularMovies: null,
		topRatedMovies: null,
		upcomingMovies: null,
		searchData: null,
	},
	reducers: {
		addMainMovieTrailer: (state, action) => {
			state.mainMovieTrailer = action.payload;
		},
		addAllTrending: (state, action) => {
			state.allTrending = action.payload;
		},
		addPopularMovies: (state, action) => {
			state.popularMovies = action.payload;
		},
		addTopRatedMovies: (state, action) => {
			state.topRatedMovies = action.payload;
		},
		addUpcomingMovies: (state, action) => {
			state.upcomingMovies = action.payload;
		},
		addSearchData: (state, action) => {
			state.searchData = action.payload;
		},
	},
});

export const {
	addMainMovieTrailer,
	addAllTrending,
	addPopularMovies,
	addTopRatedMovies,
	addUpcomingMovies,
	addSearchData,
} = moviesSlice.actions;

export default moviesSlice.reducer;
