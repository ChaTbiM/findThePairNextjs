import React from "react";
import { connect } from "react-redux";
import {
  changeNumberOfPairs,
  changeWidth,
  resetGame,
  resetCards,
  shuffleCards,
  limitCards,
  duplicateCards,
  flipAllCards,
} from "../redux/actions/index";
import { Menu, Button, Dropdown } from "antd";
import styled from "styled-components";

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

function gameStatus(props) {
  const tryString = props.numberOfAttempts === 1 ? "try" : "tries";
  if (props.numberOfAttempts > 0) {
    return (
      <StyledStatus>
        You found {props.numberOfFoundPairs} out of {props.numberOfPairs} pairs
        with
        {props.numberOfAttempts} {tryString}.
      </StyledStatus>
    );
  } else {
    return <StyledStatus>find All pairs !</StyledStatus>;
  }
}

function Control(props) {
  return (
    <ControlContainer>
      <Dropdown overlay={menu(props)} placement="bottomCenter">
        <Button>{props.numberOfPairs} pairs</Button>
      </Dropdown>
      {gameStatus(props)}

      <Button
        style={{ display: "block", margin: "20px auto" }}
        onClick={() => {
          props.resetGame();
          props.resetCards();
          props.shuffleCards();
          props.limitCards();
          props.duplicateCards();
          props.shuffleCards();

          setTimeout(() => {
            props.flipAllCards();
          }, 1500);
        }}
      >
        Restart Game
      </Button>
    </ControlContainer>
  );
}

const mapStateToProps = (state) => ({
  numberOfPairs: state.numberOfPairs,
  numberOfFoundPairs: state.numberOfFoundPairs,
  numberOfAttempts: state.numberOfAttempts,
});

const mapDispatchToProps = (dispatch) => ({
  changeNumberOfPairs: (number) => dispatch(changeNumberOfPairs(number)),
  changeWidth: (width) => dispatch(changeWidth(width)),
  resetGame: () => dispatch(resetGame()),
  resetCards: () => dispatch(resetCards()),
  shuffleCards: () => dispatch(shuffleCards()),
  duplicateCards: () => dispatch(duplicateCards()),
  limitCards: () => dispatch(limitCards()),
  flipAllCards: () => dispatch(flipAllCards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Control);
const ControlContainer = styled.div`
  position: relative;
  top: 25%;
  transform: translateY(-25%);
`;

const StyledStatus = styled.p`
  display: block;
  margin: 20px auto;
  padding: 0 1rem;
`;
