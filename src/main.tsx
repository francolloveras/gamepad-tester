import 'unfonts.css'
import '@/index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from '@/App.tsx'
import Header from '@/components/header'
import About from '@/components/about'
import Footer from '@/components/footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex min-h-screen flex-col items-center gap-y-12">
      <Header />
      <div className="flex max-w-5xl flex-1 flex-col gap-y-12">
        <App />
        <About />
      </div>
      <Footer />
    </div>
  </StrictMode>
)
