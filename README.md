
### Description 
-----------------------------------------

>The platform was created for the first round of crackathon 2019, an annual contest held by codecell. It lets a team login with an alredy generated username and password after which the user is given a jumbled code that he is supposed to rearrange to get the proper order of the code. The user is awarded with 100 points for a correct answer and penalized with 10 points for a wrong submission.


------------------------------------------


### File Structure


#### Backend

- `./server.js` : Entry point to app
- `./server/dbconnection.js`: Database connection
- `./server/index.js`: Routing
- `./server/users.js`: Login with credentials given by CodeCell and logout (not really used anywhere).
- `./server/getquestion.js`: Return a code of the specified form.
- `./server/loganswer.js`: Final submission of score along with time taken to complete the questions.
- `./questions/phase${number}/${language}.json`: The json in format as required by the front-end for languages cpp, java, python and js. 


------------------------------------------
### Installation

* Install dependencies
```sh
        npm install
```

* Add a file secrets.js with the database password and change url connection string in ./server/dbconnection.js
  
------------------------------------------
### Contributing

 We're are open to `enhancements` & `bug-fixes` :smile: Also do have a look [here](./CONTRIBUTING.md)

------------------------------------------
### Contributors

- [@Syn3rman](https://github.com/Syn3rman)
- [@nachiketbhuta](https://github.com/nachiketbhuta)
  
------------------------------------------
