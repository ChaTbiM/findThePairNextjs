import React from "react";
import { connect } from "react-redux";
import { changeNumberOfPairs } from "../redux/actions/index";
import { Menu, Button, Dropdown } from "antd";

const pairs = [6, 8, 10, 12, 15, 18, 21];

const menu = (props) => {
  return (
    <Menu>
      <Menu.Item onClick={() => props.changeNumberOfPairs(6)}>
        6 pairs
      </Menu.Item>
      <Menu.Item onClick={() => props.changeNumberOfPairs(8)}>
        8 pairs
      </Menu.Item>
      <Menu.Item onClick={() => props.changeNumberOfPairs(10)}>
        10 pairs
      </Menu.Item>
      <Menu.Item onClick={() => props.changeNumberOfPairs(12)}>
        12 pairs
      </Menu.Item>
      <Menu.Item onClick={() => props.changeNumberOfPairs(15)}>
        15 pairs
      </Menu.Item>
      <Menu.Item onClick={() => props.changeNumberOfPairs(18)}>
        18 pairs
      </Menu.Item>
      <Menu.Item onClick={() => props.changeNumberOfPairs(21)}>
        21 pairs
      </Menu.Item>
    </Menu>
  );
};
function Control(props) {
  return (
    <Dropdown overlay={menu(props)} placement="bottomCenter">
      <Button>{props.numberOfPairs} pairs</Button>
    </Dropdown>
  );
}

const mapStateToProps = (state) => ({
  numberOfPairs: state.numberOfPairs,
});

const mapDispatchToProps = (dispatch) => ({
  changeNumberOfPairs: (number) => dispatch(changeNumberOfPairs(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Control);
