import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Movies = () => {
	useTopRatedMovies();
	useUpcomingMovies();
	const popularMovies = useSelector((store) => store.movies?.popularMovies);
	const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
	const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

	return (
		<div className="bg-black w-full text-white">
			<div className="pt-40 md:pt-20">
				<MovieList title={"Popular Movies"} movies={popularMovies} />
				<MovieList title={"Top Rated Movies"} movies={topRatedMovies} />
				<MovieList title={"Upcoming Movies "} movies={upcomingMovies} />
			</div>
		</div>
	);
};

export default Movies;
