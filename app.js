// app.js
angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';     // set the default search/filter term
  
  // create the list of sushi rolls 
  $scope.sushi = [

    { name: 'grey', fish: 'Ricky', tastiness: 67 },

    { name: 'mark, fish: 'CR7', tastiness: 78 },
    { name: 'christina', fish: 'Ronaldo', tastiness: 80 },
    { name: 'cricketer', fish: 'messi', tastiness: 83 },
    
  ];
  
});
