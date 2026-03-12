# 🎬 Generate images from Airtable records with Layerre and Canva

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

How it works

• Reads records from an Airtable table (e.g. leads, events, products) with fields such as name and image URL.
• Uses Layerre to create image variants from a Canva-based template; the template ID comes from the one-time “Create Template from Canva” node.
• For each record, one image is rendered and the image URL is written back into the same Airtable row.

Set up steps

• Create a Layerre template from your Canva design: run the “Create Template from Canva” node once with your Canva URL, then disable it and paste the template ID into the Create Variant node.
• Add Airtable credentials (Personal Access Token), select your base and table, and optionally use Filter By Formula to limit which records are processed.
• In the Create Variant node, map your Airtable field names to your Canva layers (e.g. $json.fields.Name for a text layer, $json.fields['Image url'] for an image layer).
• In the Update Airtable node, map the record id from the List step and the image URL from the variant output (e.g. $json.url) so each row is updated correctly. Add a column in your table for the output URL if needed.

## 🔗 Nodes Used

Airtable

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
