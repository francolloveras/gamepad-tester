import 'unfonts.css'
import '@/index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from '@/App.tsx'
import Header from '@/components/header'
import Footer from '@/components/footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col items-center gap-y-12 min-h-screen">
      <Header />
      <div className="flex-1">
        <App />
      </div>
      <Footer />
    </div>
  </StrictMode>
)
