import { IMAGE_CDN } from "../utils/constants";

const MovieCard = ({ posterPath, title }) => {
	return (
		<div className="w-40 p-2">
			<img src={IMAGE_CDN + posterPath} alt={title} />
		</div>
	);
};

export default MovieCard;
