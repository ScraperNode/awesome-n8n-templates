# 📊 Average property value estimates from Zillow, Redfin, and Realtor.com

> ⚡ **48 views** · 📊 [Market Research & Insights](../)

## Description

## Who is this for?
Real estate investors, agents, and analysts who want a more reliable property valuation than any single AVM provides. Useful for offer prep, portfolio tracking, comp analysis, and CRM enrichment.

## What does it do?
Sends a property address to three independent valuation APIs in parallel — Zillow's Zestimate, Redfin's Estimate, and Realtor.com's estimate — then averages the three values to produce a smoothed, defensible mid-point figure. Each AVM uses different proprietary models that routinely disagree by 10–30%, so averaging cancels out individual model bias.

## How it works
1. **Manual Trigger + Edit Fields** — set the property address (preset to a sample Atlanta address for testing)
2. **Three parallel API chains** all fire simultaneously:
   - **Zillow** — direct call returns the Zestimate
   - **Redfin** — search by address → fetch property estimate by ID
   - **Realtor.com** — autocomplete by address → fetch property detail by ID
3. **Merge** combines the three responses by position
4. **Edit Fields1** extracts each estimate value into a clean numeric field
5. **Code node** calculates the arithmetic mean and writes it to `averageEstimate`

Output schema: `{ address, zestimate, redfinEstimate, realtorEstimate, averageEstimate }`

## Set up steps
- Sign up at RapidAPI and subscribe to **three** APIs (all have free tiers): `zillow-com1`, `redfin-com-data`, and `realtor-search`
- Create a single **Header Auth** credential in n8n with your RapidAPI key (header name: `x-rapidapi-key`)
- Attach that same credential to all 5 HTTP Request nodes
- Replace the sample address in Edit Fields with your real property
- (Optional) Swap the manual trigger for a webhook, schedule, or Google Sheets trigger; add an output node after the Average to send results to Sheets, a database, Slack, or your CRM

Setup time: ~5–10 minutes once the RapidAPI subscriptions are active.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
