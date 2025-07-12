import { B_IMAGE } from "../utils/constants";
import GeminiSearch from "./GeminiSearch";

const GeminiPage = () => {
	return (
		<div>
			<div className="fixed -z-10 brightness-[40%] w-screen h-screen overflow-hidden">
				<img
					src={B_IMAGE}
					className="w-full h-full object-cover object-center"
					alt="Background Img"
				/>
			</div>
			<GeminiSearch />
		</div>
	);
};

export default GeminiPage;
