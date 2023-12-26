import { makeAutoObservable } from "mobx";
// import { API_URL } from "../config";
// import axios from "axios";
import { products } from "../data/products.js";
class Eating {
    DAYNORM = {
        DAYPROTAINE: 106,
        DAYFAT: 94,
        DAYCARB: 390,
        DAYKKAL: 2846,
    };
    constructor() {
        makeAutoObservable(this);
    }
    eatedFoods = [];
    eatedPFCK = {
        p: 0,
        f: 0,
        c: 0,
        kk: 0,
    };
    eatedPrice = 0;
    addToEating(obj) {
        this.eatedFoods.push(obj);
        this.clearEatedPFCnPrice();
        this.setPFCK();
        this.setPrice();
    }
    clearEatedPFCnPrice() {
        this.eatedPFCK = {
            p: 0,
            f: 0,
            c: 0,
            kk: 0,
        };
        this.eatedPrice = 0;
    }
    setPFCK() {
        this.eatedFoods.forEach((item) => {
            const productId = parseInt(item.product_id);
            const grams = item.grams;
            const product = products.find((p) => p.id === productId);
            function setGrams(val) {
                const res = val * (grams / 100);

                return Math.round(res);
            }

            if (product) {
                this.eatedPFCK.p += setGrams(product.p);
                this.eatedPFCK.f += setGrams(product.f);
                this.eatedPFCK.c += setGrams(product.c);
                this.eatedPFCK.kk += setGrams(product.kk);
            }
        });
    }
    setPrice() {
        this.eatedFoods.forEach((item) => {
            const productId = parseInt(item.product_id);
            const grams = item.grams;
            const product = products.find((p) => p.id === productId);
            if (product) {
                this.eatedPrice += Math.round(product.price * (grams / 100));
            }
        });
    }
}
export const eating = new Eating();
