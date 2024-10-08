import React, { useState } from 'react';
import InsertExchange from '../InsertExchange/InsertExchange';
import ExchangeCard from '../ExchangeCard/ExchangeCard';
const currencies = {
    "USD": {
        "emoji": "\uD83C\uDDFA\uD83C\uDDF8",
        "exchangeRate": 1,
        "name": "US Dollar",
        "flag": "us",
        "currency": "USD",
    },
    "EUR": {
        "emoji": "\uD83C\uDDEA\uD83C\uDDFA",
        "exchangeRate": 0.89,
        "name": "Euro",
        "flag": "eu",
        "currency": "EUR",
    },
    "JPY": {
        "emoji": "\uD83C\uDDEF\uD83C\uDDF5",
        "exchangeRate": 114.42,
        "name": "Japanese Yen",
        "flag": "jp",
        "currency": "JPY",
    },
    "GBP": {
        "emoji": "\uD83C\uDDEC\uD83C\uDDE7",
        "exchangeRate": 0.75,
        "name": "British Pound",
        "flag": "gb",
        "currency": "GBP",
    },
    "AUD": {
        "emoji": "\uD83C\uDDE6\uD83C\uDDFA",
        "exchangeRate": 1.35,
        "name": "Australian Dollar",
        "flag": "au",
        "currency": "AUD",
    },
    "CAD": {
        "emoji": "\uD83C\uDDE8\uD83C\uDDE6",
        "exchangeRate": 1.28,
        "name": "Canadian Dollar",
        "flag": "ca",
        "currency": "CAD",
    },
    "CHF": {
        "emoji": "\uD83C\uDDE8\uD83C\uDDED",
        "exchangeRate": 0.93,
        "name": "Swiss Franc",
        "flag": "ch",
        "currency": "CHF",
    },
    "CNY": {
        "emoji": "\uD83C\uDDE8\uD83C\uDDF3",
        "exchangeRate": 6.36,
        "name": "Chinese Yuan",
        "flag": "cn",
        "currency": "CNY",
    },
    "SEK": {
        "emoji": "\uD83C\uDDF8\uD83C\uDDEA",
        "exchangeRate": 8.51,
        "name": "Swedish Krona",
        "flag": "se",
        "currency": "SEK",
    },
    "NZD": {
        "emoji": "\uD83C\uDDF3\uD83C\uDDFF",
        "exchangeRate": 1.49,
        "name": "New Zealand Dollar",
        "flag": "nz",
        "currency": "NZD",
    },
    "INR": {
        "emoji": "\uD83C\uDDEE\uD83C\uDDF3",
        "exchangeRate": 74.57,
        "name": "Indian Rupee",
        "flag": "in",
        "currency": "INR",
    },
    "BRL": {
        "emoji": "\uD83C\uDDE7\uD83C\uDDF7",
        "exchangeRate": 5.22,
        "name": "Brazilian Real",
        "flag": "br",
        "currency": "BRL",
    },
    "RUB": {
        "emoji": "\uD83C\uDDF7\uD83C\uDDFA",
        "exchangeRate": 73.96,
        "name": "Russian Ruble",
        "flag": "ru",
        "currency": "RUB",
    },
    "ZAR": {
        "emoji": "\uD83C\uDDFF\uD83C\uDDE6",
        "exchangeRate": 16.96,
        "name": "South African Rand",
        "flag": "za",
        "currency": "ZAR",
    },
    "MXN": {
        "emoji": "\uD83C\uDDF2\uD83C\uDDFD",
        "exchangeRate": 20.45,
        "name": "Mexican Peso",
        "flag": "mx",
        "currency": "MXN",
    }
    // Puedes agregar más códigos de moneda, emojis de banderas, nombres de moneda y nombres de archivos de banderas según tus necesidades
}
const initialExchanges = [
    {
        id: 1001,
        codOrigen: "EUR",
        codDest: "USD",
        amount: 2
    },
    {
        id: 1002,
        codOrigen: "USD",
        codDest: "JPY",
        amount: 2
    }
];

const App = () => {
    const [exchanges, setExchanges] = useState(initialExchanges);

    const handleAddExchange = (newExchange) => {
        setExchanges([...exchanges, newExchange]);
    };

    const handleRemoveExchange = (exchangeId) => {
        const updatedExchanges = exchanges.filter((exchange) => exchange.id !== exchangeId);
        setExchanges(updatedExchanges);
    };

    return (
        <div className="app-container">
            <InsertExchange
                currencies={currencies}
                onAddExchange={handleAddExchange}
            />
            <div className="exchange-cards-container">
                {exchanges.map((exchange) => (
                    <ExchangeCard
                        key={exchange.id}
                        exchange={exchange}
                        currencies={currencies}
                        onRemoveExchange={handleRemoveExchange}
                    />
                ))}
            </div>
        </div>
    );
};
export default App;