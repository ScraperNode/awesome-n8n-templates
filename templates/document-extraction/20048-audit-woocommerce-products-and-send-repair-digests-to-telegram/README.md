# 🔬 Audit WooCommerce products and send repair digests to Telegram

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Find incomplete WooCommerce product listings before promoting your catalog. Audit published simple products for price, image assignment and permalink issues, then review a repair list with edit links. Optional Telegram digests summarize findings. Start with a fictional demo that needs no credentials.

## How it works
1. A manual trigger or daily schedule loads the grouped settings. Demo mode supplies fictional products and simulated URL responses without external requests.
2. Live mode reads the WooCommerce REST API with a read-only credential. Explicit pagination verifies page lengths, advertised totals and product IDs. Incomplete or over-limit catalogs stop before a report is sent.
3. The audit checks published simple products that are not hidden from the catalog. Empty or invalid current prices, missing image assignments and invalid permalinks become actionable findings. Zero-priced products are valid; missing SKUs are optional findings.
4. Optional HEAD requests collect public storefront status evidence. HTTP 404/410 results require browser confirmation. Redirects, blocked requests, server errors and timeouts remain verification items.
5. The complete execution report includes evidence, recommended actions, exclusions and direct WooCommerce edit links. An optional bounded Telegram digest shows how many affected products are included.
6. A verified Telegram acknowledgement records a daily marker for scheduled duplicate suppression. This is best effort; the workflow does not edit products.

## Setup
1. Import the JSON and run the fictional demo. Open Audit report to confirm the sample findings. Create a WooCommerce REST API credential with Read permissions, bind it to both catalog HTTP nodes and keep Include Credentials in Query off.
2. In Edit audit settings, enter the canonical HTTPS WordPress base URL, choose live mode and set the product limit. Run a preview with URL requests and Telegram disabled, then compare findings with the product editor. Enable URL checks if wanted and verify the results in a browser.
3. For Telegram, bind a bot credential and enter a numeric chat ID. Deliberately test one message with sendTelegram and allowManualSend enabled, then disable allowManualSend. Review the schedule and workflow timezone before enabling the workflow; the default is 09:00 Asia/Bangkok. Verify the first scheduled execution.

## Requirements
- An n8n instance, a public HTTPS WooCommerce store and WooCommerce REST API access. A Telegram bot and numeric destination chat ID are needed only for notifications. No community nodes or AI subscription are required. Hosting and connected services have their own plans and costs.

## Customization
- Change the daily schedule and timezone, enable the optional SKU rule or disable URL requests. Configure the published-product limit from 1 to 500; the default is 200 and includes excluded product types.

## Additional info
This version audits published simple products with visible, catalog or search visibility. Hidden, variable, grouped and external products are excluded. Image checks inspect assignments, not rendered images. HEAD status checks do not establish checkout readiness. Successful execution reports are saved subject to n8n retention settings. The workflow exports inactive with no credential bindings.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
