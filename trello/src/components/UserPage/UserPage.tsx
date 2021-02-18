import * as React from 'react'
import { RouteChildrenProps } from 'react-router-dom';

interface UserPageProps extends RouteChildrenProps{
    token?: string
}

export class UserPage extends React.Component<UserPageProps> {
   
    render() {
        
        
        return <div>USER PAGE</div>
    }
}