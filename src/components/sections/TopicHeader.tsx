import { ComponentProps } from 'react'
import classNames from 'classnames'

import styles from './TopicHeader.module.css'

type Props = ComponentProps<'h3'>

function TopicHeader({ children, className, ...props }: Props) {
  return (
    <h3 className={classNames(styles.header, className)} {...props}>
      {children}
    </h3>
  )
}

export { TopicHeader }
