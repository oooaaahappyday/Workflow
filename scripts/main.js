requirejs.config({
    baseUrl: 'scripts/modules',
    paths: {
        lib: '../lib'
    }
});
requirejs(['lib/jquery', 'getAge', 'ageComment', 'module'],
	function(jquery, getAge, ageComment, module) {
		console.log(module.nombre);
		console.log(getAge.age);
	},

	function (err) {
	    console.error('ERROR: ', err.requireType);
	    console.error('MODULES: ', err.requireModules);
	}
);

