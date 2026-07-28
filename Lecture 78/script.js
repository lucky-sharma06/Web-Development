let currBlinking = null;
let currSpan = null;
function display(msg) {
    let x = (Math.floor(Math.random() * 8)) * 1000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(currBlinking != null){
                clearInterval(currBlinking);
                currSpan.textContent = "";
            }
            let div = document.createElement("div");
            div.className = "message";
            div.textContent = msg;
            document.querySelector("main").append(div);

            let span = document.createElement("span");
            span.className = "dots";
            div.append(span);
            currSpan = span;
            let cnt = 0;
            currBlinking = setInterval(() => {
                span.append(".");
                cnt++;
                if(cnt == 3){
                    setTimeout(() => {
                        cnt = 0;
                        span.textContent = "";
                    }, 500)
                }
            }, 500);

            resolve();
        }, x);
    })
}

async function main() {
    await display("Initializing Hacking");
    await display("Reading Your Files");
    await display("Password Filed Detected");
    await display("Sending all passwords and personal files to the server");
    await display("Cleaning Up");
}
main();