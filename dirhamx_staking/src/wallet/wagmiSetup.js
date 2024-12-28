import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { WagmiConfig, configureChains, createClient } from 'wagmi';
import { sepolia} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

export const { chains, provider } = configureChains(
  [sepolia],
  [publicProvider()]
);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors: RainbowKitProvider.getDefaultWallets({ chains }).connectors,
  provider,
});

