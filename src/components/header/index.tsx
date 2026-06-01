"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'
import { Menu, X } from 'lucide-react';

export function Header(){
    const [top, setTop] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    }

    useEffect(() => {
      window.addEventListener("scroll", scrollHandler);

      return () => window.removeEventListener("scroll", scrollHandler);
    },[top])

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 500) {
          setMenuOpen(false);
        }
      }

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }, [])

    function toggleMenu(){
      setMenuOpen(!menuOpen);
    }

    return(
      <header className={`${styles.header} ${!top ? styles.fixed : styles.background}`}>
        <div className={styles.container}>
          <div className={styles.content}>

            <div className={styles.contentLogo}>
              <Link href="/">
                <Image 
                  src="/logo.png" 
                  alt="Logo" 
                  width={988}
                  height={413}
                  style={{ width: '150px', height: 'auto'}} 
                  loading="eager"/>
              </Link>
            </div>

            <div className={styles.contentMenu}>
              <button onClick={toggleMenu}>
                <Menu size={34} color="#121212"/>
              </button>
            </div>

            <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>

              {menuOpen && (
                <button onClick={toggleMenu} className={styles.closeButton}>
                  <X size={54} color="#121212" onClick={toggleMenu} />
                </button>
              )}

              <Link href="/">
                Home
              </Link>

              <Link href="/#servicos">
                Serviços
              </Link>

              <Link href="/#contatos">
                Contatos
              </Link>
            </nav>

          </div>
        </div>
      </header>
    )
}