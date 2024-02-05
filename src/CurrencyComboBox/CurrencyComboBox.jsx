import React, { useState } from 'react';

const CurrencyComboBox = ({ currencies, onSelectCurrency, label }) => {
    const [selectedCurrency, setSelectedCurrency] = useState(Object.keys(currencies)[0]);

    const handleCurrencyChange = (event) => {
        const currency = event.target.value;
        setSelectedCurrency(currency);
        onSelectCurrency(currency);
    };

    return (
        <div><label>{label}</label>
            <div style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #d27c2c', borderRadius: '10px', padding: '5px' }}>
                <img src={`https://flagcdn.com/16x12/${currencies[selectedCurrency].flag.toLowerCase()}.png`} alt={selectedCurrency} style={{ width: '20px', marginRight: '5px' }} />
                <select value={selectedCurrency} onChange={handleCurrencyChange} style={{ border: 'none', outline: 'none', flex: '1', padding: '10px', backgroundColor: 'white' }}>
                    {Object.keys(currencies).map((currencyCode) => (
                        <option key={currencyCode} value={currencyCode}>
                            {`${currencies[currencyCode].emoji} ${currencyCode}`}
                        </option>
                    ))}
                </select>
                <span style={{ marginLeft: '5px', fontSize: '12px' }}>{`(${currencies[selectedCurrency].name})`}</span>
            </div>
            </div>
        </div>
    );
};

export default CurrencyComboBox;
