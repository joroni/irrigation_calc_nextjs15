import { useEffect, useRef } from 'react'
import { Player } from '@lordicon/react'





const ICON = require('./lock.json')

export default function PlayOnce () {
  const playerRef = useRef(Player);

  useEffect(() => {
    playerRef.current?.playFromBeginning()
  }, [])

  return <Player ref={playerRef} size={50} icon={ICON}  onComplete={() => playerRef.current?.playFromBeginning()} />
}
