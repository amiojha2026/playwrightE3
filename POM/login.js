exports.login=class login{
    constructor(page){
        this.page=page,
        this.loginLink=".ico-login",
        this.email="#Email",
        this.password="#Password",
        this.loginButton=".login-button"
    }

//method
async gotoPage(){
    await this.page.goto("https://demowebshop.tricentis.com/");
}
async loginPage(email,password){
    await this.page.locator(this.loginLink).click();
    await this.page.locator(this.email).fill(email);
    await this.page.locator(this.password).fill(password);
    await this.page.locator(this.loginButton).click();

    
}
}