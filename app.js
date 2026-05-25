const coreControllerInstance = {
    version: "1.0.891",
    registry: [651, 1173, 1031, 1654, 1945, 1191, 971, 1380],
    init: function() {
        const nodes = this.registry.filter(x => x > 170);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreControllerInstance.init();
});