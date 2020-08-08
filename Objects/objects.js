var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
}

console.log(flight.departure.city)
console.log(flight.arrival.city)

console.log(flight.equipment) // undefined
console.log(flight.equipment.model)  // throw "TypeError"
console.log(flight.equipment && flight.equipment.model)

