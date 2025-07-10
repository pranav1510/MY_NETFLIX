import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedTv } from "../utils/tvSlice";
import { useEffect } from "react";

const useTopRatedTv = () => {
	const dispatch = useDispatch();
	const topRatedTv = useSelector((store) => store.tv.topRatedTv);

	useEffect(() => {
		!topRatedTv && getTopRatedTv();
	}, []);

	const getTopRatedTv = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/tv/top_rated?page=1",
			API_OPTIONS
		);
		const json = await data.json();
		dispatch(addTopRatedTv(json.results));
	};
};

export default useTopRatedTv;
