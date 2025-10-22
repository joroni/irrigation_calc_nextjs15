


export default function P1NumShots(props) {
	return (
		<div className="sliderElm">
			<form>
				<label
					className="block mb-2 text-sm font-medium text-white-900 dark:text-white"
					htmlFor="P1NumShots"
				>
					# of Shots
				</label>
				<div className="buble tooltip font-bold text-md">{props.p1NumShots
}</div>
				<input
					className="__range w-full h-1 bg-blue-950 rounded-md appearance-none cursor-pointer range-sm dark:bg-gray-700"
					type="range"
					id="P1NumShots"
					step={1}
					min={0}
					max={30}
					value={props.p1NumShots
}
					onChange={props.onChange}
				/>
			</form>
		</div>
	);
}

