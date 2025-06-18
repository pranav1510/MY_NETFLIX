import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addMainMovieTrailer } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMainMovieTrailer = (movieId) => {
	const dispatch = useDispatch();
	useEffect(() => {
		getMovieTrailer();
	}, []);

	const getMovieTrailer = async () => {
		const data = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}/videos`,
			API_OPTIONS
		);
		const json = await data.json();
		const filteredData = json.results.filter(
			(video) => video.type === "Trailer"
		);
		const trailer =
			filteredData.length !== 0 ? filteredData[1] : json.results[0];
		console.log(trailer);
		dispatch(addMainMovieTrailer(trailer));
	};
};

export default useMainMovieTrailer;
