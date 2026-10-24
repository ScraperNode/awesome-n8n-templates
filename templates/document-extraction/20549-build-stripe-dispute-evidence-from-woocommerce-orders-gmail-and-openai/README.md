# 🔬 Build Stripe dispute evidence from WooCommerce orders, Gmail, and OpenAI

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow reacts to Stripe dispute events, pulls related WooCommerce order details and recent Gmail messages, uses OpenAI to draft dispute evidence, saves the evidence on the Stripe dispute (as a draft or auto-submitted), and posts updates to Slack while tracking disputes in Google Sheets.

## How it works
1. Triggers when Stripe sends a `charge.dispute.created` or `charge.dispute.closed` event.
2. For new disputes, fetches the dispute and expanded charge from the Stripe API and extracts key payment signals (3D Secure, CVC/AVS checks, customer details, order metadata, and response deadline).
3. Skips disputes that don’t need a response (already submitted, past due, or below the configured minimum amount) and, when an order ID exists, pulls the matching WooCommerce order, the customer’s order history, shipment tracking metadata, and recent customer emails from Gmail.
4. Sends a consolidated, fact-only case file to OpenAI and generates a reason-specific rebuttal draft plus a list of missing evidence.
5. Maps the draft into Stripe’s dispute evidence fields and saves it back to Stripe as a draft, only auto-submitting when `autoSubmit` is enabled and the case is rated high likelihood.
6. Posts a summary to Slack and appends a row to a Google Sheets “Disputes” tracker, then schedules a Slack reminder before the due date if the evidence remains unsubmitted.
7. For dispute-closed events, updates the dispute outcome in Google Sheets and announces the result in Slack.

## Setup
1. Create and connect credentials for Stripe (API), WooCommerce (REST API), Gmail, OpenAI, Slack, and Google Sheets.
2. Update the workflow’s configuration values (store name/URL, policy URLs, Slack channel, tracker Google Sheet URL, minimum dispute amount, email lookback window, and reminder timing).
3. Ensure Stripe charges include the WooCommerce order ID in charge metadata (for example `order_id` from the WooCommerce Stripe Gateway) so the workflow can match disputes to orders.
4. Create a Google Sheets document with a tab named `Disputes` and columns that match the fields being logged (for example Dispute ID, Order, Customer email, Amount, Reason, Respond by, Recommendation, Win likelihood, Action, Missing evidence, Outcome, Closed on, Stripe link).

## Requirements
- Stripe account (works in test and live mode)
- WooCommerce store using the WooCommerce Stripe Gateway, with REST API keys
- Gmail account
- OpenAI API key
- Slack workspace (optional)
- Google Sheets with a tab named Disputes (optional)

## Customization
- Set autoSubmit to true to send strong cases to the bank automatically
- Change reminderHoursBeforeDeadline or minimumDisputeAmount in Set Store Configuration
- Replace Gmail with Zendesk, Gorgias or Help Scout to pull support tickets
- Swap the OpenAI model or edit the dispute-reason playbook in the AI node
- Delete the Slack or Google Sheets steps if you don't need them

## Additional info
Evidence is saved to Stripe as a draft by default, so nothing reaches the bank until you review it. Test it in Stripe test mode with card 4000000000000259, which always creates a dispute. The deadline reminder uses a Wait node, so run it on an n8n instance that keeps waiting executions (n8n Cloud or self-hosted with a database).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Stripe Trigger, WooCommerce, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
