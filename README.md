# Scouting App by Nautilus 4010
Source code for Nautilus 4010 Scouting App used during regionals to find best alliance teams

## Create app for a new season

### Create a new branch
Create a new branch based on the branch *proyecto-base*. Name it with the name of the season the scouting will be about, for example: *Infinite-Recharge*

### Configure the credentials file
Inside the *public/php/* directory create an *accesos.php* file. The values of the password and session key are stored inside this file. You can copy the content of the *accesos.php.sample* file into this new file and change the values of the constants `PASSWORD` and `KEY_SESSION`. The value of the `PASSWORD` is the same that users need to enter when logging into the app. `KEY_SESSION` is used inside the app for authentication purposes so it is suggested to be a random string of length 16.

### Add inputs to the forms
From the *plantillas.html* file copy and paste the code of the existing questions. Edit the text of the question inside the `<p\>` element, assign a unique name to the `<inputs\>` and a value for each input.

### Add regional options to scouting forms
The app is used in many regionals during the season. To be able to group the collected data from a specific regional, users must be able to select to which regional the scouting belongs from the available options.
To provide this options, there is a file *settings.js* inside *public/js/*. Update the `REGIONALES` list by adding the regionals the team is going to attend. This variable is a list of lists. The first list contains the different regionals and each regional is represented by a list of two values: a short and unique value to identify the regional and a value to be displayed in the app.
```
const REGIONALES = [
    ['cdmx', 'Ciudad de México'],
    ['monterrey', 'Monterrey']
]
```

### Improve user experience (UX) by adding client-side validation
Inside *public/js/* there are two files *validar-scouting-match.js* and *validar-scouting-pit*. In both files there is a function `validar`. This function should check for what the user answered in each question from the scouting form and print an error using the `addError(errorMsg)` function, which will display the error when the form is submitted, if there are no errors the form then will be submitted and stored in the DB.
