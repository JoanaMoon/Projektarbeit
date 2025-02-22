const videos = {"abc": "https://static.xmnt.dev/video1.mp4"}

function() {
    let code = document.getElementById("code").value
    alert(videos[code])
}