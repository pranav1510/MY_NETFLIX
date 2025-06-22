import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addAllTrending } from "../utils/moviesSlice";
import { useEffect } from "react";

const useAllTrending = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		getAllTrending();
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
