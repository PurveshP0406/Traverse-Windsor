/*Update operation of DynamoDB using client libraries*/

var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

// Load the data
// var place = require('../data/trending_places.json');
// var tableName = "trending_places";
// var increment = 7;

// updateItems(place, tableName, increment)
//     .then(() => {
//         return updateItems(place, tableName, increment);
//     })
//     .catch((err) => {
//         console.error('Update failed', err);
//     });

// Function to update check-ins for Trending Places Feature
function update_check_in(key, tableName, increment)
{
    return new Promise((resolve, reject) => {
            // Initialize the DynamoDB client
            var dynamodb_client = new AWS.DynamoDB.DocumentClient();

            var params = {
                TableName:tableName,
                Key:{
                    // Partition key for the table
                    "place_id": key
                },
                // Update query expression for number of check-ins
                UpdateExpression: "set check_in = check_in + :val",
                ExpressionAttributeValues:{
                         ":val": increment
                 },
                ReturnValues:"UPDATED_NEW"
            };

            console.log("Updating Item");
            // Fetching the updates value after increment of check-in
            data = dynamodb_client.update(params, function(err, data) {
                if (err) {
                    console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
                    reject(err);
                } else {
                    console.log("Item Updated", JSON.stringify(data, null, 2));

                }
                // Returns data (JSON body of the entire scanned table) to the calling module
                resolve ({
                    "updated_item": data
                })
            
            });
    });
}

// Function to update likes for Trending Places Feature
function update_like(key, tableName, increment)
{
    return new Promise((resolve, reject) => {
            // Initialize the DynamoDB client
            var dynamodb_client = new AWS.DynamoDB.DocumentClient();

            var params = {
                TableName:tableName,
                Key:{
                    // Partition key for the table
                    "place_id": key
                },
                // Increment query expression for likes
                UpdateExpression: "set likes = likes + :val",
                ExpressionAttributeValues:{
                         ":val": increment
                 },
                ReturnValues:"UPDATED_NEW"
            };

            console.log("Updating Item");
            // Fetching the updates value after increment of check-in
            data = dynamodb_client.update(params, function(err, data) {
                if (err) {
                    console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
                    reject(err);
                } else {
                    console.log("Item Updated", JSON.stringify(data, null, 2));

                }
                // Returns data (JSON body of the entire scanned table) to the calling module
                resolve ({
                    "updated_item": data
                })
            
            });
    });
}


module.exports = { update_like};




