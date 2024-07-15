function iPhone3(ASIN, color, display, camera, bluetooth) {
    // Initialize properties using .call()
    this.ASIN = ASIN;
    this.color = color;
    this.display = display;
    this.camera = camera;
    this.bluetooth = bluetooth;

    // Methods defined on the prototype for memory efficiency
    this.dial = function() {
        return "tring.. tring...";
    };

    this.sendMessage = function() {
        return "Sending message...";
    };

    this.cameraClick = function() {
        return "Camera clicked";
    };

    this.connectBluetooth = function() {
        return "Bluetooth connected successfully...";
    };
}


let i3 = {};
iPhone3.call(i3, "B09X67JBQV", "Gray", 7.8, "2.0 MP", "Bluetooth 5.1");

// Accessing properties
console.log(i3.ASIN); // Outputs: "B09X67JBQV"
console.log(i3.color); // Outputs: "Gray"
console.log(i3.display); // Outputs: 7.8
console.log(i3.camera); // Outputs: "2.0 MP"
console.log(i3.bluetooth); // Outputs: "Bluetooth 5.1"

// Invoking methods
console.log(i3.dial()); // Outputs: "tring.. tring..."
console.log(i3.sendMessage()); // Outputs: "Sending message..."
console.log(i3.cameraClick()); // Outputs: "Camera clicked"
console.log(i3.connectBluetooth()); // Outputs: "Bluetooth connected successfully..."
