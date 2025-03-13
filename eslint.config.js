import config from '@ofk/eslint-config-recommend';

export default config({
  ignores: ['dist'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
});
