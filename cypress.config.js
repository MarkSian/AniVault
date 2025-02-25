const { defineConfig } = require('cypress');
const { exec } = require('child_process');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on('task', {
                connectDB() {
                    return new Promise((resolve, reject) => {
                        exec('ts-node server/src/scripts/testDBConnection.ts', (error, stdout, stderr) => {
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
        },
        baseUrl: 'http://localhost:4000',
        specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: 'cypress/support/index.js'
    }
});
