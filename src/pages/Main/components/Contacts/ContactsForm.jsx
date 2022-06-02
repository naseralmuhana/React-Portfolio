import emailjs from "@emailjs/browser"
import CircularProgress from "@mui/material/CircularProgress"
import { useState } from "react"
import { Fade } from "react-awesome-reveal"
import { CustomSnackbar } from "../../../../components"

// prettier-ignore
import { 
  ButtonContainer, ButtonIconContainer, FormContainer, FormControl, SendIcon 
} from "./mui";

async function run() {
  const aPromise = new Promise((accept) => {
    setTimeout(() => {
      accept()
    }, 1000)
  })
  await aPromise
}

const ContactsForm = () => {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [snackbarMsg, setSnackbarMsg] = useState("")
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    setOpen(false)
    setIsLoading(true)
    const enteredName = e.target.elements.name.value
    const enteredEmail = e.target.elements.email.value
    const enteredMessage = e.target.elements.message.value

    if (enteredName && enteredEmail && enteredMessage) {
      await run()
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )
      setSnackbarMsg("Thank you for your message!")
    } else {
      await run()
      setSnackbarMsg("Enter all the fields")
    }
    setOpen(true)
    setIsLoading(false)
    e.target.reset()
  }

  return (
    <FormContainer>
      {/* Form */}
      <form onSubmit={sendEmail}>
        {/* name */}
        <Fade direction="left" delay={1000} cascade style={{ width: "100%" }}>
          <FormControl>
            <label htmlFor="name">Name</label>
            <input placeholder="John Doe" type="text" name="name" />
          </FormControl>

          {/* Email */}
          <FormControl>
            <label htmlFor="email">Email</label>
            <input placeholder="John@doe.com" type="email" name="email" />
          </FormControl>
          {/* password */}
          <FormControl>
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Type your message...."
              type="text"
              name="message"
            />
          </FormControl>

          {/* Submit Button */}
          <ButtonContainer>
            <button type="submit" disabled={isLoading}>
              {!isLoading && <p>Send</p>}
              <ButtonIconContainer>
                <SendIcon isloading={isLoading.toString()} />
                {isLoading && (
                  <CircularProgress size={24} className="progress" />
                )}
              </ButtonIconContainer>
            </button>
          </ButtonContainer>
        </Fade>
      </form>
      {/* Snackbar */}
      <CustomSnackbar open={open} onClose={handleClose} message={snackbarMsg} />
    </FormContainer>
  )
}

export default ContactsForm
