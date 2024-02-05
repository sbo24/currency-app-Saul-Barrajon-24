import React, { useState } from 'react';
import CurrencyComboBox from '../CurrencyComboBox/CurrencyComboBox';
import '../App/App.css';

const InsertExchange = ({ currencies, onAddExchange }) => {
    const [originCurrency, setOriginCurrency] = useState(null);
    const [destCurrency, setDestCurrency] = useState(null);
    const [amount, setAmount] = useState('');

    const handleSelectOriginCurrency = (currency) => {
        setOriginCurrency(currency);
    };

    const handleSelectDestCurrency = (currency) => {
        setDestCurrency(currency);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleAddExchange = () => {
        // Validar que todos los campos estén llenos antes de agregar el intercambio
        if (originCurrency && destCurrency && amount) {
            const newExchange = {
                id: Math.floor(Math.random() * 10000),
                codOrigen: originCurrency,
                codDest: destCurrency,
                amount: parseFloat(amount),
            };
            onAddExchange(newExchange);
            // Limpiar los campos después de agregar el intercambio
            setOriginCurrency(null);
            setDestCurrency(null);
            setAmount('');
        } else {
            alert('Por favor, complete todos los campos.');
        }
    };

    return (
        <div className="insert-exchange-container">
            <h2>Currency Exchanger</h2>

            <div className="input-row">
                <label>Cantidad:</label>
                <input type="number" value={amount} onChange={handleAmountChange} />

                <CurrencyComboBox
                    currencies={currencies}
                    onSelectCurrency={handleSelectOriginCurrency}
                    label="Origin Currency:"
                />
                <CurrencyComboBox
                    currencies={currencies}
                    onSelectCurrency={handleSelectDestCurrency}
                    label="Destination:"
                />

                <button onClick={handleAddExchange}>ADD</button>
            </div>
        </div>
    );
};

export default InsertExchange;
