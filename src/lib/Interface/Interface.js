function Interface(name, properties) {
    this.name = name
    this.properties = [...properties]
}

Interface.ensureImplements = function (targetObject, interface) {
    for (const key in interface.properties)
        if (!targetObj.hasOwnProperty(key))
            throw new Error(`Interface contract is not satisfied by the target object. Missing ${key} implementation from ${interface.name} interface.`)
}

// Test our interface implementation
var reminder = new Interface('List', ['summary', 'placeOrder'])

var properties = {
    name: "Remember to buy the milk",
    date: "05/06/2016",
    actions: {
        summary: function () {
            return "Remember to buy the milk, we are almost out!";
        },
        placeOrder: function () {
            return "Ordering milk from your local grocery store";
        }
    }
}

// Should not throw error.
try {
    Interface.ensureImplements(properties.actions, reminder)
} catch (err) {
    console.warn(err);
}

// Should throw error
try {
    Interface.ensureImplements({}, reminder)
} catch (err) {
    console.warn(err)
}
