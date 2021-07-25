
import { makeAutoObservable } from "mobx";
import { AsyncStorage } from "react-native";


class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchItems = async () => {
    const items = await AsyncStorage.getItem("cart");
    this.items = items ? JSON.parse(items): [];
  }

  addToCart = async (newItem)=> {
    const foundItem = this.items.find((item) => item.cakeId === newItem.cakeId);
    if(foundItem) foundItem.quantity +=newItem.quantity;
    else this.items.push(newItem);
    await AsyncStorage.setItem("cart", JSON.stringify(this.items));
  }

  get totalQuantity(){
    let total = 0;
    this.items.forEach((item)=>(total+=item.quantity));
    return total;
  }
}

const cartStore = new CartStore();
export default cartStore;