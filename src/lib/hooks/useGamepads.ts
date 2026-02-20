import { useEffect, useRef, useState } from 'react'

export function useGamepads() {
  const [gamepads, setGamepads] = useState<GamepadState[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const update = () => {
      const pads = (
        navigator.getGamepads ? Array.from(navigator.getGamepads()).filter(Boolean) : []
      ) as Array<Gamepad>

      setGamepads(
        pads.map((pad) => ({
          id: pad.id,
          index: pad.index,
          connected: pad.connected,
          mapping: pad.mapping,
          timestamp: pad.timestamp,
          buttons: pad.buttons.map((b) => ({
            pressed: b.pressed,
            value: b.value
          })),
          axes: pad.axes.map((a) => a)
        }))
      )

      rafRef.current = requestAnimationFrame(update)
    }

    update()
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return gamepads
}

export interface GamepadState {
  id: string
  index: number
  connected: boolean
  mapping: string
  timestamp: number
  buttons: {
    pressed: boolean
    value: number
  }[]
  axes: number[]
}
