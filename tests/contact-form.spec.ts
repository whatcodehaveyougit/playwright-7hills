import { test, expect } from "@playwright/test";

test("Contact Form Test", async ({ page }) => {
  await page.goto("https://7hillsceilidh.com/");
  await page.getByRole("link", { name: "Contact ♦" }).click();
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
  // await page.getByRole("button", { name: "Submit" }).click();
  // await expect(page.getByText("Thanks for being awesome")).toBeVisible();
});
