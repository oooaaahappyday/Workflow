requirejs.config({
    baseUrl: 'scripts/modules',
    paths: {
        jquery: '../lib/jquery'
    }
});
requirejs(['jquery', 'getAge', 'ageComment', 'module'],
	function($, getAge, ageComment, module) {
		// console.log(getAge.age());
		$(document).ready(function () {
			var $ageField = $('#age');
			var $submit = $('#submit');
			$submit.on('click', function () {
				var age = $ageField.val();
				getAge.age = age;
				console.log("age : "+age);
				ageComment.comment();
			});
		});
	},

	function (err) {
	    console.error('ERROR: ', err.requireType);
	    console.error('MODULES: ', err.requireModules);
	}
);

