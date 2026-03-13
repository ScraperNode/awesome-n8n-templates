# 🔬 Natural language Google Sheets data analysis with Gemini AI

> ⚡ **1,753 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This n8n workflow template creates an efficient data analysis system that uses Google Gemini AI to interpret user questions about spreadsheet data and processes them through a specialized sub-workflow for optimized token usage and faster responses.

## What This Workflow Does

- **Smart Query Parsing**: Uses Gemini AI to understand natural language questions about your data
- **Efficient Processing**: Routes calculations through a dedicated sub-workflow to minimize token consumption
- **Structured Output**: Automatically identifies the column, aggregation type, and grouping levels from user queries
- **Multiple Aggregation Types**: Supports sum, average, count, count distinct, min, and max operations
- **Flexible Grouping**: Can aggregate data by single or multiple dimensions
- **Token Optimization**: Processes large datasets without overwhelming AI context limits

## Tools Used

- **Google Gemini Chat Model** - Natural language query understanding and response formatting
- **Google Sheets Tool** - Data access and column metadata extraction
- **Execute Workflow** - Sub-workflow processing for data calculations
- **Structured Output Parser** - Converts AI responses to actionable parameters
- **Memory Buffer Window** - Basic conversation context management
- **Switch Node** - Routes to appropriate aggregation method
- **Summarize Nodes** - Performs various data aggregations

## 📋 MAIN WORKFLOW - Query Parser

### What This Workflow Does
The main workflow receives natural language questions from users and converts them into structured parameters that the sub-workflow can process. It uses Google Gemini AI to understand the intent and extract the necessary information.

### Prerequisites for Main Workflow
- Google Cloud Platform account with Gemini API access
- Google account with access to Google Sheets
- n8n instance (cloud or self-hosted)

### Main Workflow Setup Instructions

#### 1. Import the Main Workflow
1. Copy the main workflow JSON provided
2. In your n8n instance, go to **Workflows** → **Import from JSON**
3. Paste the JSON and click **Import**
4. Save with name: "Gemini Data Query Parser"

#### 2. Set Up Google Gemini Connection
1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Go to **Get API Key** section
4. Create a new API key or use an existing one
5. Copy the API key

**Configure in n8n:**
1. Click on **Google Gemini Chat Model** node
2. Click **Create New Credential**
3. Select **Google PaLM API**
4. Paste your API key
5. Save the credential

#### 3. Set Up Google Sheets Connection for Main Workflow
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the **Google Sheets API**
4. Create OAuth 2.0 Client ID credentials
5. In n8n, click on **Get Column Info** node
6. Create **Google Sheets OAuth2 API** credential
7. Complete OAuth flow

#### 4. Configure Your Data Source
**Option A: Use Sample Data**
- The workflow is pre-configured for: [Sample Marketing Data](https://docs.google.com/spreadsheets/d/19aUQYZq02qHsCelO4eeV4sx_MTJJupC5qe0gDLQBtRA/edit?usp=drivesdk)
- Make a copy to your Google Drive

**Option B: Use Your Own Sheet**
1. Update **Get Column Info** node with your Sheet ID
2. Ensure you have a "Columns" sheet for metadata
3. Update sheet references as needed

#### 5. Set Up Workflow Trigger
1. Configure how you want to trigger this workflow (webhook, manual, etc.)
2. The workflow will output structured JSON for the sub-workflow

---

## ⚙️ SUB-WORKFLOW - Data Processor

### What This Workflow Does
The sub-workflow receives structured parameters from the main workflow and performs the actual data calculations. It handles fetching data, routing to appropriate aggregation methods, and formatting results.

### Sub-Workflow Setup Instructions

#### 1. Import the Sub-Workflow
1. Create a new workflow in n8n
2. Copy the sub-workflow JSON (embedded in the Execute Workflow node)
3. Import as a separate workflow
4. Save with name: "Data Processing Sub-Workflow"

#### 2. Configure Google Sheets Connection for Sub-Workflow
1. Apply the same Google Sheets OAuth2 credential you created for the main workflow
2. Update the **Get Data** node with your Sheet ID
3. Ensure it points to your data sheet (e.g., "Data" sheet)

#### 3. Configure Google Gemini for Output Formatting
1. Apply the same Gemini API credential to the **Google Gemini Chat Model1** node
2. This handles final result formatting

#### 4. Link Workflows Together
1. In the main workflow, find the **Execute Workflow - Summarize Data** node
2. Update the workflow reference to point to your sub-workflow
3. Ensure the sub-workflow is set to accept execution from other workflows

### Sub-Workflow Components
- **When Executed by Another Workflow**: Trigger that receives parameters
- **Get Data**: Fetches all data from Google Sheets
- **Type of Aggregation**: Switch node that routes based on aggregation type
- **Multiple Summarize Nodes**: Handle different aggregation types (sum, avg, count, etc.)
- **Bring All Data Together**: Combines results from different aggregation paths
- **Write into Table Output**: Formats final results using Gemini AI

### Example Usage

Once both workflows are set up, you can ask questions like:

**Overall Metrics:**
- "Show total Spend ($)"
- "Show total Clicks"
- "Show average Conversions"

**Single Dimension:**
- "Show total Spend ($) by Channel"
- "Show total Clicks by Campaign"

**Two Dimensions:**
- "Show total Spend ($) by Channel and Campaign"
- "Show average Clicks by Channel and Campaign"

### Data Flow Between Workflows
1. **Main Workflow**: User question → Gemini AI → Structured JSON output
2. **Sub-Workflow**: Receives JSON → Fetches data → Performs calculations → Returns formatted table



---

## Contact Information


For support, customization, or questions about this template:

- **Email**: robert@ynteractive.com
- **LinkedIn**: [Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)

*Need help implementing these workflows, want to remove limitations, or require custom modifications? Reach out for professional n8n automation services and AI integration support.*

## 🔗 Nodes Used

Google Sheets, Execute Sub-workflow, Execute Workflow Trigger, AI Agent, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
