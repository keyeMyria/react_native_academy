# A Todo CRUD Application made for React Native Academy @ Toptal

## Running the API

1. `pipenv --three install` - installs virtualenv with Python 3
1. `pipenv shell` - enables the virtualenv
1. `python manage.py migrate`
1. `python manage.py createsuperuser --email admin@example.com --username admin`
1. `python manage.py runserver`

## Running the RN App

1. `yarn`
1. `npm-start`
1. `react-native run-ios` or `react-native run-android`

Note on Android support:

This app has been developed and tested using the iOS simulator. Android emulator works, but requires some configuration steps. Since the backend is designed to be run locally, there is a need to make a change in it's address because we need to use the loopback gateway. See [TodoApi.js](https://github.com/rszalski/react_native_academy/blob/master/rn/todo_app/App/Services/TodoApi.js#L5)
