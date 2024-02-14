import React, { useState } from 'react';
import CurrencyComboBox from '../CurrencyComboBox/CurrencyComboBox';
import '../App/App.css';
import logo from '../img/logo.png';
import flecha from '../img/flecha.png';

const InsertExchange = ({ currencies, onAddExchange }) => {
    // Estados para almacenar las selecciones del usuario y mensajes de error
    const [originCurrency, setOriginCurrency] = useState(null);
    const [destCurrency, setDestCurrency] = useState(null);
    const [amount, setAmount] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Manejadores de eventos para actualizar las selecciones y validar la entrada del usuario
    const handleSelectOriginCurrency = (currency) => {
        setOriginCurrency(currency);
    };

    const handleSelectDestCurrency = (currency) => {
        setDestCurrency(currency);
    };

    const handleAmountChange = (event) => {
        const input = event.target.value;

        if (!/^\d*\.?\d*$/.test(input)) {
            // Verificar si el input contiene solo números
            setErrorMessage('Por favor, ingresa un número válido');
            return;
        }

        setAmount(input);
        setErrorMessage('');
    };

    // Manejador de evento para agregar un nuevo intercambio
    const handleAddExchange = () => {
        // Verificar si los campos están completos
        if (!amount.trim() || !originCurrency || !destCurrency) {
            setErrorMessage('Por favor, completa todos los campos');
            return;
        }

        const amountValue = parseFloat(amount);

        // Verificar si la cantidad es un número válido y mayor o igual a 0
        if (isNaN(amountValue) || amountValue < 0) {
            setErrorMessage('La cantidad debe ser mayor o igual a 0');
            return;
        }

        // Crear un nuevo objeto de intercambio con datos aleatorios
        const newExchange = {
            id: Math.floor(Math.random() * 10000),
            codOrigen: originCurrency,
            codDest: destCurrency,
            amount: amountValue,
        };

        // Llamar a la función proporcionada para agregar el intercambio
        onAddExchange(newExchange);

        // Reiniciar los estados después de agregar el intercambio
        setOriginCurrency('');
        setDestCurrency('');
        setAmount('');
    };

    return (
        <div className="insert-exchange-container">
            {/* Contenedor principal del componente */}
            <div className="exchange-content">
                <h2 className='font-krona'>Currency Exchanger</h2>
            </div>

            {/* Contenedor de la fila de entrada */}
            <div className="input-row">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>

                {/* Contenedor del campo de entrada de la cantidad */}
                <div className="input-container">
                    <label>Amount:</label>
                    <input type="text" value={amount} onChange={handleAmountChange} className="custom-input" />
                </div>

                {/* Componente de cuadro de selección de moneda de origen */}
                <CurrencyComboBox
                    currencies={currencies}
                    onSelectCurrency={handleSelectOriginCurrency}
                    label="Origin Currency:"
                />

                {/* Contenedor de la flecha */}
                <div className="arrow-container">
                    <img src={flecha} alt="Flecha" />
                </div>

                {/* Componente de cuadro de selección de moneda de destino */}
                <CurrencyComboBox
                    currencies={currencies}
                    onSelectCurrency={handleSelectDestCurrency}
                    label="Destination:"
                />

                {/* Contenedor del botón de agregar */}
                <div className="button-container">
                    <button onClick={handleAddExchange}>ADD</button>
                </div>
            </div>

            {/* Mostrar mensaje de error si hay uno */}
            {errorMessage && (
                <div className="error-message">
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

export default InsertExchange;
