import { useState } from 'react';

const App = () => {
    const [numero, setName] = useState('Vanessa');

    const handleButtonClick = () => {
        setName('Vanessa');
    }

    return (
        <div>
            O número é: {numero}
            <button onClick={handleButtonClick}>Clique aqui</button>
        </div>
    );
}

export default App;