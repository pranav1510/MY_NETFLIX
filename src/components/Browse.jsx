import useAllTrending from "../hooks/useAllTrending";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularTv from "../hooks/usePopularTv";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
	usePopularMovies();
	useAllTrending();
	usePopularTv();
	return (
		<div className="bg-black overflow-x-hidden relative">
			<MainContainer />
			<SecondaryContainer />
		</div>
	);
};

export default Browse;
