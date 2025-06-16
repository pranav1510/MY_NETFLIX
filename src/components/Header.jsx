import { LOGO_URL, PROFILE_URL } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="flex justify-between px-10 bg-gradient-to-b from-black">
			<div className="w-36">
				<img src={LOGO_URL} alt="logo" />
			</div>
			<div className="flex justify-center">
				<div className="flex px-2 self-center h-8 rounded-md">
					<img src={PROFILE_URL} alt="profile" />
				</div>
				<button
					className="m-3 px-3 bg-red-700 text-white font-bold rounded-md text-sm cursor-pointer"
					onClick={handleSignOut}>
					Sign Out
				</button>
			</div>
		</div>
	);
};

export default Header;
