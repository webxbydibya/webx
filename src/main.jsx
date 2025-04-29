import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Page from './page'
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
    <Analytics />
  </StrictMode>,
)
