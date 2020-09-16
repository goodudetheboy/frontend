import React, { Component } from "react";
import Modal from "../components/modal";

class HostApplicationItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  toggleModal = e => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    let hostApp = this.props.item;
    return (
      <div>
        <div className="row" style={{border: 'solid', margin: '5px', padding: '10px'}}>
          <div className="col">
            <ul style={{marginBottom: "0"}}>
              <li><strong>Applicant name: </strong>{hostApp.user.fname} {hostApp.user.lname}</li>
              <li><strong>Company name: </strong>{hostApp.company.name}</li>
              <li><strong>Location: </strong>{hostApp.location.city}, {hostApp.company.location.country}</li>
            </ul>
          </div>
          <div className="col">
            <input className="btn btn-primary" type="button" value="Details" onClick={e => {this.toggleModal();}} />
          </div>
        </div>

        <Modal onClose={this.toggleModal} show={this.state.showModal} actions={
          <>
            <input className="btn btn-success" type="button" value="Accept" />
            <input className="btn btn-danger" type="button" value="Reject" />
          </>
        }>
          <h5>Page 1</h5>
          <ul>
            <li><strong>First name: </strong>{hostApp.user.fname}</li>
            <li><strong>Last name: </strong>{hostApp.user.lname}</li>
            <li><strong>Email: </strong>{hostApp.user.email}</li>
            <li><strong>Gender: </strong>{hostApp.gender}</li>
            <li><strong>Phone: </strong>{hostApp.phone}</li>
            <li><strong>Title: </strong>{hostApp.title}</li>
            <li><strong>Company name: </strong>{hostApp.company.name}</li>
            <li><strong>Company website: </strong>{hostApp.company.website}</li>
            <li><strong>Company location: </strong>{hostApp.company.location.street}, {hostApp.company.location.city}, {hostApp.company.location.state}, {hostApp.company.location.country}, {hostApp.company.location.zip}</li>
            <li><strong>Description: </strong>{hostApp.description}</li>
          </ul>

          <h5>Page 2</h5>
          <ul>
            <li><strong>Location: </strong>{hostApp.location.street}, {hostApp.location.city}, {hostApp.location.state}, {hostApp.location.country}, {hostApp.location.zip}</li>
          </ul>

          <h5>Page 3</h5>
          <ul>
            <li><strong>Offering 1: </strong>{hostApp.offering}</li>
            <li><strong>Offering 2: </strong>{hostApp.moreOffering}</li>
          </ul>

          <h5>Page 4</h5>
          <ul>
            <li><strong>Expertise: </strong>{hostApp.expertise}</li>
            <li><strong>Experiences: </strong>{hostApp.experiences.toString()}</li>
            <li><strong>Approval: </strong>{hostApp.approval.toString()}</li>
          </ul>

        </Modal>
      </div>
    );
  }
}

export default HostApplicationItem;