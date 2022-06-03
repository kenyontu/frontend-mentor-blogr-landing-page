import { ComponentProps } from 'react'
import styled from 'styled-components/macro'

import blogrLogo from '../../../assets/images/logo.svg'

const Link = styled.a`
  &:focus {
    outline: 2px solid ${(props) => props.theme.color.white};
    outline-offset: 1px;
  }
`

const Img = styled.img`
  height: 1.9rem;
`

type Props = Omit<ComponentProps<'a'>, 'ref'>

function Logo(props: Props) {
  return (
    <Link href="#/" {...props}>
      <Img src={blogrLogo} alt="Blogr logo" />
    </Link>
  )
}

export { Logo }
