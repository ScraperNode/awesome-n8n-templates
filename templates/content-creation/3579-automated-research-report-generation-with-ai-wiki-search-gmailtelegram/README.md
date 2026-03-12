# 🎬 Automated research report generation with AI, Wiki, Search & Gmail/Telegram

> ⚡ **6,742 views** · 🎬 [Content Creation & Video](../)

## Description

# Automated Research Report Generation with OpenAI, Wikipedia, Google Search, Gmail/Telegram and PDF Output
---

## Description

### What Problem Does This Solve? 🛠️
This workflow automates the process of **generating professional research reports** for researchers, students, and professionals. It eliminates manual research and report formatting by aggregating data, generating content with AI, and delivering the report as a PDF via Gmail or Telegram. **Target audience**: Researchers, students, educators, and professionals needing quick, formatted research reports.

### What Does It Do? 🌟
- Aggregates research data from Wikipedia, Google Search, and SerpApi.
- Refines user queries and generates structured content using OpenAI.
- Converts the content into a professional HTML report, then to PDF.
- Sends the PDF report via Gmail or Telegram.

### Key Features 📋
- Real-time data aggregation from multiple sources.
- AI-driven content generation with OpenAI.
- Automated HTML-to-PDF conversion for professional reports.
- Flexible delivery via Gmail or Telegram.
- Error handling for robust execution.

---

## Setup Instructions

### Prerequisites ⚙️
- **n8n Instance**: Self-hosted or cloud n8n instance.
- **API Credentials**:
  - **OpenAI API**: API key with GPT model access, stored in n8n credentials.
  - **SerpApi (Google Search)**: API key from SerpApi, stored in n8n credentials (do not hardcode in nodes).
  - **Gmail API**: Credentials from Google Cloud Console with Gmail scope.
  - **Telegram API**: Bot token from BotFather on Telegram.

### Installation Steps 📦
1. **Import the Workflow**:
   - Copy the workflow JSON from the "Template Code" section below.
   - Import it into n8n via "Import from File" or "Import from URL".
2. **Configure Credentials**:
   - Add API credentials in n8n’s Credentials section for OpenAI, SerpApi, Gmail, and Telegram.
   - Assign credentials to respective nodes. For example:
     - In the `SerpApi Google Search` node, use n8n credentials for SerpApi: `api_key={{ $credentials.SerpApiKey }}`.
     - In the `Send Research PDF on Gmail` node, use Gmail credentials.
     - In the `Send PDF to Telegram` node, use Telegram bot credentials.
3. **Set Up Nodes**:
   - **OpenAI Nodes** (`Research AI Agent`, `OpenAI Chat Model`, `OpenAI Chat Middle Memory`): Update the model (e.g., `gpt-4o`) and prompt as needed.
   - **Input Validation** (`Input Validation` node): Ensure your input query format matches the expected structure (e.g., `topic: "AI ethics"`).
   - **Delivery Options** (`Send Research PDF on Gmail`, `Send PDF to Telegram`): Configure recipient email or Telegram chat ID.
4. **Test the Workflow**:
   - Run the workflow by clicking the "Test Workflow" node.
   - Verify that the research report PDF is generated and sent via Gmail or Telegram.

---

## How It Works

### High-Level Steps 🔍
- **Query Refinement**: Refines the input query for better research.
- **Aggregate Data**: Fetches data from Wikipedia, Google Search, and SerpApi.
- **Generate Report**: Uses OpenAI to create a structured report.
- **Convert to PDF**: Converts the report to HTML, then PDF.
- **Deliver Report**: Sends the PDF via Gmail or Telegram.

*Detailed descriptions are available in the sticky notes within the workflow screenshot above.*

---

## Node Names and Actions

### Research and Report Generation
- `Test Workflow`: Triggers the workflow for testing.
- `Input Validation`: Validates the input query.
- `Query Refiner`: Refines the query for better results.
- `Research AI Agent`: Coordinates research using OpenAI.
- `OpenAI Chat Model`: Generates content for the report.
- `Structured Output Parser`: Parses OpenAI output into structured data.
- `OpenAI Chat Middle Memory`: Retains context during research.
- `Wikipedia Google Search`: Fetches data from Wikipedia.
- `SerpApi Google Search`: Fetches data via SerpApi.
- `Merge Split Items`: Merges data from multiple sources.
- `Aggregate`: Aggregates all research data.
- `Generate PDF HTML`: Creates an HTML report.
- `Convert HTML to PDF`: Converts HTML to PDF.
- `Download PDF`: Downloads the PDF file.
- `Send PDF to Telegram`: Sends the PDF via Telegram.
- `Send Research PDF on Gmail`: Sends the PDF via Gmail.

---

## Customization Tips

- **Expand Data Sources** 📡: Add more sources (e.g., academic databases) by adding nodes to `Merge Split Items`.
- **Change Report Style** ✍️: Update the `Generate PDF HTML` node to modify the HTML template (e.g., adjust styling or sections).
- **Alternative Delivery** 📧: Add nodes to send the PDF via other platforms (e.g., Slack).
- **Adjust AI Model** 🧠: Modify the `OpenAI Chat Model` node to use a different model (e.g., `gpt-3.5-turbo`).

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Google Drive, Gmail, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
