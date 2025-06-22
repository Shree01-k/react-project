import React, { useState } from 'react';

function Home() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(null);

  const handleCalculate = () => {
    setSum(Number(num1) + Number(num2));
  };

  return (
    <div>
      <h2>Home Page: Add Two Numbers</h2>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button onClick={handleCalculate}>Calculate Sum</button>
      {sum !== null && <p>Sum: {sum}</p>}
    </div>
  );
}

export default Home;
