import React, { useState } from 'react';
import '../App/App.css';  

const CurrencyComboBox = ({ currencies, onSelectCurrency, label }) => {
    const [selectedCurrency, setSelectedCurrency] = useState(Object.keys(currencies)[0]);

    const handleCurrencyChange = (event) => {
        const currency = event.target.value;
        setSelectedCurrency(currency);
        onSelectCurrency(currency);
    };

    return (
        <div className="currency-combo-container">
            <label>{label}</label>
            <div className="combo-wrapper">
                <img
                    src={`https://flagcdn.com/28x21/${currencies[selectedCurrency].flag.toLowerCase()}.png`}
                    alt={selectedCurrency}
                    className="flag-img"
                />
                <select
                    value={selectedCurrency}
                    onChange={handleCurrencyChange}
                >
                    {Object.keys(currencies).map((currencyCode) => (
                        <option key={currencyCode} value={currencyCode}>
                            {`${currencies[currencyCode].emoji} ${currencyCode}`}
                        </option>
                    ))}
                </select>
                <span className="currency-name">{`(${currencies[selectedCurrency].name})`}</span>
            </div>
        </div>
    );
};

export default CurrencyComboBox;
