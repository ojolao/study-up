/* Your company delivers breakfast via autonomous quadcopter drones. And something mysterious has happened.

Each breakfast delivery is assigned a unique ID, a positive integer. When one of the company's 100 drones takes off with a delivery, the delivery's ID is added to an array, deliveryIdConfirmations. When the drone comes back and lands, the ID is again added to the same array.

After breakfast this morning there were only 99 drones on the tarmac. One of the drones never made it back from a delivery. We suspect a secret agent from Amazon placed an order and stole one of our patented drones. To track them down, we need to find their delivery ID.

Given the array of IDs, which contains many duplicate integers and one unique integer, find the unique integer.

The IDs are not guaranteed to be sorted or sequential. Orders aren't always fulfilled in the order they were received, and some deliveries get cancelled before takeoff. */

function findUniqueInt(array) {
  //use an object to store values so far
  //iterate through the array
    //if a value is duplicated, remove it from the checker
  //return the value remaining
  const checker = {};
  let output;

  for (let i = 0; i < array.length; i++) {
    if (checker[array[i]]) { // if current value has been stored already
      delete checker[array[i]];
    } else {
      checker[array[i]] = 1;
    }
  }
  output = Object.entries(checker);
  return parseInt(output[0][0], 10); // if there is only one duplicate, this should work
}
