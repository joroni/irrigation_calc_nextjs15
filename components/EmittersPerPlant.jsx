

export default function EmittersPerPlant(props) {

	return (
		<div className="sliderElm">
			<form>
				<label
					className="block mb-2 text-sm font-medium text-white-900 dark:text-white"
					htmlFor="EmittersPerPlant"
				>
					# Emitters per Plant
				</label>
				<div className="buble tooltip font-bold text-md">{props.emitPerPlant}</div>
				<input
					className="__range w-full h-1 bg-blue-950 rounded-md appearance-none cursor-pointer range-sm dark:bg-gray-700"
					type="range"
					id="EmittersPerPlant"
					step={1}
					min={0}
					max={30}
					value={props.emitPerPlant}
					onChange={props.onChange}
				/>
			</form>
		</div>
	);
}

