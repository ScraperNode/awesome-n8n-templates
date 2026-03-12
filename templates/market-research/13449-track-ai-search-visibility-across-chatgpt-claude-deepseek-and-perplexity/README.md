# 📊 Track AI search visibility across ChatGPT, Claude, DeepSeek and Perplexity

> ⚡ **31 views** · 📊 [Market Research & Insights](../)

## Description

## Description

This workflow automates AI Search Engine Optimization (ASEO) tracking for digital marketing agencies. It tests your client's website visibility across four major AI platforms—ChatGPT, Claude, DeepSeek, and Perplexity—using brand-neutral prompts, analyzes ranking position and presence strength on each platform, identifies top competitors, and returns a structured 27-field scorecard with actionable recommendations. Designed as a sub-workflow, it integrates directly into your existing client audit or reporting pipeline.

---

## Key Features

- Brand-neutral prompt generation (no client name used—tests true organic AI discoverability)
- Simultaneous visibility testing across ChatGPT, Claude, DeepSeek, and Perplexity
- Presence strength scoring (0–100%) per platform
- Competitor identification across all four AI platforms
- Strongest and weakest platform detection
- AI-generated actionable recommendations for improvement
- Structured 27-field output ready for Google Sheets or database insertion
- Error handling on all agent nodes (partial results if any platform fails)
- Sub-workflow design—integrates cleanly into larger audit pipelines

---

## What This Workflow Does

### Input

This workflow is triggered by a parent workflow and receives two parameters:

- **Website**: The client's website URL (e.g., `https://example.com`)
- **Website Summary**: A plain-text description of what the business does and its core services

### Processing

**Stage 1 — Brand-Neutral Prompt Generation**

GPT-4.1-mini generates a realistic search prompt that potential customers would type into an AI chatbot to find a company like the client. Critically, the prompt does not include the client's brand name—it focuses on their services and industry instead. For example, for a Los Angeles product photography studio, the prompt would be something like "best product photography studio for Amazon listings in Los Angeles" rather than the studio's name. This tests true organic discoverability, not brand recall.

**Stage 2 — Four-Platform Sequential Testing**

The same generated prompt is submitted sequentially to four AI platforms:
- ChatGPT via GPT-4o-mini
- Claude via Claude Sonnet 3.7
- DeepSeek
- Perplexity

Each platform agent runs independently with error handling enabled. If one platform API is down or throws an error, the workflow continues and returns partial results—it does not fail entirely.

**Stage 3 — Cross-Platform Analysis**

DeepSeek analyzes all four platform outputs together and produces a structured JSON report covering each platform's ranking (Yes/No), position (1–10 or null), presence strength percentage, key mentions, and top competitors. It also generates an overall summary comparing all platforms.

**Stage 4 — Data Flattening**

The nested JSON is flattened into 27 individual fields that can be directly inserted into a Google Sheet row, database, or passed back to the parent workflow for reporting.

### Output

The workflow returns 27 structured data fields:

- Search prompt used (1 field)
- Per-platform metrics for ChatGPT, Claude, DeepSeek, Perplexity: Ranking (Yes/No), Position, Presence Strength %, Key Mentions, Top Competitors (5 fields × 4 platforms = 20 fields)
- Overall summary: Total platforms ranking, Average presence strength, Strongest platform, Weakest platform, Main competitors across all platforms, Recommendations (6 fields)

---

## Setup Instructions

### Prerequisites

- Active n8n instance (self-hosted or n8n Cloud)
- Parent workflow with Execute Workflow node (this workflow does not run standalone)
- OpenAI API key (used for prompt generation and ChatGPT testing)
- Anthropic API key (used for Claude testing)
- DeepSeek API key (used for DeepSeek testing and final analysis)
- Perplexity API key (used for Perplexity testing)

**Estimated setup time:** 20–25 minutes

---

### Step 1: Understand how this workflow is triggered

This is a **sub-workflow**. It does not have its own schedule trigger. It runs when a parent workflow calls it using n8n's **Execute Workflow** node.

**Setting up the parent workflow:**

1. Open or create your parent workflow (e.g., a client audit scheduler, a Google Sheets loop, or a manual trigger)
2. Add an **Execute Workflow** node to your parent workflow
3. Inside the Execute Workflow node:
   - **Source:** Select "Database"
   - **Workflow:** Search for and select this AI Search Ranking Analyzer workflow
   - **Mode:** Choose "Run once for all items" or "Run once for each item" depending on your setup
4. Under **Fields**, add two parameters to pass:
   - Name: `Website` | Value: your client's website URL expression (e.g., `={{ $json['Website URL'] }}`)
   - Name: `Website Summary` | Value: your client's business description (e.g., `={{ $json['Business Description'] }}`)

**Example parent workflow structure:**

```
Schedule Trigger (Weekly / Monthly)
  → Read Client List from Google Sheets
  → Loop Over Each Client
    → Execute Workflow (this AI Search Ranking Analyzer)
        Pass: Website = {{ $json['Website URL'] }}
        Pass: Website Summary = {{ $json['Summary'] }}
    → Append 27 Fields to Reporting Sheet
  → Send Report Email or Slack Notification
```

**Testing the trigger connection:**

1. Open this workflow and click on the **Receive Website and Summary from Parent** node
2. You will see "Waiting for input from parent workflow..."
3. Go to your parent workflow and click **Execute node** on the Execute Workflow node
4. The data will flow into this workflow for testing
5. Both workflows must be set to **Active** for production use

---

### Step 2: Connect OpenAI credentials

This workflow uses two OpenAI models:

- **GPT-4.1-mini** — used by `Generate Brand-Neutral Search Prompts`, `Parse Prompt as JSON`, and `GPT Model for Parser Support`
- **GPT-4o-mini** — used by `Test Visibility on ChatGPT`

**To connect:**

1. In n8n go to **Credentials → Add credential → OpenAI API**
2. Paste your API key from [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
3. Name it clearly (e.g., "OpenAI Main")
4. Open each of these nodes and select your credential:
   - `GPT Model for Prompt Generation` → select your OpenAI credential, set model to `gpt-4.1-mini`
   - `GPT Model for Parser Support` → select your OpenAI credential, set model to `gpt-4.1-mini`
   - `GPT-4o-mini for ChatGPT Test` → select your OpenAI credential, set model to `gpt-4o-mini`

---

### Step 3: Connect Anthropic credentials

Used by the `Test Visibility on Claude` agent via `Claude Sonnet 3.7 Model`.

**To connect:**

1. Go to **Credentials → Add credential → Anthropic API**
2. Get API key from [https://console.anthropic.com/](https://console.anthropic.com/)
3. Open the `Claude Sonnet 3.7 Model` node and select your credential
4. Verify the model is set to `claude-3-7-sonnet-20250219`

---

### Step 4: Connect DeepSeek credentials

Used by two nodes: `DeepSeek Model for Testing` (platform test) and `DeepSeek Model for Analysis` (final summarizer).

**To connect:**

1. Go to **Credentials → Add credential → DeepSeek API**
2. Get API key from [https://platform.deepseek.com/](https://platform.deepseek.com/)
3. Open `DeepSeek Model for Testing` node → select your credential
4. Open `DeepSeek Model for Analysis` node → select your credential

---

### Step 5: Connect Perplexity credentials

Used by the `Test Visibility on Perplexity` node (Perplexity native node, not an AI agent).

**To connect:**

1. Go to **Credentials → Add credential → Perplexity API**
2. Get API key from [https://www.perplexity.ai/settings/api](https://www.perplexity.ai/settings/api)
3. Open the `Test Visibility on Perplexity` node and select your credential

---

### Step 6: Test the complete workflow

1. Temporarily add a **Manual Trigger** node at the start and connect it to `Generate Brand-Neutral Search Prompts` (bypass the executeWorkflowTrigger for isolated testing)
2. Set the Manual Trigger to pass test data:
   ```json
   {
     "Website": "https://your-test-site.com",
     "Website Summary": "A company that provides [your service] in [your city]"
   }
   ```
3. Execute and verify:
   - `Generate Brand-Neutral Search Prompts` produces a sensible search query
   - Each platform node returns output (or gracefully continues on error)
   - `Analyze All Platform Results` produces structured JSON
   - `Flatten JSON to 27 Data Fields` produces all 27 fields correctly
4. Remove the test Manual Trigger once testing is complete
5. Activate this workflow and your parent workflow

---

## Workflow Node Breakdown

### Receive Website and Summary from Parent
The entry point of this sub-workflow. Listens for execution from a parent workflow via n8n's Execute Workflow node. Receives two inputs: `Website` (client URL) and `Website Summary` (business description text). These values are referenced by subsequent nodes throughout the workflow.

### Generate Brand-Neutral Search Prompts
An AI agent powered by GPT-4.1-mini that creates a realistic search query a potential customer might type into an AI chatbot to find a business like the client—without using the client's brand name. This tests organic discoverability based on services and industry positioning rather than brand recognition. The output is a single focused search prompt.

### Parse Prompt as JSON
A Structured Output Parser that enforces JSON schema `{"Prompts": "..."}` on the generated prompt. Uses `GPT Model for Parser Support` as its language model and has autoFix enabled, so malformed outputs are automatically retried and corrected.

### Test Visibility on ChatGPT
An AI agent that submits the generated search prompt to ChatGPT (GPT-4o-mini) and records the response. This captures what ChatGPT currently recommends when users search for services like the client's.

### Test Visibility on Claude
An AI agent powered by Claude Sonnet 3.7 (Anthropic) that receives the same prompt and records Claude's recommendations. Has `onError: continueRegularOutput` so the workflow continues if Claude's API is unavailable.

### Test Visibility on DeepSeek
An AI agent powered by DeepSeek that tests the same prompt on DeepSeek's platform. Also has `onError: continueRegularOutput` for resilience.

### Test Visibility on Perplexity
Uses n8n's native Perplexity node (not an AI agent) to submit the prompt to Perplexity's search-augmented AI. Perplexity is particularly important because it uses real-time web search, making its recommendations highly relevant for current visibility. Has `onError: continueRegularOutput`.

### Analyze All Platform Results
A DeepSeek-powered AI agent that receives all four platform outputs simultaneously along with the client website URL and the original search prompt. It analyzes each platform independently—determining whether the client appears (Yes/No), at what position (1–10), how strongly (0–100%), how they are mentioned, and which competitors appear. It also generates an overall summary comparing all platforms and provides specific improvement recommendations. Uses `Parse Analysis as Structured JSON` as its output parser.

### Flatten JSON to 27 Data Fields
A Set node that extracts values from the nested JSON output of the analyzer into 27 flat fields. This makes the data ready for direct insertion into a Google Sheets row, Airtable record, or database table—or for return to the parent workflow.

### Output Data Complete
A No Operation node marking the successful completion of the workflow. The parent workflow receives all 27 fields as the execution output.

---

## Usage Guide

### Adding clients for analysis

In your parent workflow, maintain a Google Sheet with columns:

| Client Name | Website URL | Business Description | Last Checked |
|---|---|---|---|
| Example Corp | https://example.com | A SaaS company that provides... | 2025-01-15 |

Your parent workflow reads each row, passes the Website URL and Business Description to this sub-workflow, and writes the 27 returned fields back into the sheet for tracking.

### Understanding the output

After execution, check the `Flatten JSON to 27 Data Fields` node output. For each platform you get:

- **Ranking:** Yes (client appears) or No (client not mentioned)
- **Position:** Numeric position in the AI's recommendations (1 being top)
- **Presence Strength:** 0–100% measuring how positively and prominently the client is featured
- **Key Mentions:** How the AI described or mentioned the client
- **Ranking Competitors:** Which competitors the AI recommended instead

The **Overall Summary** tells you:
- How many of 4 platforms are currently ranking your client
- The average presence strength across all platforms
- Which platform is your strongest opportunity
- Which platform needs the most improvement
- The 3 main competitors appearing consistently
- Specific recommendations for improving AI discoverability

### Tracking over time

Run this workflow monthly per client. Append results to a Google Sheet with a date column. Track whether presence strength is improving, whether the client appears on more platforms over time, and whether competitors are losing or gaining ground.

---

## Customization Options

**Change the number of platforms:** Remove any platform agent node and update the `Analyze All Platform Results` prompt to exclude that platform's output reference.

**Add more platforms:** Add new AI agent nodes (e.g., Grok, Gemini) between `Test Visibility on Perplexity` and `Analyze All Platform Results`. Update the analyzer prompt to include the new platform's output.

**Generate multiple prompts:** Modify `Generate Brand-Neutral Search Prompts` to produce 3–5 different prompts. Loop through each and aggregate results for more comprehensive testing.

**Write results directly to Google Sheets:** After `Flatten JSON to 27 Data Fields`, add a Google Sheets Append node in your parent workflow to log each audit automatically.

**Add email or Slack notifications:** After the workflow completes in the parent, add a Send Email or Slack node that formats the key metrics (Overall Ranking, Average Presence Strength, Recommendations) into a readable client report.

**Adjust presence strength scoring:** Modify the `Analyze All Platform Results` prompt to change how the AI scores presence strength—for example, weighting first-position mentions more heavily.

---

## Troubleshooting

**Parent workflow not triggering this workflow**

- Verify both workflows are toggled to **Active**
- In the Execute Workflow node, confirm the correct workflow is selected
- Check that the Mode is set (not left blank)
- Test by clicking Execute node directly on the Execute Workflow node in the parent

**Website and Website Summary parameters not passing**

- In the Execute Workflow node, confirm the field names are exactly `Website` and `Website Summary` (case-sensitive, space in second parameter)
- Check the parent workflow is actually passing values, not empty expressions
- Use the `Receive Website and Summary from Parent` node's input panel to verify received data

**One platform returns empty output**

- The workflow continues even if one platform fails (onError: continueRegularOutput is set)
- Check the specific platform node for the error message
- Verify API credentials are valid and have available credits
- Perplexity free tier has strict rate limits—upgrade plan if hitting limits

**Structured output parser fails**

- `Parse Prompt as JSON` has autoFix enabled—it will retry malformed outputs automatically
- If `Parse Analysis as Structured JSON` fails, simplify the prompt in `Analyze All Platform Results` or increase max tokens
- Check that DeepSeek credentials are active (DeepSeek handles the analysis output parsing)

**Generated prompt includes client brand name**

- The `Generate Brand-Neutral Search Prompts` agent prompt instructs GPT to avoid brand names
- If brand names slip through, add to the system prompt: "Never mention any specific company name, brand, or trademark in the generated prompt"

**All 27 fields not appearing in output**

- Run the workflow with test data and inspect `Analyze All Platform Results` node output
- If a platform returned empty output due to an error, its fields will be null
- Check that `Flatten JSON to 27 Data Fields` expressions reference the correct node names

---

## Use Cases

**Digital marketing agencies offering ASEO services:** Run monthly AI visibility audits for 20–50 clients from one parent workflow. Generate client reports showing AI platform rankings, presence strength trends, and competitor comparisons. Position ASEO as a premium new service.

**SEO teams expanding beyond Google:** Use this alongside traditional Google ranking reports. Show clients their full search visibility picture—covering both Google and the AI chatbots that are increasingly influencing purchase decisions.

**Competitive intelligence:** Run this workflow for your own site and 3–5 competitors simultaneously. Identify which competitors dominate AI recommendations and reverse-engineer their content strategy.

**Brand monitoring:** Track how AI chatbots describe your brand over time. Detect if competitors are gaining ground or if negative associations are appearing in AI responses.

**New market entry research:** Before entering a new market or launching a new service line, test whether your website would appear in AI searches for that service category. Use results to guide content strategy before launch.

---

## Expected Results

**Time savings:** 45–60 minutes of manual AI testing per client, eliminated per audit cycle

**Coverage:** 4 major AI platforms tested in a single automated run

**Output quality:** Structured, consistent 27-field data format—ready for Google Sheets, dashboards, or PDF reports

**Scalability:** Process 50+ clients per parent workflow run with no additional manual effort

**Competitive advantage:** One of the first systematic approaches to measuring AI Search Engine Optimization (ASEO)—a space with no established tooling yet

---
**For any questions, custom development, or workflow integration support:**

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, Anthropic Chat Model, OpenAI Chat Model, Structured Output Parser, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
