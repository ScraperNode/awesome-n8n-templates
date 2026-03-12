# 🔬 Validate email hero images with Gmail, Dropbox, OCR.Space and Google Sheets

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How it works

**Expected Image Download**
The expected image’s Dropbox URL is passed directly into an HTTP Request node, which downloads the image as binary data.

**Actual Image Extraction**
The HTML node extracts the src of the image from the email (e.g., hero image or other targeted image sections).
This src is passed into another HTTP node to download the actual email image in binary format.

**OCR Processing**
Both binary images are sent separately to OCR.Space API via POST requests.
OCR returns extracted text for each image.

**Comparison**
A JS node compares the Expected Image Text vs Actual Image Text.
If the texts match, the result is marked Match; otherwise Mismatch.

**Write Back to Google Sheets**
The workflow writes ExpectedText, ActualText, and Result back into the Google Sheet, creating a clear audit trail for validation.

## Setup steps
**1. Google Sheets**
Create a sheet with the following columns:

SectionId
ExpectedImageURL
ExpectedText
ActualText (output)
Result (output)

Add the expected text that should appear inside each image.

**2. Email HTML Source**
Use one of the following:

Gmail node — fetches the email HTML via unread or filtered messages
HTTP Request / binary file input — if HTML is being pulled from storage or a URL
Ensure the HTML extraction node can find the image src correctly


**3. Expected Image (Dropbox URL)**

Paste the public Dropbox URL directly into the Google Sheet
This URL is fed into an HTTP Download node
The resulting binary is used for OCR extraction


**4. OCR Setup**

Add your OCR.Space API key in the HTTP POST node
Set the request body to include:

apikey
the binary property of the image
desired OCR settings (language, text extraction mode)

**5. Merge & Compare**

Use a Merge node to align:

ExpectedImageURL + ExpectedText
ActualImageSrc
OCR outputs

**6. In the Code node:**

Normalize both texts
Compare and assign Match or Mismatch

**7. Write Output**
Use a Google Sheets Append/Update node to write:

ActualText
Result

back into the corresponding row, using SectionId or ExpectedImageURL as the matching key.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
