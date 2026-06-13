const el = document.querySelector(".animated");
const orig = el.innerHTML;
let frames = [];
for (let i = 0; i <= orig.length; i++) {
    frames.push(orig.substring(0, i) + "<span style='color: #ff4d4d'>" + orig[i] + "</span>" + orig.substring(i+1));
};
let c = 0, l = frames.length-1;
setInterval(() => {
    el.innerHTML = frames[c];
    c = (c+1)%l;
}, 100);
