import{ expect, Page, Locator} from '@playwright/test';
import { checkAttribute, expectVisible, fillElement, сlickElement } from '../utils/globalMetods';
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
        this.blueicon=page.locator('svg.lucide-user-plus')
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
        this.eneterRepeatPaswrod=page.getByPlaceholder('Повторіть пароль');
        this.mainCurrency=this.registerForm.getByText('Основна валюта');
        this.questionAccount=page.getByText('Вже маєте обліковий запис? Увійти');
        this.enenterExistedAccount=page.getByTestId('switch-to-login-button');
        this.registerSubmit=page.getByTestId('register-submit-button');




        
    }
    async checkBlueIcon(){
        await expect(this.blueicon).toBeVisible();
        await checkAttribute(this.blueicon, 'width', '24', 'ширина' );

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
        await expectVisible(this.registerButton, 'кнопка реєстрації')
        await expect(this.registerButton).toBeEnabled();
    
    }
    async checkRegistrationText(){
        await expect(this.registrationText).toBeVisible();
        await expect(this.registrationText).toHaveText('Реєстрація');
    }
    async checkcreateRegistration (){
        await expect(this.createRegistration).toBeVisible();
        await expect(this.createRegistration).toHaveText('Створіть новий обліковий запис');
    }
    async checkcEnterFullName (){
        await expectVisible(this.enterFullName, 'Іван Петренко')
        
    }

    async fillFullName(value: string) {
    await fillElement(this.enterFullName, value, 'ПІ користувача')
    
    
    }
    async checkRegistrationEmail(){
        await expect(this.registrationEmail).toBeVisible();
        await expect(this.registrationEmail).toHaveText('Email адреса');

    }
    async fillEnterEmailRegister(value: string){
        await expect(this.enterEmailRegister).toBeVisible();
        await fillElement (this.enterEmailRegister, value, 'емейл реєстрації')
        

    }
    async checkRegistrationPassword(){
        await expect(this.registrationPassword).toBeVisible();
        await expect(this.registrationPassword).toHaveText('Пароль');
    }
    async fillEnterRegistrPaswrod(value: string){
        await expect(this.enterRegistrPaswrod).toBeVisible();
        await fillElement (this.enterRegistrPaswrod, value, 'пароль')
    }
    async checkRepeatPassword(){
        await expect(this.repeatPassword).toBeVisible();
        await expect(this.repeatPassword).toHaveText('Підтвердження паролю');
    }
    async fillEneterRepeatPaswrod (value: string){
        await expect(this.eneterRepeatPaswrod).toBeVisible();
        await fillElement (this.eneterRepeatPaswrod, value, 'Підтвердження паролю')
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
        await expectVisible (this.registerSubmit, 'кнопка реєстрації');
        await expect(this.registerSubmit).toHaveText('Зареєструватися');
    }
    async clickRegisterButton() {
    await сlickElement(this.registerButton, 'кнопка реєстрації');
    }
    async clickRegisterSubmit(){
        await сlickElement(this.registerSubmit, 'Зареєструватись');
    }





}