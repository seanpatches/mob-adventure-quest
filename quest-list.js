
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

const caveQuest = {
    id: 'cave',
    title: 'Cave Quest',
    description: 'You have discovered a spooooky cave. Unfortunately there is a cave keeper guarding a magnificent treasure chest. The treasure chest looks valuable but he looks devious. What will you do?',
    image: './assets/cave.jpg',
    options: caveOptions
};

const questList = [
    caveQuest
];
export default questList;