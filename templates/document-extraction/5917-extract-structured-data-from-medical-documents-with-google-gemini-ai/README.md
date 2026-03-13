# 🔬 Extract structured data from medical documents with Google Gemini AI

> ⚡ **1,780 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works
Transform medical documents into structured data using Google Gemini AI with enterprise-grade accuracy.

## Classifies document types (receipts, prescriptions, lab reports, clinical notes)
- Extracts text with 95%+ accuracy using advanced OCR
- Structures data according to medical taxonomy standards
- Supports multiple languages (English, Chinese, auto-detect)
- Tracks processing costs and quality metrics automatically

## Set up steps
### Prerequisites

Google Gemini API key (get from Google AI Studio)

### Quick setup

1. Import this workflow template
2. Configure Google Gemini API credentials in n8n
3. Test with a sample medical document URL
4. Deploy your webhook endpoint

### Usage
Send POST request to your webhook:
```json
{
  "image_url": "https://example.com/medical-receipt.jpg",
  "expected_type": "financial",
  "language_hint": "auto"
}
Get structured response:
json{
  "success": true,
  "result": {
    "documentType": "financial",
    "metadata": {
      "providerName": "Dr. Smith Clinic",
      "createdDate": "2025-01-06",
      "currency": "USD"
    },
    "content": {
      "amount": 150.00,
      "services": [...]
    },
    "quality_metrics": {
      "overall_confidence": 0.95
    }
  }
}
```

## Use cases
### Healthcare Organizations

- Medical billing automation - Process receipts and invoices automatically
- Insurance claim processing - Extract data from claim documents
- Clinical documentation - Digitize patient records and notes
- Data standardization - Consistent structured output format

### System Integrators

- EMR integration - Connect with existing healthcare systems
- Workflow automation - Reduce manual data entry by 90%
- Multi-language support - Handle international medical documents
- Quality assurance - Built-in confidence scoring and validation

## Supported Document Types

* Financial: Medical receipts, bills, insurance claims, invoices
* Clinical: Medical charts, progress notes, consultation reports
* Prescription: Prescriptions, medication lists, pharmacy records
* Administrative: Referrals, authorizations, patient registration
* Diagnostic: Lab reports, test results, screening reports
* Legal: Medical certificates, documentation forms

## 🔗 Nodes Used

HTTP Request, Webhook, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
