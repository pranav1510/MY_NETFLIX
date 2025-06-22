import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import useOnAirTv from "../hooks/useOnAirTv";
import useTopRatedTv from "../hooks/useTopRatedTv";

const TvSeries = () => {
	useOnAirTv();
	useTopRatedTv();
	const popularTv = useSelector((store) => store.tv?.popularTv);
	const nowPlaying = useSelector((store) => store.tv?.onAirTv);
	const topRatedTv = useSelector((store) => store.tv?.topRatedTv);

	return (
		<div className="bg-black w-full  text-white">
			<div className="pt-20">
				<MovieList title={"Now Playing"} movies={nowPlaying} />
				<MovieList title={"Popular Tv"} movies={popularTv} />
				<MovieList title={"Top Rated Tv"} movies={topRatedTv} />
			</div>
		</div>
	);
};

export default TvSeries;
