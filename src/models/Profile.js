const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Profile = sequelize.define('Profile', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    github_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    bio: {
        type: DataTypes.TEXT,
    },
    company: {
        type: DataTypes.STRING,
    },
    location: {
        type: DataTypes.STRING,
    },
    public_repos: {
        type: DataTypes.INTEGER,
    },
    public_gists: {
        type: DataTypes.INTEGER,
    },
    followers: {
        type: DataTypes.INTEGER,
    },
    following: {
        type: DataTypes.INTEGER,
    },
    account_created_at: {
        type: DataTypes.DATE,
    },
    total_stars: {
        type: DataTypes.INTEGER,
    },
    most_starred_repo: {
        type: DataTypes.STRING,
    },
    profile_score: {
        type: DataTypes.INTEGER,
    },
    analyzed_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: false,
    tableName: 'profiles',
});

module.exports = Profile;
