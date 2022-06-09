import Helmet from "react-helmet"
import { headerData } from "../../data"

import { ColorSwitcher, BackToTop, Footer } from ".."

export const variants = {
  initial: {
    // opacity: 0.4,
    x: "100vw",
  },
  animate: {
    // opacity: 1,
    x: "0vw",
    // transition: { duration: 0.5 },
    transition: { delay: 0.3, duration: 0.5 },
  },

  exit: {
    // opacity: 0.6,
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
}

const Wrapper = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>
          {headerData.name} | {title}
        </title>
      </Helmet>

      {children}

      {/* Theme & Color switcher Button */}
      <ColorSwitcher />
      {/* Back to Top Button */}
      <BackToTop />
      {/* Footer */}
      <Footer />
    </>
  )
}

export default Wrapper
