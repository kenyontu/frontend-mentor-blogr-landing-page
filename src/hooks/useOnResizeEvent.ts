import { useEffect } from 'react'

function useOnResizeEvent(onResize: () => void) {
  useEffect(() => {
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [onResize])
}

export { useOnResizeEvent }
