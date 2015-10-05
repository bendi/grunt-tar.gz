/*
 * tar.gz
 * https://github.com/bendi/grunt-tar.gz
 *
 * Copyright (c) 2014 Marek Bedkowski.
 * Written by Marek Bedkowski - http://maracuya-jukebox.com
 * Licensed under the MIT license.
 */
"use strict";

module.exports = init;

var Targz = require("tar.gz"),
	_ = require("lodash");

function init(grunt) {

	grunt.registerMultiTask("targz", "Performs ungzipping stream", function () {
		if (!this.data) {
			return;
		}

		var compress = new Targz(),
			dataFiles = this.data.files,
			done = this.async(),
			files = getFiles(grunt, dataFiles),
			countDown = _.after(files.length, done);

		files.forEach(function (file) {
			compress.extract(file.src, grunt.config.process(file.target), function (err) {
				if (err) {
					grunt.util.warn(err);
					done(err);
				} else {
					countDown();
				}
			});
		});
	});
}

function getFiles(grunt, dataFiles) {
	var files = [];
	for (var dest in dataFiles) {
		if (!dataFiles.hasOwnProperty(dest)) {
			continue;
		}
		var filepath = dataFiles[dest];
		if (!grunt.file.exists(filepath)) {
			grunt.log.warn("Source file '" + filepath + "' not found.");
			continue;
		}
		files.push({
			src : filepath,
			target : dest
		});
	}
	return files;
}
