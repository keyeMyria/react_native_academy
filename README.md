# Running the API

1. pipenv --three install
1. python manage.py migrate
1. python manage.py createsuperuser --email admin@example.com --username admin
1. python manage.py runserver

# TODO 

## Write a mobile ToDo list application

~~* User must be able to create an account and log in.~~

* User should be able to CRUD ToDo lists.
* The list should have a title, unlimited number of entries, and allow attachments, like images and people.
* User can filter saved lists by their name.
* Images can be attached either by accessing user photo library or by taking photos using a camera.
* People can be attached accessing the Contacts list.
* Lists should be shareable thought the Share interface.
* REST API. Make it possible to perform all user actions via the API, including authentication. If you do not know how to create your own backend you can use Firebase.com or similar services to create the API.
* Minimal UI/UX design is needed. You will not be marked by graphic design. However, do try to keep it as tidy as possible.
