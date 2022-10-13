import { useState } from "react";
import Input from "./components/Input";

function App() {
  
  const [initialPrice, setInitialPrice] = useState('');
  const [qtyOfStocks, setQtyOfStocks] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');


  return (
    <div className="container">
      <h1>Stock Profit & Loss Calculator</h1>
      <Input
        label="Initial Price"
        id="price"
        placeholder="Enter Initial Price"
        value={initialPrice}
        onChange={setInitialPrice}
      />
      <Input
        label="Quantity of Stocks"
        id="stocks"
        placeholder="Enter the number of stocks bought"
        value={qtyOfStocks}
        onChange={setQtyOfStocks}
      />
      <Input
        label="Current Price"
        id="current_price"
        placeholder="Enter the current price of stocks"
        value={currentPrice}
        onChange={setCurrentPrice}
      />
      <button className="btn">Tell me!</button>
    </div>
  );
}

export default App;
