var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment"); 
 
var data = [
    {
    name : "Snow Mountain", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpjyXNkQyPAlWM61-jyTKhJOk1y9Vt27Bsc6MI_KTZL5JIqU",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat libero sed scelerisque aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum quis interdum ipsum, vel lobortis nulla. Pellentesque quis elit augue. Ut ultrices quam mauris, ac volutpat felis gravida ornare. Suspendisse viverra et purus sed interdum. Donec egestas eget est eu lacinia. Duis maximus a nibh eget finibus. Integer maximus scelerisque nibh ac iaculis. Duis convallis est id ligula vehicula, eget hendrerit arcu dignissim. Integer venenatis ex augue, ac aliquet purus hendrerit vel. Integer ac porta justo, nec pulvinar sem."
        
    },

    
     {
    name : "Desert Mountain", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpjyXNkQyPAlWM61-jyTKhJOk1y9Vt27Bsc6MI_KTZL5JIqU",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat libero sed scelerisque aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum quis interdum ipsum, vel lobortis nulla. Pellentesque quis elit augue. Ut ultrices quam mauris, ac volutpat felis gravida ornare. Suspendisse viverra et purus sed interdum. Donec egestas eget est eu lacinia. Duis maximus a nibh eget finibus. Integer maximus scelerisque nibh ac iaculis. Duis convallis est id ligula vehicula, eget hendrerit arcu dignissim. Integer venenatis ex augue, ac aliquet purus hendrerit vel. Integer ac porta justo, nec pulvinar sem."
        
    },

    
     {
    name : "Ice Mountain", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpjyXNkQyPAlWM61-jyTKhJOk1y9Vt27Bsc6MI_KTZL5JIqU",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat libero sed scelerisque aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum quis interdum ipsum, vel lobortis nulla. Pellentesque quis elit augue. Ut ultrices quam mauris, ac volutpat felis gravida ornare. Suspendisse viverra et purus sed interdum. Donec egestas eget est eu lacinia. Duis maximus a nibh eget finibus. Integer maximus scelerisque nibh ac iaculis. Duis convallis est id ligula vehicula, eget hendrerit arcu dignissim. Integer venenatis ex augue, ac aliquet purus hendrerit vel. Integer ac porta justo, nec pulvinar sem."
        
    }

];

 

function seedDB(){
    //removes all capgrounds   
    Campground.remove({}, function(err){
   if(err){
       console.log(err);
   } 
    console.log("Removed Campgrounds!");    
    
    //add a few campgrounds
    data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err){
                 console.log(err);
            } else {
                console.log("added a campground");
              //  create a comment
                Comment.create(
                    {
                        text: "This place is great, but there was no internet",   
                        author: "Homer"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                         } else {
                        campground.comments.push(comment);
                        campground.save();
                        console.log("created new comment");
                        }
                    });
            }
        });
    });  
});
    
   //add a few comments
    
}

module.exports = seedDB;