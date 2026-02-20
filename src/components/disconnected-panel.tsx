import Loader from '@/components/icons/loader'

export default function DisconnectedPanel() {
  return (
    <div>
      <h2 className="inline-flex items-center gap-x-2 text-2xl text-neutral-700">
        <Loader />
        Waiting for a controller to be connect
      </h2>
      <p className="text-neutral-500">Connect your joystick and press any button to start.</p>
    </div>
  )
}
