import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addOnAirTv } from "../utils/tvSlice";
import { useEffect } from "react";

const useOnAirTv = () => {
	const dispatch = useDispatch();
	const onAirTv = useSelector((store) => store.tv.onAirTv);

	useEffect(() => {
		!onAirTv && getOnAirTv();
	}, []);

	const getOnAirTv = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/tv/on_the_air?page=1",
			API_OPTIONS
		);
		const json = await data.json();
		dispatch(addOnAirTv(json.results));
	};
};

export default useOnAirTv;
