import { test, expect } from "@playwright/test";

// test.describe("desktop", () => {
//   test("Contact Form Test", async ({ page }) => {
//     await page.goto("https://7hillsceilidh.com/");
//     await page.getByRole("link", { name: "Contact" }).click({ delay: 1000 });
//     await page.waitForURL("https://7hillsceilidh.com/contact/");
//     await page.getByPlaceholder("Joe Bloggs").click();
//     await page.getByPlaceholder("Joe Bloggs").fill("Sigurd");
//     await page.getByPlaceholder("ceilidhmaghee@gmail.com").click();
//     await page
//       .getByPlaceholder("ceilidhmaghee@gmail.com")
//       .fill("7hillsceilidh@gmail.com");
//     await page.getByPlaceholder("ceilidhmaghee@gmail.com").press("Tab");
//     await page.getByPlaceholder("345 678").fill("0123123123");
//     await page.getByPlaceholder("345 678").press("Tab");
//     await page
//       .getByPlaceholder(
//         "Ceilidh Location / Date of event / Event type and other relevent info please!"
//       )
//       .fill("This is a playwright test");
//     await expect(page.getByText("Submit")).toBeVisible();
//     await page.getByRole("button", { name: "Submit" }).click({ delay: 2000 });
//     // await expect(page.getByText("Thanks for being awesome")).toBeVisible();
//   });
// });

// test.describe("mobile", () => {
//   test("Contact Form Test", async ({ page }) => {
//     await page.goto("https://7hillsceilidh.com/");
//     await page.getByText("MENU").click({ delay: 1000 });
//     await page.getByRole("link", { name: "Contact" }).click({ delay: 1000 });
//     await page.waitForURL("https://7hillsceilidh.com/contact/");
//     await page.getByPlaceholder("Joe Bloggs").click();
//     await page.getByPlaceholder("Joe Bloggs").fill("Sigurd");
//     await page.getByPlaceholder("ceilidhmaghee@gmail.com").click();
//     await page
//       .getByPlaceholder("ceilidhmaghee@gmail.com")
//       .fill("7hillsceilidh@gmail.com");
//     await page.getByPlaceholder("ceilidhmaghee@gmail.com").press("Tab");
//     await page.getByPlaceholder("345 678").fill("0123123123");
//     await page.getByPlaceholder("345 678").press("Tab");
//     await page
//       .getByPlaceholder(
//         "Ceilidh Location / Date of event / Event type and other relevent info please!"
//       )
//       .fill("This is a playwright test");
//     await expect(page.getByText("Submit")).toBeVisible();
//     // await page.getByRole("button", { name: "Submit" }).click({ delay: 2000 });
//     // await expect(page.getByText("Thanks for being awesome")).toBeVisible();
//   });
// });

test.describe("mobileSubmit", () => {
  test("Contact Form Test", async ({ page }) => {
    await page.goto("https://7hillsceilidh.com/");
    await page.getByText("MENU").click({ delay: 1000 });
    await page.getByRole("link", { name: "Contact" }).click({ delay: 1000 });
    await page.waitForURL("https://7hillsceilidh.com/contact/");
    await page.getByPlaceholder("Joe Bloggs").click();
    await page.getByPlaceholder("Joe Bloggs").fill("Sigurd");
    await page.getByPlaceholder("ceilidhmaghee@gmail.com").click();
    await page
      .getByPlaceholder("ceilidhmaghee@gmail.com")
      .fill("7hillsceilidh@gmail.com");
    await page.getByPlaceholder("ceilidhmaghee@gmail.com").press("Tab");
    await page.getByPlaceholder("345 678").fill("0123123123");
    await page.getByPlaceholder("345 678").press("Tab");
    await page
      .getByPlaceholder(
        "Ceilidh Location / Date of event / Event type and other relevent info please!"
      )
      .fill("This is a playwright test");
    await expect(page.getByText("Submit")).toBeVisible();
    await page.getByRole("button", { name: "Submit" }).click({ delay: 5000 });
    await expect(page.getByText("Thanks for being awesome")).toBeVisible();
  });
});
