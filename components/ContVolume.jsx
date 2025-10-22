"use client" 

import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Label } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { useState } from 'react';

const people = [
    { id: 1, name: '381' },
    { id: 2, name: '514' },
    { id: 3, name: '653' },
    { id: 4, name: '816' },
    { id: 5, name: '1030' },
    { id: 6, name: '3281' },
    { id: 7, name: '8365' },
]






export default function ContVolume() {
    const [selected, setSelected] = useState(people[1]);
    console.log(selected);
    
      function handleDataFromChild(selected) {
          setSelected(selected);
           console.log(selected);
			}
 /* const handleContVolume = (event) => {
     setSelected(event.target.value);
     console.log(selected)
 }; */
	
    return (
			<div className="mx-auto w-full">
				<Listbox value={selected} onChange={handleDataFromChild}>
					<Label
						htmlFor="ContVolume"
						className="block mb-2 text-sm font-medium text-white-900 dark:text-white"
					>
						Container Volume (ml)
					</Label>

					<ListboxButton
						className={clsx(
							'relative block w-full  bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white',
							'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
						)}
					>
						{selected.name}
						<ChevronDownIcon
							className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
							aria-hidden="true"
						/>
					</ListboxButton>
					<ListboxOptions
						anchor="bottom"
						transition
						className={clsx(
							'w-[var(--button-width)]  border border-white/5 bg-blue-950 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
							'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
						)}
					>
						{people.map((person) => (
							<ListboxOption
								key={person.name}
								value={person}
								className="z-9 group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
							>
								<CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
								<div className="text-sm/6 text-white">{person.name}</div>
							</ListboxOption>
						))}
					</ListboxOptions>
				</Listbox>
			</div>
		);
}