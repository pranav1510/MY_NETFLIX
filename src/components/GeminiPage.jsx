import { B_IMAGE } from "../utils/constants";
import GeminiSearch from "./GeminiSearch";

const GeminiPage = () => {
	return (
		<div>
			<div className="fixed -z-10 brightness-[40%] h-[100%]">
				<img src={B_IMAGE} className="object-none" alt="Background Img" />
			</div>
			<GeminiSearch />
		</div>
	);
};

export default GeminiPage;
