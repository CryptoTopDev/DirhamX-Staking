import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme 
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  sepolia
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import Header from "./layout/header";
import Main from "./page/main"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
const CustomAvatar = () => {
  return (
    <img
      src="/asset/tokenLogo.png"
      width="40px"
      height="40px"
      style={{ borderRadius: 999 }}
    />
  ) 
};
const queryClient = new QueryClient();
function App() {
  const bgStyle = true;

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()} avatar={CustomAvatar}>
          <Router>
            <div className={`${bgStyle?"bg-black":"bg-[#F0F4F2]"} h-screen`}>
              <Header />
              <Main />
            </div>
          </Router>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
