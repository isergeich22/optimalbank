import styles from './Title.module.css';
const Title = ({ label, sublabel }) => {
  return (
    <article>
      <h1 className={styles.h1Gradient}>{label}</h1>
      <h2 className={styles.sybTitle}>{sublabel}</h2>
    </article>
  );
};

export default Title;
