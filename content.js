var vkBlock = document.getElementById('ads_left');

chrome.runtime.onMessage.addListener(receiver);

// A message is received
function receiver(request, sender, sendResponse) {
  request ? vkBlock.style.display = 'none' : vkBlock.style.display = 'block'
}
