

export default function P1shotML(props) {
    
    
    return (
			
				<div className="sliderElm">
					<form>
						<label
							className="block mb-2 text-sm font-medium text-white-900 dark:text-white"
							htmlFor="P1shotML"
						>
							P1 On Time (seconds)
						</label>
						<div className="buble tooltip font-bold text-md">{props.p1ShotMl}</div>
						<input
							className="w-full h-1 bg-blue-950 rounded-md appearance-none cursor-pointer range-sm dark:bg-gray-700"
							type="range"
							id="P1shotML"
							step={1}
							min={0}
							max={300}
							value={props.p1ShotMl}
							onChange={props.onChange}
						/>
					</form>

					{/* 	<p>
						<strong>Current value:</strong>
						{parseFloat(props.p1ShotMl).toFixed(2)}
					</p> */}
				</div>
			
		);
}

