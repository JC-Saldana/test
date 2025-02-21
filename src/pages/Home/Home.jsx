import styles from "./Home.module.css";

function Home({ username }) {
  return (
    <div className={styles.page}>
      <div className={styles.homePage}>
        <h1>Hi, {username}!</h1>
        <div className={styles.homePageContent}>
          <div className={styles.content1}>
            <p>Columna 1</p>
          </div>
          <div className={styles.content2}>
            <p>Columna 2</p>
          </div>
          <div className={styles.content3}>
            <p>Columna 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;