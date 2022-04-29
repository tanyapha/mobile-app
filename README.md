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

### 1. Backend
- Install the virtual environment, `django-react`, with:
```shell
python3 -m venv django-react
```

- Activate your virtual environment with (leave out `.fish` if you are using the default shell):
```shell
source django-react/bin/activate.fish
```

- Install dependencies with:
```shell
python3 -m pip install django
python3 -m pip install djangorestframework
python3 -m pip install django-cors-headers
python3 -m pip install django-filter
python3 -m pip install django-rest-knox
```

- Lastly, run server for backend with:
```shell
cd backend
python3 manage.py runserver
```



### 2. Frontend (React)
- Open another terminal (let's call it terminal 2), and cd to songrater-app directory with `cd songrater-app`.

- React requires node.js and its package manager npm. If you have not done so,
  install NPM with `npm install`.

  In case of a `React Native Expo - Node.js version xxx is no longer supported`
  error message, you can run `sudo npm install -g n` and `sudo n latest`. `-g`
  stands for global, i.e., every users on your computer.

- We will be using the Expo CLI development environment.
  If you have not done so, install the expo command line tools with `npm install -g expo-cli`.

- In order to have the iOS simulator and tools available install Xcode via the App.

- Install dependencies with:
```shell
npm i @react-native-asyncstorage
npm install @react-navigation/native @react-navigation/stack
npm install react-hook-form
npm install react-native-reanimated@~2.2.0
expo install expo-font
expo install expo-app-loading
```

- Lastly, run songrater app with:
```shell
npm start
```
OR
```shell
expo start
```

- In theopening browser window (Connection: LAN) click run on iOS simulator. If there is an error, try running `expo upgrade`.

- The Expo server can be stopped with `ctrl + c`.
### How to Use the App

#### Register or Login
If you have already created an account you can login in, otherwise click on the "Register Button". After you have registered, you should be redirected to the login page where you can login.

#### create new song
If you want to add a new song, click "new song" and add information.

#### update song information
click the song tile and press the edit button. this will bring you to a page to edit the song title and artist

#### add/update your rating
click the song tile and click on the number of stars you want to rate the song. click rate. this will either update or add your rating.

#### delete song
To delete a song, click on the songtile and then press the delete button
