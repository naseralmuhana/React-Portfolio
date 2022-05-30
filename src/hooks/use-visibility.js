import { useEffect, useState } from "react"

const useVisibility = (matches = false) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (matches) {
      setIsVisible(true)
      return
    }
    document.addEventListener("scroll", handleVisibilityChange)
    return () => {
      document.removeEventListener("scroll", handleVisibilityChange)
    }
  }, [matches])

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
