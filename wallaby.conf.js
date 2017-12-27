module.exports = function(wallaby) {
  return {
    files: [
      'src/app/**/*.js',
      { pattern: '**/*.unit.js', ignore: true },
    ],
    tests: ['**/*.unit.js'],
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },
    testFramework: 'jest',
    env: {
      type: 'node',
    },
  };
};
