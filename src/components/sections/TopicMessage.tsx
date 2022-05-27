import { ComponentProps } from 'react'
import classNames from 'classnames'

import styles from './TopicMessage.module.css'

type Props = ComponentProps<'p'>

function TopicMessage({ children, className, ...props }: Props) {
  return (
    <p className={classNames(styles.message, className)} {...props}>
      {children}
    </p>
  )
}

export { TopicMessage }
