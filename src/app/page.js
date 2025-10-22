"use client";

import Image from "next/image";
import {Listbox, ListboxButton, ListboxOption, ListboxOptions, Label} from "@headlessui/react";
import {CheckIcon, ChevronDownIcon} from "@heroicons/react/20/solid";
import clsx from "clsx";
import {useState, useEffect, useRef} from "react";
import CustomContVolume from "../../components/CustomContVolume";
import TextGroup from "../../components/TextGroup";

import Range from "../../components/Range";
import P2onTime from "../../components/P2onTime";
import Anchor from "../../components/Anchor";
import P1NumShots from "../../components/P1NumShots";
import P2NumShots from "../../components/P2NumShots";
import Background from "../../components/Background";
import Iframe from "../../components/Iframe";

import {motion, useInView} from "framer-motion";

import Script from "next/script";

let newSelected = [];
let selectedShow = "...";
let mergedContVal = 0;

const options = [
    {id: 1, value: 0, label: "..."},
    {id: 2, value: 381, label: "381"},
    {id: 3, value: 514, label: "514"},
    {id: 4, value: 653, label: "653"},
    {id: 5, value: 816, label: "816"},
    {id: 6, value: 1030, label: "1030"},
    {id: 7, value: 3281, label: "3281"},
    {id: 8, value: 8365, label: "8365"},
    {id: 9, value: "Custom", label: "Custom"},
];

export default function Home() {
    const [selectedOption, setSelectedOption] = useState(options[""]);
    //const [selected, setSelected] = useState(people[0])
    const [customContVol, setCustomContVol] = useState("");
    const [emitRateGPH, setEmitRateGPH] = useState(0);
    const [p1OnTime, setp1OnTime] = useState(0);
    const [p2OnTime, setp2OnTime] = useState(0);
    const [emitPerPlant, setEmitPerPlant] = useState(0);
    const [p1NumShots, setP1NumShots] = useState(0);
    const [p2NumShots, setP2NumShots] = useState(0);
    const [dynamicVals, setDynamicVals] = useState("");
    const itemsRenderField = ["Custom"];

    function handleSelectedOption(selectedOption) {
        setSelectedOption(selectedOption);
        selectedShow = selectedOption;
        //console.log('itemsRenderField ', customContVol)
        mergedContVal = selectedOption;
        console.log("selectedShow", selectedShow);
    }

    const handleEmitterRate = (event) => {
        setEmitRateGPH(event.target.value);
    };

    const handleP2OnTime = (event) => {
        setp2OnTime(event.target.value);
    };

    const handleEmittersPerPlant = (event) => {
        setEmitPerPlant(event.target.value);
    };

    const handleCustomContVol = (event) => {
        setCustomContVol(event.target.value);
        mergedContVal = event.target.value;
    };

    const handleP1NumShots = (event) => {
        setP1NumShots(event.target.value);
    };
    const handleP2NumShots = (event) => {
        setP2NumShots(event.target.value);
    };

    const handleDynamicVals = (event) => {
        setDynamicVals(event.target.value);
        console.log(event.target.value);
        console.log(dynamicVals);
    };

    const p1ShotSize = ((parseFloat(emitRateGPH) * parseFloat(p1OnTime) * 63) / 60) * emitPerPlant;

    const p2ShotSize = ((parseFloat(p2OnTime) * parseFloat(emitRateGPH) * 63) / 60) * emitPerPlant;

    const p1ShotSizePercent = (parseFloat(p1ShotSize) / parseFloat(mergedContVal)) * 100;

    const p2ShotSizePercent = (parseFloat(p2ShotSize) / parseFloat(mergedContVal)) * 100;

    const totP1IrrigVolMl = parseFloat(p1ShotSize) * parseFloat(p1NumShots);

    const totP1IrrigVolPercent = (parseFloat(totP1IrrigVolMl) / parseFloat(mergedContVal)) * 100;

    const totP2IrrigVolMl = parseFloat(p2ShotSize) * parseFloat(p2NumShots);
    const totP2IrrigVolPercent = (parseFloat(totP2IrrigVolMl) / parseFloat(mergedContVal)) * 100;

    const totalDailyVolMl = parseFloat(totP2IrrigVolMl) + parseFloat(totP1IrrigVolMl);

    const totalDailyVolPercent = parseFloat(totP2IrrigVolPercent) + parseFloat(totP1IrrigVolPercent);

    const results = [
        {
            name: "p1ShotSize",
            message: p1ShotSize,
            unit: "ml",
            action: handleDynamicVals,
            label: "P1 Shot Size",
        },
        {
            name: "p1ShotSizePercent",
            message: p1ShotSizePercent,
            unit: "%",
            action: handleDynamicVals,
            label: "P1 Shot Size",
        },
        {
            name: "totP1IrrigVolMl",
            message: totP1IrrigVolMl,
            unit: "ml",
            action: handleDynamicVals,
            label: "Total P1 Irrigation Volume",
        },
        {
            name: "totP1IrrigVolPercent",
            message: totP1IrrigVolPercent,
            unit: "%",
            action: handleDynamicVals,
            label: "Total P1 Irrigation Volume",
        },
        {
            name: "p2ShotSize",
            message: p2ShotSize,
            unit: "ml",
            action: handleDynamicVals,
            label: "P2 Shot Size",
        },
        {
            name: "p2ShotSizePercent",
            message: p2ShotSizePercent,
            unit: "%",
            action: handleDynamicVals,
            label: "P2 Shot Size",
        },
        {
            name: "totP2IrrigVolMl",
            message: totP2IrrigVolMl,
            unit: "ml",
            action: handleDynamicVals,
            label: "Total P2 Irrigation Volume",
        },
        {
            name: "totP2IrrigVoPercent",
            message: totP2IrrigVolPercent,
            unit: "%",
            action: handleDynamicVals,
            label: "Total P2 Irrigation Volume",
        },
        {
            name: "totalDailyVolMl",
            message: totalDailyVolMl,
            unit: "ml",
            action: handleDynamicVals,
            label: "Total Daily Volumes",
        },
        {
            name: "totalDailyVolPercent",
            message: totalDailyVolPercent,
            unit: "%",
            action: handleDynamicVals,
            label: "Total Daily Volume",
        },
    ];

    const handleP1OnTime = (event) => {
        setp1OnTime(event.target.value);
    };

    results.forEach((result, index) => (result.id = index + 1));

    console.log(results);
    console.log("mergedContVal", mergedContVal);

    useEffect(() => {
        document.querySelectorAll(".__range").forEach(function (el) {
            el.oninput = function () {
                var valPercent = (el.valueAsNumber - parseInt(el.min)) / (parseInt(el.max) - parseInt(el.min));
                var style =
                    "background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(" +
                    valPercent +
                    ", #2c83cc), color-stop(" +
                    valPercent +
                    ", #b2b9be));";
                el.style = style;
            };
            el.oninput();

            /*   document.querySelector('.css-qs0pqh-indicatorSeparator').style.backgroundColor = "transparent";
      document.querySelector('.css-jsetqt-indicatorContainer').style.color = "#328edb";
 */
        });
    }, []);

  
    /***** UTILITY FOR RANGE TRAIL BG COLOR *****/

    const rangers = [
        {
            id: 1,
            name: "EmitterRate",
            min: 0,
            max: 2,
            step: 0.1,
            value: emitRateGPH,
            action: handleEmitterRate,
            unit: "gph",
            label: "Emitter Rate",
        },
        {
            id: 2,
            name: "EmittersPerPlant",
            min: 0,
            max: 30,
            step: 1,
            value: emitPerPlant,
            action: handleEmittersPerPlant,
            unit: "#",
            label: "Emitters per Plant",
        },
        {
            id: 3,
            name: "P1OnTime",
            min: 0,
            max: 600,
            step: 1,
            value: p1OnTime,
            action: handleP1OnTime,
            unit: "sec",
            label: "P1 On Time",
        },
        {
            id: 4,
            name: "P1NumShots",
            min: 0,
            max: 30,
            step: 1,
            value: p1NumShots,
            action: handleP1NumShots,
            unit: "#",
            label: "# P1 of Shots",
        },
        {
            id: 5,
            name: "P2OnTime",
            min: 0,
            max: 600,
            step: 1,
            value: p2OnTime,
            action: handleP2OnTime,
            unit: "sec",
            label: "P2 On Time",
        },
        {
            id: 6,
            name: "P2NumShots",
            min: 0,
            max: 30,
            step: 1,
            value: p2NumShots,
            action: handleP2NumShots,
            unit: "#",
            label: "# P2 of Shots",
        },
    ];

    function InViewSec({children}) {
        const ref = useRef(null);
        const isInView = useInView(ref, {once: true});
        console.log("isInView", isInView, "ref ", ref);
        return (
            <section ref={ref}>
                <span
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}
                >
                    {children}
                </span>
            </section>
        );
    }

    return (
        <>
            
                <main className="infiloop flex min-h-screen flex-col items-center justify-between p-8 max-sm:p-2 max-md:p-4 max-sm:pt-">
                    <div className="z-1 items-center bg-black/40  max-md:overflow-y-auto max-md:h-80 max-sm:-ml-8  max-sm:mb-0 max-sm:-mr-8 max-sm:pl-14 max-sm:pr-14 p-10 pt-10 pb-10 border-slate-800 border-1 border-solid  shadow-xl mb-6 rounded-lg max-sm:mt-0 mt-0 z-1 w-full md:mt-1 max-w-5xl ">
                        <div className="grid gap-6 grid-cols-2  max-sm:grid-cols-1 items-center">
                            {rangers.map((e) => (
                                <Range
                                    key={e.id}
                                    name={e.name}
                                    label={e.label}
                                    value={e.value}
                                    onChange={e.action}
                                    min={e.min}
                                    max={e.max}
                                    unit={e.unit}
                                    step={e.step}
                                />
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-4  gap-y-4 max-sm:gap-2 max-sm:grid-cols-1  max-sm:mt-10  z-1 w-full max-w-5xl items-center">
                            <Listbox value={selectedShow} onChange={handleSelectedOption}>
                                <Label
                                    htmlFor="ContVolume"
                                    className="grid grid-cols-2 col-span-2  mb-2 w-full uppercase text-sm font-medium text-white-900 dark:text-white"
                                >
                                    <span className="block text-indigo-300 text-roboto font-bold">
                                        Container Volume
                                    </span>
                                    <span className="block">
                                        <div className="buble relative tooltip font-bold text-md text-right max-sm:text-left right-12 max-sm:right-11 text-white">
                                            <span className="text-xs text-white flex-initial w-32 text-left text-roboto normal-case">
                                                {" "}
                                                mL
                                            </span>
                                        </div>
                                    </span>
                                </Label>

                                <ListboxButton
                                    className={clsx(
                                        "block w-full py-1.5 pr-8 pl-3 text-left text-md/6 text-white",
                                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 border-b-2 border-slate-400"
                                    )}
                                >
                                    {selectedShow}
                                    <ChevronDownIcon
                                        className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                                        aria-hidden="true"
                                    />
                                </ListboxButton>
                                <ListboxOptions
                                    anchor="bottom"
                                    transition
                                    className={clsx(
                                        "w-[var(--button-width)]  border border-white/5 bg-blue-950/95 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
                                        "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 rounded-md"
                                    )}
                                >
                                    {options.map((option) => (
                                        <ListboxOption
                                            data-value={option.value}
                                            key={option.id}
                                            value={option.value}
                                            className="z-9 group flex cursor-default items-center gap-2  py-1.5 px-3 select-none data-[focus]:bg-white/10"
                                        >
                                            <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                                            <div className="text-md/6 text-white">{option.label}</div>
                                        </ListboxOption>
                                    ))}
                                </ListboxOptions>
                            </Listbox>
                            {itemsRenderField.find((event) => event === selectedOption) && (
                                <div>
                                    <CustomContVolume customContVol={customContVol} onInput={handleCustomContVol} />
                                </div>
                            )}
                        </div>
                    </div>

                    <div
                        id="Results"
                        className="grid lg:grid-cols-3 gap-5 max-sm:gap-2 grid-cols-2 w-full md:mt-1 max-w-5xl items-center max-sm:mt-2 mb-6 max-sm:mb-2"
                    >
                        {results.map((e) => (
                            <TextGroup
                                key={e.id}
                                name={e.name}
                                label={e.label}
                                unit={e.unit}
                                onChange={e.action}
                                message={e.message}
                            />
                        ))}
                    </div>
                </main>
          
        </>
    );
}
