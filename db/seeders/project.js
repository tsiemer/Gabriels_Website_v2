'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Projects', [
            {
                id: 1,
                title: "F1 in schools",
                subtitle: "something about what they do",
                imgUrl: "an image url ( optional )",
                description:  "A description ", 
                createdAt: new Date(),
                updatedAt: new Date()                
            },
            {
                id: 2,
                title: "Inventive",
                subtitle: "something about what they do",
                imgUrl: "an image url ( optional )",
                description:  "A description ", 
                createdAt: new Date(),
                updatedAt: new Date()               
            }
        ], {});
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Projects', null, {});
    }
};