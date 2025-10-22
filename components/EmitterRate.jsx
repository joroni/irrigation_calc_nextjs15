

export default function EmitterRate(props) {

	return (
		<div className="sliderElm">
			<form>
				<label
					className="block -mb-4 text-sm font-medium text-white-900 dark:text-white"
					htmlFor="EmitterRate"
				>
					Emitter Rate (gph)
				</label>
				<div className="buble tooltip font-bold text-md">{props.emitRateGPH}</div>
				<input
					className="__range w-full h-1 bg-blue-950 rounded-md appearance-none cursor-pointer range-sm dark:bg-gray-700"
					type="range"
					id="EmitterRate"
					step={0.1}
					min={0}
					max={2}
					value={props.emitRateGPH}
					onChange={props.onChange}
				/>
			</form>

			{/* 	<p>
				<strong>Current value:</strong>
				{parseFloat(props.emitRateGPH).toFixed(2)}
			</p> */}
		</div>
	);
}

