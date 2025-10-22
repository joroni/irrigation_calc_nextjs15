import Image from 'next/image'
import Link from 'next/link'
import { useState,useEffect, useRef } from 'react'
//import { Tooltip } from 'react-tooltip'
import PlayOnce from './PlayOnce'



export default function Anchor() {
  const [showed, setShowed] = useState(false)



  return (
    <div className='anchorItem top-4 right-4 fixed rounded-full' style={{display: showed ? "none": ""}}>
      <Link
        onClick={()=> setShowed(!showed)}
        href='#Results'
        className='top-4 border rounded-full right-4 fixed p-1 items-center bg-transparent hover:bg-bg-sky-900 text-white font-bold shadow-lg'     
      
      >
       {/*  <Tooltip id='my-tooltip'  style={{ backgroundColor: "#ffffff", color: "#222" }} /> */}

        <div className='h-full'>
         <PlayOnce/>
        </div>
      </Link>
    </div>
  )
}
