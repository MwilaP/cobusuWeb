const downloadButton = document.querySelector('.download-button');
const apkUrl = 'https://expo.dev/artifacts/eas/cFq6BM99f7TQBsVQPpLnax.apk'; // Replace with your APK URL

downloadButton.addEventListener('click', () => {
    window.location.href = apkUrl;
});
