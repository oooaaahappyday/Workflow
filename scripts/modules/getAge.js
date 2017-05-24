define (['jquery'], function($) {
	var userAge = function () {
		var $age = $('#userAge').text();
		return $age;
	}
	return {
		age : userAge
	};
});


// define (['jquery'], function($) {
// 	var $ageField = $('#submit');
// 	var userAge = $ageField.on('click', function () {
// 		var $age = $(this).text();
// 		userAge = $age;
// 	});
// 	return {
// 		age : userAge
// 	};
// });