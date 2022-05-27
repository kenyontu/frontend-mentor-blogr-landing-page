import { ComponentProps } from 'react'

import blogrLogo from '../../assets/images/logo.svg'

type Props = ComponentProps<'a'>

function Logo(props: Props) {
  return (
    <a href="https://github.com" {...props}>
      <img src={blogrLogo} alt="Blogr logo" />
    </a>
  )
}

export { Logo }
