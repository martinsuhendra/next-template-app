module.exports = {
  '*': ['prettier --write --ignore-unknown'],
  '**/*.{ts,tsx}': ['eslint --fix'],
}
