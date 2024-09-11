const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const articlesInfo = {
	"learn-react": {
		comments: [],
	},
	"learn-node": {
		comments: [],
	},
	"thoughts": {
		comments: [],
	}
};

//initialize middleware
app.use(express.json({extended: false }));

//if we kill the server and restart it only one comment will show, 
//2the latest one not all from the past cause the server updates everytime
app.post('/api/articles/:name/add-comments', (req,res)=>{
	const {username, text} =req.body
	const articleName = req.params.name
	articlesInfo[articleName].comments.push({username,text})
	res.status(200).send(articlesInfo[articleName]);
});

app.listen(8000, () => console.log(`Server started at ${PORT}`));

