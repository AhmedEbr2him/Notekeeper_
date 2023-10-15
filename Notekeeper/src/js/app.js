"use strict";

/**
 * Module import
 */
import { addEventOnElement, getGreetingMsg, activeNoteBookItems, makeElementEditable } from "./utils.js";
import { Tooltip } from "./components/Tooltip.js";

/**
 * Toggle sidebar in small screen
 */
const $sidebar = document.querySelector("[data-sidebar]");
const $sidebarTogglers = document.querySelectorAll("[data-sidebar_toggler]"); /* {Array<HTML Element>} */
const $overlay = document.querySelector("[data-sidebar_overlay]");

addEventOnElement($sidebarTogglers, "click", function () {
 $sidebar.classList.toggle("active");
 $overlay.classList.toggle("active");
});

/**
 * Show greeting message on homepage
 */

const $greetinEle = document.querySelector("[data-greeting]");

// Get current time
const currentHour = new Date().getHours();

$greetinEle.textContent = getGreetingMsg(currentHour);

/**
 * Show current data message on homepage
 */

const $currentDataEle = document.querySelector("[data-current_data]");

const currentDataNow = new Date().toDateString().replace(" ", ",");

$currentDataEle.textContent = currentDataNow;

/**
 * Initilize tooltip behavior for all DOM elements with '[data-tooltip]' attribute.
 */

const $tooltipEle = document.querySelectorAll("[data-tooltip]");

$tooltipEle.forEach(($ele) => Tooltip($ele));

/**
 * Notebook create field
 */

const $sidebarList = document.querySelector("[data-sidebar_list]");
const $addNoteBtn = document.querySelector("[data-add_notebook]");

// add new notebook field function dynamically
const showNotebookField = function () {
 const $navItem = document.createElement("div");
 $navItem.classList.add("nav_item");
 $navItem.innerHTML = `
  <span class="text text-label-large" data-notebook_field></span>
  <div class="state_layer"></div>
 `;

 $sidebarList.appendChild($navItem);

 const $navItemField = document.querySelector("[data-notebook_field]");

 // Active new created notebook and deactive the last one.
 activeNoteBookItems.call($navItem);

 // Make notebook field content editable and focus.
 makeElementEditable($navItemField);
};

$addNoteBtn.addEventListener("click", showNotebookField);
