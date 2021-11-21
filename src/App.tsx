import React from 'react'
import { ChainId, DAppProvider } from '@usedapp/core'
import { Header } from './Header'

function App() {
    return (
        <DAppProvider
            config={{
                supportedChains: [ChainId.Kovan, ChainId.Rinkeby, 1337],
                notifications: {
                    expirationPeriod: 1000,
                    checkInterval: 1000,
                },
            }}
        >
            <Header />
        </DAppProvider>
    )
}

export default App
