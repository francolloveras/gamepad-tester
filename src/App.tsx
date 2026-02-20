import Dualsense from '@/components/Dualsense'
import Loader from '@/components/icons/loader'

export default function App() {
  return (
    <div className="flex items-start gap-x-24 rounded-lg border border-neutral-100 px-12 py-10 shadow-lg">
      <div>
        <h2 className="inline-flex items-center gap-x-2 text-2xl text-neutral-700">
          <Loader />
          Waiting for a controller to be connect
        </h2>
        <p className="text-neutral-500">Connect your joystick and press any button to start.</p>
      </div>
      <div id="gamepad-name"></div>
      <div className="w-96">
        <Dualsense />
      </div>
    </div>
  )
}
