import styles from './styles.module.scss';
import Link from 'next/link';

export function Submenu(){
    return(
      <section className={styles.submenu}>
        <ul className={styles.ul}>
          <li>
            <Link href="/">
              Página 1
            </Link>
          </li>

          <li>
            <Link href="/">
              Página 1
            </Link>
          </li>
        </ul>
      </section>
    )
}