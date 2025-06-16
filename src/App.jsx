import { useEffect, useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, displayName, email } = user;

				dispatch(
					addUser({
						uid: uid,
						displayName: displayName,
						email: email,
					})
				);
			} else {
				dispatch(removeUser());
			}
		});
	}, []);

	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	);
}

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/browse",
		element: <Browse />,
	},
]);

export default App;
