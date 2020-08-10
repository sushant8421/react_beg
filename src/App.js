import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    content: [],
  };

  handleRemove = (index) => {
    const { content } = this.state;
    this.setState({
      content: content.filter((data, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (content) => {
    this.setState({ content: [...this.state.content, content] });
  };

  render() {
    const { content } = this.state;
    return (
      <div className="container">
        <Table contentData={content} handleRemove={this.handleRemove} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
