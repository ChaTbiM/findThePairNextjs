import React from "react";
import { connect } from "react-redux";
import { addArticle } from "../redux/actions/index";

function App(props) {
  return (
    <div>
      <button onClick={props.addArticle}>add Article</button>
      <div>{props.articles[1].title}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  articles: state.articles,
});

const mapDispatchToProps = {
  addArticle,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
