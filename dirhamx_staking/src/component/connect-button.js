import { ConnectButton as RainbowkitConnectButton } from "@rainbow-me/rainbowkit";
const formatAddress = (addr) => {
    return `${addr?.substring(0, 5)}...${addr?.substring(addr.length - 8)}`
  }
export const ConnectButton = ({ label, showBalance }) => {
  return (
    <RainbowkitConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
        const ready = mounted
        const connected = ready && account && chain
        return (
          <div>
            {(() => {
              if (!connected) {
                return (
                  <button
                    variant="default"
                    onClick={openConnectModal}
                    type="button"
                    className="h-[40px] w-full border-none bg-[#8CF579] text-lg outline-none hover:bg-[#8CF579]/80 dark:hover:bg-[#8CF579]/80 px-2 rounded-md text-[#181818]"
                  >
                    {label}
                  </button>
                )
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                )
              }
              return (
                <div style={{ display: "flex", gap: 12 }}>
                  {/* <button
                    variant="outline"
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                    className=" bg-[#F7931A]"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img alt={chain.name ?? "Chain icon"} src={chain.iconUrl} style={{ width: 12, height: 12 }} />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button> */}
                  <button variant="outline" onClick={openAccountModal} type="button" className="w-full bg-[#8CF579] h-[40px] px-2 rounded-full">
                    {formatAddress(account.address)}
                    {showBalance ? ` (${account.displayBalance})` : ""}
                  </button>
                </div>
              )
            })()}
          </div>
        )
      }}
    </RainbowkitConnectButton.Custom>
  )
}
