function select(el) {
    selectText(el.childNodes[0])
    let res = false;
    try { res = document.execCommand('copy') }
    catch (e) { console.warn("Failed to copy selected text!", e) };
    message(res ? 'Copied!' : 'Could not copy!');
};
function selectText(node) {
    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
    } else { console.warn("Could not select text in node: Unsupported browser.") };
};
function message(msg) {
    let els = document.getElementsByClassName("msg");
    for (let i=0; i<els.length; i++) {
        els[i].remove();
    }
    let el = document.createElement("div");
    el.className = "msg";
    el.innerText = msg;
    el.onclick = () => el.remove();
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1500);
};