export const setHeader = (headers: any) =>{
  localStorage.setItem('content', headers.content);
  localStorage.setItem('exp', headers.exp);
}

export const getHeader = () =>{
  const content = localStorage.getItem('content');
  const exp = localStorage.getItem('exp');
  const headers = {
    content,
    exp,
    Authorization: 'Bearer '+content,
  }
  return headers;
}

export const setUser = (user: any) =>{
  localStorage.setItem('user', JSON.stringify(user));
}

export const getUser = () =>{
  const userString = localStorage.getItem('user');
  const user = userString? JSON.parse(userString): null;
  return user;
}