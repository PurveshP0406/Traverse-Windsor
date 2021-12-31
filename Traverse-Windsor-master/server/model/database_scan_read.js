/*Scan Read operation of DynamoDB using client libraries*/

var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

tableName = "trending_places";

//(Testing function)
// scanItems(tableName)
//     .then(() => {
//         return scanItems(tableName);
//     })
//     .catch((err) => {
//         console.error('Read failed', err);
//     });

// Function to scan entire table in DynamoDB 
function scanItems(tableName)
{
    return new Promise((resolve, reject) => {
            // Initialize the DynamoDB client
            var dynamodb_client = new AWS.DynamoDB.DocumentClient();

            var params = {
                TableName:tableName
            };

            console.log("Reading Item");
            // Calling the scan function of DynamoDB 
            data = dynamodb_client.scan(params, function(err, data) {
                if (err) {
                    console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
                    reject(err);
                } else {
                    console.log("Item fetched", JSON.stringify(data, null, 2));
                    // Returns data (JSON body of the entire scanned table) to the calling module
                    resolve ({
                        "scanned_response": data
                    })

                }
            });
    });
}

// Export the function to be accessible to the server
module.exports = { scanItems };


