const ping = require('ping');
const servers = require('./server');

// simple ping check
// add your server info into server.js with properties
// change timeout of health check as per requirement
// instead of console.log do whatever you want

const interval = setInterval(() => {
    servers.forEach(function({ name, address, port }) {
        const host = port ? `${address}:${port}` : address;
        ping.promise.probe(host, {
                timeout: 10
            }).then(function(res) {
                console.log(`Health check for ${res.host} and alive: ${res.alive} `);
            })
            .catch((err) => {
                console.log('Error happened', err.message);
            });
    });
}, 1000); //Time in ms only