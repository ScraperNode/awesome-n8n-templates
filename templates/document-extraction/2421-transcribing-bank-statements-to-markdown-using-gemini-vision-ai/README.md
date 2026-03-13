# 🔬 Transcribing bank statements to markdown using Gemini Vision AI

> ⚡ **16,985 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow demonstrates an approach to parsing bank statement PDFs with multimodal LLMs as an alternative to traditional OCR. This allows for much more accurate data extraction from the document especially when it comes to tables and complex layouts.

Multimodal Parsing is better than traditiona OCR because:
* It reduces complexity and overhead by avoiding the need to preprocess the document into text format such as markdown before passing to the LLM.
* It handles non-standard PDF formats which may produce garbled output via traditional OCR text conversion.
* It's orders of magnitude cheaper than premium OCR models that still require post-processing cleanup and formatting. LLMs can format to any schema or language you desire!

## How it works

You can use the example bank statement created specifically for this workflow here: [https://drive.google.com/file/d/1wS9U7MQDthj57CvEcqG_Llkr-ek6RqGA/view?usp=sharing](https://drive.google.com/file/d/1wS9U7MQDthj57CvEcqG_Llkr-ek6RqGA/view?usp=sharing)

* A PDF bank statement is imported via Google Drive. For this demo, I've created a mock bank statement which includes complex table layouts of 5 columns. Typically, OCR will be unable to align the columns correctly and mistake some deposits for withdrawals.
* Because multimodal LLMs do not accept PDFs directly, well have to convert the PDF to a series of images. We can achieve this by using a tool such as [Stirling PDF](https://github.com/Stirling-Tools/Stirling-PDF/). Stirling PDF is self-hostable which is handy for sensitive data such as bank statements.
* Stirling PDF will return our PDF as a series of JPGs (one for each page) in a zipped file. We can use n8n's decompress node to extract the images and ensure they are ordered by using the Sort node.
* Next, we'll resize each page using the Edit Image node to ensure the right balance between resolution limits and processing speed.
* Each resized page image is then passed into the Basic LLM node which will use our multimodal LLM of choice - Gemini 1.5 Pro. In the LLM node's options, we'll add a "user message" of type binary (data) which is how we add our image data as an input.
* Our prompt will instruct the multimodal LLM to transcribe each page to markdown. Note, you do not need to do this - you can just ask for data points to extract directly! Our goal for this template is to demonstrate the LLMs ability to accurately read the page.
* Finally, with our markdown version of all pages, we can pass this to another LLM node to extract required data such as deposit line items.

## Requirements

* Google Gemini API for Multimodal LLM.
* Google Drive access for document storage.
* [Stirling PDF](https://github.com/Stirling-Tools/Stirling-PDF) instance for PDF to Image conversion

## Customising the workflow

* At time of writing, Gemini 1.5 Pro is the most accurate in text document parsing with a relatively low cost. If you are not using Google Gemini however you can switch to other multimodal LLMs such as OpenAI GPT or Antrophic Claude. 

* If you don't need the markdown, simply asking what to extract directly in the LLM's prompt is also acceptable and would save a few extra steps.

* Not parsing any bank statements any time soon? This template also works for Invoices, inventory lists, contracts, legal documents etc.

## 🔗 Nodes Used

Edit Image, HTTP Request, Google Drive, Basic LLM Chain, Google Gemini Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
