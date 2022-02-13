# Scouting App by Nautilus 4010
Source code for Nautilus 4010 Scouting App used during regionals to find best alliance teams

## Create app for a new season

### Create a new branch
Create a new branch based on the branch *proyecto-base*. Name it with the name of the season the scouting will be about, for example: *Infinite-Recharge*

### Add questions to the scouting forms
You can get information from each team during both matches and pit interviews. Hence, we have two scouting forms one for _Matches_ and one for _Pit_.

There are two files inside *js/*: *match-form.js* and *pit-form.js*. To add questions to the form you have to create *Question* objects inside the function *createMatchForm()* or *createPitForm* and add them their corresponding section.

Here are all the steps you need to follow to achieve this:

#### 1. Declare questions
To create the question you have to instantiate one of the available classes that represents the question:
