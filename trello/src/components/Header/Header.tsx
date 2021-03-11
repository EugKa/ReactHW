import React, { FunctionComponent } from 'react';

import { Link } from './Link';
import { routes, AppRoute } from '../App/routes';
import styles from '../../styles/app.module.scss';
import { logOut } from '../../store/auth';
import { connect } from 'react-redux';

interface headerProps {
  onLogOut: () => void;
}

const Header: FunctionComponent<headerProps> = ({ onLogOut }: headerProps) => {
  return (
    <header className={styles.header}>
      <div>
        {routes.map(({ title, path, isHidden }: AppRoute, i: number) =>
          isHidden ? null : (
            <Link key={i} title={title} path={path}/>
          )
        )}
        {/* <Link title={'OAUTH'} path={'/oauth'} /> */}
        <button onClick={onLogOut}>Log out</button>
      </div>
    </header>
  );
};

const mapDispatchToProps = (dispatch: any): headerProps => {
  return {
    onLogOut: () => dispatch(logOut())
  };
};

const ConnectedHeader = connect(undefined, mapDispatchToProps)(Header);

export {ConnectedHeader as Header}