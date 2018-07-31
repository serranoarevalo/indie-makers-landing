import axios from "axios";
import React, { ChangeEventHandler, FormEventHandler, FormEvent } from "react";

const makeUrl = email => {
  const MAILCHIMP_URL =
    "https://nomadcoders.us16.list-manage.com/subscribe/post-json?u=a99b43453db5050f1f26b2744&id=5b047896c0";
  return `${MAILCHIMP_URL}&EMAIL=${encodeURIComponent(email)}`;
};

interface IState {
  email: string;
  isValid: boolean;
  submitted: boolean;
}

class Index extends React.Component<{}, IState> {
  state = {
    email: "",
    isValid: false,
    submitted: false
  };

  render() {
    const { email, isValid, submitted } = this.state;
    return (
      <div>
        <h2>Build products, together.</h2>
        <h3>
          Join a community of people building awesome products and learning from
          each other.
        </h3>
        <div className="emailSection">
          <span>Sign up for the waiting list:</span>
          <form onSubmit={this._handleSubmit}>
            <input
              value={email}
              onChange={this._handleInputChange}
              placeholder={"Email"}
              className={isValid ? "valid" : "invalid"}
              type={"email"}
              required={true}
            />
            <input type={"submit"} value="Go" />
          </form>
          {submitted && <p className="text">You're in!</p>}
        </div>
        <style jsx>
          {`
            div {
              height: 100vh;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              width: 75%;
            }
            @media screen and (max-width: 820px) {
              div {
                width: 100%;
              }
            }
            h2,
            h3 {
              background-color: #f2fefe;
              width: auto;
              display: inline;
              font-weight: 400;
            }
            h2 {
              margin-bottom: 10px;
              display: inline;
              font-weight: 600;
            }
            h3 {
              font-size: 40px;
              line-height: 1.5;
            }
            .emailSection {
              margin-top: 50px;
              width: 100%;
            }
            .emailSection span {
              font-size: 32px;
              margin-bottom: 50px;
            }
            form {
              width: 100%;
            }
            .emailSection input {
              -webkit-appearance: none;
              border: none;
              border-bottom: 2px solid #95a5a6;
              font-size: 20px;
              min-width: 350px;
              padding: 10px 0;
              font-size: 25px;
              transition: border-color 0.2s linear;
            }
            .emailSection input:focus,
            .emailSection input:active {
              outline: none;
            }
            .invalid:focus {
              border-color: #fef48b !important;
            }
            .valid:focus {
              border-color: #2ecc71 !important;
            }
            .emailSection input[type="submit"] {
              border: 2px solid #95a5a6;
              cursor: pointer;
            }
            .emailSection input[type="submit"].invalid {
              color: #95a5a6;
              cursor: not-allowed;
            }
            .invalid:focus ~ input[type="submit"] {
              border-color: #fef48b !important;
            }
            .valid:focus ~ input[type="submit"] {
              border-color: #2ecc71;
            }
            .text {
              color: #2ecc71;
              margin-top: 20px;
              display: block;
              font-sise: 25px;
            }
            @media screen and (max-width: 699px) {
              input[type="email"] {
                display: block;
                margin-bottom: 20px;
              }
              input {
                width: 100%;
                min-width: 100% !important;
              }
            }
          `}
        </style>
      </div>
    );
  }

  private _handleInputChange: ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { value }
    } = event;
    const isValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    );
    this.setState({
      email: value,
      isValid
    });
  };

  private _handleSubmit: FormEventHandler = async (event: FormEvent) => {
    event.preventDefault();
    const { isValid, email } = this.state;
    if (isValid) {
      try {
        await axios(makeUrl(email));
      } catch (error) {
        console.log(error);
      }
      this.setState({
        submitted: true
      });
    }
    return;
  };
}

export default Index;
