# 🎬 Generate AI product marketing photos from Google Sheets with Google Gemini and Drive

> ⚡ **15 views** · 🎬 [Content Creation & Video](../)

## Description

1. How it works
Reads product image links from a Google Sheet.
Analyzes each image, generates an AI prompt, and combines the product with a human model image.
Creates final AI advertising photos and:
Saves images to Google Drive.
Saves prompts + result links to a separate “output” sheet.
Here’s an updated version of the note, optimized so the customer knows exactly what they must customize (no hard‑coded IDs assumed).
2. One‑time setup for your own account
Before using the workflow, you must point it to your Google Sheet, Drive folder, and model image.

2.1. Prepare your Google assets
Google Sheet

Create or copy a spreadsheet.
Create two sheets, for example:
Sheet A (input): e.g. “Product Images”
Required column: Image-URL
Sheet B (output): e.g. “Output Images”
Required columns: Image-URL, Prompt, Output
Google Drive

Create a folder to store generated AI images (e.g. “AI Product Photos”).
Upload one model image (e.g. Model.png) that will be used as the human model in all generated photos.
n8n credentials

In n8n, make sure you have:
A Google Sheets credential (your Google account).
A Google Drive credential.
A Google Gemini / PaLM API credential.
2.2. Update the workflow nodes
Open the workflow “Automated generation of AI advertising photos for product marketing” and update these nodes:

Node: “Read Image URLs” (Google Sheets)

Set Document / Spreadsheet to your product spreadsheet.
Set Sheet to your input sheet (e.g. “Product Images”).
Make sure that sheet has a column named exactly Image-URL.
Node: “Insert Image URL in Table” (Google Sheets)

Operation: appendOrUpdate (keep as is).
Set Document / Spreadsheet to the same spreadsheet as above (or another one if you prefer).
Set Sheet to your output sheet (e.g. “Output Images”).
Make sure the output sheet has columns:
Image-URL
Prompt
Output
Matching column: Image-URL (keeps update‑by‑product behavior).
Node: “Download model image” (Google Drive)

Choose your model image file from Google Drive.
This is the image of the human model that will appear in all generated photos.
Node: “Upload to Drive” (Google Drive)

Set Folder to your AI output folder (e.g. “AI Product Photos”) where you want all generated images to be saved.
Credentials in each Google node

For each Google Sheets / Drive node, select your Google accounts in the “Credentials” section if they are not already set.
After these 4–5 fields are updated, the workflow is fully adapted to your environment.

3. Daily usage (for business / marketing users)
Open your Google Sheet.
Go to the input sheet (e.g. “Product Images”).
For each product, add a row with:
Image-URL → a valid link to the product image.
Do not edit the output sheet manually; it will be filled by the workflow.
To generate images:

Log into n8n.
Open the workflow “Automated generation of AI advertising photos for product marketing”.
Click “Test workflow” or “Execute workflow”.
Wait until it finishes.
4. Viewing results
In Google Drive:

Open your chosen output folder (e.g. “AI Product Photos”).
All generated advertising photos are stored there.
In Google Sheets (output sheet):

Image-URL: product image link used as input.
Prompt: the AI prompt used to generate the image.
Output: a web link to the generated image on Google Drive.
Re‑running the workflow with the same Image-URL will update the existing row instead of creating duplicates.

5. Troubleshooting
No image generated for a row
Check that Image-URL opens correctly in a browser.
No data written to output sheet
Confirm the workflow nodes point to the correct spreadsheet and sheet names.
Check that the columns Image-URL, Prompt, Output exist and are spelled exactly the same.
General errors
Open the last execution in n8n and review the error message.
Share that message with your technical team for support.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Basic LLM Chain, Google Gemini Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
