var News = require('../models/news');
var jwt = require('jsonwebtoken');
var multer = require('multer');
var fs = require('fs');
var dateFormat = require('dateformat');



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/newsImages')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

var upload = multer({ storage: storage })


module.exports = function (router) {



    //store image in db

    router.post('/news', upload.any(), function (request, response) {
        
        var news = new News();

        news.newsTitle  = request.body.newsTitle ;
        news.newsDate   = request.body.newsDate ;
        news.place      =  request.body.place ;
        news.article    = request.body.article ;
        // news.newsImages = request.body.TheImages ;
        // news.sponsers   = request.body.sponsers;

        
        for(var i = 0 ; i < request.files.length ; i++)
        {

            if(request.files[i].fieldname == "TheImages")
                news.newsImages.push({ path : request.files[i].path });
            else if(request.files[i].fieldname == "sponsers")
                news.sponsers.push(request.files[i].path);

        }

        news.save(function(error , news){
            if(error)   response.json({success : false , message : error });
            else
                response.json({success : true , message : news})
        })
    
    })


    // get the news

    router.get('/newsData' , function(request , response){


        var theImages  = [];
        var theSponsers = [] ;

        News.find({} , function(error , news ){
            if(error)   console.log(error);
            else
            {
                for(var j= 0 ;  j < news[0].newsImages.length ; j++ )
                {
                    theImages.push({path:  fs.readFileSync(news[0].newsImages[j].path).toString('base64'),imageDes : news[0].newsImages[j].imageDes});
                }

                for(var j= 0 ;  j < news[0].sponsers.length ; j++ )
                {
                    theSponsers.push(fs.readFileSync(news[0].sponsers[j]).toString('base64'))
                }

                var formattedDate = dateFormat( news[0].newsDate , "longDate");
                console.log(news[0].newsDate)

                response.json({success : true , message : news[0] , newsImages : theImages , newsSponsers :  theSponsers , Date : formattedDate });

            }
        })

    })


  
    return router;
}