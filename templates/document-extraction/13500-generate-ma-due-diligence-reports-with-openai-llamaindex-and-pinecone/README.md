# 🔬 Generate M&A due diligence reports with OpenAI, LlamaIndex and Pinecone

> ⚡ **32 views** · 🔬 [Document Extraction & Analysis](../)

## Description

M&A Due Diligence Automation with AI

Automatically parse financial documents using LlamaIndex, embed data into Pinecone, and generate AI-driven reports with GPT-5-mini. Reducing manual review from days to minutes.

## Why Use This Workflow?

Cuts document review time dramatically, minimizes reliance on expensive analysts for initial extraction, ensures consistent data-backed insights, and scales effortlessly across multiple deals in parallel.

## Ideal For

Investment analysts, private equity firms, M&A advisors, and financial professionals who need rapid, standardized preliminary due diligence reports.

## How It Works

1. **Trigger** — A webhook receives due diligence documents (PDF, DOCX, XLSX) with metadata.
2. **Cache Check** — Pinecone is queried first. If the deal was processed before, parsing is skipped entirely.
3. **Document Parsing** — New documents are sent to LlamaIndex for structured text extraction.
4. **Vectorization** — Parsed text is embedded via OpenAI and stored in a Pinecone namespace unique to each deal.
5. **AI Analysis** — A Langchain Agent (GPT-5-mini) acting as a Senior Investment Analyst queries Pinecone across six key areas (company profile, financials, risks, business model, etc.) and outputs structured JSON.
6. **Report Generation** — The JSON is converted to HTML, then rendered as a professional PDF via Puppeteer.
7. **Delivery** — The PDF is uploaded to AWS S3 and a public URL is returned via the webhook.

## Setup

### Prerequisites

| Requirement | Purpose |
|---|---|
| [n8n instance](https://n8n.partnerlinks.io/khmuhtadin) | Workflow execution |
| LlamaIndex API Key | Document parsing |
| OpenAI API Key | Embeddings + GPT-5-mini agent |
| Pinecone API Key | Vector storage & retrieval |
| AWS S3 Account | PDF report storage |

### Steps

1. Import the JSON workflow into your [n8n instance](https://n8n.partnerlinks.io/khmuhtadin).
2. Configure credentials for LlamaIndex (HTTP Header Auth), OpenAI, Pinecone, and AWS S3.
3. Set your S3 `bucketName` and update `baseUrl` in the "Create Public URL" node.
4. Optionally customize the AI persona and queries in the "Analyze" (Langchain Agent) node.
5. Test by sending sample documents to `/webhook/dd-ai`.

## Customization

Modify the agent prompt to adjust personas or add new queries. Update the output parser's JSON schema to capture additional fields. For advanced use, integrate with CRMs (Salesforce, HubSpot), virtual data rooms (Datasite), or add Slack/email notifications on report completion.

---

**Created by:** [Khmuhtadin](https://khmuhtadin.com) | [Workflows](https://khaisa.studio/products/) • [LinkedIn](https://www.linkedin.com/in/khmuhtadin/) • [Medium](https://medium.com/@khaisastudio)
**Need custom workflows?** [Contact us](https://khaisa.studio/contact)

## 🔗 Nodes Used

HTTP Request, Webhook, S3, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
