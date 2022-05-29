import { useEffect, useState } from "react"

const useVisibility = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleVisibilityChange = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setIsVisible(true)
    } else if (scrolled <= 300) {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", handleVisibilityChange)
    return () => {
      document.removeEventListener("scroll", handleVisibilityChange)
    }
  }, [])

  return isVisible
}

export default useVisibility
