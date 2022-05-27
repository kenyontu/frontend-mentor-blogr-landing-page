import classNames from 'classnames'

import styles from './NavigationItemWithSubMenu.module.css'

type SubMenuItem = {
  name: string
  url: string
}

type Props = {
  id: string
  open: boolean
  onClick: (id: string) => void
  name: string
  subMenuItems: SubMenuItem[]
}

function NavigationItemWithSubMenu({
  id,
  open,
  onClick,
  name,
  subMenuItems,
}: Props) {
  return (
    <li
      className={classNames(styles.navItem, {
        [styles.open]: open,
      })}
    >
      <span onClick={() => onClick(id)}>{name}</span>
      <ul className={classNames(styles.subMenu, { [styles.open]: open })}>
        {subMenuItems.map((item) => (
          <li key={item.name}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </li>
  )
}

export { NavigationItemWithSubMenu }

export type { SubMenuItem }
