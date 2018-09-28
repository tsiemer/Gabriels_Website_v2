'use strict';

var bcrypt = require('bcrypt');

// blogTypes : 'Food', 'Current-Thoughts', 'About-Me', 'My-System'
// Gabriels Credentials : username = 'GKrizin', password = 'Trinity'
// Trinitys Credentials : username = 'TSiemer', password = 'Gabriel'
// Danas Credentials : username = 'DNarveson', password = 'ilovegabriel'

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Admins', [
            {
                id: 1,
                username:  "GKrizin", 
                password:  "$2b$10$KrVaT7KFPZmBuCIsbW1gSOlG450Ip9kCTis/elTZVMf8shvOYvxB.",
                createdAt: new Date(),
                updatedAt: new Date()                
            },
            {
                id: 2,
                username:  "TSiemer", 
                password:  "$2b$10$juDQK.YmumnYmqghnfgR4eTgUCR2/DkjFM202x72FK5HGRATDVlpC",
                createdAt: new Date(),
                updatedAt: new Date()                
            },
            {
                id: 3,
                username:  "DNarveson", 
                password:  "$2b$10$OMUfygyf3KbWDpCvZkxtX.vcod67iPVKEZpbfmIk/90vHMqTykS.2",
                createdAt: new Date(),
                updatedAt: new Date()                
            },
        ], {});
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Admins', null, {});
    }
};