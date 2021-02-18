import * as React from 'react';
import { RouteChildrenProps } from 'react-router';



interface DashBoardProps extends RouteChildrenProps {
    token?: string;
    
}

export class DashBoard extends React.Component<DashBoardProps> { 
    render() {
        
        
        return <div>
                    <h1>DashBoard Page</h1>
                    
                </div> 

    }
}