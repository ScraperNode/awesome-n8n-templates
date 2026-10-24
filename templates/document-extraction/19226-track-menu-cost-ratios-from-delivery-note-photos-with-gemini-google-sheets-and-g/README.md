# 🔬 Track menu cost ratios from delivery-note photos with Gemini, Google Sheets and Gmail

> ⚡ **7 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Ingredient prices creep up, and a dish can run at a loss for weeks before anyone notices. Drop a photo of a delivery note into a Drive folder: Gemini reads it, the price list updates, and every morning you get only the dishes over target, with what to do.

## How it works
1. Triggers either every day at 8:00 or when a new delivery-note photo is created in a specific Google Drive folder.
2. If a new photo is detected, it downloads the image and uses Google Gemini to extract supplier, date, totals, and line items as structured JSON.
3. Converts invoice quantities into base units (per gram/ml/piece), verifies the line items against the printed subtotal/total, and either updates ingredient unit prices in the Google Sheets Ingredients tab or emails you to manually check the photo when totals don’t match.
4. On the daily run, reads the Ingredients, Recipes, and Menu tabs from Google Sheets and calculates each menu item’s theoretical cost, current cost ratio, and status versus its target.
5. Writes the latest cost and ratio values back to the Google Sheets Menu tab for tracking.
6. If any dishes are over target, sends the over-target facts to Google Gemini to generate exactly three concise, practical actions per dish and emails the results to you via Gmail; otherwise, it sends nothing.

## Setup
1. Create a Google Sheets file with three tabs named Ingredients, Recipes, and Menu, and ensure the columns match the workflow’s expected fields (including target_cost_ratio and row_number usage for Menu updates).
2. Create a Google Drive folder for delivery-note photos and set its folder ID in both the Google Drive trigger and the Config values.
3. Add your Google Sheets document ID and notification email address in the Config values.
4. Connect credentials for Google Sheets, Google Drive, Google Gemini, and Gmail.
5. Activate the workflow and test by dropping a clear delivery-note photo into the watched Drive folder, then confirm the Ingredients updates and daily email behavior.

## Requirements
- A Google Sheet with three tabs: Ingredients, Recipes, Menu (column names are in the setup note)
- A Google Drive folder for delivery-note photos
- A Google Gemini API key
- Google Sheets, Google Drive and Gmail credentials in n8n

## Customization
- Give each menu item its own target_cost_ratio, so a deliberately high-cost signature dish never triggers a false alarm
- Change the daily check time in the Schedule trigger
- Edit the system message in "Suggest actions with AI" to change the tone or language of the advice
- Add units to the conversion table in "Parse and convert to base units" if your suppliers use other units
- Swap the Gmail nodes for Slack, Telegram or LINE; the message bodies are built in code

## Additional info
Every figure in the email - cost, ratio, cost driver, the price that restores the target, and the check that a delivery note adds up - is calculated in code. The AI reads the photo and writes the advice; it never produces a number that reaches your sheet. Rows it cannot read are reported, never guessed.

Who it is for: any food business where the person who enters prices is not the person who decides on them. A clerk or shift manager keeps the sheet current; the owner or head office learns which dishes crossed the line. That separation is where this earns its keep, at one site or ninety. A one-person kitchen gets a different benefit: you already know chicken went up, but you cannot work out in your head which of thirty dishes just crossed its target. The ripple calculation is the value. If you do not want email, the Menu sheet alone shows the status.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Google Drive Trigger, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
