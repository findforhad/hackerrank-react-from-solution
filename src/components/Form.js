import React, { Component } from "react";
import { validateEmail, validateNumber, validateUrl } from "./utils/validation";
import Message from "./Message";

class Form extends Component {
  state = {
    isEmailValid: false,
    isNameValid: false,
    isPhoneValid: false,
    isUrlValid: false,
    name: "",
    email: "",
    phone: "",
    url: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { name, email, phone, url } = this.state;
    //Checking the name
    if (!name === "" || !name.length < 3 || !name.length > 30) {
      this.setState({ isNameValid: true });
    }

    //Checking the email
    if (validateEmail(email)) {
      this.setState({ isEmailValid: true });
    }

    if (validateNumber(phone)) {
      this.setState({ isPhoneValid: true });
    }

    if (validateUrl(url)) {
      this.setState({ isUrlValid: true });
    }
  };

  render() {
    const { isEmailValid, isNameValid, isPhoneValid, isUrlValid } = this.state;

    let formStatus;
    if (isEmailValid && isNameValid && isPhoneValid && isUrlValid) {
      formStatus = "Form is Complete";
    } else {
      formStatus = "Form is Incomplete";
    }

    return (
      <div className="row">
        <h1 className="text-center">Form Validation</h1>
        <form>
          <h5>Name:</h5>
          <input
            name="name"
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <h5>Email:</h5>
          <input
            name="email"
            type="text"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <h5>Phone:</h5>
          <input
            name="phone"
            type="text"
            onChange={this.handleChange}
            value={this.state.phone}
          />
          <h5>Blog URL:</h5>
          <input
            name="url"
            type="text"
            onChange={this.handleChange}
            value={this.state.url}
          />
          <div className="small-6 small-centered text-center columns">
            <a
              onClick={this.handleSubmit}
              href="#!"
              className="button success expand round text-center"
            >
              Verify
            </a>
          </div>
          {<Message message={formStatus} />}
        </form>
      </div>
    );
  }
}

export default Form;
