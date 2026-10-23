# 📊 Send Indian tender email reports from TendersInfo.net results

> ⚡ **133 views** · 📊 [Market Research & Insights](../)

## Description

### How it works
This workflow fetches live tenders from TendersInfo.net based on user-provided keywords, filters for GEM (Government e-Marketplace) and MSE (Micro & Small Enterprises) eligible opportunities, and generates a professional HTML email report grouped by company. The webhook receives search criteria, queries the tender API, parses responses, filters relevant tenders, and formats results into a readable table.

### Setup steps
1. **Replace API authentication**: Update the `Cookie` header in "Fetch Tender Data from API" node with your valid `ANTI_FORGERY_TOKEN` and `SESSION_ID` from TendersInfo.net
2. **Configure webhook**: Copy the production webhook URL from the "Webhook Trigger" node
3. **Test with sample data**: Send a POST request with `{"keywords": "software", "msme": "eligible", "email": "user@example.com"}` to verify the flow
4. **Activate workflow**: Enable the workflow to start processing real tender searches

## 🔗 Nodes Used

HTTP Request, Webhook, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
