const { exec } = require('child_process');
const path = require('path');

module.exports = (on, config) => {
    on('task', {
        connectDB() {
            return new Promise((resolve, reject) => {
                const tsNodePath = path.resolve('node_modules/.bin/ts-node');
                const scriptPath = path.resolve('server/src/scripts/testDBConnection.ts');
                exec(`${tsNodePath} ${scriptPath}`, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`exec error: ${error}`);
                        return reject('Failed');
                    }
                    console.log(`stdout: ${stdout}`);
                    console.error(`stderr: ${stderr}`);
                    resolve('Connected');
                });
            });
        }
    });
};