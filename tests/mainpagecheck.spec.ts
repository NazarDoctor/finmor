import{test, expect, Page} from '@playwright/test';
test.describe ('перевірка головної сторінки',() => {

   test ('перевірка головної сторінки', async({page}) => 
    {await page.goto('/');
        const user = {
        email: `user@demo.com`,
        password: 'user123',
        };
        const enterEmail=page.getByPlaceholder('your@email.com');
        await expect(enterEmail).toBeVisible();
        await (enterEmail).fill(user.email);
        await expect(enterEmail).toHaveValue ('user@demo.com');
        const enterPassword=page.getByPlaceholder('Введіть пароль');
        await expect(enterPassword).toBeVisible();
        await (enterPassword).fill(user.password);
        await expect(enterPassword).toHaveValue ('user123');
        const enterButton=page.getByTestId('login-submit-button');
        await expect(enterButton).toHaveText('Увійти');
        await expect(enterButton).toBeEnabled();
        await Promise.all([page.waitForURL('https://finmore.netlify.app'),enterButton.click(),]);
        await expect(page).toHaveTitle('Повнофункціональний фінансовий менеджер');
        


      



            });
});