import{test, expect, Page, Locator} from '@playwright/test';
export class RegistrationPage {
    readonly page:Page
    readonly blueicon:Locator
    readonly registerForm:Locator
    readonly registrationNameText:Locator
    readonly registerButton:Locator



    constructor(page:Page) {
        this.page=page
        this.blueicon=page.locator('div.bg-blue-600')
        this.registerForm = page.getByTestId('register-form');
        this.registrationNameText = this.registerForm.getByText("Повне ім'я");
        this.registerButton=page.getByTestId('switch-to-register-button');


        
    }
    async checkBlueIcon(){
        await expect(this.blueicon).toBeVisible();

    }
    async checkRegistraionForm (){
        await expect(this.registerForm).toBeVisible();
    }
    async checkRegistrationNameText ()
    {
        await expect(this.registrationNameText).toBeVisible();
        await expect(this.registrationNameText).toHaveText("Повне ім'я"); 
    }
    async checkregisterButton (){
        await expect(this.registerButton).toHaveText('Зареєструватися');
        await expect(this.registerButton).toBeEnabled();
        await (this.registerButton.click);
    }

}