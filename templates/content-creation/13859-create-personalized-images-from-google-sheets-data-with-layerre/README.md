# 🎬 Create personalized images from Google Sheets data with Layerre

> ⚡ **92 views** · 🎬 [Content Creation & Video](../)

## Description

How it works
  • Reads rows from a Google Sheet (e.g. Text + Image URL columns).
  • Uses Layerre to create personalized image variants from a Canva-based template.
  • Each row in the sheet becomes one rendered image, and the workflow outputs the final image URLs.

  Set up steps
  • Create a Layerre template from your Canva design (or use the “Create Template from Canva” node once, then optionally deactivate it).
  • Connect your Google Sheets account and point the Google Sheets node to your spreadsheet or the example sheet.
  • Make sure your sheet column names match the overrides in the Layerre node (e.g. Text → text layer, Image → image URL layer).
  • Optionally add extra nodes after the Layerre node to save images, upload them, or send them via email / social / CRM.

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
