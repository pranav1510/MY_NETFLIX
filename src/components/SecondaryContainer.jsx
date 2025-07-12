import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
	const allTrending = useSelector((store) => store.movies?.allTrending);
	const popularMovies = useSelector((store) => store.movies?.popularMovies);
	const popularTv = useSelector((store) => store.tv?.popularTv);
	return (
		<div className="-mt-16 relative z-30 md:-mt-48">
			<MovieList title={"Trending"} movies={allTrending} />
			<MovieList title={"Popular Movies"} movies={popularMovies} />
			<MovieList title={"Popular TV"} movies={popularTv} />
		</div>
	);
};

export default SecondaryContainer;
