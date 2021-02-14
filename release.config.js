module.exports = {
    branches: [
        '+([0-9])?(.{+([0-9]),x}).x',
        'master',
        'next',
        'next-major',
        { name: 'beta', prerelease: true },
        { name: 'alpha', prerelease: true },
        { name: 'varun-personal/next', prerelease: true, channel: 'varun-personal-next' },
    ],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/changelog',
            {
                changelogFile: 'docs/CHANGELOG.md',
                changelogTitle:
                    '# Changelog\n\nAll notable changes to this project will be documented in this file. See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines.',
            },
        ],
        [
            '@semantic-release/npm',
            {
                // pkgRoot: 'dist',
                npmPublish: false,
                tarballDir: 'pack',
            },
        ],
        [
            '@semantic-release/github',
            {
                assets: ['*.tgz'],
            },
        ],
        [
            '@semantic-release/git',
            {
                message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
                assets: ['package.json', 'package-lock.json', 'docs/CHANGELOG.md'],
            },
        ],
    ],
};
