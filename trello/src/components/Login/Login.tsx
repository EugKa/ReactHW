import * as React from 'react';
import { getFromLocalStorage, setToLocalStorage } from '../../utils';
const {REACT_APP_APY_KEY, 
        REACT_APP_APP_NAME, 
        REACT_APP_REDIRECT_URL, 
        REACT_APP_SCOPE} = process.env

export class Login extends React.Component {
    render() {
        const requestUrl = `https://trello.com/1/authorize?return_url=${REACT_APP_REDIRECT_URL}&expiration=1day&name=${REACT_APP_APP_NAME}&scope=${REACT_APP_SCOPE}&response_type=token&key=${REACT_APP_APY_KEY}`
        setToLocalStorage<Array<string>>('TEST', ['asdasd']);
        getFromLocalStorage<{ name: string }>('TEST');
        return  <div>
            <h1>Login Page</h1>
            <a href={requestUrl}>Log in</a>
        </div>
    }
}