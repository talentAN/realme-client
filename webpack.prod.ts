import merge from "webpack-merge";
import common from "./webpack.common";
import webpack from "webpack";

const config: webpack.Configuration = merge(common, {
  mode: "production",
  devtool: "source-map",
});

export default config;
