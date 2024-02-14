import React, { useState } from 'react';
import '../App/App.css';

const CurrencyComboBoxCustom = ({ currencies, onSelectCurrency, label }) => {
    // Estado para almacenar la moneda seleccionada
    const [selectedCurrency, setSelectedCurrency] = useState(null);

    // Estado para controlar la visibilidad de las opciones
    const [showOptions, setShowOptions] = useState(false);

    // Controlador de clic de una moneda
    const handleCurrencyClick = (currency) => {
        setSelectedCurrency(currency);
        onSelectCurrency(currency);
        setShowOptions(false);
    };

    return (
        <div className="currency-combo-custom-container">
            {/* Etiqueta del componente */}
            <label>{label}</label>

            {/* Contenedor del combo */}
            <div
                className="combo-wrapper"
                onClick={() => setShowOptions(!showOptions)}
            >
                {/* Mostrar información de la moneda seleccionada*/}
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

            {/* Contenedor de opciones (mostrado si showOptions es true) */}
            {showOptions && (
                <div className="options-container">
                    {/* Generar opciones para cada moneda */}
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
