let express = require('express'),
    app = express()
    
app.listen(3000,function(){
        console.log("up and runningm");
 });

 app.get('/', (req, res) => res.send('Hello World!'))