import{test, expect, Page} from '@playwright/test';
test.describe ('перевірка негатвиного логіну',() => {

   test ('логін з невалідними полями', async({page}) => 
    {await page.goto('/');
        const uniqueInvalidEmail = `l+${Date.now()}@i.ua`;
        const enterEmail=page.getByPlaceholder('your@email.com');
        await expect(enterEmail).toBeVisible();
        await (enterEmail).fill(uniqueInvalidEmail);
        await expect(enterEmail).toHaveValue (uniqueInvalidEmail);
        const enterPassword=page.getByPlaceholder('Введіть пароль');
        await expect(enterPassword).toBeVisible();
        await (enterPassword).fill('Asahfaf');
        await expect(enterPassword).toHaveValue ('Asahfaf');
        const enterButton=page.getByTestId('login-submit-button');
        await expect(enterButton).toHaveText('Увійти');
        await expect(enterButton).toBeEnabled();
        await enterButton.click();
        const loginError = page.getByTestId('login-error');
        await expect(loginError).toBeVisible();
        await expect(loginError).toHaveText('Невірний email або пароль');
       
        


      



            });
});