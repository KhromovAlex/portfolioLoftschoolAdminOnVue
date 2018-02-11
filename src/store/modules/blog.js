const blog = {
	state: {
		articles: [
			'ololo'
		]
	},
	mutations: {
		updateArticleTitle (state, message) {
			state.articles.title = message
		},
		updateArticleData (state, message) {
			state.articles.data = message
		},
		updateArticleText (state, message) {
			state.articles.text = message
		}
	},
	actions: {
		addArticle({state}) {
			return fetch('/admin/blog/add', {
				method: 'POST',
				body: state.articles
			})
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	}
};

export default blog