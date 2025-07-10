import { useSelector } from "react-redux";
import BackgroundTitle from "./BackgroundTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
	const title = "Final Destination Bloodlines";
	const overview =
		"Plagued by a violent recurring nightmare, college student Stefanie heads home to track down the one person who might be able to break the cycle and save her family from the grisly demise that inevitably awaits them all.";
	const id = 574475;

	return (
		<div className="w-full">
			<BackgroundTitle title={title} overview={overview} />
			<VideoBackground movieId={id} />
		</div>
	);
};

export default MainContainer;
