'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])

.factory('pagesFactory', ['$http', function($http){

	return{
		getPages: function(){
			return $http.get('/api/pages');
		},
		savePage: function(pageData){
			var id = pageData._id;

			if (id === 0){
				return $http.post('/api/pages/add', pageData);
			} else{
				return $http.post('/api/pages/update', pageData);
			}
		},
		deletePage: function(id){
			return $http.get('/api/pages/delete' + id);
		},
		getAdminPageContent: function
	}
}])
  value('version', '0.1');
