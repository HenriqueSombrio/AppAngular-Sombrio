import {MenuItem} from '../menu-item/menu-item.model'
export class CartItem{
    constructor(public MenuItem: MenuItem, public quantity: number = 1){}
    
    value(): number{
        return this.MenuItem.price*this.quantity
    }
}