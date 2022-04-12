UPDATED README

In addition to everything my group and I have implemented before, I have added 2 different apis. 
Those api's being the wikipedia api(https://www.programmableweb.com/api/wikipedia) 
and the google maps static api(https://developers.google.com/maps/documentation/maps-static/overview).

Using these apis, I managed to increase our travel bots capabilites, by providing users with the ability to
explore both the airport they are visiting (using wikipedia) and the area they will be exploring using the 
static google maps api. 

To run this project, simply click on the main.html file, and from there you should be able to access the chatbot
along with acesss to the api. To nagivate to an api, simply click on the buttons above. The first button will give you
access to the wikipedia api and the second button will give oyu access to the google maps static api.  

The files we added are as follows:

index.html: index.html is where I implemented the wikipedia api. In it simply contains a search bar along with 
a header which contains some useful information for how to use the search bar. The search bar is limited to 3 
letters, meaning people can only search 3 letters for their IATA code, which is the unique code that each airport
has to identify itself. The api is also only limited to 1 search items, meaning that the top result will always be
the airport, ensuring that the searcher does not get confused for some other thing that has pops up when using the 
IATA code. Used bootstrap to beutify the api webpage. 

script1.js: script1.js is the logic side for the wikipedia api. In this file, we simply handle the search and results
that appear in the index.html file. This is also the area where we set the search limit to 1 since this is where the 
api code is located. 

index2.html: index2.html is the second api that I implemented, that being the static image for google maps. This api
allows you to search up any suberb/ locality and city and gives you a sinppet of the area. This is useful, since it 
allows the user to explore what sort of attractions,cafes, stores, etc. they can go visit in their respective travel 
destination. You can also edit setting such as how close or far you want to see, height and width, and what type of 
snippet you want to check out. Used bootstrap to beutify the api webpage.

In addition to these new files I made some changes in main.html:

main.html: Not too many chages done in this part of the project. Simply added a nav bar on the top and edited some
changes to the title.The header allows users to pick a certain task they may want to know more about on the top where
the chat bot may promt them to do such a task.

Issues: 
This project does deal with a few issues that I will mention here. For starter, I mentioned to Shan Du that our group 
managed to run a chatbot, however the chatbot only ever ended up working on my groupmates laptop, resulting in all of
us no being able to run the chatbot properly. As a result, Shan Du gave me permission to use a slightly modifited 
verison of the chatbot that does not give back replies, but simply repeats what the user says. Note that this is 
not how the bot it supposed to work, but rather how I am forced to deal with the issue.

Another issue of this project is that the second api, being the static image for google maps, doesnt run properly due 
to the fact that the google apis do not seem to be active, and I beleive I have to pay for them to work. This will 
also be explained in the video, but the api code that i received from google does not seem to be working effectively, 
as a result, I am not able to produce an image, even though everything in the code is working properly. So I believe 
that the code I provided will work, given an api key that actually works. 



