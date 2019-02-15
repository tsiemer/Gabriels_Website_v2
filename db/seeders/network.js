'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Networks', [
            {
                id: 1,
                clientName: "Trinity Siemer",
                businessName: "Inventive",
                roleAtBusiness: "Software Engineer",
                businessDescription: "Everything in tech but the manual computer",
                notes: "Someone you used to know",
                phone: "747-334-6748",
                email: "tsiemer@gmail.com",
                createdAt: new Date(),
                updatedAt: new Date()                
            },
            {
                id: 2,
                clientName: "Drake Siemer",
                businessName: "Inventive",
                roleAtBusiness: "Software Engineer",
                businessDescription: "Everything in tech but the manual computer",
                notes: "Something about the person and how to connect",
                phone: "661 916 2131",
                email: "dsiemer@gmail.com",
                createdAt: new Date(),
                updatedAt: new Date()                
            },
            {
                id: 3,
                clientName: "Reyes Salinas",
                businessName: "Inventive",
                roleAtBusiness: "Software Engineer",
                businessDescription: "Everything in tech but the manual computer",
                notes: "Something about the person and how to connect",
                phone: "no idea",
                email: "reyes.salinas@inventive.io",
                createdAt: new Date(),
                updatedAt: new Date()                
            }
        ], {});
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Networks', null, {});
    }
};