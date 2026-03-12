# 🔬 Convert PDF to PNG with PDF.co API (multi-page support)

> ⚡ **1,135 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Page2Image: Convert PDF to PNG Workflow (Multi-Page Support)

## How It Works
This workflow automatically converts each page of a multi-page PDF into high-quality PNG images. It uses the [PDF.co API](https://developer.pdf.co/api/introduction/index.html) in the background to process the PDF and generate individual images for every page. The entire process is streamlined, making it ideal for converting documents quickly and efficiently.

## Set Up Steps
1. Create a PDF.co Account: [Sign up for a PDF.co account](https://www.pdf.co/) and get your API Key. This will be required for authentication.

2. Import the Workflow into n8n: Add the workflow to your n8n instance.

3. Enter Your API Key: In the workflow, enter your PDF.co API Key to authenticate the process.

4. Test the Workflow: Run the workflow, and check that each page of the sample PDFs has been converted to a PNG image.

5. Replace the sample PDFs with your own PDFs and get started automatically converting your PDFs to images!

Setup should take just a few minutes, assuming you already have your PDF.co API Key.

## Getting Started
This workflow requires PDF.co’s API for converting PDF pages into PNG images. You’ll need an active PDF.co account and your unique API Key. Once you have that, just plug it into the workflow, and you’re ready to convert multi-page PDFs into PNGs instantly!

## Customizing the Workflow
The workflow currently uses sample PDF files to demonstrate the conversion process. To make it work for your use case, replace the sample PDF logic with your own logic to retrieve PDFs. Whether the PDFs are uploaded, fetched from a URL, or pulled from a storage service, just plug your retrieval method into the workflow, and it will handle the conversion seamlessly.

## API Reference
The PDF.co Web API is REST-based, ensuring secure and efficient communication. All requests are transmitted over HTTPS to protect your data.

To use the API, you simply authenticate with your API Key and make requests to initiate the conversion. For this workflow, your API Key allows seamless communication with PDF.co to convert PDF pages into images.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
