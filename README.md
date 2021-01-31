# 197-Final-Project
Link: jakegure-cis197-final.herokuapp.com. This may take a bit to load because heroku will put the app to sleep if no one has accessed it in a while. *This project is now deprecated! ☹️ The database plugin I used is no longer supported.*

A virtual way to keep track of your DnD characters.

Users can sign up and then log in via the respective pages. Once logged in, a user is presented with
all of the current groups that they are in. Users can access these groups. They also have the option 
to create a group, as well as log out. Users can access their created groups to see their character 
info (if they have created a character in that group). If they have not created a character in that 
group, they have the ability to create a very basic DnD character using information from this 
api: https://www.dnd5eapi.co. The api is used to check for the validity of user input when
creating a character, and then provide extra information on valid character input.

The bulk of the code is in the client and routes folders. The frontend is all done in client. In client, many different components make calls to the backend. The CharacterFormItem component makes calls to the DnD api. Most of the server code is in routes. Notably, all of the database interaction is done in the files in this folder.
