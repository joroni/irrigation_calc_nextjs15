'use client'
import { useState, useEffect, useRef } from 'react'
/* import Anchor from './Anchor' */
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'

let isSameVal = true
const className =
  'transition-max-height TextGroup sea-salt duration-300 shrink-0  grid-cols-6 rounded-lg shadow-2xl max-md:shadow-mdp-6 max-sm:p-5 max-md:grid gap-6 mt-6 max-sm:mt-1 md:grid-cols-2 z-1 w-full md:mt-1 max-w-5xl items-cente dark-grayy  justify-between min-h-12'
const classNameNew =
  'transition-max-height animateBG TextGroup shadow-2xl max-md:shadow-md  duration-300 shrink-0 rounded-lg grid-cols-6 p-6 max-sm:p-5 max-md:grid gap-6 mt-6 max-sm:mt-1 md:grid-cols-2 z-1 w-full md:mt-1 max-w-5xl items-center rounded-lg dark-grayy justify-between min-h-12'

function usePrevious (value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

function milliseconds (x) {
  if (isNaN(x)) {
    return false
  }
  return x * 1000
}
export default function TextGroup (props) {
  let temVal = props.message
  //const [rotate, setRotate] = useState(0);

  function conVertLitter (val) {
    let converted = ''
    let bar = '<span className="text-slate-400">|</span>'
    if (props.unit == 'ml' && milliseconds(props.message)) {
      converted = val / 1000
      return '( ' + Math.ceil(converted * 100) / 100 + ' L )'
    }
  }

  function conVertGallon (val) {
    let converted = ''
    if (props.unit == 'ml' && milliseconds(props.message)) {
      converted = val / 3785
      return '(' + Math.round(converted * 100) / 100 + ' gal)'
    }
  }

  function showBar () {
    if (props.unit === 'ml' || props.unit == 'ml ') {
      return true
    }
  }

  const prevCount = usePrevious(temVal)
  if (prevCount != temVal) {
    isSameVal = false
  }

  if (
    props.message == 'NaN' ||
    props.message == undefined ||
    props.message == 'Infinity' ||
    props.message == 'undefined' ||
    props.message <= 0 ||
    milliseconds(props.message) === false
  )
    temVal = 0
  console.log(props.name + ' Now: ' + temVal + ' before: ' + prevCount)
  // return null
  //  console.log(props.name + ' Now: ' + props.message + ' before: ' + prevCount)
 

  return (
    /*   <div className={clsx(className, {[classNameNew]: !isSameVal })}
          > */
    <div className='TextGroup  bg-white/10 relative transition-max-height  duration-300 shrink-0  grid-cols-6 rounded-md shadow-2xl p-3 max-sm:p-2 max-md:grid gap-6 mt-6 max-sm:mt-1 md:grid-cols-2 z-1 w-full md:mt-1 max-w-5xl items-center  justify-between min-h-32'>
      <div className='text-left w-full col-start-1 col-end-5 max-sm:col-end-7 max-md:col-end-5'>
        <label className='uppercase absolute left-2 top-2  mb-2 text-sm max-sm:text-xs text-roboto font-bold text-indigo-300 dark:text-indigo-300'>
          {props.label}  <span className='text-md normal-case font-semibold'> {props.unit}</span>
        </label>
        <h1 className='text-4xl absolute left-2 top-12 max-sm:top-10 max-sm:text-3xl tracking-tight antialiased font-normal text-white text-roboto'>
          {temVal.toLocaleString('en-US')}
          <span className='text-sm font-semibold'> {props.unit}</span>
        </h1>
        <input
          id={props.id}
          name={props.name}
          type='hidden'
          value={temVal}
          onChange={props.onChange}
        ></input>
        <div className='absolute opacity-50 right-2 top-5'>
    {/*       <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: temVal }}
            transition={{ duration: 3 }}
          >
            <Image
              className='dark:filter-none relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
              src='/impeller-white3.svg'
              alt='Impeller'
              width={ 40 }
              height={40}
              priority
            />
          </motion.div> */}
        </div>
      </div>

      <div className='text-right bottom-2 right-2 absolute max-md:text-sm max-sm:text-md text-white w-full col-start-6 col-end-7 max-sm:col-start-2 max-md:col-start-5'>
        <span>
          {conVertLitter(temVal)} {conVertGallon(temVal)}
        </span>
      </div>
    </div>
  )
}
