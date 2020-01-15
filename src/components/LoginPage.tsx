import * as React from "react";
import { InfoCard } from "./InfoCard";
import LoginCard from "./LoginCard";
import SignUpCard from "./SignUpCard";

interface IState
{
    isSignUpClicked: boolean;
}

export default class LoginPage extends React.Component<{},IState>
{
    state={ isSignUpClicked:  false};
    handleSignUpClick = () =>
    {
        this.setState({isSignUpClicked: true});
    }
    render()
    {
        return(
            <div className="container-fluid">
                <div className="row" style={{marginTop: "3rem"}}>
                    <div className="col-lg-1"/>
                    <div className="col-lg-4">
                        <LoginCard handleSignUpButton={this.handleSignUpClick}></LoginCard>
                        { this.state.isSignUpClicked ? <SignUpCard></SignUpCard>: false}
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                        <InfoCard/>
                        <InfoCard/>
                        <InfoCard/>
                        <InfoCard/>
                        <InfoCard/>
                        <InfoCard/>
                    </div>
                </div>
            </div>
        );
    }
}