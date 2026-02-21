import type { GamepadState } from '@/lib/hooks/useGamepads'

export default function GamepadPanel({ gamepad }: { gamepad: GamepadState }) {
  const [name, description] = gamepad.id.split(' (')

  const leftAxis = [gamepad.axes[0], gamepad.axes[1]]
  const rightAxis = [gamepad.axes[2], gamepad.axes[3]]

  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-neutral-500">{description.split(')')[0]}</p>
      </header>
      <div className="flex gap-x-6 text-sm">
        <div>
          <p className="text-neutral-500 uppercase">Index</p>
          <p className="text-neutral-700">{gamepad.index}</p>
        </div>
        <div>
          <p className="text-neutral-500 uppercase">Connected</p>
          <p className="text-neutral-700">{gamepad.connected ? 'Yes' : 'No'}</p>
        </div>
        <div>
          <p className="text-neutral-500 uppercase">Mapping</p>
          <p className="text-neutral-700">{gamepad.mapping}</p>
        </div>
        <div>
          <p className="text-neutral-500 uppercase">Timestamp</p>
          <p className="w-36 text-neutral-700">{gamepad.timestamp.toFixed(5)}</p>
        </div>
      </div>
      <div className="grid grid-cols-9 gap-3">
        {gamepad.buttons.map((button, index) => (
          <div key={index} className="flex items-center gap-x-2 text-sm">
            <div className="relative h-full w-2 rounded bg-neutral-100">
              <div
                style={{ height: `${button.value * 100}%` }}
                className="absolute bottom-0 h-full w-full rounded bg-black"
              />
            </div>
            <div>
              <p className="text-neutral-500">B{index}</p>
              <p className="text-neutral-700">{button.value.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="flex flex-col gap-3">
          <p className="text-neutral-500 uppercase">L Stick</p>
          <AxisPanel axis={leftAxis} />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-neutral-500 uppercase">R Stick</p>
          <AxisPanel axis={rightAxis} />
        </div>
      </div>
    </div>
  )
}

function AxisPanel({ axis }: { axis: number[] }) {
  return (
    <div className="flex gap-x-8">
      <div className="flex flex-col gap-y-3">
        {axis.map((axis, index) => (
          <div key={index} className="flex items-center gap-x-2">
            <div className="relative h-full w-2 rounded bg-neutral-100">
              <div
                className="absolute left-0 w-full rounded bg-black"
                style={{
                  height: `${Math.abs(axis) * 50}%`,
                  top: '50%',
                  transform: `translateY(${axis >= 0 ? '-100%' : '0'})`
                }}
              />
            </div>
            <div>
              <p className="up text-neutral-500">Axis {index}</p>
              <p className="w-16 text-neutral-700">{axis.toFixed(5)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="relative size-25 rounded-full border border-neutral-300">
        <div className="absolute top-1/2 h-[0.1px] w-full -translate-y-1/2 bg-neutral-300" />
        <div className="absolute left-1/2 h-full w-[0.1px] -translate-x-1/2 bg-neutral-300" />
        <div
          className="absolute size-2 rounded-full bg-black"
          style={{ left: `${50 + axis[0] * 50}%`, top: `${50 + axis[1] * 50}%` }}
        />
      </div>
    </div>
  )
}
