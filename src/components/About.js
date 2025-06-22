import React, { useEffect, useState } from 'react';

function About({ name }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>Hello, I am {name}</h2>
            <p>This counter increases every second and can be manually incremented:</p>
            <button onClick={() => setCount(prev => prev + 1)}>Add +1</button>
            <h3>Current Count: {count}</h3>
        </div>
    );
}

export default About;
