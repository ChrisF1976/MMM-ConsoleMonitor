const NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
    start: function () {
        this.logs = [];
    },

    socketNotificationReceived: function (notification) {
        if (notification === "START_MONITOR") {
            this.monitorConsole();
        }
    },

    monitorConsole: function () {
        const originalConsoleError = console.error;
        const originalConsoleWarn = console.warn;

        console.error = (...args) => {
            this.sendLog("error", args);
            originalConsoleError.apply(console, args);
        };

        console.warn = (...args) => {
            this.sendLog("warn", args);
            originalConsoleWarn.apply(console, args);
        };
    },

    sendLog: function (type, args) {
        const message = args.join(" ");
        this.sendSocketNotification("CONSOLE_LOG", { type, message });
    },
});
