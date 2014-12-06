/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var card = new UI.Card({
  title: 'Open Sesame',
  body: 'Loading Status...',
  scrollable: true
});

var status = require('ajax');
status({ url: 'https://api.spark.io/v1/devices/54ff6f066667515118431567/status?access_token=fb1fd9f26a1acc89a28322cdbf81a3d78224ed68', 
         method:'post'
     },
 function(data) {
  // Success!
   console.log(data);
   if (data.return_value == 1){
     console.log('matched 1');
     card.body('Door is Open');
   } else {
     card.body('Door is Closed');
   }
  },
  function(error) {
  // Failure!
  console.log(error);
  }
);

card.show();

card.on('click', function(e) {
  var ajax = require('ajax');
  ajax({ url: 'https://api.spark.io/v1/devices/54ff6f066667515118431567/open?access_token=fb1fd9f26a1acc89a28322cdbf81a3d78224ed68', 
        method: 'post',
       },
  function(data) {
  // Success!
  console.log(data);
  },
  function(error) {
  // Failure!
  console.log(error);
  }
  );
  
  

});

// fb1fd9f26a1acc89a28322cdbf81a3d78224ed68
//https://api.spark.io/v1/devices/54ff6f066667515118431567/status


