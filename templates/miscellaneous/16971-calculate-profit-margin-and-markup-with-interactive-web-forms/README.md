# 🔧 Calculate profit margin and markup with interactive web forms

> ⚡ **30 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow exposes an n8n Form that calculates a product’s selling price from cost, tax, and marketplace fees using either a target profit margin or a target markup, then displays the resulting price, profit, margin, and markup (or a validation error) and lets users return to the form.

## How it works
1. Receives an n8n Form submission with product cost, tax percentage, fee percentage, a desired value, and a chosen calculation method (Profit Margin or Markup).
2. Validates that product cost is greater than 0 and that tax and fee percentages are 0 or higher, otherwise shows an error result page.
3. Routes the request based on the selected method (Profit Margin vs Markup).
4. For Profit Margin, verifies that tax + fee + desired margin is less than 100%, calculates selling price and profit, and shows the results page.
5. For Markup, verifies that the markup is 0% or higher, calculates selling price, profit, and the resulting profit margin, and shows the results page.
6. After any results or error page, redirects the user back to the initial form using the configured form URL.

## Setup
1. Activate the workflow and open the Form Trigger node to copy its Production URL.
2. Paste that Production URL into the Set URL node (replacing `REPLACE_WITH_PRODUCTION_FORM_URL`) so the “Finish” action redirects back to the calculator form.
3. Optionally edit the form labels, currency formatting, or the pricing formulas in the two Code steps before going live.

## 🔗 Nodes Used

n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
