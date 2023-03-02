const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];
let productList = document.getElementById("productList");

let row = document.createElement ("div");

row.className = "row";

let filteredItems = $.grep(storeItems, function(item) {
    return item.inStock;
});

filteredItems.forEach(function(item) {

    let li = document.createElement("li");
    li.className = "item";

    let price = document.createElement("span");
    price.className = "price";
    price.textContent = `$${item.price}`;

    let name = document.createElement("span");
    name.className = "name";
    name.textContent = item.name;

    let details = document.createElement("span");
    details.className = "details";
    details.textContent = item.details;

    li.appendChild(price);
    li.appendChild(name);
    li.appendChild(details);
    
    
    row.appendChild(li);
});

$(productList).append(row);

let texts = document.getElementsByTagName("div", "li", "h1", "button");

function changeTextColor() {
    let bgColor = document.body.style.backgroundColor;

    for (let i = 0; i < texts.length; i++) {
        if (bgColor === colors[0]) {
            texts[i].className = "black-text";
            btn.style.color = "black";
        }
        else {
            texts[i].className = "white-text";
            btn.style.color = "white"
        }
    }
}
function changeBorderColor() {
    let bgColor = document.body.style.backgroundColor;
    let items = document.getElementsByClassName("item");

    for (let i = 0; i < items.length; i++) {
        if (bgColor === colors[0]) {
            items[i].style.borderColor = "black";
        }
        else {
            items[i].style.borderColor = "white";
        }
    }
}
function changeBoxBorderColor() {
    let bgColor = document.body.style.backgroundColor;
    let buttonB = document.getElementById("btn");

        if (bgColor === colors[0]) {
            buttonB.style.borderColor = "black";
        }
        else {
            buttonB.style.borderColor = "white";
        }
    }

function changeRowBackgroundColor() {
    let bgColor = document.body.style.backgroundColor;
    let rows = document.getElementsByClassName("item");

    for (let i = 0; i < rows.length; i++) {
        if (bgColor === colors[0]) {
            rows[i].style.backgroundColor = "#FFFFFF"
        }
        else {
            rows[i].style.backgroundColor = "#424242"
        }
    }
}

let colors = ["white", "black"]

let index = 0;

let btn = document.getElementById("btn")

btn.addEventListener("click", function() {

    document.body.style.backgroundColor = colors[index];

    btn.style.backgroundColor = colors[index];

    btn.style.color = "white";
    
    index++;

    if(index == colors.length) {
        index = 0;
    }
    changeTextColor();
    changeBorderColor();
    changeBoxBorderColor();
    changeRowBackgroundColor();
});
