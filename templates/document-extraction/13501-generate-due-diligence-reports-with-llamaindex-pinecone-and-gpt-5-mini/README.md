# 🔬 Generate due diligence reports with LlamaIndex, Pinecone, and GPT-5-mini

> ⚡ **63 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

Streamline M&A due diligence with AI. This n8n workflow automatically parses financial documents using LlamaIndex, embeds data into Pinecone, and generates comprehensive, AI-driven reports with GPT-5-mini, saving hours of manual review and ensuring consistent, data-backed insights.

## Why Use This Workflow?

**Time Savings:** Reduces manual document review and report generation from days to minutes.
**Cost Reduction:** Minimizes reliance on expensive human analysts for initial data extraction and summary.
**Error Prevention:** AI-driven analysis ensures consistent data extraction, reducing human error and oversight.
**Scalability:** Effortlessly processes multiple documents and deals in parallel, scaling with your business needs.

## Ideal For

-   **Investment Analysts & Private Equity Firms:** Quickly evaluate target companies by automating the extraction of key financials, risks, and business models from deal documents.
-   **M&A Advisors:** Conduct preliminary due diligence efficiently, generating comprehensive overview reports for clients without extensive manual effort.
-   **Financial Professionals:** Accelerate research and analysis of company filings, investor presentations, and market reports for critical decision-making.

## How It Works

1.  **Trigger:** A webhook receives multiple due diligence documents (PDFs, DOCX, XLSX) along with associated metadata.
2.  **Document Processing & Cache Check:** Files are split individually. The workflow first checks Pinecone to see if the deal's documents have been processed before (cache hit). If so, it skips parsing and embedding.
3.  **Data Extraction (LlamaIndex):** For new deals, each document is sent to LlamaIndex for advanced parsing, extracting structured text content.
4.  **Vectorization & Storage:** The parsed text is then converted into numerical vector embeddings using OpenAI and stored in Pinecone, our vector database, with relevant metadata.
5.  **AI-Powered Analysis (Langchain Agent):** An n8n Langchain Agent, acting as a "Senior Investment Analyst," leverages GPT-5-mini to query Pinecone multiple times for specific information (e.g., company profile, financials, risks, business model). It synthesizes these findings into a structured JSON output.
6.  **Report Generation:** The structured AI output is transformed into an HTML report, then converted into a professional PDF document.
7.  **Secure Storage & Delivery:** The final PDF due diligence report is uploaded to an S3 bucket, and a public URL is returned via the initial webhook, providing instant access.

## Setup Guide

### Prerequisites

| Requirement | Type | Purpose |
| :---------- | :--- | :------ |
| [n8n instance](https://n8n.partnerlinks.io/khmuhtadin) | Essential | Workflow execution platform |
| LlamaIndex API Key | Essential | For robust document parsing and text extraction |
| OpenAI API Key | Essential | For creating text embeddings and powering the GPT-5-mini AI agent |
| Pinecone API Key | Essential | For storing and retrieving vector embeddings |
| AWS S3 Account | Essential | For secure storage of generated PDF reports |

### Installation Steps

1.  Import the JSON file to your [n8n instance](https://n8n.partnerlinks.io/khmuhtadin).
2.  **Configure credentials:**
    -   **LlamaIndex:** Create an "HTTP Header Auth" credential with `x-api-key` in the header and your LlamaIndex API key as the value.
    -   **OpenAI:** Create an "OpenAI API" credential with your OpenAI API key. Ensure the credential name is "Sumopod" or update the workflow nodes accordingly.
    -   **Pinecone:** Create a "Pinecone API" credential with your Pinecone API key and environment. Ensure the credential name is "w3khmuhtadin" or update the workflow nodes accordingly.
    -   **AWS S3:** Create an "AWS S3" credential with your Access Key ID and Secret Access Key.
3.  **Update environment-specific values:**
    -   In the "Upload to S3" node, ensure the `bucketName` is set to your desired S3 bucket.
    -   In the "Create Public URL" node, update the `baseUrl` variable to match your S3 bucket's public access URL or CDN if applicable (e.g., `https://your-s3-bucket-name.s3.amazonaws.com`).
4.  **Customize settings:**
    -   Review the prompt in the "Analyze" (Langchain Agent) node to adjust the AI's persona or required queries if needed.
5.  **Test execution:**
    -   Send sample documents (PDF, DOCX, XLSX) to the webhook URL (`/webhook/dd-ai`) to verify all connections and processing steps work as expected.

## Technical Details

### Core Nodes

| Node | Purpose | Key Configuration |
| :------------------------------ | :--------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| `Webhook` | Initiates workflow with document uploads | `Path: dd-ai`, `HTTP Method: POST` |
| `Split Multi-File` (Code) | Splits binary files, generates unique deal ID | Parses `filenames` from `body` or `binary`, creates `dealId` from sorted names. |
| `Parse Document via LlamaIndex` | Extracts structured text from various document types | `URL: https://api.cloud.llamaindex.ai/api/v1/parsing/upload`, `Authentication: HTTP Header Auth` with `x-api-key`. |
| `Monitor Document Processing` | Polls LlamaIndex for parsing status | `URL: https://api.cloud.llamaindex.ai/api/v1/parsing/job/{{ $json.id }}`, `Authentication: HTTP Header Auth`. |
| `Insert to Pinecone` | Stores vector embeddings in Pinecone | `Mode: insert`, `Pinecone Index: poc`, `Pinecone Namespace: dealId`. |
| `Data Retrieval` (Pinecone) | Enables AI agent to search due diligence documents | `Mode: retrieve-as-tool`, `Pinecone Index: poc`, `Pinecone Namespace: {{ $json.dealId }}`, `topK: 100`. |
| `Analyze` (Langchain Agent) | Orchestrates AI analysis using specific queries | `Prompt Type: define`, detailed role and 6 mandatory Pinecone queries, `Model: gpt-5-mini`, `Output Parser: Parser`. |
| `Generate PDF` (Puppeteer) | Converts HTML report to a professional PDF | `Script Code: await $page.pdf(...)` with A4 format, margins, and 60s timeout. |
| `Upload to S3` | Stores final PDF reports securely | `Bucket Name: poc`, `File Name: {{ $json.fileName }}`, `Credentials: AWS S3`. |
| `If (Check Namespace Exists)` | Implements caching logic | Checks `stats.namespaces[dealId].vectorCount &gt; 0` to determine cache hit/miss. |

### Workflow Logic

The workflow begins by accepting multiple files via a webhook. It intelligently checks if the specific "deal" (identified by a unique ID generated from filenames) has already had its documents processed and embedded in Pinecone. This cache mechanism prevents redundant processing, saving time and API costs. If a cache miss occurs, documents are parsed by LlamaIndex, their content vectorized by OpenAI, and stored in a Pinecone namespace unique to the deal.

For analysis, a Langchain Agent, powered by GPT-5-mini, is instructed with a specific persona and a mandatory sequence of Pinecone queries (e.g., company overview, financials, risks). It uses the `Data Retrieval` tool to interact with Pinecone, synthesizing information from the stored embeddings. The AI's output is then structured by a dedicated parser, transformed into a human-readable HTML report, and converted into a PDF. Finally, this comprehensive report is uploaded to AWS S3, and a public access URL is provided as a response.

## Customization Options

**Basic Adjustments:**
-   **AI Prompt Refinement:** Modify the `Prompt` field in the "Analyze" (Langchain Agent) node to adjust the AI's persona, introduce new mandatory queries, or change reporting style.
-   **Output Schema:** Update the JSON schema in the "Parser" (Langchain Output Parser Structured) node to include additional fields or change the structure of the AI's output.

**Advanced Enhancements:**
-   **Integration with CRM/Dataroom:** Add nodes to automatically fetch documents from or update status in a CRM (e.g., Salesforce, HubSpot) or a virtual data room (e.g., CapLinked, Datasite).
-   **Conditional Analysis:** Implement logic to trigger different analysis paths or generate different report sections based on document content or deal parameters.
-   **Notification System:** Integrate with Slack, Microsoft Teams, or email to send notifications upon report generation or specific risk identification.

## Use Case Examples

### Scenario 1: Private Equity Firm Evaluating a Target Company
**Challenge:** A private equity firm receives dozens of due diligence documents (financials, CIM, management presentations) for a potential acquisition, needing a rapid initial assessment.
**Solution:** The workflow ingests all documents, automatically parses them, and an AI agent synthesizes key company information, financial summaries (revenue history, margins), and identified risks into a structured report within minutes.
**Result:** The firm's analysts gain an immediate, comprehensive overview, enabling faster screening and more focused deep-dive questions, significantly accelerating the deal cycle.

### Scenario 2: M&A Advisor Conducting Preliminary Due Diligence
**Challenge:** An M&A advisory firm needs to provide clients with a quick, consistent, and standardized preliminary due diligence report across multiple prospects.
**Solution:** Advisors upload relevant prospect documents to the workflow. The AI-powered system automatically extracts core business model details, investment thesis highlights, and customer concentration analysis, along with key financials.
**Result:** The firm can generate standardized, high-quality preliminary reports efficiently, ensuring consistency across all client engagements and freeing up senior staff for strategic analysis.

---

**Created by:** [Khmuhtadin](https://khmuhtadin.com)
**Category:** AI | **Tags:** Due Diligence, AI, Automation, M&A, LlamaIndex, Pinecone, GPT-5-mini, Document Processing
**Need custom workflows?** [Contact us](https://khaisa.studio/contact)

**Connect with the creator:**
[Portfolio](https://khmuhtadin.com) • [Workflows](https://khaisa.studio/products/) • [LinkedIn](https://www.linkedin.com/in/khmuhtadin/) • [Medium](https://medium.com/@khaisastudio) • [Threads](https://www.threads.com/@khmuhtadin)

## 🔗 Nodes Used

HTTP Request, Webhook, S3, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
