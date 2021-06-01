const toys = [
    {
        id: 1,
        name: "Raider",
        brand: "Nerf",
        color: "Blue/Orange",
        type: "Toy Gun",
        price: 20
    },
    {
        id: 2,
        name: "Razor",
        brand: "Razor",
        color: "Chrome/Orange",
        type: "Scooter",
        price: 30
    },
    {
        id: 3,
        name: "Optimus Prime",
        brand: "Transformers",
        color: "Red/Blue",
        type: "Action Figure",
        price: 30
    }
]
// for (const toy of toys) {
//     console.log(`It's name is ${toy.name}`)
// }

const lightsaber = {
    // id: 4,
    name: "Darth Vader's Lightsaber",
    brand: "Hasbro",
    color: "Red/Silver",
    type: "Toy Sword",
    price: 15,
}

const bionicle = {
    // id: 5,
    name: "Bionicle Tahu",
    brand: "Lego",
    color: "Gold/Red",
    type: "Action Figure",
    price: 20,
}
// toys.push(lightsaber)
// toys.push(bionicle)

// for (const toy of toys) {
//     console.log(`The ${toy.color} ${toy.brand} ${toy.name} costs $${toy.price} dollars.`)
// }

for (const toy of toys) {
    toy.price = toy.price + toy.price * .05
}

const toyToFind = 2

// for (const toy of toys) {
//     if (toy.id === toyToFind) {
//         console.log(`The ${toy.brand} ${toy.name} costs ${toy.price} dollars. It is ${toy.color}.`)
//     }
// }

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy
    toys.push(toyObject)
}

addToyToInventory(lightsaber)
addToyToInventory(bionicle)

for (const toy of toys) {
    console.log(`The ${toy.brand} ${toy.name} costs ${toy.price} dollars. It is ${toy.color}.`)
}

console.log(toys)