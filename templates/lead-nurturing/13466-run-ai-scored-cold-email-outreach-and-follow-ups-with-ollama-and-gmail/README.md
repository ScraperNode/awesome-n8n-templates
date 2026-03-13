# 💬 Run AI-scored cold email outreach and follow-ups with Ollama and Gmail

> ⚡ **124 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## **Who is this for?**

This workflow is built for founders, sales teams, solopreneurs, and agencies who want to automate outbound sales without expensive tools. Perfect for anyone doing cold email outreach who wants AI-powered personalization at scale.

## **What it does**

The workflow runs three automated flows:

**Flow 1 — New Lead Processing (8 AM weekdays):**
- Reads new leads from Google Sheets
- Scrapes the lead's website to build a research dossier
- AI scores each lead (0–100) on company fit, role fit, timing signals, and engagement potential
- For leads scoring 40+, AI generates 3 personalized cold emails with different angles
- Sends Email 1 immediately and saves all 3 emails to the sheet
- Low-fit leads are marked as skipped

**Flow 2 — Follow-up Engine (every 2 hours weekdays):**
- Checks for leads that need follow-ups
- Sends Email 2 after 3 days, Email 3 after 7 days
- Automatically marks sequence as complete after Email 3
- Skips leads that have already replied

**Flow 3 — Reply Detection (every 2 hours weekdays):**
- Searches Gmail for replies from active leads
- Filters out your own sent emails to avoid false positives
- When a reply is found, marks the lead as "replied" and stops the sequence
- Sends a Telegram alert with the reply preview

## **Setup steps**

1. **Google Sheets** — Create a spreadsheet with columns: Lead Name, Email, Company, Website, Role/Title, Status, Reply Date, Reply Subject, Reply Snippet, and email tracking columns (see sticky notes in the workflow for full list)
2. **Gmail OAuth2** — Connect your Gmail account for sending emails and searching replies
3. **Ollama** — Install locally and pull your preferred model (e.g., `ollama pull mistral`). You can also swap for OpenAI or Anthropic
4. **Telegram Bot** — Create via @BotFather, get your bot token and chat ID
5. **AI Lead Scorer prompt** — Edit the system prompt with your product, ICP, and scoring criteria
6. **AI Email Writer prompt** — Edit with your name, company, value prop, and one specific result
7. **Sender name** — Update the sender name in the Extract Emails code node (line 12) and Find Follow-ups code node (line 9)
8. **Gmail address** — Set your sending Gmail address in the Filter Active Leads code node (line 10) and Check Reply Results code node (line 10)
9. **Test** — Add a test lead with status "new", run the research flow manually, verify emails generate correctly, then enable all schedules

## **Requirements**
- Self-hosted n8n (uses Ollama nodes)
- Ollama running locally with at least one model installed
- Google Sheets OAuth2 credentials
- Gmail OAuth2 credentials
- Telegram Bot credentials

## **How to customize**

- Adjust the **scoring threshold** (default 40) in the Extract Score node to be more or less selective
- Change **follow-up timing** (default 3 and 7 days) in the Find Follow-ups code node
- Modify **cron schedules** on any trigger to match your timezone and preferences
- Swap **Ollama for OpenAI or Anthropic** by replacing the LLM nodes
- Add a **LinkedIn enrichment step** before the dossier builder for richer research
- Customize email **tone and sign-off** in the AI Email Writer system prompt

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, Schedule Trigger, AI Agent, Ollama Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
