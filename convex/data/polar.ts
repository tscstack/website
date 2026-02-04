import { action } from "../_generated/server";
import { polar } from "../libs/polar";

export const generateCheckoutUrl = action({
  args: {},
  handler: async () => {
    const checkout = await polar.checkouts.create({
      successUrl: `${process.env.VITE_BASE_URL}/docs`,
      products: [process.env.VITE_POLAR_PRODUCT_ID as string],
      allowDiscountCodes: true,
      discountId: "a61ea260-eb34-44cf-b83d-d17613a28f57"
    });

    return checkout.url;
  }
});
