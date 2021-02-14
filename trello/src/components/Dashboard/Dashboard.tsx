import * as React from 'react';
import { RouteChildrenProps } from 'react-router';

interface DashBoardProps extends RouteChildrenProps {
    token?: string;
}

export class DashBoard extends React.Component<DashBoardProps> {
    handleLogOut = () => {
        this.props.history.goBack()
    }
    render() {
        console.log(this.props);   
        return <div>
                    <h1>DashBoard Page</h1>
                    <button onClick={this.handleLogOut}>Log out</button>
                </div> 

    }
}