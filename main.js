class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
        this.food = this.food + 2
    }
    eat() {

        if (this.food === 0) {
            this.isHealthy = false
        }
        else {
            this.food = this.food - 1
        }
    }


}

class Wagon {

    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        return (this.capacity - this.passengers.length)
    }
    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
        }
    }
    shouldQuarantine() {

        for (let i = 0; i < this.passengers.length; i++) {
            let curentPassenger = this.passengers[i]
            if (curentPassenger.isHealthy === false) {
                return true
            }
        }
        return false
    }
    totalFood() {

    }

}





