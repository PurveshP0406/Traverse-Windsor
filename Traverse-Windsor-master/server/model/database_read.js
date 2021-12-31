/*Read operation of DynamoDB using client libraries*/

var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

//Load the data (Testing purposes)
var event = require('../data/events.json');
var tableName = "trending_places"

// Testing the read function in DynamoDB 
readItems(event.event_id, tableName)
    .then(() => {
        return readItems(event.event_id, tableName);
    })
    .catch((err) => {
        console.error('Read failed', err);
    });

// Function to read items in DynamoDB 
function readItems(key, tableName)
{
    return new Promise((resolve, reject) => {
            // Initialize the DynamoDB client
            var dynamodb_client = new AWS.DynamoDB.DocumentClient();

            var params = {
                TableName:tableName,
                Key:{
                    // Partition key of the table
                    "place_id": key
                }
            };

            console.log("Reading Item");

            // Calling the get function of DynamoDB 
            dynamodb_client.get(params, function(err, data) {
                if (err) {
                    console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
                    reject(err);
                } else {
                    console.log("Item fetched", JSON.stringify(data, null, 2));

                }
            });
    });
}

// Export the function to be accessible to the server
module.exports = { readItems };