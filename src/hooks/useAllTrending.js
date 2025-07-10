import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addAllTrending } from "../utils/moviesSlice";
import { useEffect } from "react";

const useAllTrending = () => {
	const dispatch = useDispatch();
	const allTrending = useSelector((store) => store.movies.allTrending);

	useEffect(() => {
		!allTrending && getAllTrending();
	}, []);

	const getAllTrending = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/trending/all/day?page=1",
			API_OPTIONS
		);
		const json = await data.json();
		dispatch(addAllTrending(json.results));
	};
};

export default useAllTrending;
