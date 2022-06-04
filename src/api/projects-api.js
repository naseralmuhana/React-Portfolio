export const getProjects = async () => {
  const response = await fetch(process.env.REACT_APP_GITHUB_URL)
  const responseData = await response.json()
  return responseData
}
