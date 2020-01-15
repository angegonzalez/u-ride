import * as React from "react";
import "../styles/LoginCard.css";
import SignUpCard from "./SignUpCard";

export interface IState
{
    email: string;
    password: string;
}

export default class LoginCard extends React.Component<{handleSignUpButton: ()=>void},IState>
{
    state= {
        email: '',
        password: ''
    }

    doLogIn()
    {
        console.log('Developing...')
    }

    doSignUp()
    {
        return <SignUpCard/>
    }

    render()
    {
        return(
            <div className="login-card-background">
                <div className="login-card">
                <form>
                  <div className="form-group">
                    <label htmlFor="txtEmail">Correo electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      id="txtEmail"
                      aria-describedby="emailHelp"
                      value={this.state.email}
                      onChange={e => this.setState({ email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="txtPassword">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      id="txtPassword"
                      value={this.state.password}
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={this.doLogIn}
                  >
                    Ingresa
                  </button>
                  <br></br>
                  <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={this.props.handleSignUpButton}
                  >
                    Registrate
                  </button>
                </form>
            </div>
            </div>
            
        );
    }
}