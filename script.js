const btnTambah = document.getElementById("btnTambah");
const list = document.getElementById("list");
const totalText = document.getElementById("total");

let expenses = [];

btnTambah.addEventListener("click", function () {

    const itemInput =
        document.getElementById("item");

    const moneyInput =
        document.getElementById("money");

    const name =
        itemInput.value;

    const money =
        parseInt(moneyInput.value);

    if (name === "" || isNaN(money)) {

        alert("Input tidak valid!");
        return;
    }

    expenses.push({
        name: name,
        money: money
    });

    render();

    itemInput.value = "";
    moneyInput.value = "";
});

function render() {

    list.innerHTML = "";

    let total = 0;

    expenses.forEach((item) => {

        total += item.money;

        const li =
            document.createElement("li");

        li.textContent =
            item.name +
            " - Rp " +
            item.money.toLocaleString("id-ID");

        list.appendChild(li);
    });

    totalText.textContent =
        "Total Pengeluaran: Rp " +
        total.toLocaleString("id-ID");
}