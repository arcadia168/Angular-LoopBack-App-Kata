var async = require('async');
module.exports = function (app) {
  //data sources
  var tempDb = app.dataSources.db;
  //create all models
  createContent(function (err) {
    console.log('> models created sucessfully');
  });

  //create content
  function createContent(cb) {
    tempDb.automigrate('Content', function (err) {
      if (err) return cb(err);
      var Content = app.models.Content;
      Content.create([
        {
          name: "Arrow",
          imagePath: "images/content_thumbs/arrow.jpg",
          type: "programme",
          rating: 5
        },
        {
          name: "You, Me & The Apocalypse",
          imagePath: "images/content_thumbs/you_me_and_the_apocalypse.jpg",
          type: "programme",
          rating: 3
        },
        {
          name: "Fargo",
          imagePath: "images/content_thumbs/fargo.jpeg",
          type: "movie",
          rating: 4
        },
        {
          name: "The Flash",
          imagePath: "images/content_thumbs/the_flash.jpg",
          type: "programme",
          rating: 5
        },
        {
          name: "The Big Bang Theory",
          imagePath: "images/content_thumbs/the_big_bang_theory.jpg",
          type: "programme",
          rating: 5
        },
        {
          name: "The Walking Dead",
          imagePath: "images/content_thumbs/the_walking_dead.jpeg",
          type: "programme",
          rating: 5
        },
        {
          name: "24",
          imagePath: "images/content_thumbs/24.jpg",
          type: "programme",
          rating: 3
        },
        {
          name: "The Simpsone",
          imagePath: "images/content_thumbs/the_simpsons.jpg",
          type: "programme",
          rating: 3
        },
        {
          name: "Jake 2.0",
          imagePath: "images/content_thumbs/jake_2.0.jpg",
          type: "programme",
          rating: 1
        },
        {
          name: "Star Wars Rebels",
          imagePath: "images/content_thumbs/star_wars_rebels.jpg",
          type: "programme",
          rating: 5
        }
      ], cb);
    });
  }
};
