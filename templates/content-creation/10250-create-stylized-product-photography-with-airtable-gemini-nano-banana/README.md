# 🎬 Create stylized product photography with Airtable & Gemini Nano Banana

> ⚡ **815 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automates the process of generating stylized product photos for e-commerce by combining real product shots with creative templates. It enables the creation of a complete set of images for an SKU from a single product photo and a set of reusable templates. The workflow uses Google Gemini (Nano Banana) for image editing and Airtable as the data source.

**Example use case.** An apparel brand can use this workflow to turn plain product photos (e.g., socks on a white background) into lifestyle images that match their brand aesthetic. By combining each product photo with predefined templates and reference images, the workflow generates a variety of stylized results automatically - ready for marketing or online stores.

## How it works

This workflow expects the following Airtable table setup:
- **"Product Images"** - contains original product photos, one per record.
- **"Reference Images"** - contains reference images for templates, one per record.
- **"Templates"** - contains reusable generation templates. Each template includes a text prompt and up to three reference images.
- **"Jobs"** - contains batch generation jobs. Each job references multiple product images and multiple templates.
- **"Results"** - contains the generated outputs. Each result includes a generated image, references to the job, product image, and template, and a status field (pending, approved, rejected).


The workflow is triggered by a webhook that receives a job ID from Airtable. It then:
1. Fetches the job record.
2. Retrieves the associated product images and templates (each with its text prompt and reference images).
3. Downloads all required product and reference images.
4. For each product-template combination, sends these images and the prompt to Google Gemini to generate new AI-edited images.
5. Saves the generated images back into Airtable.

**NOTE**: A separate workflow should handle the human-in-the-loop approval process and any regeneration of rejected results.

## Requirements
1. Airtable Personal Access Token
2. Google Gemini API key

## Setup
1. Ensure all required Airtable tables exist.
2. Configure parameters in the **parameters** node:
    - Set Airtable Base ID
    - Set ID of the attachment field in the "Results" table (where the generated images will be uploaded) 
4. Configure credentials for all Airtable nodes.
5. Set Google Gemini API key for the "Generate..." nodes.

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Extract from File, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
