# 🔬 Generate AI governance policy PDFs with OpenAI, SerpAPI, Gotenberg and SharePoint

> ⚡ **23 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives an intake-form webhook, validates and enriches firm details, uses OpenAI and SerpAPI to research AI governance obligations, generates four branded policy documents, converts them to PDFs via Gotenberg, uploads them to Microsoft SharePoint, and emails internal review links through Microsoft Outlook.

## How it works
1. Receives a POST webhook submission from an intake form and validates required fields while normalizing the firm’s AI, jurisdiction, and compliance details.
2. Returns an immediate JSON confirmation response to the requester while the long-running document generation continues.
3. Runs four parallel research streams using OpenAI (GPT-4.1) with SerpAPI search to compile EU AI Act, ABA ethics guidance, AI-related case law/sanctions, and jurisdiction-specific requirements.
4. Aggregates the research into a single combined context and uses OpenAI to generate four HTML documents: an executive summary, a discussion guide, a draft AI governance policy, and an implementation roadmap.
5. Wraps each document in branded HTML, converts the HTML to PDF using a Gotenberg HTTP endpoint, and uploads each PDF to Microsoft SharePoint.
6. Builds SharePoint web links for all uploaded PDFs and sends an internal review email via Microsoft Outlook containing the links and a pre-drafted message to forward to the requester.

## Setup
1. Add credentials for OpenAI, SerpAPI, Microsoft SharePoint, Microsoft Outlook, and HTTP Basic Auth for your Gotenberg instance.
2. Install the SerpAPI community node (`n8n-nodes-serpapi`) on a self-hosted n8n instance, or replace it with another supported search tool.
3. Update the webhook path to match your intake form endpoint and copy the production webhook URL into your form configuration.
4. Set your Gotenberg base URL in the HTML-to-PDF HTTP request and confirm the multipart form field mapping matches the workflow’s HTML binary output.
5. Select your SharePoint site and target folder in the upload step, and replace the internal review recipient address in the Outlook email step.
6. Replace `YOUR_LOGO_URL` in the branded HTML compilation step so the generated PDFs use your organization’s logo.

## Requirements
- OpenAI API credential (GPT-4.1 access recommended)
- SerpAPI credential
- Microsoft SharePoint OAuth2 credential
- Microsoft Outlook OAuth2 credential
- Gotenberg instance (self-hosted or cloud) with Basic Auth
- A website intake form that POSTs JSON to the webhook endpoint

## Customization
- **Swap SerpAPI for Tavily** (`@n8n/n8n-nodes-langchain.toolTavily`) to eliminate the community node requirement and use a cloud-compatible search tool
- **Add or remove research agent branches** to expand scope (e.g., add an SEC/FINRA agent for financial services firms) or narrow it for simpler use cases
- **Replace the Outlook delivery node with Gmail** if you prefer Google Workspace — the email HTML is fully compatible
- **Update the HTML branding** in `Code — Compile Branded HTML` to reflect your organization's logo and color scheme

## Additional info
*Support: support@ais.email | [Automated Intelligent Solutions](https://automatedintelligentsolutions.com)*

## 🔗 Nodes Used

HTTP Request, Webhook, Microsoft Outlook, AI Agent, OpenAI Chat Model, SerpApi (Google Search)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
