# Running the API

1. pipenv --three install
1. python manage.py migrate
1. python manage.py createsuperuser --email admin@example.com --username admin
1. python manage.py runserver

# TODO 

## Write a mobile ToDo list application

* User must be able to create an account and log in. - Backend Done

* User should be able to CRUD ToDo lists.
* The list should have a title, unlimited number of entries, and allow attachments, like images and people.
* User can filter saved lists by their name.
* Images can be attached either by accessing user photo library or by taking photos using a camera.
* People can be attached accessing the Contacts list.
* Lists should be shareable thought the Share interface.
* REST API. Make it possible to perform all user actions via the API, including authentication. If you do not know how to create your own backend you can use Firebase.com or similar services to create the API.
* Minimal UI/UX design is needed. You will not be marked by graphic design. However, do try to keep it as tidy as possible.


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
