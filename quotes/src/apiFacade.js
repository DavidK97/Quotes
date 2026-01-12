const BASE_URL = "https://quote.davidk97.dk/api/v1/";
const LOGIN_ENDPOINT = "auth/login";


function handleHttpErrors(res) {
  if (!res.ok) {
    
    return res.json().then((fullError) => {
      return Promise.reject({ status: res.status, fullError: fullError });
    });
  }

  if (res.status === 204) return {};
  
  return res.json();
}

const setToken = (token) => {
  localStorage.setItem("jwtToken", token);
};
const getToken = () => {
  return localStorage.getItem("jwtToken");
};
const loggedIn = () => {
  const loggedIn = getToken() != null;
  return loggedIn;
};
const logout = () => {
  localStorage.removeItem("jwtToken");
};

const login = (user, password) => {
  const options = makeOptions("POST", false, {
    username: user,
    password: password,
  });

  return fetch(BASE_URL + LOGIN_ENDPOINT, options) 
    .then(handleHttpErrors) 
    .then((res) => {
      setToken(res.token); 
    });
};

const makeOptions = (method, addToken, body) => {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  };
  if (addToken && loggedIn()) {
    opts.headers["Authorization"] = `Bearer ${getToken()}`;
  }
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
};

const fetchData = (endpoint) => {
  const options = makeOptions("GET", true); //True add's the token
  return fetch(BASE_URL + endpoint, options).then(handleHttpErrors);
};

const postData = (endpoint, body) => {
  const options = makeOptions("POST", true, body); 
  return fetch(BASE_URL + endpoint, options).then(handleHttpErrors);
}

const deleteData = (endpoint) => {
  const options = makeOptions("DELETE", true); 
  return fetch(BASE_URL + endpoint, options).then(handleHttpErrors);
}

const putData = (endpoint, body) => {
  const options = makeOptions("PUT", true, body); 
  return fetch(BASE_URL + endpoint, options).then(handleHttpErrors);
}


const getUserRoles = () => {
  const token = getToken();
  if (token != null) {
    const payloadBase64 = getToken().split(".")[1];
    const decodedClaims = JSON.parse(window.atob(payloadBase64));
    const roles = decodedClaims.roles;
    return roles;
  }
   else return "";
};


const getUsername = () => {
  const token = getToken();
  if (token != null) {
    const payloadBase64 = getToken().split(".")[1];
    const decodedClaims = JSON.parse(window.atob(payloadBase64));
    const username = decodedClaims.username;
    return username;
  } else return "";
};

const hasUserAccess = (neededRole, loggedIn) => {
  const roles = getUserRoles().split(",");
  return loggedIn && roles.includes(neededRole);
};

const facade = {
  makeOptions,
  setToken,
  getToken,
  loggedIn,
  login,
  logout,
  fetchData,
  getUserRoles,
  hasUserAccess,
  getUsername,
  postData,
  deleteData,
  putData
};

export default facade;
