module.exports = {
  plugins: [
    'preset-lint-recommended',
    ['lint-list-item-indent', 'space'],
    'footnotes',
    'github',
    ['toc', {tight: true}],
    [
      'stringify',
      {
        bullet: '-',
        listItemIndent: 'one',
        fences: true,
        quote: "'",
        resourceLink: false,
        tightDefinitions: true,
      },
    ],
  ],
  settings: {},
};
