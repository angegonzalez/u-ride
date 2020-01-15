import * as React from "react";
import { IState } from "./LoginCard";
import "../styles/SignUpCard.css"

export default class SignUpCard extends React.Component<{},IState>
{
    state= 
    {
        email: '',
        password: ''
    }
    doSignUp()
    {
        console.log('developing---')
    }
    render()
    {
        return(
            <div className="signup-card">
            <form>
                <div className="form-group">
                  <label htmlFor="txtEmailSu" style={{color: "white"}}>Email address</label>
                  <input
                    className="form-control-su"
                    id="txtEmailSu"
                    aria-describedby="emailHelp"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                  <small id="emailHelp" className="form-text " style={{color: "white"}}>
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="txtPasswordSu" style={{color: "white"}}>Password</label>
                  <input
                    type="password"
                    className="form-control-su"
                    id="txtPasswordSu"
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-outline-light" 
                  onClick= {this.doSignUp}
                >
                  SignUp
                </button>
              </form>
        </div>
        );
    }
}