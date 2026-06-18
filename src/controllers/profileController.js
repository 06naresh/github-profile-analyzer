const Profile = require('../models/Profile');
const { fetchUser, fetchRepos, analyzeRepos } = require('../services/githubService');

// Analyze and insert/update a GitHub profile
async function analyzeProfile(req, res) {
    const { username } = req.params;

    try {
        const user = await fetchUser(username);
        const repos = await fetchRepos(username);
        const { totalStars, mostStarredRepo } = analyzeRepos(repos);

        const profileData = {
            github_id: user.id,
            username: user.login,
            name: user.name,
            bio: user.bio,
            company: user.company,
            location: user.location,
            public_repos: user.public_repos,
            public_gists: user.public_gists,
            followers: user.followers,
            following: user.following,
            account_created_at: user.created_at,
            total_stars: totalStars,
            most_starred_repo: mostStarredRepo,
            profile_score: user.followers + totalStars, // simple scoring logic
        };

        const profile = await Profile.upsert(profileData);
        res.json(profile);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to analyze profile' });
    }
}

// Fetch all stored profiles
async function getAllProfiles(req, res) {
    try {
        const profiles = await Profile.findAll();
        res.json(profiles);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch profiles' });
    }
}

// Fetch a single profile by username
async function getProfileByUsername(req, res) {
    const { username } = req.params;
    try {
        const profile = await Profile.findOne({ where: { username } });
        if (!profile) {
            return res.status(404).json({ error: 'Profile not found' });
        }
        res.json(profile);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch profile' });
    }
}

module.exports = { analyzeProfile, getAllProfiles, getProfileByUsername };
