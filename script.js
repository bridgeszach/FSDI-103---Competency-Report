class Character {
    constructor(image, name, health, id) {
        this.image = image;
        this.name = name;
        this.health = health;
        this.id = id;

    }

    // Character display function
    display = function () {
        document.getElementById("img" + this.id).innerHTML = `<img class = "character" src = "${this.image}" alt="">`;
        document.getElementById(this.id).innerHTML = `Name: ${this.name} <br> Health: ${this.health}`;
    }

    // Attack function 
    attack = function (opponent, item) {
        var newHealth = opponent.health - item.iMagic;
        opponent.health = newHealth;
        opponent.display();
        document.getElementById("console").innerHTML = `<img src = "${item.img}">       ${this.name} attacks with ${item.iName} for ${item.iMagic} damage!`;

        //Display Game Over message
        if (opponent.health <= 0) {
            document.getElementById("aButton").disabled = true;
            document.getElementById("console").innerHTML = "GAME OVER!!!";
        } else if (this.health <= 0) {
            document.getElementById("aButton").disabled = true;
            document.getElementById("console").innerHTML = "GAME OVER!!!"
        }


    }
}

// Character creation
const c1 = new Character("img/link.png", "Link", 100, "c1");
const c2 = new Character("img/bowser.png", "Bowser", 100, "c2");
// const c3 = new Character("img/solid_snake", "Solid Snake", 100, "c3");

// Displaying characters after creation
c1.display();
c2.display();
// c3.display();

// Items used for attacking
class Item {
    constructor(iName, iMagic, img) {
        this.iName = iName;
        this.iMagic = iMagic;
        this.img = img;
    }
}


// Item creation
const item1 = new Item("Blue Gem", 5, 'img/link_gem.png');
const item2 = new Item("Slash", 8, 'img/link_sword.png');
const item3 = new Item("Shield Slam", 10, 'img/link_shield.png');

const item4 = new Item("Bullet-Bill", 5, 'img/bowser_bullet.png');
const item5 = new Item("Chain-Chomp", 10, 'img/bowser_chomp.png');
const item6 = new Item("Shell Sling", 8, 'img/bowser_shell.png');

// Arrays for items based on each character
var linkItems = [item1, item2, item3];
var bowserItems = [item4, item5, item6];


// Functions for each character to use a random item during attack
function linkSelect() {
    let selection = Math.floor(Math.random() * 3);
    return linkItems[selection];
}


function bowserSelect() {
    let selection = Math.floor(Math.random() * 3);
    return bowserItems[selection];
}