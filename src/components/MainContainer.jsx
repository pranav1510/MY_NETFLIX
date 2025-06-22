import { useSelector } from "react-redux";
import BackgroundTitle from "./BackgroundTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
	const movies = useSelector((store) => store.movies?.allTrending);
	if (!movies) return;

	const { original_title, overview, id } = movies[0];

	return (
		<div className="w-full">
			<BackgroundTitle title={original_title} overview={overview} />
			<VideoBackground movieId={id} />
		</div>
	);
};

export default MainContainer;
