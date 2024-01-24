//complete the functions below to make this system operational.

let dmvQueue = [];

function addCustomer() {
    let name = prompt("Welcome to the DMV! What is your name?");
    // use the push method to add the name to the dmvQueue array.
    dmvQueue.push(name);
    alert("Customer " + name + " has been added to the queue.");
}

function callNextCustomer() {
    if (dmvQueue.length > 0) {
        // use the shift method to remove the first person in the array, and assign this method to a variable called "nextCustomer".
        let nextCustomer = dmvQueue.shift();
        alert("Now serving customer: " + nextCustomer);
    } else {
        alert("The queue is currently empty.");
    }
}

function displayQueue() {
    if (dmvQueue.length > 0) {
        // create an alert message that uses the join method to display the list of people currently waiting in the queue.
        alert(dmvQueue.join("--"))

    } else {
        alert("The queue is currently empty.");
    }
}