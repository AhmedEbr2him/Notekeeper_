"use strict";

const addEventOnElement = function ($elements, $eventType, $callbackFunc) {
 $elements.forEach(($element) => {
  $element.addEventListener($eventType, $callbackFunc);
 });
};

const getGreetingMsg = function (currentHour) {
 const greeting =
  currentHour < 5
   ? "Night"
   : currentHour < 12
   ? "Morning"
   : currentHour < 15
   ? "Noon"
   : currentHour < 17
   ? "Afternoon"
   : currentHour < 20
   ? "Evening"
   : "Night";

 // else => return "Night"
 return `Good ${greeting}`;
};

/*--------------Active nav function--------------*/
/**
 * Activates a navigation item by adding the 'active' class
   and deactivates the previous active item
 */
let $lastActiveNavItem;
const activeNoteBookItems = function () {
 $lastActiveNavItem?.classList.remove("active");
 this.classList.add("active"); // this = $navItem
 $lastActiveNavItem = this;
};

/*--------------Make notebook field content editable and focus function--------------*/
/**
 * make a DOM element editable by setting the "contenteditable" attribute
   to 'true' and focusing in it. 
 */

const makeElementEditable = function ($element) {
 $element.setAttribute("contenteditable", true);
 $element.focus();
};
/*-------------- Generate ID function--------------*/
/** Generates a unique ID based on the current timestamp */
// * @return {string} a string representation of the current timestamp.
const generateID = function () {
 return new Date().getTime().toString();
};

export { addEventOnElement, getGreetingMsg, activeNoteBookItems, makeElementEditable, generateID };
