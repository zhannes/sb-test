import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      { file: "dist/index.es.js", format: "es", exports: "named" },
    ],
    plugins: [
      external(),
      babel({
        exclude: "node_modules/**",
        babelHelpers: "runtime",
      }),
      resolve(),
      commonjs(),
    ],
    external: [
      "react",
      "react-dom",
      "@emotion/react",
      "@emotion/styled",
      "@mui/material",
    ],
  },
];
