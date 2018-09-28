'use strict';

// blogTypes : 'aboutMe', 'myThoughts', 'doneAndDoing', 'foodForThought', 'wayIDoThings'

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Blogs', [
            {
                id: 1,
                blogType: "myThoughts",
                title: "my Thoughts",
                subtitle: "thoughts",
                headerLink: "href",
                imgUrl: "image url",
                quote: "image url",
                content:  "Since this will be one of many posts about what I am thinking about, I will make this somewhat short. As I sit here and I am writing this, I am reflecting on my thoughts on how much I think about the culture I live. I have pressure from all directions. I have to be an excellent father, a kind and understanding boyfriend that can offer the world, have a fit body, eat well (but not to healthy), what car do I drive, clothes that I wear, and what is my title at said company. The list goes on and on. I know I am not speaking from a lonely island that nobody can relate with me. I am also not looking for people to agree or disagree. I am stating this to say. I am going to try every day to make sure I make decisions off my own accord. I will be doing things I enjoy, wearing clothes I like to wear and eat what I want to eat. I was thinking about the last time I sat down with my then 7-year-old son. I asked him. 'How can I do better as a dad?' literally that is all I said. Then I sat there and waited. It took him a while to realize this was not a question that I was going to answer for him. He looked at me with loving eyes and said. 'When you are around me, can you just be with me?' I asked him to clarify what this meant. He said to me. 'When you are with me, your also thinking about things, or looking at your phone.' This statement killed me inside to know that my 7-year-old is just simply asking me for the time that is his. Not shared with the world. Until next time. ~ Gabriel Krizin ", // Blog Content
                createdAt: new Date(),
                updatedAt: new Date()                
            },
            {
                id: 2,
                blogType: "aboutMe",
                title: "aboutMe",
                subtitle: "aboutMe",
                headerLink: "href",
                imgUrl: "image url",
                quote: "image url",
                content:  "Since this will be one of many posts about what I am thinking about, I will make this somewhat short. As I sit here and I am writing this, I am reflecting on my thoughts on how much I think about the culture I live. I have pressure from all directions. I have to be an excellent father, a kind and understanding boyfriend that can offer the world, have a fit body, eat well (but not to healthy), what car do I drive, clothes that I wear, and what is my title at said company. The list goes on and on. I know I am not speaking from a lonely island that nobody can relate with me. I am also not looking for people to agree or disagree. I am stating this to say. I am going to try every day to make sure I make decisions off my own accord. I will be doing things I enjoy, wearing clothes I like to wear and eat what I want to eat. I was thinking about the last time I sat down with my then 7-year-old son. I asked him. 'How can I do better as a dad?' literally that is all I said. Then I sat there and waited. It took him a while to realize this was not a question that I was going to answer for him. He looked at me with loving eyes and said. 'When you are around me, can you just be with me?' I asked him to clarify what this meant. He said to me. 'When you are with me, your also thinking about things, or looking at your phone.' This statement killed me inside to know that my 7-year-old is just simply asking me for the time that is his. Not shared with the world. Until next time. ~ Gabriel Krizin ", // Blog Content
                createdAt: new Date(),
                updatedAt: new Date()               
            }
        ], {});
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Blogs', null, {});
    }
};