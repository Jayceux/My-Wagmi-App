import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { injected } from 'wagmi/connectors'

function App() {
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()
  const { isConnected, address } = useAccount()

  return (
    <div style={{ padding: 24 }}>
      <h1>🚀 Wagmi + Base Starter</h1>

      {isConnected ? (
        <>
          <p><strong>Connected wallet:</strong> {address}</p>
          <button onClick={() => disconnect()}>Disconnect Wallet</button>
        </>
      ) : (
        <button onClick={() => connect({ connector: injected() })}>
          Connect Wallet
        </button>
      )}
    </div>
  )
}

export default App
