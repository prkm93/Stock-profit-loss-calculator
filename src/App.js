import { useState, useRef } from "react";
import Input from "./components/Input";

function App() {
  
  const [initialPrice, setInitialPrice] = useState('');
  const [qtyOfStocks, setQtyOfStocks] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');

  const refElem = useRef();

  const calculateAmount = (e) => {
    e.preventDefault();

    const profitOrLoss = (+currentPrice)*(+qtyOfStocks) - (+initialPrice)*(+qtyOfStocks);
    console.log("profitOrLoss", profitOrLoss);

    let text;

    if (profitOrLoss !== 0) {
      text = `Hey, the ${profitOrLoss > 0 ? "profit": "loss"} is ${Math.abs(profitOrLoss)} and percent is ${(Math.abs(profitOrLoss)/initialPrice)*100}%`;
    } else {
      text = 'No pain no gain and no gain no pain!';
    }

    refElem.current.innerHTML = text;
  }

  return (
    <div className="container">
      <h1>Stock Profit & Loss Calculator</h1>
      <Input
        label="Initial Price"
        id="price"
        placeholder="Enter initial price"
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
      <button 
        className="btn" 
        onClick={calculateAmount}
      >
        Tell me!
      </button>
      <div ref={refElem} className="output"></div>
    </div>
  );
}

export default App;
