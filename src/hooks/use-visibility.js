import { useEffect, useState } from "react"

const useVisibility = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    document.addEventListener("scroll", handleVisibilityChange)
    return () => {
      document.removeEventListener("scroll", handleVisibilityChange)
    }
  }, [])

  const handleVisibilityChange = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setIsVisible(true)
    } else if (scrolled <= 300) {
      setIsVisible(false)
    }
  }
  return isVisible
}

export default useVisibility
