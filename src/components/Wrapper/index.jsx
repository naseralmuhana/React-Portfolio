import Helmet from "react-helmet"
import { headerData } from "../../data"

const Wrapper = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>
          {headerData.name} | {title}
        </title>
      </Helmet>
      {children}
    </>
  )
}

export default Wrapper
