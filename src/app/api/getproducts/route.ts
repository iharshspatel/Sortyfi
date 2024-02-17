import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  });

  const data = [
    {
        "id": "price_1N7qRXCwVDOztGf1RCJRRwIF",
        "object": "price",
        "active": true,
        "billing_scheme": "per_unit",
        "created": 1684114999,
        "currency": "usd",
        "custom_unit_amount": null,
        "livemode": false,
        "lookup_key": null,
        "metadata": {},
        "nickname": "Basic",
        "product": "prod_Ntdin8JypuFSIf",
        "recurring": {
            "aggregate_usage": null,
            "interval": "year",
            "interval_count": 1,
            "trial_period_days": null,
            "usage_type": "licensed"
        },
        "tax_behavior": "unspecified",
        "tiers_mode": null,
        "transform_quantity": null,
        "type": "recurring",
        "unit_amount": 3900,
        "unit_amount_decimal": "3900"
    },
    {
        "id": "price_1N7qCJCwVDOztGf10MIAGSv4",
        "object": "price",
        "active": true,
        "billing_scheme": "per_unit",
        "created": 1684114055,
        "currency": "usd",
        "custom_unit_amount": null,
        "livemode": false,
        "lookup_key": null,
        "metadata": {},
        "nickname": "Business",
        "product": "prod_Ntc3RHBwgJvwng",
        "recurring": {
            "aggregate_usage": null,
            "interval": "year",
            "interval_count": 1,
            "trial_period_days": null,
            "usage_type": "licensed"
        },
        "tax_behavior": "unspecified",
        "tiers_mode": null,
        "transform_quantity": null,
        "type": "recurring",
        "unit_amount": 129900,
        "unit_amount_decimal": "129900"
    },
    {
        "id": "price_1N7op0CwVDOztGf1nBZg98jR",
        "object": "price",
        "active": true,
        "billing_scheme": "per_unit",
        "created": 1684108766,
        "currency": "usd",
        "custom_unit_amount": null,
        "livemode": false,
        "lookup_key": null,
        "metadata": {},
        "nickname": "Premium",
        "product": "prod_Ntc3M9mG72JtJj",
        "recurring": {
            "aggregate_usage": null,
            "interval": "year",
            "interval_count": 1,
            "trial_period_days": null,
            "usage_type": "licensed"
        },
        "tax_behavior": "unspecified",
        "tiers_mode": null,
        "transform_quantity": null,
        "type": "recurring",
        "unit_amount": 25900,
        "unit_amount_decimal": "25900"
    }
]

  return NextResponse.json(data);
}
