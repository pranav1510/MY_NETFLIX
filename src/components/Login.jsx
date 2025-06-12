import { useRef, useState } from "react";
import Header from "./Header";
import { validateLoginData } from "../utils/validate";

const Login = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const email = useRef(null);
	const password = useRef(null);
	const [errorMessage, setErrorMessage] = useState("");

	const HandleSignIn = () => {
		const message = validateLoginData(
			email.current.value,
			password.current.value
		);
		setErrorMessage(message);
	};

	const ToggleLogin = () => {
		setIsSignIn(!isSignIn);
	};

	return (
		<div className="relative">
			<div className="absolute -z-10 brightness-[45%]">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_medium.jpg"
					alt="Background Img"
				/>
			</div>
			<Header />
			<div className="flex justify-center m-2">
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
					{isSignIn ? (
						<button
							className="my-2 py-2 rounded-md bg-red-600 font-bold cursor-pointer"
							onClick={HandleSignIn}>
							Sign In
						</button>
					) : (
						<button className="my-2 py-2 rounded-md bg-red-600 font-bold cursor-pointer">
							Sign Up
						</button>
					)}
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
	);
};

export default Login;
