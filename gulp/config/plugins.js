import replace from "gulp-replace"; //Search and replace
import plumber from "gulp-plumber"; // Errors handler
import notify from "gulp-notify"; // Err messages
import browsersync from "browser-sync"; // Local server
import newer from "gulp-newer"; // Update check(images)
import ifPlugin from "gulp-if"; // if Plugin



export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browsersync: browsersync,
	newer: newer,
	if: ifPlugin,
}