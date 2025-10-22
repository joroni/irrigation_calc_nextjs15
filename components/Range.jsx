
import { useEffect, useRef } from 'react'
/* import Anchor from './Anchor' */
import clsx from 'clsx'


function usePrevious (value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

export default function Range(props) {
  const prevCount = usePrevious(props.value)
let isSameVal = true
// console.log(props.message)
if (props.value != prevCount) {
  isSameVal = false
  
}

   useEffect(() => {
    document.querySelectorAll('.__range').forEach(function (el) {
      el.oninput = function () {
        var valPercent =
          (el.valueAsNumber - parseInt(el.min)) /
          (parseInt(el.max) - parseInt(el.min))
        var style =
          'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(' +
          valPercent +
          ', #2c83cc), color-stop(' +
          valPercent +
          ', #b2b9be));'
        el.style = style
      }
      el.oninput()
    })

  }, []);
  
  
  return (
    
    <div className='sliderElm inline-block relative snap-center'>
        <form>
      <label
        className="block uppercase text-roboto -mb-4 text-sm text-indigo-300 font-bold dark:text-indigo-300"         
          htmlFor={props.name}
        >
          {props.label}
        </label>
        <div className='block'>
          <div className='buble relative text-right flex tooltip font-bold right-12 max-sm:right-11 text-white text-md'>
            <span className='flex-initial w-64 mr-1 text-right text-roboto'>{ props.value }</span>
            <span className="text-xs text-white flex-initial w-32 text-left text-roboto"> { props.unit }</span>
          </div>
        </div>
          <input
          className='__range h-1 w-44 max-sm:w-50 bg-blue-950 rounded-md appearance-none cursor-pointer range-sm dark:bg-gray-700'
          type='range'
          key={props.id}
          step={props.step}
          min={props.min}
          max={props.max}
          value={props.value}
          onChange={props.onChange}
          unit={props.unit}
        />
      </form>
    </div>
  )
}


