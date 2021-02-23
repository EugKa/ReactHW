import * as React from 'react'
import { Header } from '../Header';
import {setToLocalStorage, getFromLocalStorage} from '../../utils/'
import { OAuth } from '../OAuth';
import { ProtectedRoute } from '../ProtectedRoute';
import { AppRoute, routes, ROUTES_URLS, } from './routes';

import { Route, Link, Switch, Redirect, RouteChildrenProps, withRouter, RouteComponentProps } from 'react-router-dom'

import '../../styles/bace.scss'
import styles from '../../styles/app.module.scss';



const TOKEN_STORAGE_KEY = 'TOKEN'

const {REACT_APP_APY_KEY} = process.env

export interface Board {
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
               
    }

    

    private async getToken() {
        // if(this.state.token) {
        //     return
        // }

        // const {token} = getFromLocalStorage<CustomToken>(TOKEN_STORAGE_KEY)
        // if(!token) {
        //     return this.toLogin()
        // }

        // const url = `https://api.trello.com/1/members/me?key=${REACT_APP_APY_KEY}&token=${token}`
        // const repsonse = await fetch(url);
        // if(repsonse.ok === true && repsonse.status === 200) {
        //     const userProfile = await repsonse.json()
        //     this.setProfile(userProfile)
        //     return this.toDashBoard()
        // }

        // return this.toLogin()
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




    private get isLoggedIn() {
        return !!this.state.token
    }


    private renderContent() {
        return <main className={styles.main}>
            <Switch>
                {routes.map(this.renderRoute)}
                <Route path={ROUTES_URLS.OAUTH} render={(props: RouteChildrenProps) => <OAuth {...props} />} />
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
                
                <Header onLogOut={() => console.log('log')} />
                {this.renderContent()}   
            </div>
        )
    }
}

const AppWithRouter = withRouter(App);

export {AppWithRouter as App};