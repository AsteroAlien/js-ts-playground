export function performCalulationLoop(count: number): Number {
    let sum = 0;
    for (let i = 0; i < count; i++) {
        sum = sum + i;
    }

    return sum;
}

onmessage = function (message) {
    const {count, action} = message.data;
    
    switch (action) {
        case "start":
            const result = performCalulationLoop(count);
            postMessage(result);
            break;
        default: 
            console.log("action does not exist.");
            break;
    }
}