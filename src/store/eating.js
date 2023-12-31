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
        this.clearInfo();
        this.setInfo();
    }
    clearInfo() {
        this.eatedPFCK = {
            p: 0,
            f: 0,
            c: 0,
            kk: 0,
        };
        this.eatedPrice = 0;
    }
    setInfo() {
        this.eatedFoods.forEach((item) => {
            const productId = parseInt(item.product_id);
            const grams = item.grams;
            const product = products.find((p) => p.id === productId);
            function setValue(val) {
                const res = Math.round(val * (grams / 100));
                if (!res) {
                    return 0;
                }
                return res;
            }
            if (product) {
                this.eatedPFCK.p += setValue(product.p);
                this.eatedPFCK.f += setValue(product.f);
                this.eatedPFCK.c += setValue(product.c);
                this.eatedPFCK.kk += setValue(product.kk);
                this.eatedPrice += setValue(product.price);
            }
        });
    }
}
export const eating = new Eating();
