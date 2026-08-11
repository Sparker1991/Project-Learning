import { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/hello')
            .then((response) => response.json())
            .then((data) => {
                setMessage(data.message);
            })
            .catch((error) => {
                console.error('Error:', error);
                setMessage('Could not connect to Laravel');
            });
    }, []);

    return (
        <div>
            <h1>React Frontend</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;
