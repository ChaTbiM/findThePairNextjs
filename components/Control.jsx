import React from "react";
import { connect } from "react-redux";
import { changeNumberOfPairs, changeWidth } from "../redux/actions/index";
import { Menu, Button, Dropdown } from "antd";
import styled from "styled-components";

const pairs = [6, 8, 10, 12, 15, 18, 21];

const menu = (props) => {
  return (
    <Menu>
      <Menu.Item
        onClick={() => {
          props.changeWidth(127);
          props.changeNumberOfPairs(6);
        }}
      >
        6 pairs
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          props.changeWidth(127);
          props.changeNumberOfPairs(8);
        }}
      >
        8 pairs
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          props.changeWidth(102);
          props.changeNumberOfPairs(10);
        }}
      >
        10 pairs
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          props.changeWidth(85.33);
          props.changeNumberOfPairs(12);
        }}
      >
        12 pairs
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          props.changeWidth(85.33);
          props.changeNumberOfPairs(15);
        }}
      >
        15 pairs
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          props.changeWidth(85.33);
          props.changeNumberOfPairs(18);
        }}
      >
        18 pairs
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          props.changeWidth(73.42);

          props.changeNumberOfPairs(21);
        }}
      >
        21 pairs
      </Menu.Item>
    </Menu>
  );
};
function Control(props) {
  return (
    <ControlContainer>
      <Dropdown overlay={menu(props)} placement="bottomCenter">
        <Button>{props.numberOfPairs} pairs</Button>
      </Dropdown>
      <StyledStatus>You found 0 out of 8 pairs with 1 try.</StyledStatus>
    </ControlContainer>
  );
}

const mapStateToProps = (state) => ({
  numberOfPairs: state.numberOfPairs,
});

const mapDispatchToProps = (dispatch) => ({
  changeNumberOfPairs: (number) => dispatch(changeNumberOfPairs(number)),
  changeWidth: (width) => dispatch(changeWidth(width)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Control);
const ControlContainer = styled.div`
  position: relative;
  top: 25%;
  transform: translateY(-25%);
`;

const StyledStatus = styled.p`
  display: inline-block;
  margin: 10px auto;
  padding: 0 1rem;
`;
