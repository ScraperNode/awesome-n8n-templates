# 🎬 Generate Layerre image variants from a webhook and post them to Slack

> ⚡ **16 views** · 🎬 [Content Creation & Video](../)

## Description

How it works

• Receives POST requests at the webhook (e.g. from Typeform, Tally, or your own form) with JSON like name and image URL.
• Uses Layerre to create image variants from a Canva-based template; the template ID is taken from the “Create a template” node output.
• Each webhook request becomes one rendered image, which is posted to Slack and returned in the webhook response as the image URL.

Set up steps

• Create a Layerre template from your Canva design (run the “Create a template” node once with your Canva URL, then the variant node will use that template).
• Configure the Webhook node path and ensure your form or app sends the expected JSON body (e.g. name, imageUrl).
• Map webhook body fields to your Canva layers in the Create Variant node (e.g. $json.body.name → text layer, $json.body.imageUrl → image layer).
• Add your Slack credentials and choose the channel or user to post to; optionally customize the message or add nodes to save, upload, or forward the image elsewhere.

## 🔗 Nodes Used

Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
