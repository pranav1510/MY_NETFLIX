import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
	if (!movies) return;
	return (
		<div>
			<h1 className="p-3 text-white text-xl font-bold">{title}</h1>
			<div className="flex overflow-scroll hide-scrollbar">
				<div className="flex">
					{movies.map((movie) => (
						<MovieCard
							key={movie.id}
							posterPath={movie.poster_path}
							title={movie.title}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
