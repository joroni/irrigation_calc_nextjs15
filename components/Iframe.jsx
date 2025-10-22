'use client'

export default function Iframe (props) {
  return (
    <div className='iframe-container'>
      <iframe
        className='responsive-iframe'
        id={props.id}
        name={props.name}
        src={props.itemHtml}
        width={props.width}
        height={props.height}
        title={ props.title }
        type="text/html"
        
        /* style="border: 0" */
      />
    </div>
  )
}

