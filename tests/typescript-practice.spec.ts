import { test } from '@playwright/test';

test('TypeScript Practice', async () => {

    const username: string = 'admin';
    let count: number = 1;

    count = 2;

    console.log(username);
    console.log(count);

});