# 🎣 Automate hyper-personalized outreach at scale with Bright Data and LLMs

> ⚡ **2,232 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# LinkedIn Enrichment & Ice Breaker Generator

**For SDRs, growth marketers, and founders looking to scale personalized outreach.**  
This workflow enriches LinkedIn profile data using Bright Data and generates AI-powered ice breakers using Claude (Anthropic).  
It automates research and messaging to help you connect smarter and faster — without manual effort.

---

## 🧩 How It Works

This workflow combines Google Sheets, [Brigt Data](Bright Data), and Claude (Anthropic) to fully automate your outreach research:

1. **Trigger**  
   - Manually trigger the workflow or run it on a schedule (via `Manual Trigger` or `Schedule Trigger`).

2. **Read Input Sheet**  
   - Fetches rows from a Google Sheet. Each row must contain at least a `Linkedin_URL_Person` and `row_number`.

3. **Prepare Input**  
   - Formats each row for Bright Data’s API using `Set` and `SplitInBatches` nodes.

4. **Enrich Profile (Bright Data API)**  
   - Sends LinkedIn URLs to Bright Data’s Dataset API via `HTTP Request`.
   - Waits for snapshot to be ready using polling logic with `Wait`, `If`, and `Snapshot Progress` nodes.
   - Once ready, retrieves the enriched profile data including:
     - Name
     - City
     - Current company
     - About section
     - Recent posts

5. **Update Sheet with Profile Data**  
   - Writes the retrieved enrichment data into the corresponding row in Google Sheets (via row_number).

6. **Generate Ice Breaker (Claude AI)**  
   - Sends enriched profile content to Claude (Anthropic) using a custom prompt.
   - Focuses on recent posts for crafting relevant, respectful, 1–4-line ice breakers.

7. **Update Sheet with Ice Breaker**  
   - Writes the generated ice breaker to the `Ice Breaker 1` column in the original row.

---

## ✅ Requirements

To use this workflow, you must have the following:

### Google Sheets
- A Google account
- A Google Sheet with at least one sheet/tab containing:
  - Column: `Linkedin_URL_Person`
  - Column: `row_number` (used for mapping input and output rows)

### Bright Data
- A Bright Data account with access to the **Dataset API**
- An active dataset that accepts LinkedIn URLs
- API key with Dataset API access

### Anthropic Claude
- An Anthropic API key (for Claude 3.5 Haiku or other Claude models)

### n8n Environment
- Access to `HTTP Request`, `Set`, `Wait`, `SplitInBatches`, `If`, and `Google Sheets` nodes
- Access to Claude integration (via LangChain nodes: `@n8n/n8n-nodes-langchain`)
- Credential manager properly configured with:
  - Google Sheets OAuth2 credentials
  - Bright Data API key
  - Anthropic API key

---

## ⚙️ Setup Instructions

### Step 1: Copy the Google Sheets Template

&gt; 📄 [Click here to make a copy](https://docs.google.com/spreadsheets/d/1g8Dum0tfZ1nQdd3b6sLhZX2aMu6FzwoVvD0EAXMpPx8/edit?usp=sharing)

- Fill the `Linkedin_URL_Person` column with LinkedIn profile URLs you want to enrich
- Do **not** modify headers or add filters to the sheet
- Leave other columns (name, city, about, posts, ice breaker) blank — the workflow fills them

---

### Step 2: Connect Your Accounts in n8n

1. **Google Sheets**: Create a credential under *Google Sheets OAuth2 API*
2. **Bright Data**: Add your API key as a credential under *HTTP Request* (Authorization header)
3. **Anthropic**: Create a credential for *Anthropic API* with your Claude key

---

### Step 3: Import and Configure the Workflow

1. Import the workflow into your n8n instance.
2. In each Google Sheets node:
   - Select the copied Google Sheet
   - Select the correct tab (usually `input` or `Sheet1`)
3. In the HTTP Request node to Bright Data:
   - Paste your Bright Data dataset ID
4. In the Claude prompt node:
   - Optionally adjust the tone and length of the ice breaker prompt

---

### Step 4: Run the Workflow

- Test it using the `Manual Trigger` node
- For daily automation, enable the `Schedule Trigger` and configure interval settings
- Watch your Google Sheet populate with enriched data and tailored ice breakers

---

## 🧠 Tips & Best Practices

- **Bright Data Delay**: Snapshots may take time. The workflow polls the status until complete.
- **Retry Protection**: `If` and `Wait` nodes avoid infinite loops by checking snapshot status.
- **Mapping via row_number**: Critical to ensure data is updated in the right row.
- **Prompt Engineering**: You can fine-tune Claude's behavior by editing the text prompt.

---

## 🧾 Output Example

Once complete, each row in your Google Sheet will contain:

| Linkedin_URL_Person | Name | City | Company | Recent Post | Ice Breaker |
|---------------------|------|------|---------|-------------|--------------|
| [linkedin.com/...](#) | Jane Doe | NYC | ACME Corp | “Why AI should replace meetings” | "Loved your post about AI and meetings — finally someone said it!" |

---

## 💬 Support & Feedback

Questions? Want to tweak the prompt or expand the enrichment?

📧 **Email**: Yaron@nofluff.online  
📺 **YouTube**: [@YaronBeen](https://www.youtube.com/@YaronBeen/videos)  
🔗 **LinkedIn**: [linkedin.com/in/yaronbeen](https://www.linkedin.com/in/yaronbeen)

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
