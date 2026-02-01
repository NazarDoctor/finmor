import{expect, Page, Locator} from '@playwright/test';
import { сlickElement } from '../utils/globalMetods';
export class BasePage {
    readonly page:Page;
    readonly enter:Locator;
    readonly credentials:Locator;
    readonly emailAdress:Locator;
    readonly enterEmail:Locator;
    readonly enterPassword:Locator;
    readonly enterButton:Locator;
    

    constructor(page:Page) {
        this.page=page;
        this.enter=page.getByTestId('login-title');
        this.credentials=page.locator('text=Увійдіть до свого облікового запису');
        this.emailAdress=page.getByTestId('login-form');
        this.enterEmail=page.getByPlaceholder('your@email.com');
        this.enterPassword=page.getByPlaceholder('Введіть пароль');
        this.enterButton=page.getByTestId('login-submit-button');


        
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
        await expect(this.emailAdress).toHaveText('Email адреса');
     }
     
     
     async FillenterEmail(){
        await expect(this.enterEmail).toBeVisible();
        await (this.enterEmail).fill('user@demo.com');
        await expect(this.enterEmail).toHaveValue ('user@demo.com');
     }
     async FillEnterPassword(){
        await expect(this.enterPassword).toBeVisible();
        await (this.enterPassword).fill('user123');
        await expect(this.enterPassword).toHaveValue ('user123');
     }
     async checkEnterButton(){
        await expect(this.enterButton).toBeVisible();
        await expect(this.enterButton).toHaveText('Увійти');
     }

     async ClickEnterButton (){
        await сlickElement(this.enterButton, 'Увійти');
        
     }


     

}