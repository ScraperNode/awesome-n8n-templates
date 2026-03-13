# 🔬 Parse and Extract Data from Documents/Images with Mistral OCR

> ⚡ **42,113 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Mistral OCR is a super convenient way to parse and extract data from multi-page PDFs or single images using AI.

What makes it special and differs it from the competition is that Mistral OCR also performs document page splitting and markdown conversion. This helps reduce dependencies required for document parsing workflows where tools like StirlingPDF.

Read the official documentation on Mistral OCR API here: [https://docs.mistral.ai/capabilities/document/#tag/ocr/operation/ocr_v1_ocr_post](https://docs.mistral.ai/capabilities/document/#tag/ocr/operation/ocr_v1_ocr_post)

## How it works
* To access Mistral-OCR, you'll need to use Mistral Cloud API via the HTTP request node
* Mistral OCR can only accept 2 file types: PDF and Image. Here, we use 2 different request to the Mistral-OCR API to parse a bank statement PDF and an screenshot of a bank statement to extract the tables.
* Next, we explore a more secure method of uploading documents to the Mistral OCR API by using Mistral's cloud storage. In example 2, we first store a copy of our documents to Mistral cloud and then generate a signed URL to retreive the file before sending it to Mistral OCR. This ensures the file is not accessible publicly and protects it from unauthorised access.
* Finally, another way to use Mistral-OCR is via document understanding. This allows you to ask questions about the document rather than extract contents from it. In example 3, I demonstrate this use-case asking Mistral-small to tell me how many deposits are shown in the bank statement.

## How to use
* Ensure your documents are either publicly accessible for Mistral-OCR or upload them to Mistral Cloud. Alternatively, signed urls from AWS S3 or Cloudflare R2 should also work.

## Requirements
* Mistral Cloud account and API  Key. You'll also need credit on your account to use Mistral-OCR.

## Customising the workflow
* Mistral-OCR also works for images such as charts and diagrams so try using it on Financial Reports.
* Mistral-OCR is even cheaper with batching enabled. This returns your results within 24hrs but is half the price per page.

## 🔗 Nodes Used

HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
