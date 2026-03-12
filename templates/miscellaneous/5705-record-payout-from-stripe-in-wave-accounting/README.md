# 🔧 Record payout from Stripe in Wave Accounting

> ⚡ **400 views** · 🔧 [Miscellaneous](../)

## Description

# This workflow helps small business owners using Wave Apps to easily access the Wave Accounting API using n8n
In this example, the workflow is triggered from a new payout from Stripe. It then logs the transaction as a journal entry in Wave Accounting, helping you automate your accounting without needing to pay for expensive subscriptions!

## What this workflow template does
This workflow triggers when a payout is paid in Stripe and sends a GraphQL request to the Wave Accounting API recording the payout as a journal entry automatically. The benefits of this worklow are to instantaneously keep your books up to date and to ensure accuracy.

## How to setup
1. Setup your Stripe credential in n8n using the native Stripe nodes.
2. [Follow this guide](https://developer.waveapps.com/hc/en-us/articles/360018856751-Authentication) to get your Wave Apps authorization token.
3. Setup the node with the correct header auth -&gt; **{"Authorization": "Bearer TOKEN-HERE"}**
4. Get your account IDs from Wave
5. The payload uses GraphQL so ensure to update it accordingly with what you are trying to achieve, the current example creates a journal entry.

## Tips
### Getting Wave account and IDs
- It is easiest to use network logs to obtain the right account IDs from Wave, especially if you have created custom accounts (default Wave account IDs can be obtained via making that API call).
	- Go to Wave and make a new dummy transaction using the accounts you want to use in n8n.
	- Have the network logs open while you do this.
	- Search network logs for the name of the account you are trying to use.
	- You should see account IDs in the log data.

### Sales tax
- This example uses sales tax baked into the total Stripe payout amount (5%)
- You can find the sales tax account IDs the same way as you found the Wave account IDs using network logs

### Use AI to help you with your API call
- Ask Claude or ChatGPT to draft you your ideal payload

## 🔗 Nodes Used

HTTP Request, Stripe Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
