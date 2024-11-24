import React, { useEffect, useState } from 'react';
import { fetchPortfolioById } from '../services/api';
import { useParams } from 'react-router-dom';
import '../App.css';

const PortfolioDetails = () => {
    const { id } = useParams();
    const [portfolio, setPortfolio] = useState(null);

    useEffect(() => {
        const getPortfolio = async () => {
            try {
                const { data } = await fetchPortfolioById(id);
                setPortfolio(data);
            } catch (err) {
                console.error('Error fetching portfolio:', err);
            }
        };
        getPortfolio();
    }, [id]);

    return portfolio ? (
        <div>
            <h2>{portfolio.name}</h2>
            <p>Email: {portfolio.email}</p>
            <p>Skills: {portfolio.skills.join(', ')}</p>
            <p>Projects: {portfolio.projects.map((proj) => proj.title).join(', ')}</p>
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default PortfolioDetails;
