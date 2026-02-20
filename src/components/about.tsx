export default function About() {
  return (
    <div className="space-y-8 rounded-lg border border-neutral-100 px-12 py-10 shadow-lg">
      <div>
        <h2 className="inline-flex items-center gap-x-2 text-2xl text-neutral-700">
          How this works?
        </h2>
        <p className="text-neutral-500">
          It uses the{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API"
            target="_blank"
            referrerPolicy="no-referrer"
            className="font-medium text-neutral-900 hover:underline"
          >
            Gamepad API
          </a>{' '}
          to detect and display gamepad state, including button presses, axis movements, and other
          input data. Make sure your{' '}
          <a
            href="https://caniuse.com/gamepad"
            target="_blank"
            referrerPolicy="no-referrer"
            className="font-medium text-neutral-900 hover:underline"
          >
            browser supports
          </a>{' '}
          the Gamepad API and that your gamepad is properly connected.
        </p>
      </div>
      <div>
        <h2 className="inline-flex items-center gap-x-2 text-2xl text-neutral-700">
          Having problems?
        </h2>
        <p className="text-neutral-500">
          If you're having issues with detecting your gamepad, make sure:
          <ul className="list-disc pl-5">
            <li>Your gamepad is properly connected and recognized by your system.</li>
            <li>Your browser supports the Gamepad API (most modern browsers do).</li>
            <li>Gamepad support is enabled in your browser settings.</li>
          </ul>
        </p>
      </div>
      <div>
        <h2 className="inline-flex items-center gap-x-2 text-2xl text-neutral-700">Credits</h2>
        <p className="text-neutral-500">
          -{' '}
          <a
            href="https://hardwaretester.com"
            target="_blank"
            referrerPolicy="no-referrer"
            className="font-medium text-neutral-900 hover:underline"
          >
            HardwareTester
          </a>{' '}
          for being an inspiration for this page and have a wonderful{' '}
          <a
            href="https://hardwaretester.com/gamepad/for-developers"
            target="_blank"
            referrerPolicy="no-referrer"
            className="font-medium text-neutral-900 hover:underline"
          >
            guide
          </a>{' '}
          about the Gamepad API.
        </p>
        <p className="text-neutral-500">
          - Dualsense&reg; svg by{' '}
          <a
            href="https://gumroad.com/darkwing?ref=svgrepo.com"
            target="_blank"
            referrerPolicy="no-referrer"
            className="font-medium text-neutral-900 hover:underline"
          >
            Alex Martynov
          </a>{' '}
          in CC Attribution License via{' '}
          <a
            href="https://www.svgrepo.com/"
            target="_blank"
            referrerPolicy="no-referrer"
            className="font-medium text-neutral-900 hover:underline"
          >
            SVG Repo
          </a>
          .
        </p>
      </div>
    </div>
  )
}
