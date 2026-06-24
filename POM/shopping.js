exports.ShoppingCart = class ShoppingCart{
    constructor(page){
        this.page = page;
        this.shoppingCart =".ico-cart";
        this.countryId = '#CountryId';
        this.state = '#StateProvinceId';
        this.pin = '#ZipPostalCode';
        this.estimateshopping = `[value="Estimate shipping"]`;
        this.termsOfService = '#termsofservice';
        this.checkout='#checkout';
    }
   
    async proceedToCheckout() {
        //navigate to the shopping page
    await this.page.locator(this.shoppingCart).click();
    //select country
    await this.page.locator(this.countryId).selectOption({label:'India'});
    //select state
    await this.page.locator(this.state).selectOption({ label:'Other (Non US)'});
    //fill pincode
    await this.page.locator(this.pin).fill('560037');
    //estimate shopping cost
    await this.page.locator(this.estimateshopping).click();
    //proceed for check out
    await this.page.locator(this.termsOfService).check();
    await this.page.locator(this.checkout).click();

  
}
}