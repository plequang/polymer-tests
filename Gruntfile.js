/*global module:false*/
'use strict';
var mountFolder = function (connect, dir) {
		return connect.static(require('path').resolve(dir));
	};
module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 9001,
					keepalive: true,
					middleware: function (connect) {
						return [
							mountFolder(connect, 'app')
						];
					}
				}
			}
		}
	});


	// Default task.
	grunt.registerTask('default', ['connect:server']);

};
