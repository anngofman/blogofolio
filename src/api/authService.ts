
export const registration = async (username: string, email: string, password: string) => {
  const url = 'https://studapi.teachmeskills.by/auth/users/'
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      username,
      email,
      password
    })
  }
  try {
    const response = await fetch(url, options)
    const result = await response.json()
    return {
      ok: response.ok,
      status: response.status,
      data: result
    }
  } catch (error: any) {
    return {
      ok: false,
      status: 400,
      data: error.massage
    }
  }
}

export const activation = async (uid: string, token: string, password: string) => {
  const url = 'https://studapi.teachmeskills.by/auth/users/activation/'
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      uid,
      token
    })
  }
  try {
    const response = await fetch(url, options)
    const result = await response.json()
    return {
      ok: response.ok,
      status: response.status,
      data: result
    }
  } catch (error: any) {
    return {
      ok: false,
      status: 400,
      data: error.massage
    }
  }
}




// export const registration = (username: string, email: string, password: string) => {
//   return fetch('https://studapi.teachmeskills.by/auth/users/', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify({
//       username,
//       email,
//       password
//     })
//   }).then(response => response.json())
//     .then((result:RegistrationResponse)=>result)
// }