const count = document.getElementById("player-count");
const list = document.getElementById("player-list");
let playerList = [];
const ws = new WebSocket(document.getElementById("ip").innerText);

ws.onopen = () => {
    console.log("WebSocket connected successfully!");
    ws.send("Accept: MOTD");
};
ws.onmessage = (event) => {
    let data = JSON.parse(event.data);
    console.log(data);
    count.innerText = data.data.online;
    /* Players list is always empty in response
    if (data.data.players.length) {
        data.data.players.forEach((item) => {
            let m = item.match(/(\d+ more)/);
            if (m) {
                more = m[1] != "0 more" ? `and ${m[1]}` : "";
            } else {
                playerList.push(item);
            };
        });
        for (let i = 0; i < playerList.length; i += 3) {
            const row = document.createElement("div");
            row.style.display = "flex";
            row.style.gap = "10px";
            for (let j = i; j < i+3; j++) {
                if (j < playerList.length) {
                    const player = document.createElement("span");
                    player.innerText = `${playerList[j]},`;
                    row.appendChild(player);
                };
            };
            list.appendChild(row);
        }
        list.innerHTML += `<div>${more}</div>`;
    } else {
        list.innerText = "No players are currently online...";
    };
    */
    ws.close();
};
ws.onerror = (err) => {
    console.error("WebSocket error!", err);
};
ws.onclose = () => {
    console.log("WebSocket connection closed");
};