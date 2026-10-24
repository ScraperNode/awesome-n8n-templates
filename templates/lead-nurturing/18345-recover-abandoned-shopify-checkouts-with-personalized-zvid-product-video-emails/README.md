# 💬 Recover abandoned Shopify checkouts with personalized Zvid product video emails

> ⚡ **9 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
Recover abandoned Shopify checkouts with personalized Zvid product videos. The workflow rechecks conversion, inventory, newer abandonment, and duplicate-message safeguards before rendering, can optionally email the recovery link and video, and checks Shopify again so customers who purchase do not receive a follow-up.

## How it works
1. Runs manually for testing or every 15 minutes on schedule. It can load the included safe fixture or query Shopify Admin GraphQL for open abandoned checkouts.
2. Selects one eligible checkout, locks its Shopify checkout ID to prevent overlapping executions from processing it twice, and waits for the configured recovery delay.
3. Queries Shopify again to confirm there is no completed order or draft order, inventory remains available, no newer abandonment has superseded the checkout, and—when enabled—Shopify has not already sent a recovery email.
4. Builds a privacy-safe Zvid project from the shopper’s first name, up to three product titles, images, prices, and cart total. It excludes email, phone, and the private recovery URL, then validates the project for free and returns the exact credit quote.
5. With dryRun enabled, saves an editor draft and returns the preview link and quote without rendering an MP4. With dryRun disabled, renders through the official Zvid nodes and polls until the video completes or times out.
6. When sendEmail is enabled, sends the first recovery email to the Shopify checkout email with the recovery link and video URL. An optional follow-up waits, checks Shopify conversion again, and sends only if the checkout is still abandoned; a purchase stops the reminder.

## Setup
1. Create a Shopify Dev Dashboard app with read_orders, read_customers, and read_products. The staff user who installs the app must also have Manage abandoned checkouts permission. Release and install the app version, then approve the requested access.
2. Copy the canonical *.myshopify.com domain from Shopify Admin → Settings → Domains and enter only its subdomain in Config.shopDomain. Exchange the Client ID and Client secret for an access_token; they are not the token. Create an n8n Header Auth credential named X-Shopify-Access-Token with the returned token and assign it to all three Shopify HTTP Request nodes. Dev Dashboard tokens expire after 24 hours.
3. Before configuring Zvid credentials, install @zvid/n8n-nodes-zvid from n8n Settings → Community nodes; an owner or admin may need to install it. Create a key at https://app.zvid.io/api-keys, create a Zvid API credential using https://api.zvid.io, and assign it to Validate project, Save draft to editor, Submit render, and Get render status.
4. For the first run, keep manualFixture: true, dryRun: true, sendEmail: false, and testFixtureRecoveredBeforeFollowUp: true. Review the editor draft and credit quote. Then set manualFixture: false while keeping dryRun enabled, test live Shopify data, and set dryRun: false only after approving the render cost.
5. Email delivery is optional. Assign an SMTP credential to both email nodes, set emailFrom to a verified sender, and privately test before setting sendEmail: true. Live mode sends to the email attached to the selected Shopify checkout. Configure SPF, DKIM, consent, quiet hours, and appropriate n8n execution retention before activation.

## Requirements
- Shopify store and Dev Dashboard app; read_orders, read_customers, and read_products scopes; Manage abandoned checkouts staff permission; an n8n workspace where an owner/admin can install @zvid/n8n-nodes-zvid; a Zvid API key; optional SMTP credentials for email delivery.

## Customization
- Adjust the Shopify query, scan limit, lock TTL, recovery and follow-up waits, duplicate-message guard, brand copy, colors, fonts, music, and output resolution. Keep SMTP disabled, replace it with an approved messaging provider, or integrate the recovery assets with an existing marketing platform while preserving the conversion gates.

## Additional info
The safe fixture mirrors a real Zvid test-store product: Clay Pocket Oversized Tee, variant M, quantity 1, total $35. It uses fake contact values, two-second waits, sends nothing, and simulates conversion before the follow-up. Shopify reads use built-in HTTP Request nodes because n8n’s Shopify node does not expose the required abandoned-checkout objects, recovery URL, conversion flags, and inventory gates. All supported Zvid operations use the official @zvid/n8n-nodes-zvid node, and no credentials are embedded in the JSON.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
