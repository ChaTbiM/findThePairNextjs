import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  LIMIT_CARDS,
  SHUFFLE,
  DUPLICATE_CARDS,
  RESET_CARDS,
  FLIP_ALL_CARDS,
  FLIP_CARD,
} from "../redux/constants/action-types";

import { flipCard } from "../redux/actions/index";

function Grid(props) {
  useEffect(() => {
    props.resetCards();
    props.shuffleCards();
    props.limitCards();
    props.duplicateCards();
    props.shuffleCards();

    setTimeout(() => {
      props.flipAllCards();
    }, 1500);
  }, [props.numberOfPairs]);

  useEffect(() => {
    console.log("here", props.matching);
    if (props.matching) {
      setTimeout(() => {
        props.flipAllCards();
      }, 1000);
    }
  }, [props.matching]);

  return (
    //   grid Item
    <gridContainer>
      {props.cards.map((el, index) => {
        if (el.isActive) {
          return (
            <div
              key={"div" + index}
              style={{
                margin: " 1px",
                float: "left",
                display: "inline-block",
                height: "125px",
                width: "125px",
                backgroundColor: "#bbb",
              }}
            >
              <img key={el.src + index} data-index={el.index} src={el.src} />
            </div>
          );
        } else {
          return (
            <div
              key={"div" + index}
              onClick={() => props.flipCard(el.index)}
              style={{
                margin: " 1px",
                display: "inline-block",
                float: "left",
                height: "125px",
                width: "125px",
                backgroundColor: "#bbb",
              }}
            ></div>
          );
        }
      })}
    </gridContainer>
  );
}

const mapStateToProps = (state) => ({
  numberOfPairs: state.numberOfPairs,
  cards: state.cards,
  clickCounter: state.clickCounter,
  matching: state.matching,
});

const mapDispatchToProps = (dispatch) => ({
  shuffleCards: () => dispatch({ type: SHUFFLE }),
  limitCards: () => dispatch({ type: LIMIT_CARDS }),
  duplicateCards: () => dispatch({ type: DUPLICATE_CARDS }),
  resetCards: () => dispatch({ type: RESET_CARDS }),
  flipAllCards: () => dispatch({ type: FLIP_ALL_CARDS }),
  flipCard: (index) => dispatch(flipCard(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);

// ---------------------------------
const gridContainer = styled.div`
  width: 520px;
  height: 520px;
  margin: 5px auto;
`;
