import{test, expect, Page, Locator} from '@playwright/test';
export class RegistrationPage {
    readonly page:Page;
    readonly blueicon:Locator;
    readonly registerForm:Locator;
    readonly registrationNameText:Locator;
    readonly registerButton:Locator;
    readonly registrationText:Locator;
    readonly createRegistration:Locator;
    readonly enterFullName:Locator;
    readonly registrationEmail:Locator;
    readonly enterEmailRegister:Locator;
    readonly registrationPassword:Locator;
    readonly enterRegistrPaswrod:Locator;
    readonly repeatPassword:Locator;
    readonly eneterRepeatPaswrod:Locator;
    readonly mainCurrency:Locator;
    readonly questionAccount:Locator;
    readonly enenterExistedAccount:Locator;
    readonly registerSubmit:Locator;



    constructor(page:Page) {
        this.page=page
        this.blueicon=page.locator('div.bg-blue-600')
        this.registerForm = page.getByTestId('register-form');
        this.registrationNameText = this.registerForm.getByText("Повне ім'я");
        this.registerButton=page.getByTestId('switch-to-register-button');
        this.registrationText=page.locator('text=Реєстрація');
        this.createRegistration=page.locator('text=Створіть новий обліковий запис');
        this.enterFullName=page.getByPlaceholder('Іван Петренко');
        this.registrationEmail=this.registerForm.getByText('Email адреса');
        this.enterEmailRegister=page.getByPlaceholder('your@email.com');
        this.registrationPassword=this.registerForm.getByText('Пароль');
        this.enterRegistrPaswrod=page.getByPlaceholder('Мінімум 6 символів');
        this.repeatPassword=this.registerForm.getByText('Підтвердження паролю');
        this.eneterRepeatPaswrod=page.getByPlaceholder('Мінімум 6 символів');
        this.mainCurrency=this.registerForm.getByText('Основна валюта');
        this.questionAccount=page.getByText('Вже маєте обліковий запис? Увійти');
        this.enenterExistedAccount=page.getByTestId('switch-to-login-button');
        this.registerSubmit=page.getByTestId('register-submit-button');




        
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
    async checkRegisterButton (){
        await expect(this.registerButton).toHaveText('Зареєструватися');
        await expect(this.registerButton).toBeEnabled();
        await await this.registerButton.click();
    }
    async checkRegistrationText(){
        await expect(this.registrationText).toBeVisible();
        await expect(this.registrationText).toHaveText('Реєстрація');
    }
    async checkcreateRegistration (){
        await expect(this.createRegistration).toBeVisible();
        await expect(this.createRegistration).toHaveText('Створіть новий обліковий запис');
    }
    async fillFullName(value: string) {
    await this.enterFullName.fill(value);
    await expect(this.enterFullName).toHaveValue(value);
    await expect(this.enterFullName).toHaveValue(value);
    }
    async checkRegistrationEmail(){
        await expect(this.registrationEmail).toBeVisible();
        await expect(this.registrationEmail).toHaveText('Email адреса');

    }
    async fillEnterEmailRegister(value: string){
        await expect(this.enterEmailRegister).toBeVisible();
        await (this.enterEmailRegister).fill(value);
        await expect(this.enterEmailRegister).toHaveValue (value);

    }
    async checkRegistrationPassword(){
        await expect(this.registrationPassword).toBeVisible();
        await expect(this.registrationPassword).toHaveText('Пароль');
    }
    async fillEnterRegistrPaswrod(value: string){
        await expect(this.enterRegistrPaswrod).toBeVisible();
        await (this.enterRegistrPaswrod).fill('Testing');
        await expect(this.enterRegistrPaswrod).toHaveValue ('Testing');
    }
    async checkRepeatPassword(){
        await expect(this.repeatPassword).toBeVisible();
        await expect(this.repeatPassword).toHaveText('Підтвердження паролю');
    }
    async fillEneterRepeatPaswrod (){
         await expect(this.eneterRepeatPaswrod).toBeVisible();
        await (this.eneterRepeatPaswrod).fill('Testing');
        await expect(this.eneterRepeatPaswrod).toHaveValue ('Testing');
    }
    async checkMainCurrency(){
        await expect(this.mainCurrency).toBeVisible();
        await expect(this.mainCurrency).toHaveText('Основна валюта');
    }
    async checkquestionAccount(){
        await expect(this.questionAccount).toBeVisible();
        await expect(this.questionAccount).toHaveText('Вже маєте обліковий запис? Увійти');

    }
    async checkEnenterExistedAccount(){
        await expect(this.enenterExistedAccount).toBeVisible();
        await expect(this.enenterExistedAccount).toHaveText('Увійти');
    }
    async checkRegisterSubmit(){
        await expect(this.registerSubmit).toBeVisible();
        await expect(this.registerSubmit).toHaveText('Зареєструватися');
    }




}