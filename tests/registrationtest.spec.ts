import{test, expect, Page} from '@playwright/test';
test.describe ('перевірка реєстрації',() => {

   test ('авторизація з валідними полями', async({page}) => 
    {await page.goto('/');
        await expect (page).toHaveTitle('Повнофункціональний фінансовий менеджер');
        await expect (page).toHaveURL('/');
        





    });
});