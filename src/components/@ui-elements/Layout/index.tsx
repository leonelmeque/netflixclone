import styles from './styles.module.css';
import React, { Component, FunctionComponent, ReactElement } from 'react';

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement>{
  row?: boolean;
  column?: boolean;
  children: JSX.Element | JSX.Element []
}
const Layout:FunctionComponent<LayoutProps> = (props): JSX.Element => (
  <div
    className={`${styles.container} ${props.row && styles.row} ${props.column && styles.column}`.trim()}>
    {props.children}
  </div>
);

Layout.displayName = 'Layout';

export default Layout;
