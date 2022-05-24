import React from "react"
import { Btn, BtnIcon } from "./mui"

const IconBtn = ({ href, name, icon, iconId }) => {
  const btnAria = `${name.replace(" ", "-").toLowerCase()} ${name
    .replace(" ", "-")
    .toLowerCase()}-code`
  const btnIconId = `${name.replace(" ", "-").toLowerCase()}-demo`

  return (
    <Btn href={href} target="_blank" rel="noreferrer" aria-labelledby={btnAria}>
      <BtnIcon
        component={icon}
        id={btnIconId} //BtnIconId
        aria-label={iconId}
      />
    </Btn>
  )
}

export default IconBtn
