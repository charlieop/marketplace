import {
  getCurrentUser,
  fetchAuthSession,
  fetchUserAttributes,
} from "aws-amplify/auth";

import { Hub } from "aws-amplify/utils";

// main function
export function startAuthListener() {
  Hub.listen("auth", ({ payload }) => {
    switch (payload.event) {
      case "signedIn":
      case "tokenRefresh":
        console.log("Sign-in");
        writeAttributesToStorage();
        break;
      case "signedOut":
      case "tokenRefresh_failure":
        console.log("Sign-out");
        clearAttributesFromStorage();
        break;

      // case "signInWithRedirect":
      //   console.log("signInWithRedirect API has successfully been resolved.");
      //   break;
      // case "signInWithRedirect_failure":
      //   console.log("failure while trying to resolve signInWithRedirect API.");
      //   break;
      // case "customOAuthState":
      //   console.info("custom state returned from CognitoHosted UI");
      //   break;
    }
  });
}
export function getUserAttributes() {
  const userAttributes = localStorage.getItem("userAttributes");
  return userAttributes ? JSON.parse(userAttributes) : null;
}

function writeAttributesToStorage() {
  getUserAttributesPromise()
    .then((attributes) => {
      if (attributes) {
        delete attributes.sub;
        localStorage.setItem("userAttributes", JSON.stringify(attributes));
      }
    })
    .catch((error) => {
      console.log("Error writing attributes to storage:", error);
    });
}
function clearAttributesFromStorage() {
  localStorage.removeItem("userAttributes");
}

const getUserPromise = async () => {
  try {
    const user = await getCurrentUser();
    return user;
  } catch (error) {
    console.log("Error fetching user:", error);
    return null;
  }
};

const getSessionPromise = async () => {
  try {
    const session = await fetchAuthSession();
    return session;
  } catch (error) {
    console.log("Error fetching session:", error);
    return null;
  }
};

const getUserAttributesPromise = async () => {
  try {
    const attributes = await fetchUserAttributes();
    return attributes;
  } catch (error) {
    console.log("Error fetching user attributes:", error);
    return null;
  }
};

// debug functions
export function printUser() {
  getUserPromise().then((user) => {
    console.log("User:", user);
  });
}

export function printSession() {
  getSessionPromise().then((session) => {
    console.log("Session:", session);
  });
}

export function printAttributes() {
  getUserAttributesPromise().then((attributes) => {
    console.log("Attributes:", attributes);
  });
}
