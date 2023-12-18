/** @type {import('next').NextConfig} */
const nextConfig = {}
const path = require('path');

module.exports = {
    compress: true,
    webpack: (config) => {
        config.resolve.alias['@components'] = path.join(__dirname, 'app/components');
        config.resolve.alias['@content'] = path.join(__dirname, 'app/components/content');
        config.resolve.alias['@functional'] = path.join(__dirname, 'app/components/functional');
        config.resolve.alias['@ui'] = path.join(__dirname, 'app/components/ui');
        config.resolve.alias['@css'] = path.join(__dirname, 'app/css');
        config.resolve.alias['@cv'] = path.join(__dirname, 'public/cv');
        config.resolve.alias['@logos'] = path.join(__dirname, 'public/logos');
        config.resolve.alias['@personal'] = path.join(__dirname, 'public/personal');
        config.resolve.alias['@university'] = path.join(__dirname, 'public/university');

        return config;
    }
}
