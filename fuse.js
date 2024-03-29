const {
  FuseBox,
  EnvPlugin,
  SVGPlugin,
  SassPlugin,
  CSSPlugin,
  QuantumPlugin,
  WebIndexPlugin,
  Sparky,
} = require('fuse-box');

let fuse, app, vendor, isProduction;

Sparky.task('config', () => {
  fuse = new FuseBox({
    homeDir: 'src/',
    sourceMaps: !isProduction,
    hash: isProduction,
    target: 'browser',
    output: 'dist/$name.js',
    useTypescriptCompiler: true,
    experimentalFeatures: true,
    plugins: [
      EnvPlugin({ NODE_ENV: isProduction ? 'production' : 'development' }),
      SVGPlugin(),
      [SassPlugin(),CSSPlugin()],
      CSSPlugin(),
      WebIndexPlugin({
        template: 'src/index.html',
        path: './',
      }),
      isProduction &&
        QuantumPlugin({
          treeshake: true,
          uglify: true,
        }),
    ],
  });
  // vendor
  vendor = fuse.bundle('vendor').instructions('~ index.js');

  // bundle app
  app = fuse.bundle('app').instructions('> [index.js]');
});

Sparky.task('default', ['clean', 'copy', 'config'], () => {
  fuse.dev();
  app.watch().hmr();
  return fuse.run();
});

Sparky.task('copy', () => Sparky.src('./icons/*.svg', { base: './src' }).dest('./dist'));

Sparky.task('clean', () => Sparky.src('dist/').clean('dist/'));
Sparky.task('prod-env', ['clean', 'copy'], () => {
  isProduction = true;
});
Sparky.task('dist', ['prod-env', 'config'], () => {
  // comment out to prevent dev server from running
  // fuse.dev();
  return fuse.run();
});
