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
        //сайлд бар//
        const sidebarMenu = page.getByTestId('main-navigation');
        await expect(sidebarMenu).toBeVisible();
        const navTransaction = page.getByTestId('nav-transactions');
        await expect(navTransaction).toBeVisible();
        //навігація до трансакцій//
        await Promise.all([navTransaction.click(),]);
        const transactionsPage = page.getByTestId('transactions-page-title');
        await expect(transactionsPage).toBeVisible();
        await expect(transactionsPage).toHaveText('Транзакції');
        //категорії//
        const navCategories = page.getByTestId('nav-categories');
        await expect(navCategories).toBeVisible();
        //навігація до категорій//
        await Promise.all([navCategories.click(),]);
        const categoriesPage = page.getByTestId('categories-page-title');
        await expect(categoriesPage).toBeVisible();
        await expect(categoriesPage).toHaveText('Управління категоріями');
        const categoriesButton = page.getByTestId('add-category-button');
        await expect(categoriesButton).toBeVisible();
        await expect(categoriesButton).toHaveText('Додати категорію');
        //попап категорій//
        await Promise.all([categoriesButton.click(),]);
        const categoriesForm = page.getByTestId('category-form');
        await expect(categoriesForm).toBeVisible();
        const categoriesFormTitle = page.getByTestId('category-form-title');
        await expect(categoriesFormTitle).toBeVisible();
        await expect(categoriesFormTitle).toHaveText('Нова категорія');
        //створення нової категорій//
        const enterRequiredData=page.getByTestId('category-name-input');
        await expect(enterRequiredData).toBeVisible();
        const categoriesData = `categories_${Date.now()}`;
        await (enterRequiredData).fill(categoriesData);
        await expect(enterRequiredData).toHaveValue (categoriesData);
        const submitCategoryButton=page.getByTestId('category-form-submit');
        await expect(submitCategoryButton).toBeVisible();
        await expect(submitCategoryButton).toHaveText('Створити');
        await Promise.all([submitCategoryButton.click(),]);
        const newCategory = page.getByTestId(/^category-name-/).filter({ hasText: categoriesData });
        await expect(newCategory).toBeVisible();
        await expect(newCategory).toHaveText(categoriesData);
        //видаляємо нову категрію//
        const deleteNewCategory = page.getByRole('button', {name: `Delete category ${categoriesData}`,});
        await expect(deleteNewCategory).toBeVisible();
        await deleteNewCategory.click();
        await expect(newCategory).not.toBeVisible();


      



            });
});