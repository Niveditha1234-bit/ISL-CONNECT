function startApp() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('camera-screen').classList.remove('hidden');
    startCamera();
}
function goBack() {
    document.getElementById('camera-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
    stopCamera();
}
function startCamera() {
    const video = document.getElementById('video');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                video.srcObject = stream;
            })
            .catch(err => {
                console.error("Camera access denied", err);
            });
    }
}
function stopCamera() {
    const video = document.getElementById('video');
    const stream = video.srcObject;
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }
    video.srcObject = null;
}
