const express = require('express');
const router = express.Router();

router.post('/',(req, res) => {
    const ans = decodingJWT(req.headers.token);
    const currTime = Date.now();
    if(ans.iat > currTime){
        return res.send(true);
    }else {
        return res.send(false);
    }
});

const decodingJWT = (token) => {
    if(token !== null || token !== undefined){
        const base64String = token.split('.')[1];
        const decodedValue = JSON.parse(Buffer.from(base64String, "base64").toString("ascii"));
        console.log(decodedValue);
        return decodedValue;
    }
    return null;
}

module.exports =router ;