import{test, expect, Page} from '@playwright/test';
test.describe ('перевірка реєстрації',() => {

   test ('@smoke @regression реєстрація з валідними полями', async({page}) => 
    {await page.goto('/');
        const registerButton=page.getByTestId('switch-to-register-button');
        await expect(registerButton).toHaveText('Зареєструватися');
        await expect(registerButton).toBeEnabled();
        await (registerButton).click();
        await expect (page).toHaveTitle('Повнофункціональний фінансовий менеджер');
        await expect (page).toHaveURL('https://finmore.netlify.app');
        const blueIcon=page.locator('div.bg-blue-600');
        await expect(blueIcon).toBeVisible();
        const registrationText=page.locator('text=Реєстрація');
        await expect(registrationText).toBeVisible();
        await expect(registrationText).toHaveText('Реєстрація');
        const createRegistration=page.locator('text=Створіть новий обліковий запис');
        await expect(createRegistration).toBeVisible();
        await expect(createRegistration).toHaveText('Створіть новий обліковий запис');
        const registerForm = page.getByTestId('register-form');
        await expect(registerForm).toBeVisible();
        const registrationNameText = registerForm.getByText("Повне ім'я");
        await expect(registrationNameText).toBeVisible();
        await expect(registrationNameText).toHaveText("Повне ім'я");
        const uniqueUser = `testuser_${Date.now()}`;
        const enterFullName=page.getByPlaceholder('Іван Петренко');
        await expect(enterFullName).toBeVisible();
        await (enterFullName).fill(uniqueUser);
        await expect(enterFullName).toHaveValue (uniqueUser);
        const registrationEmail = registerForm.getByText('Email адреса');
        await expect(registrationEmail).toBeVisible();
        await expect(registrationEmail).toHaveText('Email адреса');
        const uniqueEmail = `l_nrpi1+${Date.now()}@i.ua`;
        const enterEmailRegister=page.getByPlaceholder('your@email.com');
        await expect(enterEmailRegister).toBeVisible();
        await (enterEmailRegister).fill(uniqueEmail);
        await expect(enterEmailRegister).toHaveValue (uniqueEmail);
        const registrationPassword = registerForm.getByText('Пароль');
        await expect(registrationPassword).toBeVisible();
        await expect(registrationPassword).toHaveText('Пароль');
        const enterRegistrPaswrod=page.getByPlaceholder('Мінімум 6 символів');
        await expect(enterRegistrPaswrod).toBeVisible();
        await (enterRegistrPaswrod).fill('Testing');
        await expect(enterRegistrPaswrod).toHaveValue ('Testing');
        const repeatPassword = registerForm.getByText('Підтвердження паролю');
        await expect(repeatPassword).toBeVisible();
        await expect(repeatPassword).toHaveText('Підтвердження паролю');
        const eneterRepeatPaswrod=page.getByPlaceholder('Мінімум 6 символів');
        await expect(eneterRepeatPaswrod).toBeVisible();
        await (eneterRepeatPaswrod).fill('Testing');
        await expect(eneterRepeatPaswrod).toHaveValue ('Testing');
        const mainCurrency = registerForm.getByText('Основна валюта');
        await expect(mainCurrency).toBeVisible();
        await expect(mainCurrency).toHaveText('Основна валюта');
        const questionAccount = page.getByText('Вже маєте обліковий запис? Увійти');
        await expect(questionAccount).toBeVisible();
        await expect(questionAccount).toHaveText('Вже маєте обліковий запис? Увійти');
        const enenterExistedAccount = page.getByTestId('switch-to-login-button');
        await expect(enenterExistedAccount).toBeVisible();
        await expect(enenterExistedAccount).toHaveText('Увійти');
        const registerSubmit = page.getByTestId('register-submit-button');
        await expect(registerSubmit).toBeVisible();
        await expect(registerSubmit).toHaveText('Зареєструватися');
        await Promise.all([page.waitForURL('https://finmore.netlify.app'),registerSubmit.click(),]);
        await expect(page).toHaveTitle('Повнофункціональний фінансовий менеджер');






    });
});