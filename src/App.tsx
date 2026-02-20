import DisconnectedPanel from '@/components/disconnected-panel'
import GamepadPanel from '@/components/gamepad-panel'
import Dualsense from '@/components/dualsense'
import { useGamepads } from '@/lib/hooks/useGamepads'

export default function App() {
  const gamepads = useGamepads()

  return (
    <div className="flex items-start gap-x-12 rounded-lg border border-neutral-100 px-12 py-10 shadow-lg">
      {gamepads.length > 0 ? <GamepadPanel gamepad={gamepads[0]} /> : <DisconnectedPanel />}
      <div className="w-96">
        <Dualsense />
      </div>
    </div>
  )
}
