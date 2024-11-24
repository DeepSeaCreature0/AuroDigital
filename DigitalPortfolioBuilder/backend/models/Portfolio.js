import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    skills: {
        type: [String], // Array of skills
        required: true,
    },
    projects: [
        {
            title: String,
            description: String,
            link: String,
        },
    ],
    certifications: [
        {
            title: String,
            issuer: String,
            link: String,
        },
    ],
    multimedia: [
        {
            type: String,
            url: String,
        },
    ],
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

export default Portfolio;
