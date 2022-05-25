require('dotenv').config();

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

    app.get('*', (req, res) => {
        res.status(404).send('<h1>404 Not Found</h1>')
    })
// 11. Call app.listen(3000) to keep server open
    app.listen(process.env.PORT)