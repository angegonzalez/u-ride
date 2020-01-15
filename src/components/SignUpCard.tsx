import * as React from "react";
import "../styles/SignUpCard.css";
import * as firebase from "firebase/app";

interface IState {
  email: string;
  password: string;
  verifyPassword: string;
  emailErrorMessage: boolean;
  passwordErrorMessage: boolean;
  passwordVerifyErrorMessage: boolean;
  isCompleted: boolean;
}

export default class SignUpCard extends React.Component<{}, IState> {
  state = {
    email: "",
    password: "",
    verifyPassword: "",
    emailErrorMessage: false,
    passwordErrorMessage: false,
    passwordVerifyErrorMessage: false,
    isCompleted: false
  };
  doSignUp = () => {
    if (this.state.email.indexOf("@") !== -1) {
      this.setState({ emailErrorMessage: false });
      if (this.state.password.length > 6) {
        this.setState({ passwordErrorMessage: false });
        if (
          this.state.password ===
          this.state.verifyPassword
        ) {
          this.setState({passwordVerifyErrorMessage: false});
          this.setState({isCompleted: true});
          firebase
            .auth()
            .createUserWithEmailAndPassword(
              this.state.email,
              this.state.password
            )
            .catch(function(error) {
              var errorMessage = error.message;
              alert(errorMessage);
            });
        } else {
          this.setState({ passwordVerifyErrorMessage: true });
        }
      } else {
        this.setState({ passwordErrorMessage: true });
      }
    } else {
      this.setState({ emailErrorMessage: true });
    }
  };
  render() {
    return (
      
      !this.state.isCompleted ?
      <div className="signup-card">
        <form>
          <div className="form-group">
            <label htmlFor="txtEmailSu" style={{ color: "white" }}>
              Correo electrónico
            </label>
            <input
              className="form-control-su"
              id="txtEmailSu"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            {!this.state.emailErrorMessage ? (
              <small
                id="emailHelp"
                className="form-text"
                style={{ color: "white" }}
              >
                No revelaremos tus datos a nadie
              </small>
            ) : (
              <small
                id="emailHelp"
                className="form-text"
                style={{ color: "white" }}
              >
                Revisa la direccion de tu correo electronico
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="txtPasswordSu" style={{ color: "white" }}>
              Contraseña
            </label>
            <input
              type="password"
              className="form-control-su"
              id="txtPasswordSu"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
            {this.state.passwordErrorMessage ? (
              <small
                id="emailHelp"
                className="form-text"
                style={{ color: "white" }}
              >
                La contraseña debe tener mas de 6 caracteres
              </small>
            ) : (
              <div />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="txtPasswordVerSu" style={{ color: "white" }}>
              Verificar contraseña
            </label>
            <input
              type="password"
              className="form-control-su"
              id="txtPasswordVerSu"
              value= {this.state.verifyPassword}
              onChange= { e=> this.setState({verifyPassword: e.target.value})}
            />

            {this.state.passwordVerifyErrorMessage ? (
              <small
                id="emailHelp"
                className="form-text"
                style={{ color: "white" }}
              >
                Las contraseñas deben coincidir
              </small>
            ) : (
              <div />
            )}
          </div>
          <button
            type="button"
            className="btn btn-outline-light"
            onClick={this.doSignUp}
          >
            Registrate
          </button>
        </form>
      </div>
      : 
      <div className="signup-card">
          <div className="signup-successful">
            <h4 className= "font-weight-lighter" style={{color: "white"}}>¡Registro exitoso!</h4>
          </div>
      </div>
    );
  }
}
