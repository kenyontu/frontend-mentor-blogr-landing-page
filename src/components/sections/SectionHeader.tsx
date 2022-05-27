import { ComponentProps } from 'react'
import classNames from 'classnames'

import styles from './SectionHeader.module.css'

type Props = ComponentProps<'h2'>

function SectionHeader({ children, className }: Props) {
  return <h2 className={classNames(styles.header, className)}>{children}</h2>
}

export { SectionHeader }
