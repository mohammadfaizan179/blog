const setToken = (tokens) =>{
    localStorage.setItem("access", tokens.access);
    localStorage.setItem("refresh", tokens.refresh);
}

const getToken = (tokens) =>{
    const access = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");
    return {access, refresh}
}

const removeToken = (tokens) =>{
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
}

export { setToken, getToken, removeToken }