const AWS = require('aws-sdk');
const config = require('../config/database.js');



const createItem = function (req, res) {
    AWS.config.update(config.AWS_REMOTE_CONFIG);
    const dynamodb_client = new AWS.DynamoDB.DocumentClient();
    const Item = { ...req.body.item };
    const Table = { ...req.body.table}
    var params = {
        TableName: Table,
        Item: Item
    };

    // Call DynamoDB to add the item to the table
    dynamodb_client.put(params, function (err, data) {
        if (err) {
            res.send({
                success: false,
                message: err
            });
        } else {
            res.send({
                success: true,
                message: 'Item added',
                item: data
            });
        }
    });
}

const getItem = function (req, res) {
    AWS.config.update(config.config.AWS_REMOTE_CONFIG);

    const dynamodb_client = new AWS.DynamoDB.DocumentClient();
    const Table =  { ...req.body.item };
    const Key = { ...req.body.key}
    const params = {
        TableName:Table,
        Key:Key
        }

    };

    dynamodb_client.get(params, function (err, data) {

        if (err) {
            console.log(err)
            res.send({
                success: false,
                message: err
            });
        } else {
            const { Items } = data;
            res.send({
                success: true,
                movies: Items
            });
        }
    });



module.exports = {
    createItem,
    getItem,
    updateItem,
    deleteItem
}