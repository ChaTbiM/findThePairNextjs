import {
  CHANGE_NUMBER_OF_PAIRS,
  SHUFFLE,
  DUPLICATE_CARDS,
  RESET_CARDS,
  START_GAME,
  FLIP_ALL_CARDS,
  FLIP_CARD,
  CHANGE_WIDTH,
  RESET_GAME,
  LIMIT_CARDS,
} from "../constants/action-types";

export function changeNumberOfPairs(payload) {
  return { type: CHANGE_NUMBER_OF_PAIRS, payload };
}

export function startGame(paylaod) {
  return { type: START_GAME, payload };
}

export function resetGame(payload) {
  return { type: RESET_GAME, payload };
}

export function shuffleCards(payload) {
  return { type: SHUFFLE, payload };
}

export function limitCards(payload) {
  return { type: LIMIT_CARDS, payload };
}

export function duplicateCards(payload) {
  return { type: DUPLICATE_CARDS, payload };
}

export function resetCards(payload) {
  return { type: RESET_CARDS, payload };
}

export function flipAllCards(payload) {
  return { type: FLIP_ALL_CARDS, payload };
}

export function flipCard(payload) {
  return { type: FLIP_CARD, payload };
}
export function changeWidth(payload) {
  return { type: CHANGE_WIDTH, payload };
}

// shuffle cards
// limit to the number of pairs
//    (limit the number of loops , dont delete)
// mirror cards
// shuffle cards
