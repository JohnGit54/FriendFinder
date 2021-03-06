
# FriendFinder Full  - Node and Express Servers 

 
### Overview

In this activity, we built a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

The user answers a quick quiz of ten question with a scale from 1 to 5.
The app will calculate which person is closest in answering for their 'friends' list.




## Technical components.
 We used Express to handle routing.

the Front end is comprised of: 
- html,  using the bootstrap framework
- client side javascript - with jQuery making the Ajax  'Get' and 'Posts' calls.

the Back end: 
-Node.js 
-Express


 other items: 
- npm packages: 
    * express
    * body-parser
    * path




 Folder structure: 
 - FriendFinder
    - app
      - data
        - friends.js
        - images
            - moe.png
            - larry.png
            - curly.png
            - shemp.png
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js



### Instructions

1. Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. Your `server.js` file should require the basic npm packages we've used in class: `express`, `body-parser` and `path`.

3. Your `htmlRoutes.js` file should include two routes:

   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page. 

4. Your `apiRoutes.js` file should contain two routes:

   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

5. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.


This app is deployed to heroko ( https://fathomless-waters-56718.herokuapp.com/ )
