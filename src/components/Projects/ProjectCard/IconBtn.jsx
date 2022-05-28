import CustomTooltip from "../../UI/CustomTooltip"
import { Btn, BtnIcon } from "./mui"

const IconBtn = ({ href, name, icon, iconId }) => {
  const btnAria = `${name.replace(" ", "-").toLowerCase()} ${name
    .replace(" ", "-")
    .toLowerCase()}-code`
  const btnIconId = `${name.replace(" ", "-").toLowerCase()}-demo`

  return (
    <CustomTooltip title={iconId}>
      <Btn
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-labelledby={btnAria}
      >
        <BtnIcon
          component={icon}
          id={btnIconId} //BtnIconId
          aria-label={iconId}
        />
      </Btn>
    </CustomTooltip>
  )
}

export default IconBtn
