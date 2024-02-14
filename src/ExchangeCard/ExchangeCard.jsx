import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import flecha from '../img/arrow.png';
import eliminar from '../img/remove.png';
import './ExchangeCard.css';

const ExchangeCard = ({ exchange, currencies, onRemoveExchange }) => {
    const { codOrigen, codDest, amount } = exchange;
    const [originFlagUrl, setOriginFlagUrl] = useState('');
    const [destFlagUrl, setDestFlagUrl] = useState('');

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

        fetchFlag(codOrigen, setOriginFlagUrl);
        fetchFlag(codDest, setDestFlagUrl);
    }, [codOrigen, codDest, currencies]);

    const calculateConvertedAmount = () => {
        const exchangeRate = currencies[codDest].exchangeRate / currencies[codOrigen].exchangeRate;
        return (amount * exchangeRate).toFixed(2);
    };

    const handleRemoveExchange = () => {
        onRemoveExchange(exchange.id);
    };

    return (
        <div className="exchange-card-container">
            <div className="exchange-card-wrapper">
                <div className="exchange-card-content">
                    <img
                        src={eliminar}
                        alt=""
                        className="remove-button"
                        onClick={handleRemoveExchange}
                    />

                    <div className="currency-details">
                        <img src={originFlagUrl} alt={codOrigen} className="currency-flag" />
                        <span className="currency-amount">{amount} {currencies[codOrigen].currency}</span>
                    </div>

                    <div className="arrow-container">
                        <img src={flecha} alt="Arrow" />
                    </div>

                    <div className="currency-details">
                        <img src={destFlagUrl} alt={codDest} className="currency-flag" />
                        <span className="currency-amount">{calculateConvertedAmount()} {currencies[codDest].currency}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

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
