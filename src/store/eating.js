import { makeAutoObservable } from "mobx";
// import { API_URL } from "../config";
// import axios from "axios";
import { products } from "../data/products.js";
class Eating {
  DAYNORM = {
    DAYPROTAINE: 106,
    DAYFAT: 94,
    DAYCARB: 200,
    DAYKKAL: 2000,
  };
  constructor() {
    makeAutoObservable(this);
  }
  eatedFoods = {};
  eatedPFCK = {
    p: 0,
    f: 0,
    c: 0,
    kk: 0,
  };
  eatedPrice = 0;
  addToEating(obj) {
    this.eatedFoods = obj;
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
    Object.entries(this.eatedFoods).forEach((item) => {
      const productId = parseInt(item[0]);
      const grams = item[1];
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
