import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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
        <div className="exchange-card">
            <div className="exchange-info">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={originFlagUrl} alt={codOrigen} style={{ width: '20px', marginRight: '5px' }} />
                    <span>{amount} {currencies[codOrigen].name} to</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={destFlagUrl} alt={codDest} style={{ width: '20px', marginRight: '5px' }} />
                    <span>{currencies[codDest].name}: {calculateConvertedAmount()} {currencies[codDest].name}</span>
                </div>
            </div>
            <button className="remove-button" onClick={handleRemoveExchange}>
                Remove
            </button>
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
