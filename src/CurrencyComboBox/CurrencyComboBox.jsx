import React, { useState } from 'react';
import '../App/App.css';

const CurrencyComboBox = ({ currencies, onSelectCurrency, label }) => {
    // Estado para almacenar la moneda seleccionada
    const [selectedCurrency, setSelectedCurrency] = useState(Object.keys(currencies)[0]);

    // Manejador de cambio de moneda
    const handleCurrencyChange = (event) => {
        const currency = event.target.value;
        setSelectedCurrency(currency);
        onSelectCurrency(currency);
    };

    return (
        <div className="currency-combo-container">
            {/* Etiqueta del componente */}
            <label>{label}</label>
            {/* Contenedor del combo */}
            <div className="combo-wrapper">
                {/* Bandera de la moneda seleccionada a partir de una api */}
                <img
                    src={`https://flagcdn.com/28x21/${currencies[selectedCurrency].flag.toLowerCase()}.png`}
                    alt={selectedCurrency}
                    className="flag-img"
                />
                {/* Menú desplegable de monedas */}
                <select
                    value={selectedCurrency}
                    onChange={handleCurrencyChange}
                >
                    {/* Generar opciones para cada moneda, es decir, sus emojis */}
                    {Object.keys(currencies).map((currencyCode) => (
                        <option key={currencyCode} value={currencyCode}>
                            {`${currencies[currencyCode].emoji} ${currencyCode}`}
                        </option>
                    ))}
                </select>
                {/* Nombre de la moneda seleccionada */}
                <span className="currency-name">{`(${currencies[selectedCurrency].name})`}</span>
            </div>
        </div>
    );
};

export default CurrencyComboBox;
