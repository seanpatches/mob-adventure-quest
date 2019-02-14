
const caveOptions = [
    {
        id: 'run',
        description: 'Run away',
        result: 'You ran away. You take 5 damage from shame.',
        hp: -5,
        gold: 0
    },
    {
        id: 'fight',
        description: 'Duel',
        result: 'You fought against the man. It was a hard battle, but you just barely win. Take 15 damage and gain 50 gold.',
        hp: -15,
        gold: 50
    },
    {
        id: 'talk',
        description: 'Try talking to the man',
        result: 'You asked the man why he had to guard the treasure chest. He questions his life choices and leaves. You open the chest. Gain 150 gold.',
        hp: 0,
        gold: 150
    }
];


const snakeOptions = [
    {
        id: 'fight',
        description: 'Tussle with dem SNAKES!',
        result: 'you jumped into that pit like Hulk Hogan and ripped them snakes to pieces brother. You lost 15 Hp, and gained Wylies respect +100 texas Gold',
        hp: -15,
        gold: 100
    },
    {
        id: 'run',
        description: 'Cry with Indiana',
        result: 'You succumbed to your fear and the snksss got ya',
        hp: -50,
        gold: 0
    },
    {
        id: 'talk',
        description: 'Barter with Ray Wylie!',
        result: 'You wrangled dem der snakes and sold the meat to Ray Wylie for some rations and a ladder to get out. Plus 65Hp, and 15 Gold',
        hp: 65,
        gold: 15
    },
];


const caveQuest = {
    id: 'cave',
    title: 'Cave Quest',
    description: 'You have discovered a spooooky cave. Unfortunately there is a cave keeper guarding a magnificent treasure chest. The treasure chest looks valuable but he looks devious. What will you do?',
    image: './assets/cave.jpg',
    options: caveOptions
};

const snakeQuest = {
    id: 'snake farm',
    title: 'Snake Farm Quest',
    description: 'You have fallen into a snake pit. In the corner, crying in shock and horror, Indiana Jones sits curled in a ball. Ray Wylie Hubbard, towers over his domain and gazes with disgust. What do you do?',
    image: './assets/snake.jpg',
    options: snakeOptions
};

const questList = [
    caveQuest,
    snakeQuest
];
export default questList;