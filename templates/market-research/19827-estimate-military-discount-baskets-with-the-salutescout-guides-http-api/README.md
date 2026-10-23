# 📊 Estimate military discount baskets with the SaluteScout guides HTTP API

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow collects a brand name and verified discount terms via an n8n form, looks up matching SaluteScout discount guides through a public API, then calculates a pre-tax basket total with spend and allowance caps and returns an HTML summary.

## How it works
1. Receives form submissions with a brand query, eligible and excluded subtotals, a discount percentage, optional ceilings/allowances, and a confirmation that the terms were checked.
2. Sets the currency code and the result heading used in the output.
3. Queries the SaluteScout guides API (`https://salutescout.com/api/agent/guides`) to search for up to five published guides matching the entered brand.
4. Validates the inputs, checks for a direct brand match in the returned guide title or ID, and prepares a link only when a safe matching guide URL is found.
5. Calculates the estimated discount using integer-cent arithmetic by separating eligible vs. excluded goods, capping the eligible spend base, and capping the discount by the remaining allowance.
6. Returns a completion page showing the guide lookup status and a formatted table with the basket totals and estimated discount.

## Setup
1. (Optional) Update the currency label and result heading in the configuration step, and ensure all entered amounts use that single currency with two decimal minor units.
2. Test and publish the n8n form, then use its URL as the entry point for users to submit the brand and checked merchant terms.
3. Ensure outbound access to `https://salutescout.com/api/agent/guides` is allowed in your environment, since the guide lookup relies on this public endpoint.

## Additional info
The guide lookup reads indexed SaluteScout articles, not live merchant offers; shoppers must verify current terms. The related checklist, source notes and calculation explanation are on our [website](https://salutescout.com/). The reusable [calculator and checklist](https://github.com/holaclea/military-discount-checklist) are available as source files.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
