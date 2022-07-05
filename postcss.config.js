module.exports = {
  plugins: {
    "postcss-import": {
      path: "./styles",
    },
    "postcss-nested-ancestors": {},
    "postcss-hexrgba": {},
    "postcss-utilities": {},
    precss: {},
    "postcss-preset-env": {
      stage: 0,
      preserve: true,
      importFrom: "./styles/variables.css",
      autoprefixer: {
        grid: true,
      },
      features: {
        "nesting-rules": false,
        "custom-properties": false,
      },
    },
    rfs: {
        twoDimensional: false,
        baseValue: 16,
        unit: 'rem',
        breakpoint: 1724,
        breakpointUnit: 'px',
        factor: 3,
        class: false,
        unitPrecision: 6,
        safariIframeResizeBugFix: false,
        remValue: 10
    },
    cssnano: {},
  },
};
