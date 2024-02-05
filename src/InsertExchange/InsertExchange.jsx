import React, { useState } from 'react';
import CurrencyComboBox from '../CurrencyComboBox/CurrencyComboBox';
import '../App/App.css';
import logo from '../img/logo.png';
import flecha from '../img/flecha.png';

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
        if (originCurrency && destCurrency && amount) {
            const newExchange = {
                id: Math.floor(Math.random() * 10000),
                codOrigen: originCurrency,
                codDest: destCurrency,
                amount: parseFloat(amount),
            };
            onAddExchange(newExchange);
            setOriginCurrency(null);
            setDestCurrency(null);
            setAmount('');
        }
    };

    return (
        <div className="insert-exchange-container">
            <div className="exchange-content">
                <h2>Currency Exchanger</h2>
            </div>

            <div className="input-row">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="input-container">
                    <label>Amount:</label>
                    <input type="number" value={amount} onChange={handleAmountChange} style={{ border: '1px solid #d27c2c', borderRadius: '10px', padding: '15px', margin: '0 20% 0 0' }} />
                </div>

                <CurrencyComboBox
                    currencies={currencies}
                    onSelectCurrency={handleSelectOriginCurrency}
                    label="Origin Currency:"
                />

                <div className="arrow-container">
                    <img src={flecha} alt="Flecha" />
                </div>

                <CurrencyComboBox
                    currencies={currencies}
                    onSelectCurrency={handleSelectDestCurrency}
                    label="Destination:"
                />

                <div className="button-container">
                    <button onClick={handleAddExchange}>ADD</button>
                </div>
            </div>
        </div>
    );
};



export default InsertExchange;
