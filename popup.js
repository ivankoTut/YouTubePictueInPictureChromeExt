let mainVideo = document.getElementById('mainVideo');

mainVideo.addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: pictureInPicture,
    });
});

async function pictureInPicture() {
    const video = document.querySelector('video');

    if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
    } else {
        await video.requestPictureInPicture();
    }
}
