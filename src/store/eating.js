import { makeAutoObservable } from "mobx";
// import { API_URL } from "../config";
// import axios from "axios";

class Eating {
    eating = [
        {
            id: 1,
            meat: {
                eggs: 100,
                pok: 200,
            },
            garnish: {
                rice: 200,
            },
            other: {
                cappuccino: 1,
            },
        },
    ];
    constructor() {
        makeAutoObservable(this);
    }
}
export const eating = new Eating();
