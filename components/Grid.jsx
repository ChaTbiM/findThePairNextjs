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
    <GridContainer>
      {props.cards.map((el, index) => {
        if (el.isActive) {
          return (
            <ImageWrapper width={props.width} key={"div" + index}>
              <img key={el.src + index} data-index={el.index} src={el.src} />
            </ImageWrapper>
          );
        } else {
          return (
            <ImageWrapper
              width={props.width}
              key={"div" + index}
              onClick={() => {
                if (!props.matching) {
                  props.flipCard(el.index);
                }
              }}
            />
          );
        }
      })}
    </GridContainer>
  );
}

const mapStateToProps = (state) => ({
  numberOfPairs: state.numberOfPairs,
  cards: state.cards,
  clickCounter: state.clickCounter,
  matching: state.matching,
  width: state.width,
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
const GridContainer = styled.div`
  width: 520px;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
  padding-top: 5%;
`;

const ImageWrapper = styled.div`
  display: inline-block;
  margin-right: 1px;
  margin-top: 2px;
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.width + "px"};
  background-color: #bbb;

  overflow: auto;

  img {
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.width + "px"};
    padding: 1px;
  }
`;

ImageWrapper.defaultProps = {
  width: 125,
};
