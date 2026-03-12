# 🔒 Filter fraudulent leads with GPT-4o-mini, AbstractAPI, Google Sheets and Slack

> ⚡ **4 views** · 🔒 [SecOps & Security Automation](../)

## Description

This n8n template serves as a security layer for your marketing efforts, ensuring that only high-quality, human-verified leads reach your CRM while automatically blacklisting bots and VPN-based submissions.

## How it works
**Lead Intake:** The workflow triggers via a Webhook (e.g., from Tally.so or other form builders) when a new lead is submitted.

**Dual-Layer Analysis:**
- **IP Intelligence:** It queries AbstractAPI to check the lead's IP address for red flags like VPNs, proxies, or data centre origins.
- **AI Intent Analysis:** Simultaneously, it sends the name and message to GPT-4o-mini to analyse the content for non-human patterns, gibberish, or spam scripts.
- **Smart Filtering:** A Merge node combines these data points, and an If Node applies "OR" logic: if the IP is a VPN/Proxy OR the AI detects spam, the lead is flagged.

**Automated Action:**
- **Verified Leads:** Legitimate submissions are saved to a "Verified" Google Sheet for sales follow-up.
- **Fraud Prevention:** Flagged leads are moved to a "Potential Spam" sheet. This list can be synced as an exclusion audience in Google or Meta Ads to prevent wasting budget on retargeting bots.

**Instant Alerts:** The team is notified immediately via Slack whenever a fraudulent submission is neutralized.

## Requirements
- **OpenAI API Key:** For lead content analysis.
- **AbstractAPI Key:** For IP intelligence & security flags.
- **Google Sheets:** To store verified and blacklisted lead data.
- **Slack:** For real-time fraud alerts.

## Customising this workflow
- **Field Mapping:** If your form uses different labels (e.g., "Comments" instead of "Message"), update the expressions in the Message model and Google Sheets nodes.
- **Exclusion Logic:** You can tighten the filter by adding more conditions to the If Node, such as specific country blocking or email domain validation.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
