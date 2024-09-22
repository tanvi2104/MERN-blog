const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const { MongoClient } = require("mongodb");


//initialize middleware
app.use(express.json({extended: false }));

app.get('/api/articles/:name', (req,res) => {
	const articleName = req.params.name;
	const client = MongoClient.connect('mongodb://localhost:27017')
	const db = client.db("mernblog")
	const articleInfo = db.collection('articles').findOne({name: articleName})
	client.close();
});

//if we kill the server and restart it only one comment will show, 
//2the latest one not all from the past cause the server updates everytime
app.post('/api/articles/:name/add-comments', (req,res)=>{
	const {username, text} =req.body;
	const articleName = req.params.name;
	articlesInfo[articleName].comments.push({username,text})
	res.status(200).send(articlesInfo[articleName]);
});

app.listen(8000, () => console.log(`Server started at ${PORT}`));

