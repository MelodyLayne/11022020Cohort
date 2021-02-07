import { handleErrors } from "./utils.js";

// grab the form, have a student do this class=sign-up-form
const signUpForm = document.querySelector(".sign-up-form");

signUpForm.addEventListener("submit", async (e) => {
  // Why do we need to preventDefault behavior of the event
  e.preventDefault();
  // FormData objects construct a set of key/value pairs from a form
  // it has all the set methods, show it on the documentation
  const formData = new FormData(signUpForm);
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const body = { email, password, username };
  try {
    const res = await fetch("http://localhost:8080/users", {
      // What is the method?
      // thumbs up) GET
      // yes) POST
      // no) PUT
      method: "POST",
      // Is our body object line 15 JSON?
      // How do we convert it into json
      // thumbs up) it is done by express.json() on the backend
      // yes) JSON.parse(body)
      // no) JSON.stringify(body)
      body: JSON.stringify(body),
      // What headers do we need?
      // thumbs up) WWW-Authenticate
      // yes) Content-Type
      // no) Authorization

      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw res;
    }
    const {
      token,
      user: { id },
    } = await res.json();
    // storage access_token in localStorage:
    // localStorage method to add data to local storage
    // thumbs up) setItem()
    // yes) getItem()
    // no) clear()
    localStorage.setItem("TWITTER_LITE_ACCESS_TOKEN", token);
    localStorage.setItem("TWITTER_LITE_CURRENT_USER_ID", id);
    // redirect to home page to see all tweets:
    window.location.href = "/";
  } catch (err) {
    // import handleErrors from utils.js
    handleErrors(err);
  }
});
