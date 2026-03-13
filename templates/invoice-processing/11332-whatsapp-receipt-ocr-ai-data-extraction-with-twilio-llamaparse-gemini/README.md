# 🧾 WhatsApp receipt OCR & AI data extraction with Twilio, LlamaParse & Gemini

> ⚡ **216 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# WhatsApp Receipt OCR & Data Extraction Suite  
**Categories:** Accounting Automation • OCR Processing • AI Data Extraction • Business Tools

This workflow transforms WhatsApp into a fully automated receipt-processing system using advanced OCR, multi-model AI parsing, and structured data storage. By combining LlamaParse, Claude (OpenRouter), Gemini, Google Sheets, and Twilio, it eliminates manual data entry and delivers instant, reliable receipt digitization for any business.

---

## What This Workflow Does

When a user sends a receipt photo or PDF via WhatsApp, the automation:

1. **Receives the file through Twilio WhatsApp**
2. **Uploads and parses it with LlamaParse (high-res OCR + invoice preset)**
3. **Extracts structured data using Claude + Gemini + a strict JSON parser**
4. **Cleans and normalizes the data (dates, ABN, vendor, tax logic)**
5. **Uploads the receipt to Google Drive**
6. **Logs the extracted fields into a Google Sheet**
7. **Replies to the user on WhatsApp with the extracted details**
8. **Asks for confirmation via quick-reply buttons**
9. **Updates the Google Sheet based on user validation**

The result is a fast, scalable, human-free system for converting raw receipt photos into clean, structured accounting data.

---

## Key Benefits

- **No friction for users:** receipts are submitted simply by sending a WhatsApp message.  
- **High-accuracy OCR:** LlamaParse extracts text, tables, totals, vendors, tax, and ABN with impressive reliability.  
- **Enterprise-grade data validation:** complex logic ensures the correct interpretation of GST, included taxes, or unidentified tax amounts.  
- **Multi-model extraction:** Claude and Gemini both analyse the OCR output for more reliable result. We have one primary LLM and a secondary one.
- **Hands-off accounting:** every receipt becomes a standardized row in Google Sheets.  
- **Two-way WhatsApp communication:** users can confirm or reject extracted data instantly.  
- **Scalable architecture:** perfect for businesses handling dozens or thousands of receipts monthly.

---

## How It Works (Technical Overview)

### 1. **Twilio → Webhook Trigger**  
The workflow starts when a WhatsApp message containing a media file hits your Twilio webhook.

### 2. **Initial Google Sheets Logging**  
The MessageSid is appended to your tracking sheet to ensure every receipt is traceable.

### 3. **LlamaParse OCR**  
The file is sent to LlamaParse with the invoice preset, high-resolution OCR, and table extraction enabled.  
The workflow checks job completion before moving further.

### 4. **LLM Data Extraction**
The OCR markdown is analyzed using:
- Claude Sonnet 4.5 (via OpenRouter)
- Gemini 2.5 Pro  
- A strict structured JSON output parser  
- Custom JS cleanup logic

The system extracts:
- Vendor  
- Cost  
- Tax (with multi-rule Australian GST logic)  
- Currency  
- Date (parsed + normalized)  
- ABN (validated and digit-normalized)

### 5. **Google Drive Integration**  
The uploaded receipt is stored, shared, and linked back to the record in Sheets.

### 6. **Google Sheets Update**  
Fields are appended/updated following a clean schema:
- Vendor  
- Cost  
- Tax  
- Date  
- Currency  
- ABN  
- Public drive link  
- Status (Confirmed / Not confirmed)

### 7. **User Response Flow**
The user receives a summary of extracted data via WhatsApp.  
Buttons allow them to approve or reject accuracy.  
The Google Sheet updates accordingly.

---

## Target Audience

This workflow is ideal for:

- Accounting & bookkeeping firms  
- Outsourced finance departments  
- Small businesses tracking expenses  
- Field workers submitting receipts  
- Automation agencies offering DFY systems  
- CFOs wanting real-time expense visibility

---

## Use Cases

- Expense reconciliation  
- Automated bookkeeping  
- Receipt digitization & compliance  
- Real-time employee expense submission  
- Multi-client automation at accounting agencies  

---

## Required Integrations

- **Twilio WhatsApp** (Business API number + webhook)  
- **LlamaParse API**  
- **OpenRouter (Claude Sonnet)**  
- **Google Gemini API**  
- **Google Drive**  
- **Google Sheets**  

---

## Setup Instructions (High-Level)

1. Import the n8n workflow.  
2. Connect your Twilio WhatsApp account.  
3. Add API credentials for:
   - LlamaParse  
   - OpenRouter  
   - Google Gemini  
   - Google Drive  
   - Google Sheets  
4. Create your target Google Sheet.  
5. Configure your WhatsApp webhook URL in Twilio.  
6. Test with a sample receipt.

---

## Why This System Works

- Users send receipts using a tool they already use daily (WhatsApp).  
- LlamaParse provides state-of-the-art OCR for low-quality receipts.  
- Using **multiple LLMs** drastically increases accuracy for vendor, ABN, and tax extraction.  
- Advanced normalization logic ensures data is clean and accounting-ready.  
- Google Sheets enables reliable storage, reporting, and future integrations.  
- End-to-end automation replaces hours of manual work with instant processing.

---

## Watch My Complete Build Process

Want to see exactly how I built this entire AI design system from scratch? I walk through the complete development process on my [YouTube channel](https://www.youtube.com/@gabriela_macovei)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
