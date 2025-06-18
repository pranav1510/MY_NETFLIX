import { LOGO_URL, PROFILE_URL } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const theUser = useSelector((store) => store.user);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, displayName, email } = user;
				dispatch(
					addUser({
						uid: uid,
						displayName: displayName,
						email: email,
					})
				);
				navigate("/browse");
			} else {
				dispatch(removeUser());
				navigate("/");
			}
		});
		return () => unsubscribe();
	}, []);

	const handleSignOut = () => {
		signOut(auth).catch((error) => {
			console.log(error);
		});
	};

	return (
		<div className="flex w-screen fixed z-10 justify-between px-10 bg-gradient-to-b from-black">
			<div className="w-36">
				<img src={LOGO_URL} alt="logo" />
			</div>
			{theUser && (
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
			)}
		</div>
	);
};

export default Header;
