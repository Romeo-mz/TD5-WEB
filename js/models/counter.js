export class Counter {
    #counter;

    constructor(){
        this.#counter = 0;
    }

    get counter(){
        return(this.#counter)
    }

    set counter(val){
        this.#counter = val;
    }
    incrementValue(){
        this.#counter++;
    }

    decrementValue(){
        this.#counter--;
    }
}