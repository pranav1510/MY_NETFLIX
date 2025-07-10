import { useRef, useState } from "react";
import { validateLoginData } from "../utils/validate";
import { B_IMAGE } from "../utils/constants";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);
	const [errorMessage, setErrorMessage] = useState("");
	const dispatch = useDispatch();

	const HandleButtonClick = () => {
		const message = validateLoginData(
			email.current.value,
			password.current.value
		);
		setErrorMessage(message);
		if (message) return;

		if (!isSignIn) {
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredentials) => {
					updateProfile(auth.currentUser, {
						displayName: name.current.value,
					})
						.then(() => {
							const { uid, displayName, email } = auth.currentUser;

							dispatch(
								addUser({
									uid: uid,
									displayName: displayName,
									email: email,
								})
							);
						})
						.catch((error) => {
							setErrorMessage(error.message);
						});
				})
				.catch((err) => {
					setErrorMessage(err.message);
				});
		} else {
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredentials) => {})
				.catch((err) => {
					setErrorMessage(err.message);
				});
		}
	};

	const ToggleLogin = () => {
		setIsSignIn(!isSignIn);
	};

	return (
		<div className="relative">
			<div className="fixed -z-10 brightness-[45%]">
				<img src={B_IMAGE} alt="Background Img" />
			</div>
			<div className="flex flex-col">
				<div className="flex mx-2 justify-center relative top-40">
					<form
						onSubmit={(e) => e.preventDefault()}
						className="flex flex-col bg-black opacity-70 p-14 w-[30%] text-white rounded-md">
						<h1 className="mb-5 font-bold text-3xl">
							{isSignIn ? "Sign In" : "Sign Up"}
						</h1>
						{!isSignIn && (
							<input
								className="my-2 p-3 border border-amber-50 rounded-md shadow-amber-50"
								type="text"
								placeholder="Full Name"
								ref={name}
							/>
						)}
						<input
							className="my-2 p-3 border border-amber-50 rounded-md shadow-amber-50"
							type="text"
							placeholder="Email"
							ref={email}
						/>
						<input
							className="my-2 p-3 border border-amber-50 rounded-md shadow-amber-50 "
							type="password"
							placeholder="Password"
							ref={password}
						/>
						{errorMessage && (
							<div className="m-2 text-red-500 flex justify-center">
								{errorMessage}
							</div>
						)}
						<button
							className="my-2 py-2 rounded-md bg-red-600 font-bold cursor-pointer"
							onClick={HandleButtonClick}>
							{isSignIn ? "Sign In" : "Sign Up"}
						</button>
						{isSignIn ? (
							<p className="mt-5">
								New to Netflix?{" "}
								<span
									onClick={ToggleLogin}
									className="font-bold underline cursor-pointer">
									Sign up now
								</span>
							</p>
						) : (
							<p className="mt-5">
								Already Registered?{" "}
								<span
									onClick={ToggleLogin}
									className="font-bold underline cursor-pointer">
									Sign In
								</span>
							</p>
						)}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
