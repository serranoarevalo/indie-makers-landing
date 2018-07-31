import React, { ChangeEventHandler, FormEventHandler, FormEvent } from "react";

interface IState {
  email: string;
  isValid: boolean;
}

class Index extends React.Component<{}, IState> {
  state = {
    email: "",
    isValid: false
  };
  render() {
    const { email, isValid } = this.state;
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
          </form>
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
            }
            .emailSection span {
              font-size: 32px;
              margin-bottom: 30px;
            }
            .emailSection input {
              -webkit-appearance: none;
              border: none;
              border-bottom: 2px solid #95a5a6;
              font-size: 20px;
              min-width: 350px;
              padding-bottom: 5px;
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

  private _handleSubmit: FormEventHandler = (event: FormEvent) => {
    event.preventDefault();
  };
}

export default Index;
