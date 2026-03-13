# 🧾 Automate invoice data extraction from Google Drive to Airtable using Nanonets OCR & Command-R

> ⚡ **258 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## How it works
This template creates a fully automated "hands-off" pipeline for processing financial documents. It's perfect for small businesses, freelancers, or operations teams who want to stop manually entering invoice and receipt data.

When you drop a new image/multiple images file into a specific Google Drive folder, this workflow automatically:
1.  **Triggers** and downloads the new file.
2.  **Performs OCR** on the file using a local AI model (`Nanonets-OCR-s`) to extract all the raw text.
3.  **Cleans & Structures** the raw text using a second local AI model (`command-r7b`). This step turns messy text into a clean, predictable JSON object.
4.  **Saves** the structured data (like `InvoiceNumber`, `TotalAmount`, `IssueDate`, etc.) to a new record in your Airtable base.
5.  **Moves** the original file to a "Done" or "Failed" folder to keep your inbox clean and organized.

## Requirements
* **Google Drive Account:** For triggering the workflow and storing files.
* **[Airtable Account](https://airtable.com/invite/r/Isr7G94S):** To store the final, structured data.
* **Ollama (Local AI):** This template is designed to run locally for free. You must have Ollama running and pull two models from your terminal:
    * `ollama pull benhaotang/Nanonets-OCR-s:F16`
    * `ollama pull command-r7b:7b-12-2024-q8_0`

## How to set up
Setup should take about **10-15 minutes**. The workflow contains 7 sticky notes that will guide you step-by-step.

1.  **Airtable:** Use the link in the main sticky note (`[1]`) to duplicate the Airtable base to your own account.
2.  **Ollama:** Make sure you have pulled the two required models listed above.
3.  **Credentials:** You will need to add three credentials in n8n:
    * Your Google Drive (OAuth2) credentials.
    * Your Airtable (Personal Access Token) credentials.
    * Your Ollama credentials. (To do this, create an "OpenAI API" credential, set the **Base URL** to your local server (e.g., `http://localhost:11434/v1`), and use `ollama` as the **API Key**).
4.  **Follow the Notes:** Click through the workflow and follow the numbered sticky notes (`[1]` to `[6]`) to connect your credentials and select your folders for each node.

## How to customize the workflow
* **Use Cloud AI:** This template is flexible! You can easily swap the local Ollama models for a cloud provider (like OpenAI's GPT-4o or Anthropic's Claude 3). Just change the credentials and model name in the two AI nodes (`OpenAI Chat Model` and `Data Cleaner`).
* **Add More Fields:** To extract more data (e.g., `SupplierVATNumber`), simply add the new field to the prompt in the `Data Cleaner` node and map it in the `AirTable - Create a record1` node.

## 🔗 Nodes Used

Airtable, Google Drive, Google Drive Trigger, AI Agent, OpenAI Chat Model, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
