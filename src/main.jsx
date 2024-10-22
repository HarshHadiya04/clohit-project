import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WishlistProvider } from './WishlistContext.jsx'

createRoot(document.getElementById('root')).render(
        <WishlistProvider>
        <App/>
        </WishlistProvider>

)
