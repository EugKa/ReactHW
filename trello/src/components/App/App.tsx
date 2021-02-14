import * as React from 'react'
import { Route, Link, Switch, Redirect, RouteChildrenProps } from 'react-router-dom'
import {setToLocalStorage, getFromLocalStorage} from '../../utils/'
import { OAuth } from '../OAuth';
import { AppRoute, routes, } from './routes';

const TOKEN_STORAGE_KEY = 'TOKEN'



interface Board {
    id: string;
    name: string;
    pinned: boolean;
    desc?: string;
}

interface AppState {
    token: string
    boards: Array<Board>
}

export class App extends React.Component<any, AppState> {
    public state = {
        token: '',
        boards: [],
    }

    private  setToken = (token: string) => {
        this.setState({token})
    }


    private isLoggedIn() {
        return !!this.state.token
    }

    private renderHeader() {
        return <header>
                    {routes.map((route: AppRoute, i: number) => route.isHidden ? null : <Link key={i} to={route.path}>{route.title}</Link>)}
                </header>
    }

    private renderContent() {
        return <main>
            <Switch>
                {routes.map((route: any, i: number) => <Route 
                    exact={route.exact} 
                    key={i} 
                    path={route.path} 
                    render={(props) => route.render({...props, token: this.state.token})}/>
                )}
                <Route path="/oauth" render={(props: RouteChildrenProps) => <OAuth {...props} onSetToken={this.setToken} />} />
                <Redirect to="/404"/>     
            </Switch>
            
        </main>
        
    }

    public render() { 
        return(
            <div className="page">
                {this.renderHeader()}
                {this.renderContent()}   
            </div>
        )
    }
}