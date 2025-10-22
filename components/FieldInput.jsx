'use client'

export default function FieldInput(props) {

	return (
		<div className="FieldInput">
			<label
				htmlFor={props.fieldName}
				className="block mb-2 text-sm font-medium text-white-900 dark:text-white"
			>
					{props.labell}
			</label>

			<input type={props.type} value={props.value} onChange={props.onChange} className="blue-green bg-gray-50 border border-gray-300 text-gray-900 text-sm r focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
			<p>{props.value}</p>
		</div>
	);
}
