import{test, expect, Page} from '@playwright/test';
test.describe ('перевірка головної сторінки',() => {

   test ('перевірка головної сторінки', async({page}) => 
    {await page.goto('/');
        const user = {
        email: `user@demo.com`,
        password: 'user123',
        };
        //перевірка наявності необхідниї полів//
        const enterEmail=page.getByPlaceholder('your@email.com');
        await expect(enterEmail).toBeVisible();
        const enterPassword=page.getByPlaceholder('Введіть пароль');
        await expect(enterPassword).toBeVisible();
        const enterButton=page.getByTestId('login-submit-button');
        await expect(enterButton).toHaveText('Увійти');
        await expect(enterButton).toBeEnabled();
        //заповнення реєстраційної форм//
        await test.step('Заповнення реєстраційної форми', async () => {
        await enterEmail.fill(user.email);
        await enterPassword.fill(user.password);
        await expect(enterEmail).toHaveValue ('user@demo.com');
        await expect(enterPassword).toHaveValue ('user123');
        });
        //завантаження головної сторінки//
        await Promise.all([page.waitForURL('https://finmore.netlify.app'),enterButton.click(),]);
        await expect(page).toHaveTitle('Повнофункціональний фінансовий менеджер');
        //перевірка головної сторінки//
        const userlogo=page.locator('text=User Demo');
        await expect(userlogo).toBeEnabled();
        await expect(userlogo).toHaveText('User Demo');
        const mainlogo=page.locator('text=FinanceManager');
        await expect(mainlogo).toBeEnabled();
        await expect(mainlogo).toHaveText('FinanceManager');
        //на сторінці два елементи з data-testid="app-title"//
        const secondMainlogo = page.getByTestId('sidebar').getByTestId('app-title');
        await expect(secondMainlogo).toBeVisible();
        await expect(secondMainlogo).toHaveText('FinanceManager');



      



            });
});