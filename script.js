
let high = 10;
let low = 1;
let n = 3
let count = 1;

let currect_ans = Math.floor(Math.random() * (high - low) + low);
console.log(currect_ans);
let c = document.querySelector("h1");

function number_gusser() {
    while (count <= n) {

        console.log(`you have ${n - (count - 1)} chance`);
        {
            let b = parseInt(prompt(`Input your guessed number in range of 1 to 10 and you have ${n - (count - 1)} chance`));
            console.log(currect_ans);


            if (currect_ans > b) {
                alert("Currect answer is greater!");

            } else if (currect_ans == b) {
                c.textContent = "You Win";
                break;
            }
            else {
                alert("Currect answer is smaller!");

            }
        }


        count++;
        if (count == n) {

            c.textContent = "You lose! "
        }
    }
}
number_gusser();


