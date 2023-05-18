const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const root = document.getElementById("root");
    const title = document.createElement("h1");
    title.innerHTML = "FREELANCERS";
    title.style.backgroundColor = "pink";
    title.style.fontSize = "30pt";
    title.style.textAlign = "center";
    title.style.fontFamily = "monospace";

    root.appendChild(title);

    const unOrderedList = document.createElement("ul");
    unOrderedList.style.textAlign = "center";
    unOrderedList.style.listStylePosition = "inside";
    unOrderedList.style.fontFamily = "monospace";
    unOrderedList.style.fontSize = "18pt";

    for(let i = 0; i < users.length; i++) {
        const user = users[i];
        const listItem = document.createElement("li");
        listItem.innerHTML = `${user.name} ${user.age} ${user.occupation}`
        unOrderedList.appendChild(listItem);

    }

    root.appendChild(unOrderedList);
    root.style.backgroundColor = "lightgrey";
} 

main();