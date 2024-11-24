import React, { useEffect, useState } from 'react';
import { fetchPortfolios } from '../services/api';
import '../App.css';

const PortfolioList = () => {
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        const getPortfolios = async () => {
            try {
                const { data } = await fetchPortfolios();
                setPortfolios(data);
            } catch (err) {
                console.error('Error fetching portfolios:', err);
            }
        };
        getPortfolios();
    }, []);

    return (
        <div>
            <h2>All Portfolios</h2>
            <ul>
                {portfolios.map((portfolio) => (
                    <li key={portfolio._id}>
                        <h3>{portfolio.name}</h3>
                        <p>{portfolio.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PortfolioList;
