import './index.less'
import { Player } from './Player'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket'

function OverlayView() {
  return (
    <div className="overlay">
      <div className="players">
        <Player job="dps" damage={11451.40} />
        <Player job="dps" />
        <Player job="dps" />
        <Player job="dps" />
        <Player job="tank" />
        <Player job="tank" />
        <Player job="heal" />
        <Player job="heal" />
      </div>
    </div>
  )
}

export function Overlay() {
  const [searchParams] = useSearchParams()
  const HOST_PATH = searchParams.get('HOST_PORT')

  const { sendMessage, lastMessage, readyState } = useWebSocket(HOST_PATH)

  useEffect(() => {
    if (lastMessage) {
      console.log(lastMessage)
    }
  }, [lastMessage])

  return <OverlayView />
}
