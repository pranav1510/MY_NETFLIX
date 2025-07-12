import { useEffect, useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import { AI_API_KEY, API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addSearchData } from "../utils/moviesSlice";
import MovieCard from "./MovieCard";

const GeminiSearch = () => {
	const searchText = useRef(null);
	const dispatch = useDispatch();

	const searchedData = useSelector((store) => store.movies.searchData);

	const ai = new GoogleGenAI({ apiKey: AI_API_KEY });

	const getSearchData = async (movie) => {
		const results = await fetch(
			"https://api.themoviedb.org/3/search/multi?query=" + movie,
			API_OPTIONS
		);

		const json = results.json();
		return json;
	};

	const handleSearch = async () => {
		const geminiQuery =
			"Act as a movie Recommendation System and suggest some movies for the query:" +
			searchText.current.value +
			". Only give me names of 10 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Spiderman, Superman, Batman";
		const geminiResults = await ai.models.generateContent({
			model: "gemini-2.5-flash",
			contents: geminiQuery,
		});
		console.log(geminiResults?.candidates[0]?.content?.parts[0]?.text);

		const geminiMovies =
			geminiResults?.candidates[0]?.content?.parts[0]?.text.split(",");

		const geminiPromise = geminiMovies.map((movie) => getSearchData(movie));

		const movieData = await Promise.all(geminiPromise);
		dispatch(addSearchData(movieData));
	};

	return (
		<div className="py-[50%] md:py-[18%]">
			<form
				className="flex justify-center p-2 md:p-12"
				onSubmit={(e) => e.preventDefault()}>
				<input
					ref={searchText}
					className="w-[80%] px-2 py-1 text-sm bg-white rounded-md md:w-7/12"
					type="text"
					placeholder="What would you like to watch today ?"
					onChange={(e) => {
						if (e.target.value === "") {
							dispatch(addSearchData(null));
						}
					}}
				/>
				<button
					className="mx-1 px-3 py-2 bg-red-700 text-white font-bold rounded-md text-sm cursor-pointer md: "
					onClick={handleSearch}>
					Search
				</button>
			</form>
			{searchedData && (
				<div className="flex justify-center">
					<div className="flex w-7/12 flex-wrap p-2 rounded-md bg-black opacity-80">
						{searchedData.map((movie) => {
							const myMovie = movie?.results[0];
							return myMovie.poster_path ? (
								<div key={myMovie?.id} className="flex-wrap">
									<MovieCard
										posterPath={myMovie.poster_path}
										title={myMovie?.title}
									/>
								</div>
							) : (
								<></>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};

export default GeminiSearch;
