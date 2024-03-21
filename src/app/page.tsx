import Image from "next/image";
import styles from "./page.module.css";
import api from "./api";

export default async function Home() {
  const links = await api.user.list();

  return (
    <div className={styles.linktree}>
      <div className={styles.data}>
        <Image
          className={styles.photo}
          width={96}
          height={96}
          src="/photo.webp"
          alt="photo"
          priority
        />
        <div className={styles.info}>
          <h1 className={styles.info__title}>@tm10ymhp</h1>
          <p className={styles.info__description}>
            Full Stack Developer enfocado en crear productos con especial
            atención al detalle.
          </p>
        </div>
      </div>
      <ul className={styles.links}>
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="nooopener noreferrer"
              className={styles.links__item}
            >
              {link.slug}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
