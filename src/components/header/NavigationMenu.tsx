import { useState } from 'react'

import styles from './NavigationMenu.module.css'
import { NavigationItemWithSubMenu } from './NavigationItemWithSubMenu'
import type { SubMenuItem } from './NavigationItemWithSubMenu'
import classNames from 'classnames'

type NavigationItem = {
  id: string
  name: string
  subMenuItems: SubMenuItem[]
}

const navigationItems: NavigationItem[] = [
  {
    id: '1',
    name: 'Product',
    subMenuItems: [
      { name: 'Overview', url: '#/' },
      { name: 'Pricing', url: '#/' },
      { name: 'Marketplace', url: '#/' },
      { name: 'Features', url: '#/' },
      { name: 'Integrations', url: '#/' },
    ],
  },
  {
    id: '2',
    name: 'Company',
    subMenuItems: [
      { name: 'About', url: '#/' },
      { name: 'Team', url: '#/' },
      { name: 'Blog', url: '#/' },
      { name: 'Careers', url: '#/' },
    ],
  },
  {
    id: '3',
    name: 'Connect',
    subMenuItems: [
      { name: 'Contact', url: '#/' },
      { name: 'Newsletter', url: '#/' },
      { name: 'LinkedIn', url: '#/' },
    ],
  },
]

function NavigationMenu() {
  const [isOpen, setIsOpen] = useState<boolean | null>(null)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  return (
    <div className={styles.container}>
      <button
        className={classNames(styles.menuButton, {
          [styles.open]: isOpen,
        })}
        onClick={() =>
          setIsOpen((isOpen) => {
            if (!isOpen) return true

            setOpenSubmenu(null)
            return false
          })
        }
      >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFF">
            <path d="M0 8h32v2H0z" />
            <path d="M0 16h32v2H0z" />
            <path d="M0 24h32v2H0z" />
          </g>
        </svg>
      </button>
      <nav
        className={classNames(styles.nav, {
          [styles.open]: isOpen === true,
          [styles.close]: isOpen === false,
        })}
      >
        <ul>
          {navigationItems.map((navItem) => (
            <NavigationItemWithSubMenu
              key={navItem.id}
              id={navItem.id}
              name={navItem.name}
              open={openSubmenu === navItem.id}
              onClick={(id) =>
                setOpenSubmenu((open) => (open === id ? null : id))
              }
              subMenuItems={navItem.subMenuItems}
            />
          ))}
        </ul>

        <div className={styles.auth}>
          <a className={styles.login} href="#/">
            Login
          </a>
          <a className={styles.signup} href="#/">
            Sign Up
          </a>
        </div>
      </nav>
    </div>
  )
}

export { NavigationMenu }
