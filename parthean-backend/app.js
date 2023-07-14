const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const {MongoClient} = require('mongodb'); 

const port = 8080;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(port);

console.log(`server started on port: ${port}`);

app.get('/benefits/:cardName', (req, res) => {
    cardBenefitsHandler(req, res);
})

async function cardBenefitsHandler(req, res) {
    const cardName = req.params.cardName.toLowerCase().trim();

    const db_uri = "mongodb://root:test@parthean_db:27017/test"
    const client = new MongoClient(db_uri);

    try {
        await client.connect();
        const cards = await client.db("test").collection("creditCards").findOne(
            {
                $or: [
                    {full_name: cardName},
                    {short_name: cardName}
                ]
            }
        );
        
        if (cards) {
            res.json(cards);
        } else {
            handleError(res, 400, "Card is not found. Check the spelling and remember to include spaces");
        }
        
    } catch(e) {
        console.error(e);
        handleError(res, 500, `Error connecting to the db: ${e}`);
    } finally {
        await client.close();
    }

}

function handleError(res, status, message) {
    res.status(status).send(message);
}