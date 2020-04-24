// import React from "./node_modules/reacte_modules/react";
import React, { Component } from "react";

class Page4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    return ;
  }
  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <h3>Expertise</h3>
            <div className="row container">
              <p>
                We love who you are as a person (a.k.a: no matter what skill
                sets you have, we at Yolo will always love you). Please only
                select the skill sets that you are able to confidently show
                during your job shadow experience
              </p>
            </div>

            <div className="container-fluid">
              <div className="row">
                <textarea
                  name="expertise"
                  placeholder="What expertise do you have? List as many as possible. Examples can include: Artificial Intelligence, Geographic Information System, Woodmaking."
                  value={this.props.host.expertise}
                  onChange={this.props.handleInputChange}
                />
              </div>
            </div>
            <div className="row mt-5 mb-4">
              <div className="col"></div>
              <div className="col">
                <input
                  className="btn btn-danger"
                  type="submit"
                  value="Next Step"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Page4;