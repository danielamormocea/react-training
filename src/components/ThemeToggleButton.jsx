import LightThemeIcon from 'mdi-react/Brightness6Icon';
import DarkThemeIcon from 'mdi-react/Brightness4Icon';
import { useTheme } from '../contexts/theme';
import { Button } from './Button';

export const ThemeToggleButton = ({
  className,
  iconClassName,
}) => {
  const { isLight, toggleTheme } = useTheme();
  return (
    <Button className={className} onClick={toggleTheme}>
      {isLight
        ? <DarkThemeIcon className={iconClassName} />
        : <LightThemeIcon className={iconClassName} />}
    </Button>
  );
};

export default ThemeToggleButton;
