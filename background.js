const defaulFilterWebRequests = [
    "*://*.facebook.com/*",
    "*://*.pagalworld.pw/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function (details) { return{ cancel: true}},
    { urls: defaulFilterWebRequests},
    ["blocking"]
)
window.setTimeout( function(){
    window.location.reload();
},30000);