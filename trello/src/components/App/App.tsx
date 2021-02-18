import * as React from 'react'
import { Route, Link, Switch, Redirect, RouteChildrenProps, withRouter, RouteComponentProps } from 'react-router-dom'
import {setToLocalStorage, getFromLocalStorage} from '../../utils/'
import { OAuth } from '../OAuth';
import { ProtectedRoute } from '../ProtectedRoute';
import { AppRoute, routes, ROUTES_URLS, } from './routes';

import '../../styles/bace.scss'
import styles from '../../styles/app.module.scss'

const TOKEN_STORAGE_KEY = 'TOKEN'

const {REACT_APP_APY_KEY} = process.env

interface Board {
    id: string;
    name: string;
    pinned: boolean;
    desc?: string;
}

interface AppState {
    token: string
    boards: Array<Board>
    userProfile: any
}

interface AppProps extends RouteComponentProps {

}

interface CustomToken {
    token: string, expireIn: number;
}

const INITIAL_STATE = {
    token: '',
    boards: [],
    userProfile: undefined,
    
}

class App extends React.Component<AppProps, AppState> {
    public state = INITIAL_STATE

    componentDidMount() {
        this.getToken()
        this.getBoards()
               
    }

    private async getBoards() {
        const {token} = getFromLocalStorage<CustomToken>(TOKEN_STORAGE_KEY)
        const response = await fetch(`https://api.trello.com/1/members/me/boards?fields=name,url&key=${REACT_APP_APY_KEY}&token=${token}`);
        if(response.ok === true && response.status === 200) {
            const boards = await response.json();
            console.log(boards,"data")
            return this.setBoards(boards)         
        }  
    }

    private setBoards(boards: Array<Board>) {
        this.setState({boards})    
    }

    private async getToken() {
        if(this.state.token) {
            return
        }

        const {token} = getFromLocalStorage<CustomToken>(TOKEN_STORAGE_KEY)
        if(!token) {
            return this.toLogin()
        }

        const url = `https://api.trello.com/1/members/me?key=${REACT_APP_APY_KEY}&token=${token}`
        const repsonse = await fetch(url);
        if(repsonse.ok === true && repsonse.status === 200) {
            const userProfile = await repsonse.json()
            this.setProfile(userProfile)
            this.setToken(token)
            return this.toDashBoard()
        }

        return this.toLogin()
    }

    private toDashBoard() {
        this.props.history.push(ROUTES_URLS.DASHBOARD)
    }

    private toLogin() {
        this.props.history.push(ROUTES_URLS.LOGIN)
    }

    private setProfile(userProfile: any) {
        this.setState({userProfile})
    }

    private  setToken = (token: string) => {
        this.setState({token})
        setToLocalStorage<CustomToken>(TOKEN_STORAGE_KEY, {token, expireIn: Date.now() })
    }


    private get isLoggedIn() {
        return !!this.state.token
    }

    private logOut = () =>{
        this.setState(INITIAL_STATE)
        this.toLogin()
    }

    private renderHeader() {
        return <header className={styles.header}>
                    {routes.map((route: AppRoute, i: number) => route.isHidden ? null : <Link className={styles.link} key={i} to={route.path}>{route.title}</Link>)}
                    <button onClick={this.logOut}>Log out</button>
                </header>
    }

    private renderContent() {
        return <main>
            <Switch>
                {routes.map(this.renderRoute)}
                <Route path={ROUTES_URLS.OAUTH} render={(props: RouteChildrenProps) => <OAuth {...props} onSetToken={this.setToken} />} />
                <Redirect to={ROUTES_URLS.NOT_FOUND}/>     
            </Switch>
            
        </main>
        
    }

    private renderRoute = (route: AppRoute, i: number) =>{
        if(route.isProtected) {
            return <ProtectedRoute 
                    exact={route.exact} 
                    key={i} 
                    path={route.path} 
                    render={route.render} 
                    isAuthenticated={this.isLoggedIn}

                    />   
        } else {
            return <Route 
                    exact={route.exact} 
                    key={i} 
                    path={route.path} 
                    render={(props) => route.render({...props})}/>
        }
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

const AppWithRouter = withRouter(App);

export {AppWithRouter as App};