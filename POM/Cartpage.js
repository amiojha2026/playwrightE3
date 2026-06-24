exports.CartPage = class CartPage{
    constructor(page){
        this.page = page;
        this.bookLink =`a[href="/books"]`;
        this.healthbook = `h2 a[href="/health"]`;
        this.addToCart =`[value="Add to cart"]`;  
    }
   
    async addHealthBookToCart() {
    await this.page.locator(this.bookLink).first().click();
    await this.page.locator(this.healthbook).first().click();
    await this.page.locator(this.addToCart).first().click();
  
}
}