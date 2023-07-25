"use strict";
const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $list = document.querySelector("#list");
$button.addEventListener("click", () => {
    const $item = document.createElement("p");
    $item.innerText = $input.value;
    $input.value = "";
    $list.appendChild($item);
});
$input.addEventListener("keypress", (e) => {
    if (e.key !== "Enter")
        return;
    const $item = document.createElement("p");
    $item.innerText = $input.value;
    $input.value = "";
    $list.appendChild($item);
});
