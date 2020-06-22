// chrome.webRequest.onHeadersReceived.addListener(
//   function (details) {
//     for (var i = 0; i < details.responseHeaders.length; ++i) {
//       if (details.responseHeaders[i].name.toLowerCase() == 'x-frame-options') {
//         details.responseHeaders.splice(i, 1);
//         return {
//           responseHeaders: details.responseHeaders
//         };
//       }
//     }
//   }, {
//     urls: ["<all_urls>"]
//   }, ["blocking", "responseHeaders"]);


var HEADERS_TO_STRIP_LOWERCASE = [
  'content-security-policy',
  'x-frame-options',
];

chrome.webRequest.onHeadersReceived.addListener(
  function (details) {
    return {
      responseHeaders: details.responseHeaders.filter(function (header) {
        return HEADERS_TO_STRIP_LOWERCASE.indexOf(header.name.toLowerCase()) < 0;
      })
    };
  }, {
  urls: ["<all_urls>"]
}, ["blocking", "responseHeaders"]);
