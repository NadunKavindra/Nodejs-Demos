var request = require('request');

request('http://www.microsoft.com', function (error, response, body) {
    if  (!error  &&  response.statusCode  ==  200)  {
        console.log(body);
    }
    else console.log('Error');
});
