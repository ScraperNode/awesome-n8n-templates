# 🔬 Track menu food costs and flag margin erosion with GPT-6-luna, Google Sheets and Gmail

> ⚡ **17 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Food cost creep is quiet. A supplier puts up the price of chicken, nobody updates the recipe card, and the damage only shows up at month end. This [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) workflow keeps every recipe cost current, recomputes what each menu item costs to make, and emails you the moment an item passes its target food cost.

*Last updated: October 2026.*

## Quick Overview
This workflow takes supplier price updates through a webhook, logs them to the Prices tab of a Google Sheets tracker, and recomputes every recipe cost from the latest ingredient prices. A daily sweep at 06:00 flags any menu item whose food cost has passed its target, logs it to the CostAlerts tab and emails an alert listing each flagged recipe with its portion cost and percentage. Every Monday at 07:00 gpt-6-luna reads the week's cost stats and writes one plain-text digest with the worst items and the menu prices that would bring them back in line.

## How it works
1. Receives a price change on the "When Price Update Received" [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) webhook (POST path menu-cost-intake-0926) and normalizes ingredient, unit_price, unit, supplier, submitted_by and owner_email, stamping an update_id and a received timestamp.
2. Validates that ingredient and unit_price are present. If either is missing, the price is not logged and a rejection email lists the required fields and the payload that was received.
3. Appends valid updates to the Prices tab (ingredient, unit_price, unit, price_date, supplier, submitted_by, update_id) and sends a confirmation email naming the ingredient, the new price and the reference.
4. Runs the Daily Margin Sweep at 06:00, reading the Prices, Recipes and Menu tabs.
5. Compute Recipe Costs takes the newest price per ingredient by price_date, multiplies each recipe line's qty_per_portion by that price, and works out cost_per_portion and cost_pct against the item's sale_price and target_cost_pct. Ingredients with no price are listed in missing_ingredients.
6. Any item whose cost_pct is above target_cost_pct is flagged, appended to the CostAlerts tab with alert_date, recipe, cost_per_portion, cost_pct, target_cost_pct and status flagged, and gathered into one email headed "Menu margin alert: N item(s) over target" that shows portion cost, food cost against target and any missing prices.
7. Runs the Weekly Menu Digest every Monday at 07:00, re-reading the three tabs and computing menu_items, flagged_count, flagged_recipes, the three worst items, avg_cost_pct and the best-margin item.
8. Passes those stats as JSON to the AI Write Digest agent, which writes a plain-text body under 180 words naming the biggest problems first, suggesting a menu price close to portion cost divided by target cost, and saying what to check with suppliers.
9. Emails that digest as "Weekly menu cost digest". If nothing is flagged, it says the menu is in good shape and names the best-margin item.

## Setup
1. Create a Google Sheets file with four tabs: Prices, Recipes, Menu and CostAlerts.
2. Add the columns the nodes use: ingredient, unit_price, unit, price_date, supplier, submitted_by, update_id in Prices; recipe, ingredient, qty_per_portion in Recipes; recipe, sale_price, target_cost_pct in Menu; alert_date, recipe, cost_per_portion, cost_pct, target_cost_pct, status in CostAlerts.
3. Replace the sample rows with your own ingredients, recipes and menu items, and point the Google Sheets nodes at your own spreadsheet.
4. Add credentials for Google Sheets OAuth2, Gmail OAuth2 and an [OI] chat model.
5. Set the recipients: the webhook accepts owner_email in the payload, and the margin alert and weekly digest nodes use a placeholder address.
6. POST price updates to /webhook/menu-cost-intake-0926 sending ingredient and unit_price, plus optional unit, supplier, submitted_by and owner_email.
7. Confirm the 06:00 sweep and the Monday 07:00 digest match your timezone, then activate the workflow.

### Quick Answers
**What counts as margin erosion here?**
Each menu item carries a target_cost_pct in the Menu tab. The sweep divides the recomputed portion cost by the sale price, and when that percentage is above the target the item is flagged, logged to CostAlerts and included in the alert email.

**What happens when an ingredient has no price?**
The recipe line is left out of the cost total and the ingredient is named in missing_ingredients, which appears in the alert email and the CostAlerts record so you know the number is incomplete.

**What does gpt-6-luna actually do?**
Once a week it reads the computed stats and writes the plain-text digest body under 180 words, with a suggested menu price for each problem item and a note on what to check with suppliers.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
