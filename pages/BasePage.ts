import{expect, Page, Locator} from '@playwright/test';
export class BasePage {
    readonly page:Page;
    readonly enter:Locator;
    readonly credentials:Locator;
    readonly emailAdress:Locator;
    readonly enterEmail:Locator;
    readonly enterPassword:Locator;
    

    constructor(page:Page) {
        this.page=page;
        this.enter=page.getByTestId('login-title');
        this.credentials=page.locator('text=Увійдіть до свого облікового запису');
        this.emailAdress=page.getByTestId('login-form');
        this.enterEmail=page.getByPlaceholder('your@email.com');
        this.enterPassword=page.getByPlaceholder('Введіть пароль');


        
    }
    async goto() {
       await this.page.goto('/'); 
       await expect (this.page).toHaveURL('/');
       await expect(this.page).toHaveTitle('Повнофункціональний фінансовий менеджер');
    }
     async checkEnter(){
        await expect(this.enter).toBeVisible();
        await expect(this.enter).toHaveText('Вхід до системи');

     }
     async checkCredentials(){
        await expect(this.credentials).toBeVisible();
        await expect(this.credentials).toHaveText('Увійдіть до свого облікового запису');
     }
     async checkEmailAdress(){
        await expect(this.emailAdress).toBeVisible();
        await expect(this.emailAdress).toHaveText('Email адресаПарольУвійти');
     }
     async checkenterEmail(){
        await expect(this.enterEmail).toBeVisible();
        await (this.enterEmail).fill('l_nrpi1+1@i.ua');
        await expect(this.enterEmail).toHaveValue ('l_nrpi1+1@i.ua');
     }
     async checkEnterPassword(){
        await expect(this.enterPassword).toBeVisible();
        await (this.enterPassword).fill('Testing');
        await expect(this.enterPassword).toHaveValue ('Testing');

     }

     

}