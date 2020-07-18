import React from "react";
import { wrapper } from "../redux/index";
import "../antd.css";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp);
