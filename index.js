const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'grey';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const code = document.getElementById('code');
const money = document.getElementById('A1');
const display = document.getElementById('display');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');

const div1 = '<img src="https://www.freeiconspng.com/thumbs/bow-and-arrow-png/bow-and-arrow-clip-art-0.png" height="60px" class="circle" style="background-color: green;" onclick="select(\'archer $3\', \'div1\')">';
const div2 = '<img src="https://image.flaticon.com/icons/png/512/95/95606.png" height="60px" class="circle" style="background-color: yellow;" onclick="select(\'sword warrior $2\', \'div2\')">';
const div3 = '<img src="https://pngimg.com/uploads/spear/spear_PNG24.png"height="60px" class="circle" height"10px" style="background-color: red;" onclick="select(\'spear warrior $4\', \'div3\')">';
const div4 = '<img src="https://d31sxl6qgne2yj.cloudfront.net/wordpress/wp-content/uploads/20190121140745/Minecraft-Zombie-Head.jpg"height="60px" class="circle" height"10px" style="background-color: red;" onclick="select(\'zombie $1\', \'div4\')">';
const div5 = '<img src="https://d31sxl6qgne2yj.cloudfront.net/wordpress/wp-content/uploads/20190121140718/Minecraft-Skeleton-Head.jpg"height="60px" class="circle" height"10px" style="background-color: yellow;" onclick="select(\'skeleton $2\', \'div5\')">';
const div6 = '<img src="https://i.pinimg.com/originals/0c/47/15/0c4715f5a8ddb1617261f053f13b45e8.png"height="60px" class="circle" height"10px" style="background-color: red;" onclick="select(\'spider $2\', \'div6\')">';
const div7 = '<img src="peashooter.png" height="60px" class="circle" height"10px" style="background-color: green;" onclick="select(\'peashooter $2\', \'div7\')">';
const div8 = '<img src="https://i.pinimg.com/originals/df/ec/bd/dfecbde5b608d82de5af1742b013a534.png" height="60px" class="circle" height"10px" style="background-color: yellow;" onclick="select(\'sunflower $1\', \'div8\')">';
const div9 = '<img src="https://i.pinimg.com/originals/4d/e5/27/4de5270005fa69256c4801601b5a8821.png" height="60px" class="circle" height"10px" style="background-color: red;" onclick="select(\'cactus $4\', \'div9\')">';

var stage = 1;

var selected_cards = ['', '', ''];

function submit() {
    if (code.value == 'hiscraft') {
        document.getElementById('link').innerHTML = '<a target="_blank" href="hiscraft_chat.html">go to hiscraft chat</a>';
        code.style.border = '3px solid green';
        money.innerHTML = '40';
    } else {
        code.style.border = '3px solid red';
    };
};

function theory(id) {
    document.getElementById('info').innerHTML = '';
    if (id == 1) {
        card1.innerHTML = div1;
        card2.innerHTML = div2;
        card3.innerHTML = div3;
    } else if (id == 2) {
        card1.innerHTML = div4;
        card2.innerHTML = div5;
        card3.innerHTML = div6;
    } else if (id == 3) {
        card1.innerHTML = div7;
        card2.innerHTML = div8;
        card3.innerHTML = div9;
    };
};

function select(name, div) {
    document.getElementById('info').innerHTML = '<p style="font-size:30px;position:absolute;top:20px;left:40px;">' + name + '</p><button style="position:absolute;left:40px;top:10px;" onclick="add_card(' + div + ')">select</button>';
};

var counter = 0;

function add_card(id) {
    if (counter < 3 && id !== selected_cards[1] && id !== selected_cards[2] && id !== selected_cards[3]) {
            selected_cards[counter + 1] = id;
            document.getElementById('cards').innerHTML = '<p style="color:dimgray;">' + selected_cards + '</p>';
            counter++;
    };

    if (counter == 3) {
        document.getElementById('cards').innerHTML = '<p style="color:dimgray;">' + selected_cards + '</p><button onclick="done()">done</button>';
    };
};

function done() {
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    stage = 2;
    document.getElementById('my_div').innerHTML = '';
};