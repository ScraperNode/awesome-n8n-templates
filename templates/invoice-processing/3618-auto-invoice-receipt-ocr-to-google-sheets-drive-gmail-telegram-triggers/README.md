# 🧾 Auto invoice & receipt OCR to Google Sheets – Drive, Gmail, & Telegram triggers

> ⚡ **4,696 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

### **The Best Invoice & Receipt OCR Automation - FREE (for a limited time)**

**Automatically process invoices and receipts** using **Gemini OCR**, extracting data directly into **Google Sheets** from multiple sources including **Google Drive, Gmail**, and **Telegram**. This powerful workflow ensures your bookkeeping is always accurate, organized, and efficient, significantly reducing manual effort and potential errors.

![Automate_invoice_OCR_to_Google_Sheets_Gemini_n8n_workflow_template_screenshot_2.jpeg](fileId:1150)

### **Who is this for?**

This workflow is ideal for busy **entrepreneurs, startup founders, freelancers, small business owners, bookkeepers, and accountants** who aim to eliminate manual, repetitive, and error-prone bookkeeping tasks. Whether you regularly manage expenses from physical paper receipts, digital invoices, or email attachments, this workflow will dramatically streamline your bookkeeping processes and save you significant time and effort each month.

### **What problem is this workflow solving?**

Manual data entry of invoices and receipts is notoriously tedious, incredibly time-consuming, and highly susceptible to human error. Mistakes in bookkeeping can lead to financial inaccuracies, compliance issues, and wasted resources. By automating the extraction of invoice data, this workflow streamlines your financial management process, significantly improves accuracy, reduces operational overhead, and allows you to redirect valuable resources and attention toward strategic, revenue-generating business activities.

### **What this workflow does**

This template provides a powerful, automated solution for invoice and receipt data extraction using Google's Gemini API for OCR (Optical Character Recognition) via direct HTTP requests.

1. **Main Flow (Google Drive Trigger):** The main workflow triggers (*Google Drive Trigger New Files*) whenever a new file (PDF or image) is added to a designated Google Drive folder. It uses a *SplitInBatches node (Loop Over Items)* to process incoming files one by one. For each file, it:  
   * Downloads the file (*Google Drive Get Receipt*).  
   * Converts it to base64 (*Move file to base64 string*).  
   * Sends the file data and a detailed prompt to the Gemini API (*gemini-2.0-flash* model specified in the *Prompt* node, sent via the *Gemini API HTTP Request* node). The prompt requests structured JSON output with specific fields and formatting (like comma decimal separators, no currency symbols, and a dedicated currency field).  
   * Parses the JSON response (*JSON to string*, *Parse string* nodes).  
   * Appends the extracted data (Invoice Date, Category, Sender, Currency, etc.), along with the original filename and a link to the file, to a specified Google Sheet (*Add to Google Sheets*).  
   * Includes *Wait* nodes to help manage potential rate limits.  
2. **Supplementary flow 1 (Gmail Trigger):** An additional trigger (*Gmail Trigger*) monitors your Gmail account for emails with a specific label. When a matching email with attachments arrives:  
   * It loops through emails and attachments.  
   * It renames the attachment using the format `YYYY-MM-DD_SenderUsername` (e.g., `2025-04-19_some.sender`) using the *Create File Name* node.  
   * It saves the renamed attachment to the designated Google Drive folder (*Google Drive Save Files*), which then triggers the core OCR process above.  
3. **Supplementary Trigger 2 (Telegram Trigger):** Another optional trigger (*Telegram Trigger Image*) allows you to forward photos of physical receipts to your configured Telegram bot:  
   * It renames the image file using the format `YYYY-MM-DD_Telegram` (e.g., `2025-04-19_Telegram`) via the *Create File Name For Telegram* node.  
   * It saves the renamed image to the designated Google Drive folder (*Google Save Files 2*), also triggering the core OCR process.

### **Setup**

1. **Credentials:** Add the following credentials in n8n, using the names specified in the template or your own:  
   * *Google OAuth2*: For Google Drive, Google Sheets, Gmail.  
   * *Telegram*: For the Telegram bot trigger  
   * *Gemini API Key*: Obtain a free API key from [Google AI Studio](https://aistudio.google.com/). You will need to paste this key directly into the Query Parameters of the *Gemini API (HTTP Request)* node in the workflow.  
2. **Google Drive:** Create a specific folder in your Google Drive where all invoices/receipts will be stored *and* processed from. Update the target Folder in the *Google Drive Trigger New Files*, *Google Drive Save Files*, and *Google Save Files 2* nodes to use your designated folder.  
3. **Google Sheets:** Create a new Google Sheet, or clone [this Sheet template](https://docs.google.com/spreadsheets/d/1HX12aLkBrFjKSvtMlhFbDQkvn8MQrhZQVkkxpXY5c0M/edit?usp=sharing). Ensure it has columns matching the desired output fields (see default list below, including *Currency*). Update the target Spreadsheet and Sheet Name in the *Add to Google Sheets* node to point to your sheet.  
4. **Gmail (Optional):** Create a label in Gmail (e.g., `"receipts"`). Update the Label filter in the *Gmail Trigger* node to use the label you created. Consider setting up filters in Gmail to automatically apply this label to relevant emails.  
5. **Telegram (Optional):** Configure the *Telegram Trigger Image* node with your bot credentials.  
6. **Gemini API Node:** Open the *Gemini API (HTTP Request)* node. In the `"Query Parameters"` section, replace the placeholder API key with your actual Gemini API Key. Verify the URL uses the correct model name by referencing the *Prompt* node's model value (`gemini-2.0-flash` by default).  
7. **Customize Prompt:** Open the *Prompt (Set)* node.  
   * Crucially, change the first line `"My company is Sisu Digital..."` to reflect your company or remove it if not needed.  
   * Review the list of categories and the specific formatting instructions (e.g., `comma for decimals`, `no currency symbols`, `date format`, `"N/A" for notes`) to ensure they match your requirements. You can adjust these details here.  
8. **Activate Workflow:** Test each trigger path (Drive upload, labeled Gmail, Telegram photo) with sample files/emails/messages, then activate the workflow.

### **How to customize this workflow to your needs**

* **Gemini Prompt/Model:** Modify the prompt text, the list of categories, or the detailed formatting instructions within the *Prompt (Set)* node. You can also change the model value in the *Prompt* node to use a different Gemini model (ensure the model supports the API endpoint used in the *HTTP Request* node).  
* **Extracted Fields:** Modify the prompt in the *Prompt* node to extract different fields or change formatting. Update the parsing logic in the *Parse string* node if needed, and ensure your Google Sheet columns match in the *Add to Google Sheets* node. The default extracted fields (based on the updated prompt) are:  
  * **Invoice Date:** (DD/MM/YYYY)  
  * **Category:** (From predefined list)  
  * **Sender:** (Issuing company)  
  * **Description:** (Brief details)  
  * **Amount (0% VAT):** (Net amount, comma decimal, no currency symbol)  
  * **VAT %:** (Rate number, comma decimal, no % sign, "0,0" if none)  
  * **Total:** (Gross amount, comma decimal, no currency symbol)  
  * **Currency:** (Uppercase abbreviation, e.g., "EUR", "USD")  
  * **Note:** (Relevant notes, or "N/A")  
  * ***(Added by workflow):*** **File Name**, **File URL**  
* **Triggers & Targets:** Enable/disable or modify the *Gmail* and *Telegram* triggers. Select your desired *Google Drive folder*, *Google Sheet*, and *Gmail label* directly within the respective nodes.  
* **File Naming:** Adjust the Javascript code in the *Create File Name* (for Gmail) or *Create File Name For Telegram* nodes to change the renaming pattern. Current formats: `YYYY-MM-DD_SenderUsername` (Gmail), `YYYY-MM-DD_Telegram` (Telegram).  
* **Configuration Method:** Update configuration like folders, sheets, and labels directly within the relevant nodes. For easier management of multiple settings, consider adding a central `'Set'` node at the beginning of the workflow to define these values and use expressions to reference them in other nodes.

### **Important Considerations**

* **AI Accuracy:** AI models can make mistakes. Always review the data extracted into Google Sheets for accuracy, especially with specific formatting like decimal separators. This workflow automates heavily but requires final verification.  
* **Gemini API Usage:** This template uses the *Gemini API* via *HTTP Request*. Be mindful of Google's API rate limits, usage policies, and potential costs associated with the model used (`gemini-2.0-flash` by default), especially if you change it. Monitor Google's terms.  
* **Loops and Waits:** The workflow uses *SplitInBatches* and *Wait* nodes to process items individually and pause execution, which helps prevent hitting API rate limits but processes files sequentially rather than in parallel.

### **Support Disclaimer**

* This workflow is provided as-is for your convenience. Use it responsibly, and feel free to build upon it for your unique needs\!  
* This workflow has been thoroughly tested and is confirmed to be working flawlessly at the time of release. However, setup complexity or unexpected errors may occur depending on your environment, customizations, or API changes.  
* Please note that I cannot offer personalized support or troubleshooting for this template (without a fee\!). If you encounter an issue, feel free to send me a message describing the problem. If the issue is determined to be a genuine bug within the shared template, I will do my best to fix it and update the workflow. Otherwise, the issue is likely due to a setup misconfiguration or modification on your side. In those cases, I recommend using *ChatGPT* or referring to *n8n documentation* to debug the problem.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram Trigger, Google Drive, Google Drive Trigger, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
