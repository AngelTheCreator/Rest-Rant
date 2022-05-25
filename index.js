// 1. Navigate to my ‘code’ folder

// 2. Make a new folder (named for the project)

// 3. Inside the folder create a file called ‘index.js’

// 4. Open my terminal and navigate to the project folder

// 5. Run the command “npm init -y”

// 6. Run the command “npm install express”

// 7. Open up ‘index.js’

// 8. Require express at the top of the file
    const express = require('express');
// 9. Initialize the app variable
    const app = express()
// 10. Create the home page route
//    a. Call app.get()
//    b. Set ‘/‘ as the path (first arg)
//    c. Write callback function with req, res
//    d. Call res.send(‘hello world’) 
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
// 11. Call app.listen(3000) to keep server open
    app.listen(3000)