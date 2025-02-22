const videos = {"abc": "https://static.xmnt.dev/video1.mp4"}

function showVideo() {
    let code = document.getElementById("code").value
    alert(videos[code])
}