import { AsyncStorage } from "react-native";

export const USER_KEY = "auth-demo-key";

var signed=false

export const onSignIn = () => signed=true

export const onSignOut = () => signed=false

export const isSignedIn = () => {
  return signed
  /*return new Promise((resolve, reject) => {
     resolve(signed)
     AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });*/
};