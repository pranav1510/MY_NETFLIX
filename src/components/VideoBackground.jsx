import { useSelector } from "react-redux";
import useMainMovieTrailer from "../hooks/useMainMovieTrailer";

const VideoBackground = ({ movieId }) => {
	useMainMovieTrailer(movieId);

	const mainMovieTrailer = useSelector(
		(store) => store.movies?.mainMovieTrailer
	);

	return (
		mainMovieTrailer && (
			<div className="w-screen brightness-[70%]">
				<iframe
					className="w-screen aspect-video"
					src={
						"https://www.youtube.com/embed/" +
						mainMovieTrailer.key +
						"?autoplay=1&loop=1&mute=1&rel=0&showinfo=0&modestbranding=1"
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
