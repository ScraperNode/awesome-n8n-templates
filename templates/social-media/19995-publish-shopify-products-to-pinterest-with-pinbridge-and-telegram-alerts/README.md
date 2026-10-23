# 📱 Publish Shopify products to Pinterest with PinBridge and Telegram alerts

> ⚡ **3 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
Pins each Shopify product to a Pinterest board once it is live: active, published to your Online Store and with a photo. Pin copy comes from the product itself, PinBridge publishes it once per product, and optional Telegram alerts report when each pin goes live or fails.

## How it works
1. Two Shopify triggers fire when a product is created or updated. Because it also listens for updates, a draft that goes active, or a product whose photo is added later, still gets pinned.
2. Your settings are checked first. If the account ID, board ID or store URL is still a placeholder, the run stops with a message naming what to fill in.
3. Products that are not active, not published to the Online Store (or scheduled for later), have no photo, or are already pinned are skipped. The filter's output shows the reason for each one.
4. The pin title, description, link and alt text are built from the product's title, description, lowest price and photo alt text. HTML is cleaned up and no hashtags are added.
5. The product photo is downloaded and uploaded to PinBridge, and the pin is published by asset ID, so Pinterest never has to fetch your store's CDN.
6. An idempotency key made from the product and board IDs means each product becomes one pin per board, even if Shopify sends the same event twice. The workflow then remembers the product so later edits skip the upload.
7. Optional: when PinBridge reports pin.published or pin.failed, the signed webhook is verified, matched to pins this workflow created, and sent to Telegram with the live Pinterest link or the failure reason.

## Setup
1. Install the PinBridge community node (n8n-nodes-pinbridge). It is verified, so it installs on n8n Cloud as well as self-hosted n8n.
2. In PinBridge, connect your Pinterest account and create an API key. Add it as a PinBridge credential on the PinBridge nodes.
3. In the Shopify Dev Dashboard, create an app with the read_products scope and add the OAuth redirect URL shown in n8n's Shopify OAuth2 credential dialog. Create that credential and select it on both Shopify triggers.
4. Open "Configure your Pinterest settings" and enter your PinBridge account ID and board ID (PinBridge dashboard, under Accounts and Boards), your store's public URL, and its 3-letter currency code. Currency defaults to USD; clear it to leave prices out of pins.
5. Test it: open "Shopify product created", click Listen for test event, then create an active product with a photo in Shopify. This publishes a real pin. Then activate the workflow.
6. Optional Telegram alerts: add a Telegram credential to "Send the confirmation", and put your chat ID and a signing secret of 16+ characters in "Configure the confirmation step". Then enable "Register the webhook with PinBridge (run once)", fill in the webhook's Production URL and the same secret, run it once, and disable it again.

## Requirements
- n8n Cloud, or self-hosted n8n reachable from the internet (Shopify and PinBridge call its webhooks)
- The PinBridge community node (n8n-nodes-pinbridge)
- A PinBridge account with a connected Pinterest account and an API key
- A Shopify store and a Shopify Dev Dashboard app with the read_products scope
- Optional: a Telegram bot (from @BotFather) and your chat ID

## Customization
- Rewrite the description lines in "Build the pin title and description" to match your brand voice, or add UTM parameters to the link to track Pinterest traffic.
- Send products to different boards by setting pinterest_board_id in "Build the pin title and description" from the product type or tags.
- Spread launches out by switching "Publish the pin to Pinterest" to the Schedule resource and setting a Run At time. The Telegram alerts still recognise scheduled pins.
- Headless store? Remove the Online Store check (published_at) in "Check the product is ready to pin".
- Leave the currency empty to publish pins without prices.
- Swap the Telegram node for Slack, Discord or Gmail.

## Additional info
Shopify sends an update event for every product edit, so expect one short execution per edit. Products that aren't ready or are already pinned stop at the filter. The list of pinned products lives in the workflow's static data, which n8n only saves for active workflows, not manual test runs from the editor. The confirmation webhook rejects any request whose signature doesn't match your secret.

## 🔗 Nodes Used

HTTP Request, Webhook, Telegram, Shopify Trigger, Stop and Error, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
