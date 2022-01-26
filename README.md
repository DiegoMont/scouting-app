# Scouting App by Nautilus 4010
Source code for Nautilus 4010 Scouting App used during regionals to find best alliance teams

## Create app for a new season

### Create a new branch
Create a new branch based on the branch *proyecto-base*. Name it with the name of the season the scouting will be about, for example: *Infinite-Recharge*

### Configure the credentials file
Inside the *public/php/* directory create an *accesos.php* file. The values of the password and session key are stored inside this file. You can copy the content of the *accesos.php.sample* file into this new file and change the values of the constants `PASSWORD` and `KEY_SESSION`. The value of the `PASSWORD` is the same that users need to enter when logging into the app. `KEY_SESSION` is used inside the app for authentication purposes so it is suggested to be a random string of length 16.

### Add inputs to the forms
From the *plantillas.html* file copy and paste the code of the existing questions. Edit the text of the question inside the <p> element, assign a unique name to the <inputs> and a value for each input.
