import React from "react";
import ReactDOM from "react-dom/client";

//wallet import
import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";

import { configureChains, createClient, WagmiConfig } from "wagmi";
import {  sepolia} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

//routes import
import App from "./App";

//style import
import "@rainbow-me/rainbowkit/styles.css";
import "./styles/site.css";
import { id } from "ethers/lib/utils.js";

const gamingl3chain = {
  id: 11155111,
  name: 'D-Casino',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc2.sepolia.org'] },
  },
  additional: {
      http: ['https://dchaintestnet-2713017997578000-1.jsonrpc.testnet.sagarpc.io/']
    }
  // blockExplorers: {



};

//wagmi
const { chains, provider } = configureChains(
  [gamingl3chain],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Betting on the wheels of fortune",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider coolMode theme={midnightTheme()} chains={chains}>
      <App />
    </RainbowKitProvider>
  </WagmiConfig>
);
