# Using API's
## Main link to all api's: https://mghack-qrapi.herokuapp.com/
Avaible API's + Status:

 1. QRcode API (not working)
 2. Users API (working)
 3. Consultancies API (partialy working)

# QRcode API walkthrough
> ### Link: https://mghack-qrapi.herokuapp.com/qrapi/
Use the GET method in this url:

    ?live_link={your link here}
That will return to you an qrcode image of the link you have passed.

# Users API walkthrough
> ### Link: https://mghack-qrapi.herokuapp.com/usersapi/
### Create a User
Use the GET method in this url to Create a user:

    create_user/{user name}/{business name}/{user email}/{user password}/{state}/{city}/{image link}
That will return the response `Created user succefuly` if the user have been created, 
or `An error occoured: {err}` where "err" will be the error.

### Login a User
Use the GET method in this url to Login a user:

    login/{user email}/{user password}
That will return the json `{'can_login': True, 'user': {user_dict}}` ,where "user_dict" is the info about the user that you passed, if the user email and password match with the ones in database or `{'can_login': False}` when the email or password is incorrect.

### Delete a User
Use the GET method in this url to Delete a user:

    delete_user/{user_id}
That will return the response `Delected user succefuly` on a succeful delete.

### Send Star to a User
Use the GET method in this url to Send a Star to a User:

    send_stars/{consultancy_id}/{user_id}/{how much stars in int}
That will return the response `Succefuly send {stars} star(s) to {given_to}` where "stars" is the ammout of stars given and "given_to" is the name of who is receiving the stars.

### Get Users
Use the GET method in this url to Get All Users in DataBase:

    get_users
That will return the json `{'users': {the list of all users}}` .

# Consultancies API walkthrough
> ### Link: https://mghack-qrapi.herokuapp.com/consultapi/
### Get Categories
Use the GET method in this url to Get All Categories and Sub Categories in DataBase:

    get_categories
That will return the json `{'categories': {list of categories}, 'sub_categories': {list of sub categories}}`.

### Get Consultancies
Use the GET method in this url to Get All Consultancies in DataBase:

    get_consultancies
That will return the json `{'categories': {list of consultancies}}`.
