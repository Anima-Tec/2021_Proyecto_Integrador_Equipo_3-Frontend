import styles from './Loading.module.scss';

const Loading = () => (
  <div
    className={`${styles.loading} w-16 h-16 border-4 border-solid rounded-full animate-spin`}
  />
);

export default Loading;
