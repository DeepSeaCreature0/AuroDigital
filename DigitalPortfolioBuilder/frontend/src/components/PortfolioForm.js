import React, { useState } from 'react';
import { createPortfolio } from '../services/api';
import '../App.css';

const PortfolioForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        skills: '',
        projects: '',
        certifications: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const portfolioData = {
            ...formData,
            skills: formData.skills.split(',').map((skill) => skill.trim()),
            projects: formData.projects.split(',').map((proj) => ({ title: proj.trim() })),
            certifications: formData.certifications.split(',').map((cert) => ({ title: cert.trim() })),
        };

        try {
            await createPortfolio(portfolioData);
            alert('Portfolio created successfully!');
            setFormData({ name: '', email: '', skills: '', projects: '', certifications: '' });
        } catch (err) {
            console.error('Error creating portfolio:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Portfolio</h2>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="skills" placeholder="Skills (comma-separated)" value={formData.skills} onChange={handleChange} />
            <input type="text" name="projects" placeholder="Projects (comma-separated)" value={formData.projects} onChange={handleChange} />
            <input type="text" name="certifications" placeholder="Certifications (comma-separated)" value={formData.certifications} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default PortfolioForm;
