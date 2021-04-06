/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
import styles from './Content.module.css';

export const Content = ({
  children,
  className,
  ...rest
}) => (
  <div
    {...rest}
    className={[
      className,
      styles.content,
    ].filter(Boolean).join(' ')}
  >
    {children}
  </div>
);

export default Content;
