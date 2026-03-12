# 🤝 Analyze customer sales calls and update CRM with Whisper and GPT-4

> ⚡ **29 views** · 🤝 [CRM & Sales Operations](../)

## Description

## AI Customer Call Analyzer — Voice → Insights → CRM with GPT-4

Converts raw sales call recordings into structured CRM intelligence. Uploads audio → transcribes via Whisper → GPT-4 extracts intent, sentiment, objections, next steps → updates CRM and sends a structured summary to the sales team.

### How it works

1. **Upload Call Recording** - Webhook receives audio file upload (mp3, wav, m4a) from sales rep portal
2. **Validate & Prepare Audio** - Checks file type, size limits, extracts call metadata
3. **Transcribe via Whisper** - Sends audio to OpenAI Whisper API for high-accuracy transcription
4. **Wait — Transcription Buffer** - Holds until transcription is confirmed complete
5. **GPT-4 Call Intelligence** - Extracts intent, sentiment, objections, buying signals, action items
6. **MCP Context Enrichment** - Pulls CRM history and enriches analysis with account context
7. **Update CRM Record** - Writes structured insights back to CRM (HubSpot / Salesforce)
8. **Send Sales Summary** - Emails rep and manager with call scorecard and next steps
9. **Audit Log** - Records all processing steps for compliance and coaching

### Setup Steps

1. Import this workflow into n8n
2. Configure credentials:
   - **OpenAI API** - For Whisper transcription and GPT-4 analysis
   - **HubSpot / Salesforce** - CRM update target
   - **Google Sheets** - Audit log and call registry
   - **SMTP / Gmail** - Sales summary delivery
3. Set your CRM API endpoint and field mapping in the update node
4. Configure your sales team email list in the notify node
5. Activate the workflow

### Sample Upload Payload
```json
{
  "callId": "CALL-20250222-0042",
  "repEmail": "jane.smith@company.com",
  "repName": "Jane Smith",
  "contactEmail": "buyer@prospect.com",
  "contactName": "Bob Johnson",
  "companyName": "Acme Corp",
  "dealStage": "negotiation",
  "callDurationSecs": 1847,
  "audioUrl": "https://storage.company.com/calls/call-0042.mp3"
}
```

### Features
- **Whisper-powered transcription** with speaker diarization hints
- **GPT-4 intent and sentiment** extraction with confidence scores
- **Objection and buying signal** detection
- **Auto CRM field mapping** — no manual data entry
- **Sales scorecard** with talk ratio, next step clarity, deal risk
- **Full audit trail** for call coaching and compliance

**Explore More LinkedIn & Social Automation:**  
[Contact us](https://www.oneclickitsolution.com/contact-us/) to design AI-powered lead nurturing, content engagement, and multi-platform reply workflows tailored to your growth strategy.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
