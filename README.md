
# Using API's (Currently we deactivated our api)
## Main link to all api's: https://mghack-apis.herokuapp.com/
Avaible API's + Status:
1. QRcode API (not working)
2. Users API (working)
3. Consultancies API (working)

# QRcode API walkthrough
> ### Link: https://mghack-apis.herokuapp.com/qrapi/
Use the GET method in this url:

    ?live_link={your link here}
That will return to you an qrcode image of the link you have passed.

# Users API walkthrough
> ### Link: https://mghack-apis.herokuapp.com/usersapi/
### Create User
Use the GET method in this url to Create a User:

    create_user/{user name}/{business name}/{user email}/{user password}/{state}/{city}/{image link}
That will return the response `Created user succefuly` if the user have been created,
or `An error occoured: {err}` where "err" will be the error.

### Login User
Use the GET method in this url to Login a User:

    login/{user email}/{user password}
That will return the json `{'can_login': True, 'user': {user_dict}}` ,where "user_dict" is the info about the user that you passed, if the user email and password match with the ones in database or `{'can_login': False}` when the email or password is incorrect.

### Delete User
Use the GET method in this url to Delete a User:

    delete_user/{user_id}
That will return the response `Delected user succefuly` on a succeful delete.

### Send Star to User
Use the GET method in this url to Send a Star to a User:

    send_stars/{consultancy_id}/{user_id}/{how much stars in int}
That will return the response `Succefuly send {stars} star(s) to {given_to}` where "stars" is the ammout of stars given and "given_to" is the name of who is receiving the stars.

### Get Users
Use the GET method in this url to Get All Users in DataBase:

    get_users
That will return the json `{'users': {the list of all users}}` .

# Consultancies API walkthrough
> ### Link: https://mghack-apis.herokuapp.com/consultapi/
### Get Categories
Use the GET method in this url to Get All Categories and Sub Categories in DataBase:

    get_categories
That will return the json `{'categories': {list of categories}, 'sub_categories': {list of sub categories}}`.

### Get Consultancies
Use the GET method in this url to Get All Consultancies in DataBase:

    get_consultancies
That will return the json `{'consultancies': {list of consultancies}}`.

### Create Consultancy
Use the GET method in this url to Create a Consultancy:

    create_consult/{user_id}/{title}/{description}/{float_price}/{category_id}/{sub_category_id}
That will return the response `Created consultancy succefuly` if the consultancy have been created, or `An error has occoured: {err}` where "err" will be the error.

### Delete Consultancy
Use the GET method in this url to Delete a Consultancy:

    delete_consult/{consultancy_id}
That will return the response `Deleted consultancy succefuly` on a succeful delete.

### Send Message
Use the GET method in this url to Send a Message in a Consultancy:

    send_message/{message}/{consultancy_id}/{user_id}
That will return the response `Message saved succefuly` if the message have been saved, or `An error has occoured: {err}` where "err" will be the error.

### Delete Message
Use the GET method in this url to Delete a Message:

    delete_message/{message_id}
That will return the response `Deleted message succefuly` on a succeful delete.

### Get Messages
Use the GET method in this url to Get All Messages in DataBase:

    get_messages
That will return the json `{'messages': {list of messages}}`.

### Consult Clicked
Use the GET method in this url when a User click on a Consult to update their most_viewed categories:

    consult_clicked/{consultancy_id}/{user_id}
That will return the response `Registred succefuly`.
