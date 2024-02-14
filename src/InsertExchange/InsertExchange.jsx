import React, { useState } from 'react';
import CurrencyComboBox from '../CurrencyComboBox/CurrencyComboBox';
import '../App/App.css';
import logo from '../img/logo.png';
import flecha from '../img/flecha.png';

const InsertExchange = ({ currencies, onAddExchange }) => {
    const [originCurrency, setOriginCurrency] = useState(null);
    const [destCurrency, setDestCurrency] = useState(null);
    const [amount, setAmount] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSelectOriginCurrency = (currency) => {
        setOriginCurrency(currency);
    };

    const handleSelectDestCurrency = (currency) => {
        setDestCurrency(currency);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
        setErrorMessage('');
    };

    const handleAddExchange = () => {
        if (originCurrency && destCurrency) {
            const amountValue = parseFloat(amount);

            if (isNaN(amountValue) || amountValue < 0) {
                setErrorMessage('La cantidad debe ser mayor o igual a 0');
                return;
            }

            const newExchange = {
                id: Math.floor(Math.random() * 10000),
                codOrigen: originCurrency,
                codDest: destCurrency,
                amount: amountValue,
            };

            onAddExchange(newExchange);
            setOriginCurrency('');
            setDestCurrency('');
            setAmount('');
        }
    };

    return (
        <div className="insert-exchange-container">
            <div className="exchange-content">
                <h2 className='font-krona'>Currency Exchanger</h2>
            </div>

            <div className="input-row">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="input-container">
                    <label>Amount:</label>
                    <input type="number" value={amount} onChange={handleAmountChange} className="custom-input" />
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

            {errorMessage && (
                <div className="error-message">
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

export default InsertExchange;
