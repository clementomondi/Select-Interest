// Add JavaScript code here
const Content = document.querySelector('.content');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    imageNum = 10;
    addNewImage()

})
function addNewImage() {
    for (let index = 0; index < imageNum; index++) {
        const NewImage = document.createElement('img');
        NewImage.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`
        Content.appendChild(NewImage)

    }
}
function scrollDown() {
    document.getElementById('content').scrollTop = document.getElementById('content').scrollHeight
}
const anchors = document.querySelectorAll("a");

anchors.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
    })
})
document.querySelectorAll('.interest').forEach(
    el => el.addEventListener('click', e => el.classList.toggle('selected'))
)
