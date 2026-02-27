class Game {
    storyNodes;
    currentId;
    textElement;
    choicesElement;
    imageElement;
    constructor(nodes) {
        this.storyNodes = nodes;
        this.currentId = 1;
        this.textElement = document.getElementById('story-text');
        this.choicesElement = document.getElementById('choices-container');
        this.imageElement = document.getElementById('scene-image');
        this.render();
    }
    getNode(id) {
        return this.storyNodes.find((node) => node.id === id);
    }
    render() {
        const currentNode = this.getNode(this.currentId);
        if (!currentNode) {
            this.textElement.innerText = "Error: Story node not found!";
            return;
        }
        this.textElement.innerText = currentNode.text;
        this.imageElement.innerHTML = '';
        if (currentNode.image) {
            const img = document.createElement('img');
            img.src = currentNode.image;
            this.imageElement.appendChild(img);
        }
        this.choicesElement.innerHTML = '';
        if (currentNode.choices.length === 0) {
            const endMessage = document.createElement('div');
            endMessage.innerText = "The End.";
            endMessage.className = "text-center text-white mt-4 uppercase tracking-widest";
            this.choicesElement.appendChild(endMessage);
            return;
        }
        currentNode.choices.forEach((choice) => {
            const button = document.createElement('button');
            button.innerText = choice.text;
            button.className = "w-full p-4 text-left bg-black text-white border-2 border-white hover:bg-white hover:text-black transition-colors";
            button.onclick = () => {
                this.makeChoice(choice.nextId);
            };
            this.choicesElement.appendChild(button);
        });
    }
    makeChoice(nextId) {
        this.currentId = nextId;
        this.render();
    }
}
const storyData = [
    {
        id: 1,
        text: "omg u finally harvested ur first batch of apples. they look so good ngl. but lowkey there is a hungry guy near the fence looking sad. wyd??",
        image: "./images/starting.png",
        choices: [
            { text: "sell them for the cash", nextId: 2 },
            { text: "give him the apples", nextId: 3 },
        ],
    },
    {
        id: 2,
        text: "ok u sold them and ur kinda rich now do u wanna use the cash to buy the 'Mega-Farm 3000' expansion pack OR donate the cash to the shelter downtown?",
        image: "./images/farmOrShelter.png",
        choices: [
            { text: "buy expansion pack 🚜", nextId: 4 },
            { text: "donate to shelter (NOOO)", nextId: 5 },
        ],
    },
    {
        id: 3,
        text: "u gave him the food and he was so happy 😭. u have $0 profit but honestly the vibes are immaculate. u win at life.",
        image: "./images/savedTheGuy.png",
        choices: [],
    },
    {
        id: 4,
        text: "u bought the expansion and now u have 10000 acres of corns. ur rich but u have no friends and ur tired. suffering from success i guess.",
        image: "./images/garden.png",
        choices: [],
    },
    {
        id: 5,
        text: "u donated the money!! the shelter is saved and they named a soup after u. ur farm is small but ur a local legend. massive W.",
        image: "./images/donate.png",
        choices: [],
    },
];
window.onload = () => {
    const game = new Game(storyData);
};
export {};
//# sourceMappingURL=index.js.map