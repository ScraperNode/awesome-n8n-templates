# 🔬 Manage clinical trial e-consent and compliance with Claude AI and Google Sheets

> ⚡ **5 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow automates end-to-end e-consent management for clinical trials. It captures, validates, timestamps, and stores consent submissions with a full regulatory-compliant audit trail, notifies investigators and participants, and runs daily compliance checks for missing or expiring consents.

### How it works

1. **Capture E-Consent** - Webhook receives signed consent submission from participant portal
2. **Validate & Timestamp** - Verifies all required fields, applies cryptographic timestamp for legal validity
3. **Claude AI Compliance Check** - Reviews consent form completeness against ICH E6 GCP guidelines
4. **Store with Audit Trail** - Writes immutable record to Google Sheets with full chain of custody
5. **Notify PI & Participant** - Sends confirmation emails to principal investigator and participant
6. **Daily Expiry Sweep** - Scheduled job checks for expiring or missing consents
7. **Generate Compliance Report** - Produces daily audit summary for regulatory submission

### Setup Steps

1. Import workflow into n8n
2. Configure credentials:
   - **Anthropic API** - Claude AI for compliance review
   - **Google Sheets** - Consent records and audit log
   - **SMTP / Gmail** - Email notifications to PI and participants
   - **DocuSign API** (optional) - For e-signature verification
3. Set your trial ID, IRB number, and PI email in the `Build Consent Record` node
4. Update expiry thresholds in the `Daily Expiry Sweep` node
5. Activate both the webhook and scheduled workflows

### Sample Consent Payload
```json
{
  "trialId": "TRIAL-2025-001",
  "participantId": "P-10042",
  "participantEmail": "participant@email.com",
  "participantName": "Jane Doe",
  "consentFormVersion": "v3.2",
  "consentDate": "2025-02-22T10:00:00Z",
  "signatureData": "base64_signature_string",
  "witnessName": "Dr. Smith",
  "capacityConfirmed": true,
  "rightToWithdrawExplained": true,
  "risksExplained": true,
  "questionsAnswered": true
}
```

### Features
- **ICH E6 GCP compliant** validation with Claude AI review
- **Immutable audit trail** with hash-based record integrity
- **Automated expiry alerts** for re-consent workflows
- **Daily compliance report** ready for IRB/regulatory submission
- **Full chain of custody** — who captured, reviewed, and stored every record


**Explore More LinkedIn & Social Automation:**  
[Contact us](https://www.oneclickitsolution.com/contact-us/) to design AI-powered lead nurturing, content engagement, and multi-platform reply workflows tailored to your growth strategy.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
