# 🤝 Route French KYB onboarding checks with Sirenic, Slack, and Google Sheets

> ⚡ **2 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Your signup form posts a SIREN, and one Sirenic call returns the official KYB file of the French company, with sanctions screening of every officer. Readable rules approve, review or stop the client.

## How it works
1. The SIREN is checked first: not nine digits, the form gets a 400 and nothing is billed.
2. One call to `/v1/kyb/{siren}` ($0.15). Errors are never billed, and Slack says why.
3. A Code node stops a ceased company; insolvency notices, sanctions matches to verify and any block missing or not fully read go to a human; only a complete, clean file is approved.
4. Slack alerts compliance; the sheet logs each decision, reasons and a dated source line.

## Setup
1. Create an API key at https://api.sirenic.eu/compte?utm_source=n8n&utm_campaign=18271.
2. Add a Header Auth credential (`X-Api-Key`, your `srn_live_` key) on **Get the KYB file**.
3. Pick your Slack channel on the three Slack nodes.
4. Create a sheet with the headers Checked at, SIREN, Company, Decision, Reasons, Screening, Completeness, Missing blocks, Sirenic: source, then select it on the log node.
5. Test with the SIREN 418009726.

## Requirements
- n8n Cloud or self-hosted, native nodes only.
- A Sirenic API key: **$0.15 per KYB file**, errors never billed.
- Slack and Google Sheets credentials.

## Customization
- Edit the rules in the Decide node, route reviews to Jira or Linear, or archive the JSON file as audit evidence. The source line can be edited or removed.

## Additional info
**Who's it for:** Fintechs, payment providers, marketplaces and B2B SaaS teams onboarding French business customers.

_Official sources: INSEE Sirene, INPI RNE, BODACC, Judilibre and six sanctions lists. A sanctions match is a name to verify, never a decision._

Step by step, with prices: [KYB checks with provenance on every block](https://api.sirenic.eu/en/use-cases/kyb-automated-business-verification-with-per-block?utm_source=n8n&utm_campaign=18271).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
