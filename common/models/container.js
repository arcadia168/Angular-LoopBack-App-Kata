var xml2js = require('xml2js');
var fs = require('fs');
var _ = require('underscore');

module.exports = function(Container) {

  //ASSUMES XML FILE FORMAT IS CONSTANT AND VALID

  //after upload in here
  Container.afterRemote('upload', function (ctx, unused, next) {

    // ASSUMPTION #1 we only get one file at a time
    // ASSUMPTION #2 user only uploads a valid XML file
    console.log("Recieved a file upload, beginning post processing.");

    var uploadedFile = ctx.result.result.files.file[0];

    var parser = new xml2js.Parser();
    fs.readFile('server/storage/xml_content_upload/' + uploadedFile.name, function(err, data) {
      parser.parseString(data, function (err, result) {

        //check data was valid
        if (result.programme_data) {

          //process the xml data into new models
          var newContentItems = result.programme_data;

          var newParsedContent = [];

          //get Content model
          var Content = Container.app.models.Content;

          //iterate over supplied content items
          if (newContentItems.programme) {

            _.forEach(newContentItems.programme, function(newProgramme) {

              //construct new content item
              var newContentItem = {
                id : newProgramme.$.id,
                type: 'programme',
                name: newProgramme["Programme_" + newProgramme.$.id][0].name[0],
                imagePath: newProgramme["Programme_" + newProgramme.$.id][0].image_path[0],
                rating: 1
              };

              newParsedContent.push(newContentItem);
            });
          }

          if (newContentItems.movie) {

            _.forEach(newContentItems.movie, function(newProgramme) {

              //construct new content item
              var newContentItem = {
                id : newProgramme.$.id,
                type: 'movie',
                name: newProgramme["Programme_" + newProgramme.$.id][0].name[0],
                imagePath: newProgramme["Programme_" + newProgramme.$.id][0].image_path[0],
                rating: 1
              };

              newParsedContent.push(newContentItem);
            });

          }

          //Now create the new content items
          Content.create(newParsedContent, function(err) {
            console.log('> uploaded xml models sucessfully created and persisted');
            ctx.res.status(200).end();
          });

        } else {

          //user supplied invalid xml file
          cts.res.status(403).jsonp({error: "Invalid content file uploaded"})
        }

      });
    });
  });
};
