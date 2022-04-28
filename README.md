# Songrater-app

## Problem 1:
### Firebase Frontend: [https://songrater-comp333.firebaseapp.com/](https://songrater-comp333.firebaseapp.com/)
### Heroku Django Backend: [https://songrater-comp333.herokuapp.com/api/](https://songrater-comp333.herokuapp.com/api/rating/)

- **Rating:** [https://songrater-comp333.herokuapp.com/api/rating/](https://songrater-comp333.herokuapp.com/api/rating/)
- **Song:** [https://songrater-comp333.herokuapp.com/api/song/](https://songrater-comp333.herokuapp.com/api/song/)
- **Register:** [https://songrater-comp333.herokuapp.com/api/auth/register](https://songrater-comp333.herokuapp.com/api/auth/register) 
- **Login:** [https://songrater-comp333.herokuapp.com/api/auth/login](https://songrater-comp333.herokuapp.com/api/auth/login)
- **Authentication:** [https://songrater-comp333.herokuapp.com/api/auth/user](https://songrater-comp333.herokuapp.com/api/auth/user)

## Problem 2:
### 1. Setting Up React Native
- React requires node.js and its package manager npm. If you have not done so,
  install NPM with `npm install`.

  In case of a `React Native Expo - Node.js version xxx is no longer supported`
  error message, you can run `sudo npm install -g n` and `sudo n latest`. `-g`
  stands for global, i.e., every users on your computer.

- We will be using the Expo CLI development environment. If you have not done so, install the expo command line tools with `npm install -g expo-cli`.

- In order to have the iOS simulator and tools available install Xcode via the App.

### 2. Install Dependencies

```shell
npm i @react-native-asyncstorage
expo install expo-app-loading
```

### 3. Run Songrater App!
- `cd` into the songrater-app directory and run `npm start` or `expo start`. In theopening browser window (Connection: LAN) click run on iOS simulator. If there is an error, try running `expo upgrade`.
- The Expo server can be stopped with `ctrl + c`.