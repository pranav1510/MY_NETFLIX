const BackgroundTitle = ({ title, overview }) => {
	return (
		<div className="top-60 w-auto absolute z-10 md:top-80 px-12">
			<h1 className="text-md font-bold py-4 text-white md:text-4xl">{title}</h1>
			<p className="hidden md:block py-3 text-sm font-semibold w-2/5 text-white">
				{overview}
			</p>
			<div className="hidden md:block flex py-5 px-1">
				<button className="px-5 py-2 bg-white rounded-md font-semibold cursor-pointer hover:opacity-70">
					Play
				</button>
				<button className="mx-4 px-5 py-2 bg-white rounded-md font-semibold cursor-pointer hover:opacity-70">
					More Info
				</button>
			</div>
		</div>
	);
};

export default BackgroundTitle;
