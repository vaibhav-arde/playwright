const {test, expect, request} = require('@playwright/test');
const {APiUtils} = require('../utils/APiUtils');
const loginPayLoad = {userEmail:"vaibhav.arde@gmail.com",userPassword:"Admin@123"};
const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"6581ca399fd99c85e8ee7f45"}]};


let response;
test.beforeAll( async()=>
{
   const apiContext = await request.newContext();
   const apiUtils = new APiUtils(apiContext,loginPayLoad);
   response =  await apiUtils.createOrder(orderPayLoad);
})


//create order is success
test('@API Place the order', async ({page})=>{
    page.addInitScript(value => {
        window.localStorage.setItem('token',value);
    }, response.token );
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");

    for(let i =0; i<await rows.count(); ++i){
        const rowOrderId =await rows.nth(i).locator("th").textContent();
        if (response.orderId.includes(rowOrderId)){
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    const orderIdDetails =await page.locator(".col-text").textContent();
    //await page.pause();
    expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
});
