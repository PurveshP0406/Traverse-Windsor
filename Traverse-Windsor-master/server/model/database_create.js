/*Create operation of DynamoDB using client libraries*/

var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-1",
});

// Load the data (This is for testing purposes)
var place = require('../data/trending_places.json');
var tableName = "trending_places"

// Testing the create function in DynamoDB 
putItems(place, tableName)
    .then(() => {
        return putItems(place, tableName);
    })
    .catch((err) => {
        console.error('Insert failed', err);
    });


// Function to create items in DynamoDB 
function putItems(item, tableName)
{
    return new Promise((resolve, reject) => {
            // Initialize the DynamoDB client
            var dynamodb_client = new AWS.DynamoDB.DocumentClient();

            var params = {
                TableName:tableName,
                Item:item
            };

            console.log("Adding new Item");
            // Calling the put function of DynamoDB 
            dynamodb_client.put(params, function(err, data) {
                if (err) {
                    console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
                    reject(err);
                } else {
                    console.log("Added item:", JSON.stringify(data, null, 2));
                }
            });
    });
}