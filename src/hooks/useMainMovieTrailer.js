import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addMainMovieTrailer } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useMainMovieTrailer = (movieId) => {
	const dispatch = useDispatch();
	const mainMovieTrailer = useSelector(
		(store) => store.movies.mainMovieTrailer
	);
	useEffect(() => {
		!mainMovieTrailer && getMovieTrailer();
	}, []);
	const getMovieTrailer = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/" + movieId + "/videos",
			API_OPTIONS
		);
		const json = await data.json();
		const filteredData = json.results.filter(
			(video) => video.type === "Trailer"
		);
		const trailer = filteredData ? filteredData[1] : json[0];
		dispatch(addMainMovieTrailer(trailer));
	};
};

export default useMainMovieTrailer;
