# 🔬 Natural language to SQL converter for Google Sheets with GPT-4o

> ⚡ **949 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This n8n workflow template creates an intelligent data analysis system that converts natural language questions into Google Sheets SQL queries using OpenAI's GPT-4o model. The system generates proper Google Sheets query URLs and executes them via HTTP requests for efficient data retrieval.

## What This Workflow Does

- **Natural Language to SQL**: Converts user questions into Google Sheets SQL syntax
- **Direct HTTP Queries**: Bypasses API limits by using Google Sheets' built-in query functionality
- **Column Letter Mapping**: Automatically maps column names to their corresponding letters (A, B, C, etc.)
- **Structured Query Generation**: Outputs properly formatted Google Sheets query URLs
- **Real-time Data Access**: Retrieves live data directly from Google Sheets
- **Memory Management**: Maintains conversation context for follow-up questions

## Tools Used

- **OpenAI Chat Model (GPT-4o)** - SQL query generation and natural language understanding
- **OpenAI Chat Model (GPT-4.1 Mini)** - Result formatting and table output
- **Google Sheets Tool** - Column metadata extraction and schema understanding
- **HTTP Request Node** - Direct data retrieval via Google Sheets query API
- **Structured Output Parser** - Formats AI responses into executable queries
- **Memory Buffer Window** - Conversation history management
- **Chat Trigger** - Webhook-based conversation interface


## Step-by-Step Setup Instructions

### 1. Prerequisites

Before starting, ensure you have:
- An n8n instance (cloud or self-hosted)
- An OpenAI account with API access and billing setup
- A Google account with access to Google Sheets
- The target Google Sheet must be publicly accessible or shareable via link

### 2. Import the Workflow

1. Copy the workflow JSON provided
2. In your n8n instance, go to **Workflows** → **Import from JSON**
3. Paste the JSON and click **Import**
4. Save with a descriptive name like "Google Sheets SQL Query Generator"

### 3. Set Up OpenAI Connections

#### Get API Key:
1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign in or create an account
3. Navigate to **API Keys** section
4. Click **Create new secret key**
5. Copy the generated API key
6. **Important**: Add billing information and credits to your OpenAI account

#### Configure Both OpenAI Nodes:
1. **OpenAI Chat Model1 (GPT-4o)**:
   - Click on the node
   - Click **Create New Credential**
   - Select **OpenAI API**
   - Paste your API key
   - Save the credential

2. **OpenAI Chat Model2 (GPT-4.1 Mini)**:
   - Apply the same OpenAI API credential
   - This handles result formatting

### 4. Set Up Google Sheets Connection

#### Create OAuth2 Credentials:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the **Google Sheets API**
4. Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client IDs**
5. Set application type to **Web Application**
6. Add authorized redirect URIs (get this from n8n credentials setup)
7. Copy the **Client ID** and **Client Secret**

#### Configure in n8n:
1. Click on the **Get Column Info2** node
2. Click **Create New Credential**
3. Select **Google Sheets OAuth2 API**
4. Enter your **Client ID** and **Client Secret**
5. Complete the OAuth flow by clicking **Connect my account**
6. Authorize the required permissions

### 5. Prepare Your Google Sheet

#### Option A: Use the Sample Data Sheet
- Access the pre-configured sheet: [Sample Marketing Data](https://docs.google.com/spreadsheets/d/19aUQYZq02qHsCelO4eeV4sx_MTJJupC5qe0gDLQBtRA/edit?usp=drivesdk)
- Make a copy to your Google Drive
- **Important**: Set sharing to "Anyone with the link can view"

4. **Critical**: Set sharing to "Anyone with the link can view" for HTTP access
5. Copy the Sheet ID from the URL
6. Update the **Get Column Info2** node with your Sheet ID and column metadata sheet

### 6. Configure Sheet References

1. **Get Column Info2 Node**:
   - Set **Document ID** to your Google Sheet ID
   - Set **Sheet Name** to your columns metadata sheet (e.g., "Columns")
   - This provides the AI with column letter mappings

2. **HTTP Request Node**:
   - No configuration needed - it uses dynamic URLs from the AI agent
   - Ensure your sheet has proper sharing permissions

### 7. Update System Prompt (If Using Custom Sheet)

If using your own Google Sheet, update the system prompt in the **AI Agent3** node:
1. Replace the URL in the system message with your Google Sheet URL
2. Update the GID (sheet ID) to match your data sheet
3. Keep the same query structure format




---

## Contact Information

**Robert  Ynteractive**

For support, customization, or questions about this template:

- **Email**: robert@ynteractive.com
- **LinkedIn**: [Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)

*Need help implementing this workflow, want to add security features, or require custom modifications? Reach out for professional n8n automation services and AI integration support.*

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
