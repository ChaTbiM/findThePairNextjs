import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import styled from "styled-components";
import Control from "../components/Control";
import Grid from "../components/Grid";

import { LIMIT_CARDS } from "../redux/constants/action-types";
const { Content, Sider } = Layout;

function App(props) {
  return (
    <Layout>
      {/* <button onClick={() => props.changeNumberOfPairs(90)}>change</button>
      <div>number of pairs : {props.numberOfPairs}</div>
      <Button type="primary">Button</Button> */}

      <Content>
        <Grid />
      </Content>
      <Sider theme="light">
        <Control />
      </Sider>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  cards: state.cards,
  numberOfPairs: state.numberOfPairs,
});

const mapDispatchToProps = (dispatch) => ({
  limitCards: () => dispatch({ type: LIMIT_CARDS }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
