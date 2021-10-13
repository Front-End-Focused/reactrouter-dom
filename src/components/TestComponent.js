import React from "react";

class TestComponent extends React.Component {
  state = {
    count: 2,
  };

  render() {
    return (
      <div>
        <h1>{this.props.flag ? "Test component" : "Demo component"}</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
          tenetur? Corporis, fugit excepturi quaerat expedita facere, mollitia
          maiores ducimus, corrupti possimus ipsum omnis. Veritatis eum, ad
          dolorem quas facere dolores.
        </p>
        {this.state.count === 2 ? (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
            tenetur? Corporis, fugit excepturi quaerat expedita facere, mollitia
            maiores ducimus, corrupti possimus ipsum omnis. Veritatis eum, ad
            dolorem quas facere dolores.
          </p>
        ) : null}
      </div>
    );
  }
}

export default TestComponent;
