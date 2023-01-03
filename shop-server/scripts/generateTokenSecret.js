import path from 'path';
import crypto from 'crypto';
import fs from 'fs';

const outputFilePath = path.join(__dirname, '/output.txt');

const TOKEN_SECRET = crypto.randomBytes(64).toString('hex')

fs.writeFile(outputFilePath, TOKEN_SECRET, function (err) {
    if (err) {
        console.log(err);
    }
    console.log('TOKEN_SECRET was generated')
});
