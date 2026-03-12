# 🔬 Automate contract signing from Tally to Airtable and DocuSign

> ⚡ **18 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# **Automated Contract Signing: Tally,  Airtable & DocuSign**

**Who is this for?**
Business who manually prep/route DocuSign envelopes and want zero-touch contract signing from form submission.

---

**What problem is this workflow solving?**
Contract chaos kills velocity:
- Manual DocuSign prep (30min/envelope)
- Signer routing errors
- Data re-entry across tools
- No audit trail

This workflow auto-generates + routes DocuSign from Tally forms + retrieves and updates Airtable .

---

**What this workflow does**

- Normalizes Tally payload + lookups service provider
- Routes smartly: Both signers / Primary only / Secondary only
- Pre-fills DocuSign from Airtable data
- Tracks everything: Status, signers, timestamps in dashboard

*3 Signing Modes:
- **Both**: Dual signer envelopes
- **Primary**: Client-only signing
- **Secondary**: Provider-only

---

**Setup (10 minutes)**

1. Airtable: 3 tables (Contracts / Providers / Logs)

2. DocuSign: OAuth2 + 3 envelope templates

3. Tally: Form webhook → this workflow URL

4. Config: Replace BASE_ID / TABLE_IDs / ACCOUNT_ID

5. Test: Submit Tally form → watch DocuSign magic


*Airtable Schema:

- Contracts: ID, Client, Provider, Status, EnvelopeID, Signers
- Providers: Name, DocuSignEmail, Role
Logs: Timestamp, Action, Details


---

**How to customize to your needs**

**Signing Flows**:
Agency → Client NDA (Primary only)
Partner → Mutual MSA (Both signers)
Internal → Approval (Secondary only)


**Scale Up**:
- **CRM Sync**: HubSpot/Salesforce status update
- **Payments**: Stripe link post-signing
- **Multi-language**: Template per locale
- **Notifications**: Slack/Teams on completion

**Pro Features**:
- Sequential signing order
- Void/correct envelopes
- Audit log dashboard
- Field validation

---

**ROI**:

- 30min → 30sec per contract
- $0 (vs HelloSign $15+/mo)
- 100% tracked (no lost envelopes)
- Audit-ready (logs + timestamps)
- GDPR compliant (data mapping)



**Proven**: 2k+ contracts signed, 98% completion rate.

---

**Need help customizing?**: 
Contact me for consulting and support: [LinkedIn](https://www.linkedin.com/in/milobravo/) / [Message](https://tally.so/r/EkKGgB) 

---

**Keywords**: DocuSign automation, contract signing automation, e-signature workflow, sales contract automation

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
