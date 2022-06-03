import type { Theme } from '../theme'
import 'styled-components/macro'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
