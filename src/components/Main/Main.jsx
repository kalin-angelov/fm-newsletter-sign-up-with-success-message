import styles from "./Main.module.css";

import IllustrationSignUpDesktop from "../Icons/IllustrationSignUpDesktop";
import IllustrationSignUpMobile from "../Icons/IllustrationSignUpMobile";
import IconList from "../Icons/IconList";
import Form from "../Form/Form";

import { useEffect, useState } from "react";

const Main = () => {
  const [windowWith, setWindowWith] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowWidth = () => {
      setWindowWith(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowWidth);

    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };

  },[]);

  return (
    <main className={windowWith >= 1020 ? styles.mainContainerDesktop : styles.mainContainerMobile}>
      <section className={styles.imageSection}>
        {windowWith >= 1024 ?
          <IllustrationSignUpDesktop />
          :
          <IllustrationSignUpMobile />
        }
      </section>
      <section className={styles.informationSection}>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li><IconList /> Product discovery and building what matters</li>
          <li><IconList /> Measuring to ensure updates are a success</li>
          <li><IconList /> And much more!</li>
        </ul>
      </section>
      <section className={styles.formSection}>
        <Form />
      </section>
    </main>
  );
};

export default Main;