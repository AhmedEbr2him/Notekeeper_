"use strict";

/*-------------- Third=> Toggle theme function --------------*/
/**
 * Toggle the theme between 'light' and 'dark'.
 * Manage the theme setting in the DOM and local storage.
 */

const toggleTheme = function () {
 // Get current theme attribute
 const currentTheme = document.documentElement.getAttribute("data-theme") || "light";

 const newTheme = currentTheme === "light" ? "dark" : "light";

 //  set new theme as Attribute on document;
 document.documentElement.setAttribute("data-theme", newTheme);

 // set new theme in local storage
 localStorage.setItem("theme", newTheme);
};

/*-------------- First=> Initialize the theme --------------*/
const storedTheme = localStorage.getItem("theme"); // Return {Null};

const systemThemeIsDark = window.matchMedia("(prefers-color-scheme:dark)").matches; // Return {true / false}

const initialTheme = storedTheme ?? (systemThemeIsDark ? "dark" : "light");
// ?? = || {or operator}
// initialTheme => return stored theme form local storage or chrome system theme

document.documentElement.setAttribute("data-theme", initialTheme);

/*-------------- Second=> Attach toggleTheme to theme button click event --------------*/
window.addEventListener("DOMContentLoaded", function () {
 const $themeBtn = document.querySelector("[data-theme_btn]");

 if ($themeBtn) $themeBtn.addEventListener("click", toggleTheme);
});
