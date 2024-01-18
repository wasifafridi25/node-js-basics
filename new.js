class City{
    #foundingYear;
    constructor(name, state, foundingYear){
        this.name = name;
        this.state = state;
        this.#foundingYear = foundingYear;
    }

    toString(){
        return this.name + ", " + this.state + " (" + this.#foundingYear + ")";
    }
}
let myCity = new City("Norfolk", "Virginia", 1682);
console.log(myCity.toString());