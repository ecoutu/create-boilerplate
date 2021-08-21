module.exports = {
  '*.{ts,js,css,md,json,yaml,yml}': 'npm run lint:prettier:check',
  '*.md': 'npm run lint:remark:check',
  '*.{ts,js,json}': 'npm run lint:eslint:check',
  '*!(.d).ts': 'npm run test:jest -- --findRelatedTests --passWithNoTests',
};
