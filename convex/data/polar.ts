import { action } from "../_generated/server";
import { polar } from "../libs/polar";

export const generateCheckoutUrl = action({
  args: {},
  handler: async () => {
    const checkout = await polar.checkouts.create({
      successUrl: `${process.env.VITE_BASE_URL}/docs`,
      products: [process.env.VITE_POLAR_PRODUCT_ID as string],
      allowDiscountCodes: true,
      discountId: "EARLYBIRD"
    });

    return checkout.url;
  }
});
