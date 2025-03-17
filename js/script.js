// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Displays basic info from variables
 */
function enterClicked() {
  // input
  const firstName = document.getElementById("first-name").value
  const userAge = parseInt(document.getElementById("age-entered").value)
  // output
  document.getElementById("user-info").innerHTML =
    "Your info is: " + firstName + ", " + userAge + "."
}
