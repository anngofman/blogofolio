

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
  const request = new Request(url, options)

  try {
    const response = await fetch(request)
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

export const activation = async (uid: string, token: string) => {
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
  const request = new Request(url, options)

  try {
    const response = await fetch(request)
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

export const login = async (email: string, password: string) => {
  const url = 'https://studapi.teachmeskills.by/auth/jwt/create/'
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  }
  const request = new Request(url, options)

  try {
    const response = await fetch(request)
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