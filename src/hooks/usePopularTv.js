import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularTv } from "../utils/tvSlice";
import { useEffect } from "react";

const usePopularTv = () => {
	const dispatch = useDispatch();
	const popularTv = useSelector((store) => store.tv.popularTv);

	useEffect(() => {
		!popularTv && getPopularTv();
	}, []);

	const getPopularTv = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/tv/popular?page=1",
			API_OPTIONS
		);
		const json = await data.json();
		dispatch(addPopularTv(json.results));
	};
};

export default usePopularTv;
