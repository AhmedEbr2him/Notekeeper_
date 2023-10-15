"use strict";

/**
 * Attaches a tooltip behavior to given DOM element.
 * When the element is hovered over , a tooltip with the specified content is displayed
 * The tooltip is automatically positioned below the element
 */

export const Tooltip = function ($element) {
 // Create tooltip span instead of the one in HTML content

 const $tooltip = document.createElement("span");
 $tooltip.classList.add("tooltip", "text-body-small");

 $element.addEventListener("mouseenter", function () {
  $tooltip.textContent = this.dataset.tooltip;

  //Set the values of top and left for tooltip
  const { top, left, width, height } = this.getBoundingClientRect();
  $tooltip.style.top = top + height + 4 + "px";
  $tooltip.style.left = left + width / 2 + "px";
  $tooltip.style.transform = "translate(-50%,0)";
  document.body.appendChild($tooltip);
 });

 // Remove event when mouse leave

 $element.addEventListener("mouseleave", $tooltip.remove.bind($tooltip));
};
