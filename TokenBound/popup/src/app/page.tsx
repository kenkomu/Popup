import React, { useState } from "react";
import WalletInteractionForm from "../app/pages/assets/page"; // Assuming your WalletInteractionForm component is in a separate file
import StarknetProvider from "./starknet-provider"; // Import your StarkNet provider configuration

function App() {
  return (
    <StarknetProvider>
      <div className="App">
        <header className="App-header">
          <h1>StarkNet Wallet Interaction</h1>
        </header>
        <WalletInteractionForm />
      </div>
    </StarknetProvider>
  );
}

export default App;
