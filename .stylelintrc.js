module.exports = {
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-rational-order',
  ],
  overrides: [
    {
      files: ['*.vue', '**/*.vue', '*.scss', '**/*.scss'],
      extends: ['stylelint-config-recommended-scss'],
    },
  ],
  rules: {
    'no-empty-source': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'string-quotes': 'single',
    // following PRECSS rules
    // - 1st prefixes: ly,bl,el,hp,un,js,is + _
    // - name prefix: _
    // - modifier prefix: __
    'selector-class-pattern': '^(ly|bl|el|hp|un|js|is)(_[a-z][a-zA-Z0-9]*){1,3}(__[a-z][a-zA-Z0-9]*)?$',
  },
  ignoreFiles: ['**/node_modules/**'],
}
