import { ADD_ARTICLE } from "../constants/action-types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  numberOfPairs: 15,
  cards: [
    {
      src: "animals-bunny.jpg",
    },
    {
      src: "animals-cat.jpg",
    },
    {
      src: "animals-cat-2.jpg",
    },
    {
      src: "animals-dog.jpg",
    },
    {
      src: "animals-dog-2.jpg",
    },
    {
      src: "animals-horse.jpg",
    },
    {
      src: "animals-horse-2.jpg",
    },
    {
      src: "architecture-london-towerbridge.jpg",
    },
    {
      src: "architecture-moscow-redsquare.jpg",
    },
    {
      src: "architecture-nederlanden.jpg",
    },
    {
      src: "architecture-newyork-publiclibrary.jpg",
    },
    {
      src: "architecture-paris-eiffeltower.jpg",
    },
    {
      src: "cities-tokyo-night.jpg",
    },
    {
      src: "flowers-reddahlia.jpg",
    },
    {
      src: "flowers-waterlillies.jpg",
    },
    {
      src: "flowers-windclock.jpg",
    },
    {
      src: "landscape-1.jpg",
    },
    {
      src: "landscape-2.jpg",
    },
    {
      src: "landscape-2.jpg",
    },
    {
      src: "landscape-netherlands-deurningen.jpg",
    },
    {
      src: "landscape-us-edgewood.jpg",
    },
  ],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload),
      });
    default:
      return state;
  }
}

export default rootReducer;
