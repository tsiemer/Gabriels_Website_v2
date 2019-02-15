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
                headerLink: "NULL",
                imgUrl: "image url",
                quote: "NULL",
                content:  "Since this will be one of many posts about what I am thinking about, I will make this somewhat short. As I sit here and I am writing this, I am reflecting on my thoughts on how much I think about the culture I live. I have pressure from all directions. I have to be an excellent father, a kind and understanding boyfriend that can offer the world, have a fit body, eat well (but not to healthy), what car do I drive, clothes that I wear, and what is my title at said company. The list goes on and on. I know I am not speaking from a lonely island that nobody can relate with me. I am also not looking for people to agree or disagree. I am stating this to say. I am going to try every day to make sure I make decisions off my own accord. I will be doing things I enjoy, wearing clothes I like to wear and eat what I want to eat. I was thinking about the last time I sat down with my then 7-year-old son. I asked him. 'How can I do better as a dad?' literally that is all I said. Then I sat there and waited. It took him a while to realize this was not a question that I was going to answer for him. He looked at me with loving eyes and said. 'When you are around me, can you just be with me?' I asked him to clarify what this meant. He said to me. 'When you are with me, your also thinking about things, or looking at your phone.' This statement killed me inside to know that my 7-year-old is just simply asking me for the time that is his. Not shared with the world. Until next time. ~ Gabriel Krizin ", // Blog Content
                createdAt: new Date(),
                updatedAt: new Date()                
            },
            {
                id: 2,
                blogType: "aboutMe",
                title: "aboutMe",
                subtitle: "aboutMe",
                headerLink: "NULL",
                imgUrl: "image url",
                quote: "NULL",
                content:  "Since this will be one of many posts about what I am thinking about, I will make this somewhat short. As I sit here and I am writing this, I am reflecting on my thoughts on how much I think about the culture I live. I have pressure from all directions. I have to be an excellent father, a kind and understanding boyfriend that can offer the world, have a fit body, eat well (but not to healthy), what car do I drive, clothes that I wear, and what is my title at said company. The list goes on and on. I know I am not speaking from a lonely island that nobody can relate with me. I am also not looking for people to agree or disagree. I am stating this to say. I am going to try every day to make sure I make decisions off my own accord. I will be doing things I enjoy, wearing clothes I like to wear and eat what I want to eat. I was thinking about the last time I sat down with my then 7-year-old son. I asked him. 'How can I do better as a dad?' literally that is all I said. Then I sat there and waited. It took him a while to realize this was not a question that I was going to answer for him. He looked at me with loving eyes and said. 'When you are around me, can you just be with me?' I asked him to clarify what this meant. He said to me. 'When you are with me, your also thinking about things, or looking at your phone.' This statement killed me inside to know that my 7-year-old is just simply asking me for the time that is his. Not shared with the world. Until next time. ~ Gabriel Krizin ", // Blog Content
                createdAt: new Date(),
                updatedAt: new Date()               
            },
            {
                id: 3,
                blogType: "foodForThought",
                title: "Purple Hair",
                subtitle: "My first experience dying hair",
                headerLink: "NULL",
                imgUrl: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                quote: "NULL",
                content:  "A little story about my first hair dye experience....", // Blog Content
                createdAt: new Date(),
                updatedAt: new Date()               
            },
            {
                id: 4,
                blogType: "foodForThought",
                title: "Ocean",
                subtitle: "My love for the Ocean",
                headerLink: "NULL",
                imgUrl: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                quote: "NULL",
                content:  "Lorem Ipsum....", // Blog Content
                createdAt: new Date(),
                updatedAt: new Date()               
            },
            {
                id: 5,
                blogType: "foodForThought",
                title: "Camping",
                subtitle: "The joys of camping with friends",
                headerLink: "NULL",
                imgUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                quote: "NULL",
                content:  "Lorem Ipsum....", // Blog Content
                createdAt: new Date(),
                updatedAt: new Date()               
            },
            {
                id: 6,
                blogType: "foodForThought",
                title: "Baking",
                subtitle: "Baking is Amazing!",
                headerLink: "NULL",
                imgUrl: "https://images.unsplash.com/photo-1518737003272-dac7c4760d5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                quote: "NULL",
                content:  "Lorem Ipsum....", // Blog Content
                createdAt: new Date(),
                updatedAt: new Date()               
            },
            {
                id: 7,
                blogType: "foodForThought",
                title: "Piano",
                subtitle: "My experience with Piano",
                headerLink: "NULL",
                imgUrl: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                quote: "NULL",
                content:  "Lorem Ipsum....", // Blog Content
                createdAt: new Date(),
                updatedAt: new Date()               
            },
            {
                id: 8,
                blogType: "foodForThought",
                title: "Vegetables on Cutting Board",
                subtitle: "Knife Skills",
                headerLink: "NULL",
                imgUrl: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                quote: "NULL",
                content:  "Lorem Ipsum....", // Blog Content
                createdAt: new Date(),
                updatedAt: new Date()               
            },
            {
                id: 9,
                blogType: "foodForThought",
                title: "Fitness",
                subtitle: "Keeping yourself Lean",
                headerLink: "NULL",
                imgUrl: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                quote: "NULL",
                content:  "Lorem Ipsum....", // Blog Content
                createdAt: new Date(),
                updatedAt: new Date()               
            },
            {
                id: 10,
                blogType: "foodForThought",
                title: "Paintball",
                subtitle: "Doing paintball with the Fam",
                headerLink: "NULL",
                imgUrl: "https://images.unsplash.com/photo-1507495613330-9927aafc98e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
                quote: "NULL",
                content:  "Lorem Ipsum....", // Blog Content
                createdAt: new Date(),
                updatedAt: new Date()               
            },
            {
                id: 11,
                blogType: "foodForThought",
                title: "OCR",
                subtitle: "Obstacle Course Races",
                headerLink: "NULL",
                imgUrl: "https://images.unsplash.com/photo-1522866348293-55be2c6caa1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                quote: "NULL",
                content:  "The joy of crawling through mud for hours.... :)", // Blog Content
                createdAt: new Date(),
                updatedAt: new Date()               
            }
        ], {});
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Blogs', null, {});
    }
};