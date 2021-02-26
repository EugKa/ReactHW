const { REACT_APP_URL, REACT_APP_APY_KEY } = process.env;

export const createUrl = (path: string, authRequired: boolean, token: string) => {
  let url = REACT_APP_URL + path + `key=${REACT_APP_APY_KEY}`
  if(authRequired && token) {
    url = url + `&token=${token}`
  }
  return url
}