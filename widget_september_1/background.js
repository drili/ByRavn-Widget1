// Listen for when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
});

// Listen for tab updates (e.g., page loads)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // Check if the tab's status is 'complete' (i.e., page fully loaded)
    if (changeInfo.status === 'complete') {
        // Send a message to the content script in the updated tab
        chrome.tabs.sendMessage(tabId, {
            message: 'TabUpdated'
        });
    }
});
