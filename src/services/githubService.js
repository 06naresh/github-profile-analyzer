const axios = require('axios');

const GITHUB_API_BASE = 'https://api.github.com';

async function fetchUser(username) {
    try {
        const response = await axios.get(`${GITHUB_API_BASE}/users/${username}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error.message);
        throw error;
    }
}

async function fetchRepos(username) {
    try {
        const response = await axios.get(`${GITHUB_API_BASE}/users/${username}/repos?per_page=100`);
        return response.data;
    } catch (error) {
        console.error('Error fetching repos:', error.message);
        throw error;
    }
}

function analyzeRepos(repos) {
    let totalStars = 0;
    let mostStarredRepo = null;

    repos.forEach(repo => {
        totalStars += repo.stargazers_count;
        if (!mostStarredRepo || repo.stargazers_count > mostStarredRepo.stargazers_count) {
            mostStarredRepo = repo;
        }
    });

    return {
        totalStars,
        mostStarredRepo: mostStarredRepo ? mostStarredRepo.name : null,
    };
}

module.exports = { fetchUser, fetchRepos, analyzeRepos };
