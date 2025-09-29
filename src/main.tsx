import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { WagmiProvider, createConfig, http } from 'wagmi'
import { baseGoerli } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// middleware imports removed — not available in this wagmi version

const config = createConfig({
  chains: [baseGoerli], // baseGoerli = Base testnet
  transports: {
    [baseGoerli.id]: http(), // uses default public RPC
  },
  // plugins/middleware removed to match installed wagmi package
})

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
)
