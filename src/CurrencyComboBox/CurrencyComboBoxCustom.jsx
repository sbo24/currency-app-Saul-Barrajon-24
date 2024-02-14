import React, { useState } from 'react';
import '../App/App.css';

const CurrencyComboBoxCustom = ({ currencies, onSelectCurrency, label }) => {
    const [selectedCurrency, setSelectedCurrency] = useState(null);
    const [showOptions, setShowOptions] = useState(false);

    const handleCurrencyClick = (currency) => {
        setSelectedCurrency(currency);
        onSelectCurrency(currency);
        setShowOptions(false);
    };

    return (
        <div className="currency-combo-custom-container">
            <label>{label}</label>
            <div
                className="combo-wrapper"
                onClick={() => setShowOptions(!showOptions)}
            >
                {selectedCurrency ? (
                    <div className="selected-currency-info">
                        <img
                            src={`/img/flags/${currencies[selectedCurrency].flag}`}
                            alt={selectedCurrency}
                            className="flag-img"
                        />
                        {currencies[selectedCurrency].name}
                    </div>
                ) : (
                    'Select a Currency'
                )}
            </div>

            {showOptions && (
                <div className="options-container">
                    {Object.keys(currencies).map((currencyCode) => (
                        <div
                            key={currencyCode}
                            onClick={() => handleCurrencyClick(currencyCode)}
                            className="option"
                        >
                            <img
                                src={`/img/flags/${currencies[currencyCode].flag}`}
                                alt={currencyCode}
                                className="flag-img"
                            />
                            {currencies[currencyCode].name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CurrencyComboBoxCustom;
