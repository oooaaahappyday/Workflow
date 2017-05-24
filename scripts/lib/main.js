requirejs.config({
    baseUrl: 'scripts/modules',
    paths: {
        lib: '../lib',
        jquery: '../lib/jquery'
    }
});
requirejs(['jquery', 'getAge', 'ageComment', 'module'],
	function($, getAge, ageComment, module) {
		// console.log(getAge.age());
		$(document).ready(function () {
			var $ageField = $('#age');
			var $submit = $('#submit');
			console.log($submit);
			$submit.on('click', function () {
				var age = $ageField.val();
				getAge.age = age;
				console.log("age : "+age);
				ageComment.comment();
			});
			// console.log(getAge.age);
			// console.log(ageComment.comment());
		});
	},

	function (err) {
	    console.error('ERROR: ', err.requireType);
	    console.error('MODULES: ', err.requireModules);
	}
);

