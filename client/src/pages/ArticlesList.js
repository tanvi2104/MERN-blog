import React from 'react'
import articlecontent from './article-content.js';
import Articles from "../components/Articles.js";


const ArticlesList = () => {
	return (
		<div className='mb-20 '> 
			<h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>Article List</h1>
			<div className='container py-4 mx-auto'>
				<div className='flex flex-wrap -m-4'>
					 <Articles articles={articlecontent} />
				</div>
			</div>
		</div>
	)
}

export default ArticlesList;