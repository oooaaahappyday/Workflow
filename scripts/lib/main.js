requirejs.config({
    baseUrl: 'scripts/modules',
    paths: {
        lib: '../lib',
        jquery: '../lib/jquery'
    }
});
requirejs(['lib/jquery', 'getAge', 'ageComment', 'module'],
	function(jquery, getAge, ageComment, module) {
		// console.log(getAge.age());
		$(document).ready(function () {
			console.log(getAge.age);
			console.log(ageComment.comment());
		})
	},

	function (err) {
	    console.error('ERROR: ', err.requireType);
	    console.error('MODULES: ', err.requireModules);
	}
);

