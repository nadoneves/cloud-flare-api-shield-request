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
            headers: YOUR_HEADERS,
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
