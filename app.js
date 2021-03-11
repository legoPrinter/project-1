
const game = document.getElementById('game')

const code = document.getElementById('code');
const money = document.getElementById('A1');
const display = document.getElementById('display');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');

const div1 = '<img src="https://www.freeiconspng.com/thumbs/bow-and-arrow-png/bow-and-arrow-clip-art-0.png" height="60px" class="circle" style="background-color: green;" onclick="select(\'archer $3\', \'div1\')" health="100" attack.type="shooting" attack.damage="35" attack.speed="3.5" speed="0">';
const div2 = '<img src="https://image.flaticon.com/icons/png/512/95/95606.png" height="60px" class="circle" style="background-color: yellow;" onclick="select(\'sword warrior $2\', \'div2\')" health="100" attack.type="fighting" attack.damage="25" attack.speed="1" speed="5">';
const div3 = '<img src="https://pngimg.com/uploads/spear/spear_PNG24.png" height="60px" class="circle" height"10px" style="background-color: red;" onclick="select(\'spear warrior $4\', \'div3\')" health="100" attack.type="fighting" attack.damage="40" attack.speed="2" speed="5">';
const div4 = '<img src="https://d31sxl6qgne2yj.cloudfront.net/wordpress/wp-content/uploads/20190121140745/Minecraft-Zombie-Head.jpg" height="60px" class="circle" height"10px" style="background-color: red;" onclick="select(\'zombie $1\', \'div4\')" health="70" attack.type="fighting" attack.damage="15" attack.speed="1.5" speed="1">';
const div5 = '<img src="https://d31sxl6qgne2yj.cloudfront.net/wordpress/wp-content/uploads/20190121140718/Minecraft-Skeleton-Head.jpg" height="60px" class="circle" height"10px" style="background-color: yellow;" onclick="select(\'skeleton $2\', \'div5\')" health="100" attack.type="shooting" attack.damage="20" attack.speed="5" speed="0">';
const div6 = '<img src="https://i.pinimg.com/originals/0c/47/15/0c4715f5a8ddb1617261f053f13b45e8.png" health="65" attack.type="fighting" attack.damage="10" attack.speed="1" speed="7" height="60px" class="circle" height"10px" style="background-color: red;" onclick="select(\'spider $2\', \'div6\')">';
const div7 = '<img src="peashooter.png" height="60px" class="circle" style="background-color: green;" onclick="select(\'peashooter $2\', \'div7\')" health="40" attack.type="shooting" attack.damage="5" attack.speed="0.5" speed="0">';
const div8 = '<img src="https://i.pinimg.com/originals/df/ec/bd/dfecbde5b608d82de5af1742b013a534.png" height="60px" class="circle" height"10px" style="background-color: yellow;" onclick="select(\'sunflower $1\', \'div8\')" health="60" attack.type="fighting" attack.damage="20" attack.speed="5" speed="0">';
const div9 = '<img src="https://i.pinimg.com/originals/4d/e5/27/4de5270005fa69256c4801601b5a8821.png" height="60px" class="circle" height"10px" style="background-color: red;" onclick="select(\'cactus $4\', \'div9\')">';

var stage = 1;

var counter = 0;
var selected_cards = ['', '', ''];
var charecters = '';
var keyPositions = [50, 100, 150, 200, 250, 300, 350];
var currently_selected = null;
var counter2 = 1;
const money = document.getElementById('dollar-amount');

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
    if (stage == 1) {
        document.getElementById('info').innerHTML = '<p style="font-size:30px;position:absolute;top:20px;left:40px;">' + name + '</p><button style="position:absolute;left:40px;top:10px;" onclick="add_card(' + div + ')">select</button>';
    } else {
        document.getElementById('select').innerHTML = eval(div);
        currently_selected = eval(div);
    };
};

function add_card(id) {
    if (counter < 3 && id !== selected_cards[1] && id !== selected_cards[2] && id !== selected_cards[3]) {
            selected_cards[counter + 1] = id;
            document.getElementById('cards').innerHTML = '<p style="color:dimgray;">' + selected_cards + '</p>';
            counter++;
    };

    if (counter == 3) {
        document.getElementById('cards').innerHTML = '<p style="color:dimgray;">' + selected_cards + '</p><button onclick="done()">done</button>';
        counter++
    };
};

function done() {
    game.style.backgroundColor = 'steelblue';
    lines = '';
    stage = 2;
    document.getElementById('my_div').innerHTML = '<div>' + selected_cards[1] + selected_cards[2] + selected_cards[3] + '</div><div style="position:absolute;top:30px;"></div>';
    counter = 0;
    while (counter < keyPositions.length) {
        lines += '<div onclick="place(' + counter +')" class="line" style="top:' + (keyPositions[counter] - 5) + 'px;"></div>';
        counter++;
    };
    game.innerHTML = lines;
};

function place(num) {
    if (currently_selected != null && money -  >= ) {
        charecters += '<div id="A' + counter2 + '" style="position:absolute;left:' + (event.clientX - 30) + 'px;top: ' + (keyPositions[num] - 30) + ';">' + currently_selected + '</div>';
        document.getElementById('charecters').innerHTML = charecters;
    };
};