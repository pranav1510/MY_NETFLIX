import useAllTrending from "../hooks/useAllTrending";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularTv from "../hooks/usePopularTv";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
	useAllTrending();
	usePopularMovies();
	usePopularTv();
	return (
		<div className="bg-black overflow-hidden">
			<MainContainer />
			<SecondaryContainer />
		</div>
	);
};

export default Browse;
