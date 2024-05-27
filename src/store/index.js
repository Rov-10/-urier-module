import { makeAutoObservable, reaction, runInAction } from "mobx";

class Store {
    count = "!";
    PanelState = false;
    CategoryState = true;
    OrderFeedState = false;
    ActiveOrdersState = false;
    LogFormState = false;
    OrderFormState = false;
    ProfilePopState = false;

    constructor() {
        this._username = '';
        this._roles = [];
        this._isLogin = false;
        this._Order = {};
        this._OrderList = [];
        this._ActiveOrderList = [];
        this._history = [];
        this._assessment = 0
        makeAutoObservable(this);

        reaction(
            () => this._OrderList.filter(object => object.checked === false).length,
            (length) => {
                runInAction(() => {
                    this.count = length;
                });
                // console.log(this.count);
            }
        );

        reaction(
            () => this.OrderFeedState === true,
            (isOrderFeedOpen) => {
                if (isOrderFeedOpen) {
                    runInAction(() => {
                        this._OrderList = this._OrderList.map((order) => ({ ...order, checked: true }));
                    });
                }
            }
        );
    }

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get roles() {
        return this._roles;
    }

    set roles(value) {
        this._roles = value;
    }

    get isLogin() {
        return this._isLogin;
    }

    set isLogin(value) {
        this._isLogin = value;
    }

    get Order() {
        return this._Order;
    }

    set Order(value) {
        this._Order = value;
    }
    get history(){
        return this._history
    }
    set history(value){
        this._history = value
    }
    get assessment(){
        return this._assessment
    }
    set assessment(value){
        this.assessment=value
    }
    get OrderList() {
        return this._OrderList;
    }


    set OrderList(value) {
        this._OrderList = value || []; // Ensure _OrderList is always an array
    }

    get ActiveOrderList() {
        return this._ActiveOrderList;
    }


    set ActiveOrderList(value) {
        this._ActiveOrderList = value || [];
    }

    PanelOpen() { this.PanelState = true; }
    PanelClose() { this.PanelState = false; }
    CategoryOpen() { this.CategoryState = true; }
    CategoryClose() { this.CategoryState = false; }
    OrderFeedOpen() { this.OrderFeedState = true; }
    ActiveOrdersOpen() { this.ActiveOrdersState = true; }
    ActiveOrdersClose() { this.ActiveOrdersState = false; }
    OrderFeedClose() { this.OrderFeedState = false; }
    OrderFormOpen() { this.OrderFormState = true; }
    OrderFormClose() { this.OrderFormState = false; }
    LogFormOpen() { this.LogFormState = true; }
    LogFormClose() { this.LogFormState = false; }
    ProfilePopOpen() { this.ProfilePopState = true; }
    ProfilePopClose() { this.ProfilePopState = false; }
    pushToOrderList(value) { this._OrderList.push(value); }
}

export const store = new Store();
 