const BackgroundTitle = ({ title, overview }) => {
	return (
		<div className="w-auto px-12 absolute z-10 bottom-25">
			<h1 className="text-4xl font-bold py-4 text-white">{title}</h1>
			<p className="py-2 px-1 text-sm font-semibold w-2/5 text-white">
				{overview}
			</p>
			<div className="flex py-5 px-1">
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
