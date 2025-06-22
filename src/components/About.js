import React, { useEffect, useState } from 'react';

function About({ name }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const countme = () => {
            setTimeout(() => {
                setCount(prev => prev + 1); // use previous value to avoid stale count
                countme(); // call it again to repeat
            }, 1000);
        };

        countme();
        return () => {
        };
    }, []);

    const handleClick = () => {
        setCount(prev => prev + 1);
    };

    return (
        <div>
            <h2>I am {name}</h2>
            <button onClick={handleClick}>click me</button>
            <h1>Counter: {count}</h1>
        </div>
    );
}

export default About;
