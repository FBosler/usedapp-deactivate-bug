import { useEthers } from '@usedapp/core'

export const Header = () => {
    const { account, activateBrowserWallet, deactivate } = useEthers()

    const isConnected = account !== undefined

    return (
        <div>
            {isConnected ? (
                <div>
                    Account: {account} connected!
                    <button color="primary" onClick={() => deactivate()}>
                        Disconnect
                    </button>
                </div>
            ) : (
                <button color="primary" onClick={() => activateBrowserWallet()}>
                    Connect
                </button>
            )}
        </div>
    )
}

export default Header
