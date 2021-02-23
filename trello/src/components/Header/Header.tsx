import React, { FunctionComponent } from 'react';

import { Link } from './Link';
import { routes, AppRoute } from '../App/routes';
import styles from '../../styles/app.module.scss';

interface Props {
  onLogOut: () => void;
}

export const Header: FunctionComponent<Props> = ({ onLogOut }: Props) => {
  return (
    <header className={styles.header}>
      <div>
        {routes.map(({ title, path, isHidden }: AppRoute, i: number) =>
          isHidden ? null : (
            <Link key={i} title={title} path={path}/>
          )
        )}
        <Link title={'OAUTH'} path={'/oauth'} />
        <button onClick={onLogOut}>Log out</button>
      </div>
    </header>
  );
};