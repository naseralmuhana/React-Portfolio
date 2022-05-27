import { IconButton, Snackbar, SnackbarContent, useTheme } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react"
// prettier-ignore
import { ButtonContainer, ButtonIconContainer, FormContainer, FormControl, SendIcon, SuccessIcon } from "./mui"
import { Fade } from "react-awesome-reveal"

const ContactsForm = () => {
  const [open, setOpen] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [success, setSuccess] = useState(false)
  const [errMsg, setErrMsg] = useState("")

  const theme = useTheme()

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  const handleContactForm = (e) => {
    e.preventDefault()

    if (name && email && message) {
      const responseData = {
        name: name,
        email: email,
        message: message,
      }
      setSuccess(true)
      console.log(responseData)
    } else {
      setErrMsg("Enter all the fields")
      setOpen(true)
    }
  }
  return (
    <FormContainer>
      {/* Form */}
      <form onSubmit={handleContactForm}>
        {/* name */}
        <Fade direction="left" delay={1000} cascade style={{ width: "100%" }}>
          <FormControl>
            <label htmlFor="Name">Name</label>
            <input
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="Name"
            />
          </FormControl>

          {/* Email */}
          <FormControl>
            <label htmlFor="Name">Email</label>
            <input
              placeholder="John@doe.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="Email"
            />
          </FormControl>
          {/* password */}
          <FormControl>
            <label htmlFor="Message">Message</label>
            <textarea
              placeholder="Type your message...."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              name="Message"
            />
          </FormControl>

          {/* Submit Button */}
          <ButtonContainer>
            <button type="submit">
              <p>{!success ? "Send" : "Sent"}</p>
              <ButtonIconContainer>
                <SendIcon success={success.toString()} />
                <SuccessIcon success={success.toString()} />
              </ButtonIconContainer>
            </button>
          </ButtonContainer>
        </Fade>
      </form>
      {/* Snackbar */}
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <SnackbarContent
          action={
            <>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
          style={{
            backgroundColor: theme.primary,
            color: theme.secondary,
            fontFamily: "var(--primaryFont)",
          }}
          message={errMsg}
        />
      </Snackbar>
    </FormContainer>
  )
}

export default ContactsForm
