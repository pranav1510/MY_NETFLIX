import { IMAGE_CDN } from "../utils/constants";

const MovieCard = ({ posterPath, title }) => {
	return (
		<div className="w-20 p-2 cursor-pointer sm: w-40">
			<img src={IMAGE_CDN + posterPath} alt={title} />
		</div>
	);
};

export default MovieCard;
