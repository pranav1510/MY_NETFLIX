import { useSelector } from "react-redux";
import useMainMovieTrailer from "../hooks/usemainMovieTrailer";

const VideoBackground = ({ movieId }) => {
	const mainMovieTrailer = useSelector(
		(state) => state.movies?.mainMovieTrailer
	);

	useMainMovieTrailer(movieId);

	return (
		mainMovieTrailer && (
			<div className="w-screen brightness-[70%]">
				<iframe
					className="w-screen aspect-video"
					src={
						"https://www.youtube.com/embed/" +
						mainMovieTrailer?.key +
						"?autoplay=1&mute=1"
					}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen></iframe>
			</div>
		)
	);
};

export default VideoBackground;
