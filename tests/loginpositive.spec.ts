import{test, expect, Page} from '@playwright/test';
test.describe ('перевірка логіну',() => {

   test ('@smoke @regression логін з валідними полями', async({page}) => 
    {await page.goto('/');
        const logo=page.locator('div.bg-green-600');
        await expect(logo).toBeVisible();
        const enter=page.getByTestId('login-title');
        await expect(enter).toBeVisible();
        await expect(enter).toHaveText('Вхід до системи');
        const credentials=page.locator('text=Увійдіть до свого облікового запису');
        await expect(credentials).toBeVisible();
        await expect(credentials).toHaveText('Увійдіть до свого облікового запису');
        const emailAdress=page.getByTestId('login-form');
        await expect(emailAdress).toBeVisible();
        await expect(emailAdress).toHaveText('Email адресаПарольУвійти');
        const enterEmail=page.getByPlaceholder('your@email.com');
        await expect(enterEmail).toBeVisible();
        await (enterEmail).fill('l_nrpi1+1@i.ua');
        await expect(enterEmail).toHaveValue ('l_nrpi1+1@i.ua');
        const enterPassword=page.getByPlaceholder('Введіть пароль');
        await expect(enterPassword).toBeVisible();
        await (enterPassword).fill('Testing');
        await expect(enterPassword).toHaveValue ('Testing');
        const demo=page.locator('text=Демо облікові записи:');
        await expect(demo).toBeVisible();
        await expect(demo).toHaveText('Демо облікові записи:');
        const exampleInfo=page.locator('div.text-gray-400');
        await expect(exampleInfo).toBeVisible();
        await expect(exampleInfo).toHaveText('admin@demo.com / admin123user@demo.com / user123');
        const enterButton=page.getByTestId('login-submit-button');
        await expect(enterButton).toHaveText('Увійти');
        await expect(enterButton).toBeEnabled();
        await Promise.all([page.waitForURL('https://finmore.netlify.app'),enterButton.click(),]);
        await expect(page).toHaveTitle('Повнофункціональний фінансовий менеджер');
        


      



            });
});