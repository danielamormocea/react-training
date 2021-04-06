/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
import { React, useEffect } from 'react';
import HomeIcon from 'mdi-react/HomeIcon';
import ArrowBackIcon from 'mdi-react/ArrowBackIcon';

import {
  Link, Route, useHistory, Switch,
} from 'react-router-dom';
import { ThemeToggleButton } from '../ThemeToggleButton';
import styles from './AppBar.module.css';
import { Button } from '../Button';

import { useTheme } from '../../contexts/theme';

export const AppBar = ({
  className,
  ...rest
}) => {
  const history = useHistory();

  const { theme } = useTheme();
  useEffect(() => {
    const changeColor = (scrollPosition) => {
      const startColor = getComputedStyle(document.body).getPropertyValue('--color-paper');

      const hexNumber = startColor.trim().slice(1);
      const decimal = parseInt(hexNumber, 16);

      const newColor = Math.round(decimal * scrollPosition).toString(16);

      document.getElementById('appBar').style.backgroundColor = `#${newColor}`;
    };

    const onScroll = () => {
      let position = (1 - (window.pageYOffset / document.body.scrollHeight) / 1000);
      if (theme === 'dark') {
        position = (1 + (window.pageYOffset / document.body.scrollHeight) * 0.02);
      }
      changeColor(position);
    };

    document.getElementById('appBar').style.backgroundColor = 'var(--color-paper)';

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [theme]);

  return (
    <div
      id="appBar"
      {...rest}
      className={[
        className,
        styles.appBar,
      ].filter(Boolean).join(' ')}
    >
      <Switch>
        <Route exact path="/" />
        <Route>
          <Button
            onClick={() => history.goBack()}
          >
            <ArrowBackIcon className={styles.appBarIcon} />
          </Button>
        </Route>
      </Switch>

      <Link to="/">
        <Button>
          <HomeIcon className={styles.appBarIcon} />
        </Button>
      </Link>

      <ThemeToggleButton
        className={styles.themeAppBarButton}
        iconClassName={styles.appBarIcon}
      />
    </div>
  );
};

export default AppBar;
