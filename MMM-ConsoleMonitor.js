Module.register("MMM-ConsoleMonitor", {
    defaults: {
        maxEntries: 10, // Maximum number of errors/warnings to display
    },

    start: function () {
        this.consoleLogs = [];
        this.sendSocketNotification("START_MONITOR");
    },

    getStyles: function () {
        return ["MMM-ConsoleMonitor.css"];
    },

    getDom: function () {
        const wrapper = document.createElement("div");
        wrapper.className = "console-monitor";

        if (this.consoleLogs.length === 0) {
            wrapper.innerHTML = "No console errors or warnings.";
        } else {
            const list = document.createElement("ul");
            this.consoleLogs.forEach((log) => {
                const listItem = document.createElement("li");
                listItem.className = log.type;
                listItem.innerHTML = `[${log.type.toUpperCase()}] ${log.message}`;
                list.appendChild(listItem);
            });
            wrapper.appendChild(list);
        }
        return wrapper;
    },

    socketNotificationReceived: function (notification, payload) {
        if (notification === "CONSOLE_LOG") {
            this.consoleLogs.unshift(payload);
            if (this.consoleLogs.length > this.config.maxEntries) {
                this.consoleLogs.pop();
            }
            this.updateDom();
        }
    },
});
