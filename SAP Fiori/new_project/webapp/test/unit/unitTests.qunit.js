/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"appcustomers/new_project/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
