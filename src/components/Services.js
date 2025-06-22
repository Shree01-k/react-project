import React, { useState } from 'react';

function Services() {
    const [number, setNumber] = useState('');
    const [isPrime, setIsPrime] = useState(null);

    const checkPrime = () => {
        const num = parseInt(number);
        if (num < 2) return setIsPrime(false);
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return setIsPrime(false);
        }
        setIsPrime(true);
    };

    return (
        <div>
            <h2>Services Page: Prime Number Checker</h2>
            <input
                type="number"
                placeholder="Enter a number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button onClick={checkPrime}>Check</button>
            {isPrime !== null && (
                <p>{isPrime ? `${number} is a Prime Number` : `${number} is Not Prime`}</p>
            )}
        </div>
    );
}

export default Services;
