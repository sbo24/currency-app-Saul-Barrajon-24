import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import flecha from '../img/arrow.png';

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
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '50%', padding:'3% 0' }}>
            <div style={{ width: '100%', marginBottom: '10px', display: 'flex',justifyContent:'center' }}>
                <div style={{ display: 'flex', backgroundColor: '#d3e19d', borderRadius: '20px', padding: '10% 22%', justifyContent: 'space-between', alignItems: 'center', position: 'relative', width: '50%' }}>

                    <img src="https://cdn-icons-png.flaticon.com/512/320/320006.png" alt="" style={{ position: 'absolute', top: '0', right: '0', border: 'none', padding: '5px 10px', cursor: 'pointer', width: '3%' }} className="remove-button" onClick={handleRemoveExchange} />

                    <div style={{ width: '25%', display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                        <img src={originFlagUrl} alt={codOrigen} style={{ width: '20px', marginRight: '5px' }} />
                        <span style={{ whiteSpace: 'nowrap' }}>{amount} {currencies[codOrigen].currency}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', margin: '0 2%', flexShrink: 0 }}>
                        <img src={flecha} alt="Arrow" style={{ width: '30px' }} />
                    </div>

                    <div style={{ width: '25%', display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                        <img src={destFlagUrl} alt={codDest} style={{ width: '20px', marginRight: '5px' }} />
                        <span style={{ whiteSpace: 'nowrap' }}>{calculateConvertedAmount()} {currencies[codDest].currency}</span>
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
