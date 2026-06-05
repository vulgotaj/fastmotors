import { MenuProps } from '@/utils/menu.type';
import styles from './styles.module.scss';
import Link from 'next/link';

interface SubMenuProp{
  menu: MenuProps
}

export function Submenu({ menu }: SubMenuProp){
    return(
      <section className={styles.submenu}>
        <ul className={styles.ul}>
          {menu.objects.map( item => (
            <li key={item.slug}>
              <Link href={`/post/${item.slug}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    )
}