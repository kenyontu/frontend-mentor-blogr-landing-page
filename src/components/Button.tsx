import { ComponentProps } from 'react'
import classNames from 'classnames'

import styles from './Button.module.css'

type Props = {
  outlined?: boolean
} & ComponentProps<'button'>

function Button({
  children,
  className = '',
  outlined = false,
  ...props
}: Props) {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.outlined]: outlined,
      })}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }
