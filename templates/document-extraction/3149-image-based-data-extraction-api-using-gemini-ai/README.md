# 🔬 Image-based data extraction API using Gemini AI

> ⚡ **5,977 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow provides a ready-to-use API endpoint for extracting structured data from images. It processes an image URL using an AI-powered OCR model and returns the extracted details in a structured JSON format.  

### **Use Cases**  
- **Document OCR** – Extract details from ID cards, invoices, receipts, etc.  
- **Text Extraction from Images** – Process screenshots, scanned documents, and photos.  
- **Automated Form Processing** – Digitize and capture information from paper forms.  
- **Business Card Data Extraction** – Extract names, emails, and phone numbers from business cards.  

## How It Works  
1. Send a GET request with an image URL and define the required extraction parameters.  
2. The image is converted to base64 for processing.  
3. The AI model (Gemini API - Flash Lite) extracts relevant text.  
4. The response returns structured JSON data containing only the requested fields.  

## Features  
✔️ **No-Code API Setup** – Easily integrate into any application.  
✔️ **Customizable Extraction** – Modify the request parameters to fit your needs.  
✔️ **AI-Powered OCR** – Uses advanced models for accurate text recognition.  
✔️ **Automated Processing** – Ideal for document processing and digitization.  

## Integration  
- Works with any frontend/backend system that supports API calls.  
- Can be used for workflow automation in CRM, ERP, and document management solutions.  
- Supports further customization based on specific OCR requirements.

## 🔗 Nodes Used

HTTP Request, Webhook, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
