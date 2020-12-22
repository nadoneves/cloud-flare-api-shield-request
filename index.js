const axios = require('axios');
const fs = require('fs');
const https = require('https');

async function start(i) {
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false, // (NOTE: this will disable client verification)
        cert: fs.readFileSync('./YOUR_PATH_CERTS/apiShield.pem'),
        key: fs.readFileSync("./YOUR_PATH_CERTS/apiShield.keypem.pem")
    });

    try {
        const r = await axios({
            method: 'post',
            url: 'YOUR_URL_HERE',
            headers: {
                'accept': 'application/json',
                'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJwcm92aWRlclwiOlwie1xcXCJpZFxcXCI6NjE3LFxcXCJhY2Nlc3NUb2tlblxcXCI6XFxcIjIwMTktMDUtMDJUMjE6NTg6MTkuNjI4XFxcIixcXFwidHlwZVxcXCI6XFxcIlNFUlZJQ0VcXFwiLFxcXCJncm91cFJvbGVzXFxcIjpbe1xcXCJpZFxcXCI6MSxcXFwiZGVzY3JpcHRpb25cXFwiOm51bGwsXFxcImNyZWF0ZWRcXFwiOm51bGwsXFxcInVwZGF0ZWRcXFwiOm51bGx9XSxcXFwiY3JlYXRlZFxcXCI6bnVsbCxcXFwidXBkYXRlZFxcXCI6bnVsbH1cIn0iLCJpc3MiOiJhdXRoMCJ9.3fILWN4oHYHUE908K2eDqUtTe8IqTJBJ8jGtC6GiBzY',
                'X-TRANSACTION-ID': '2020B03E30N17N47U39552199693576123'
            },
            data: YOUR_BODY,
            httpsAgent
        });
   
   		console.log(r.status, r.data)
   
   } catch (error) {
        console.log(error.response.status, error.response.data);
    }
    console.log(i);
    i++;
    start(i);
}
start(1);
