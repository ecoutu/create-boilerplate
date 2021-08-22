module.exports = {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'main',
    'next',
    {
      name: 'beta',
      prerelease: true,
    },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        prepare: true,
        npmPublish: true,
        tarballDir: '.',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: [
          {
            path: 'cogment-cogment-js-sdk-*.*.*.tgz',
          },
        ],
      },
    ],
    [
      '@semantic-release/exec',
      {
        publishCmd: 'bin/publish.sh',
      },
    ],
    [
      '@semantic-release/exec',
      {
        publishCmd: 'npm run build:docs:html',
      },
    ],
    [
      '@qiwi/semantic-release-gh-pages-plugin',
      {
        msg: 'docs: updated <%= nextRelease.gitTag %>',
        src: 'public',
        dst: '.',
        branch: 'gh-pages',
        repositoryUrl: 'https://github.com/cogment/cogment-js-sdk',
        pullTagsBranch: 'main',
      },
    ],
    '@semantic-release/git',
  ],
};
