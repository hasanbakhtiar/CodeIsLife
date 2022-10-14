import React, { Component } from "react";
import img1 from "../img/1984.jpg";
import img2 from "../img/sherlock-holmes.jpg";

class Card extends Component {
  render() {
    return (
      <div className={`card ${this.props.tagAttr}`} style={{ width: "18rem" }}>
        <img src={this.props.photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.author}</p>
          <p>{this.props.pageLenght}</p>
        </div>
      </div>
    );
  }
}

class BookApp extends Component {
  constructor() {
    super();
    this.state = {
      bookimg: img1,
      booktitle: "1984",
      bookauthor: "George Orwell",
      bookPage: 302,
      tagClassName: "a",
    };
  }

  render() {
    return (
      <div className="mt-5 container">
        <Card
          photo={this.state.bookimg}
          title={this.state.booktitle}
          author={this.state.bookauthor}
          pageLenght={this.state.bookPage}
          tagAttr={this.state.tagClassName}
        />
        <button
          className="btn btn-primary mt-3"
          onClick={() => {
            this.setState({
              bookimg: img2,
              booktitle: "Sherlock Holmes",
              bookauthor: "Conan Dolye",
              bookPage: 700,
              tagClassName: "b",
            });
          }}
        >
          next book
        </button>
      </div>
    );
  }
}

export default BookApp;
