const config = {
  '*': [() => 'npm run lint:format'],
  '*': [() => 'npm run lint:js -w backend']
};

export default config;
