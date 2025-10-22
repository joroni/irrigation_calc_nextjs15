'use client'

import { useRef, useEffect } from 'react'

export default function CustomContVolume(props) {
  /* const refLabeLForInput = useRef() */
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  console.log('ref={inputRef} ', inputRef)
  return (
    <div className='ContVolumeCustom mt-1 mb-1'>
      {/* <label
        htmlFor='CustomContVolume'
        className='block mb-2 text-sm font-medium text-white-900 dark:text-white'
      >
        Custom Container Volume (ml)
      </label> */}

      <input
        autoFocus
        ref={inputRef}
        type='number'
        value={ props.customContVol }
        label={ props.label }
        onInput={ props.onInput }
        className='bg-blue-950 text-center text-roboto text-white text-md focus:border-y:border-blue-950 focus:border-y:border-blue-950 block w-full py-1.5 px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-950 dark:focus:border-blue-950' />
    </div>
  )
}
  