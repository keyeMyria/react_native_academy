# Running the API

1. pipenv --three install
1. python manage.py migrate
1. python manage.py createsuperuser --email admin@example.com --username admin
1. python manage.py runserver

## Todo 

1. Test API interaction without internet connection and/or when API is down
1. Token should expire, auth error should then redirect to login stack
1. Form errors (login/register) should be cleared on navigation change


TODO List Table

* id - PK, auto_increment
* creator  - FK, User
* title - varchar(255), not null


TODO Item Table

* id - PK, auto_increment
* todo_list - FK, todo_list
* content - text, not null
* completed - boolean, non null, default(false)

Image Attachments Table

* id - PK, auto_increment
* todo_item - FK, todo_item
* blob - base64 contents of an image? Something else? How to best store images ON API and get them to the APK?


People Attachments Table

* id - PK, auto_increment
* todo_item - FK, todo_item
* ? - Some unique contact ID/Hash



