import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import appStore from "./utils/appStore.jsx";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import Browse from "./components/Browse.jsx";
import Movies from "./components/Movies.jsx";
import TvSeries from "./components/TvSeries.jsx";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Login />,
			},
			{
				path: "/browse",
				element: <Browse />,
			},
			{
				path: "/movies",
				element: <Movies />,
			},
			{
				path: "/tv",
				element: <TvSeries />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={appRouter} />
	</StrictMode>
);
