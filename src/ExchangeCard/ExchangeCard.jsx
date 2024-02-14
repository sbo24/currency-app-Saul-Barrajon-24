import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import flecha from '../img/arrow.png';
import eliminar from '../img/remove.png';
import './ExchangeCard.css'; 

const ExchangeCard = ({ exchange, currencies, onRemoveExchange }) => {
    const { codOrigen, codDest, amount } = exchange;

    // Estados para almacenar las URL de las banderas de origen y destino
    const [originFlagUrl, setOriginFlagUrl] = useState('');
    const [destFlagUrl, setDestFlagUrl] = useState('');

    // Efecto para cargar las banderas cuando cambian los códigos de moneda
    useEffect(() => {
        const fetchFlag = async (codCurrency, setFlagUrl) => {
            try {
                const flagCode = currencies[codCurrency].flag;
                const flagPath = `/img/banderas/${flagCode}.png`;
                setFlagUrl(flagPath);
            } catch (error) {
                console.error('Error fetching flag:', error);
            }
        };

        // Cargar las banderas al montar 
        fetchFlag(codOrigen, setOriginFlagUrl);
        fetchFlag(codDest, setDestFlagUrl);
    }, [codOrigen, codDest, currencies]);

    // Calcular el total convertido usando las tasas de cambio
    const calculateConvertedAmount = () => {
        const exchangeRate = currencies[codDest].exchangeRate / currencies[codOrigen].exchangeRate;
        return (amount * exchangeRate).toFixed(2);
    };

    // Manejador para eliminar el intercambio
    const handleRemoveExchange = () => {
        onRemoveExchange(exchange.id);
    };

    return (
        <div className="exchange-card-container">
            {/* Contenedor principal del componente */}
            <div className="exchange-card-wrapper">
                {/* Contenido de la tarjeta de intercambio */}
                <div className="exchange-card-content">
                    {/* Boton de eliminar*/}
                    <img
                        src={eliminar}
                        alt=""
                        className="remove-button"
                        onClick={handleRemoveExchange}
                    />

                    {/* Detalles de la moneda de origen */}
                    <div className="currency-details">
                        <img src={originFlagUrl} alt={codOrigen} className="currency-flag" />
                        <span className="currency-amount">{amount} {currencies[codOrigen].currency}</span>
                    </div>

                    {/* Contenedor de la flecha */}
                    <div className="arrow-container">
                        <img src={flecha} alt="Arrow" />
                    </div>

                    {/* Detalles de la moneda de destino */}
                    <div className="currency-details">
                        <img src={destFlagUrl} alt={codDest} className="currency-flag" />
                        <span className="currency-amount">{calculateConvertedAmount()} {currencies[codDest].currency}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Propiedades (protypes)
ExchangeCard.propTypes = {
    exchange: PropTypes.shape({
        id: PropTypes.number.isRequired,
        codOrigen: PropTypes.string.isRequired,
        codDest: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
    }).isRequired,
    currencies: PropTypes.object.isRequired,
    onRemoveExchange: PropTypes.func.isRequired,
};

export default ExchangeCard;
