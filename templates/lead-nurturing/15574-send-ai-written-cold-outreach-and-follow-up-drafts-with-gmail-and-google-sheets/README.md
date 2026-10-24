# 💬 Send AI-written cold outreach and follow-up drafts with Gmail and Google Sheets using Firecrawl, Groq, and Gemini

> ⚡ **62 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# AI-Powered Cold Outreach & Follow-Up Automation (with Do...While variant)

Automate the full cold email lifecycle — from intelligently crawling a prospect's website, to AI-writing a personalised email, verifying the address, creating a Gmail draft, and managing up to 5 context-aware follow-ups — all tracked in Google Sheets.

---

## Good to know

- **This template contains two complete, identical workflows side by side.** The only difference is how the async scrape polling loop is built. Choose the version that suits your setup, then delete the other.
  - **Version A (left)** — Standard. Uses built-in n8n nodes only. Works on n8n Cloud and any self-hosted instance with no extra setup.
  - **Version B (right)** — Do...While. Uses the `n8n-nodes-do-while` community node to replace 5 nodes with 2. Requires installation under Settings → Community Nodes → `n8n-nodes-do-while`.
- Firecrawl batch scraping is billed per page. Test with a single domain first to understand your usage before running at scale.
- Gmail drafts are created — not sent automatically. Review and send manually. This is intentional so you stay in control of what goes out.
- The workflow stops following up after 5 attempts per lead (`follow_ups &lt; 5`). Leads marked `unsubscribed` are permanently excluded.

---

## How it works

**Cold Email Branch** (runs first, one lead at a time):

1. Reads all rows from a Google Sheets lead database and filters for leads with `status = pending` and `follow_ups = 0`.
2. Crawls the prospect's website sitemap using Firecrawl to discover all URLs.
3. Groq (ultra-fast LLM) filters the URL list down to the 10 most strategically useful pages — removing sitemaps, legal pages, RSS feeds, and other non-business content.
4. Firecrawl batch-scrapes all selected pages simultaneously and returns scraped markdown. Because Firecrawl scraping is asynchronous, the workflow polls for job completion rather than waiting blindly.
   - **Version A:** polls using a `SplitInBatches → Get Status → IF → Wait → Set` loop (5 nodes, built-in only).
   - **Version B:** polls using `Get Status → Do...While` (2 nodes, community node). The Do...While node has a built-in 5-second wait between iterations and a 30-iteration hard cap (≈ 2.5 min max) that exits gracefully instead of timing out.
5. All scraped page markdown is aggregated into one payload and passed to a Gemini AI agent, which reads the business, writes a personalised cold email, and extracts the best contact email it found in the content.
6. If the AI found a contact email, it is immediately verified with VerifiEmail. If no email was found in the scraped content, a Firecrawl AI Agent actively navigates the site (contact pages, footers, mailto links) to find one — then verifies that too.
7. If the email passes verification, a Gmail draft is created. If no valid email can be found at all, the lead is marked `no_email` in the sheet so it is never retried, preventing wasted API calls.
8. On success, the sheet row is updated: `status = emailed`, `follow_ups = 0`, `email = &lt;found address&gt;`.

**Follow-Up Branch** (runs automatically after cold emails complete):

1. Re-reads the lead database and filters for leads with `status = emailed`, a non-empty email, and `follow_ups &lt; 5`.
2. Fetches the full Gmail conversation thread for each lead so the AI has full context.
3. A Gemini AI agent — enhanced with per-contact window memory (keyed to email address) — reads the entire conversation history and writes a context-aware follow-up reply. If the conversation suggests no follow-up is needed (e.g., a positive reply was received), the agent sets `skip: true` and the workflow moves on without creating a draft.
4. A Gmail draft is created in the **same thread** as the original email, so replies are properly threaded.
5. The sheet increments `follow_ups` by 1 after each successful draft.

---

## How to use

1. **Choose your version.** Decide whether you want Version A (standard, built-in nodes) or Version B (Do...While, community node). If you choose Version B, install the community node first: Settings → Community Nodes → install `n8n-nodes-do-while`. Then delete all the nodes from the version you are not using.
2. **Set up your Google Sheet.** Create a sheet with these columns in order: `domain`, `niche`, `region`, `email`, `status`, `follow_ups`. Add your prospect domains, set `status = pending` and `follow_ups = 0` for each new lead.
3. **Connect all credentials.** Add credentials for: Google Sheets (OAuth2), Gmail (OAuth2), Firecrawl API, Groq API, Google Gemini API, and VerifiEmail API.
4. **Update the sheet ID.** Open any Google Sheets node and update the `documentId` to point to your spreadsheet.
5. **Customise the AI prompts.** Open the `✍️ Write Cold Email` agent node and update the system prompt with your name, company, offer, and tone. Do the same for `✍️ Write Follow-Up Email`.
6. **Test with one lead.** Add a single row with `status = pending` and run the workflow manually. Verify the scraping, email generation, verification, and draft creation all work before adding more leads.

---

## Requirements

- **Firecrawl** account for website crawling, scraping, and AI agent
- **Groq** account for fast URL filtering
- **Google Gemini** account for AI email generation (cold + follow-up)
- **VerifiEmail** account for email deliverability checking
- **Google Sheets** (OAuth2) for the lead database
- **Gmail** (OAuth2) for creating drafts and reading threads
- *(Version B only)* `n8n-nodes-do-while` community node installed

---

## Customising this workflow

- **Swap any LLM.** Groq is used for URL filtering (fast, cheap) and Gemini for email writing (creative). Both can be replaced with any model your n8n instance supports — simply swap the model sub-node attached to each chain or agent node.
- **Change the follow-up limit.** The filter node checks `follow_ups &lt; 5`. Update this number to control how many times the workflow will attempt to follow up before stopping.
- **Add a scheduler trigger.** Replace or supplement the Manual Trigger with a Schedule Trigger to run the workflow automatically — for example, every weekday morning to queue up the day's drafts.
- **Add a webhook for new leads.** Instead of manually adding rows, connect a form, CRM webhook, or Apollo/Hunter.io export to append rows directly to your Google Sheet, then let the workflow pick them up automatically on its next run.
- **Adjust the scraping depth.** The AI URL filter is set to keep a maximum of 10 pages. For large or complex sites where you need more context, increase this limit in the `🤖 AI: Filter Strategic URLs` node's prompt.
- **Understanding the Do...While node (Version B).** The `n8n-nodes-do-while` community node is a true while loop for n8n — it repeatedly executes connected nodes until a condition you define evaluates to `true`. In this workflow it replaces the classic `SplitInBatches + IF + Wait + Set` polling pattern. The node is wired so that `Get Crawl Status` runs first (do), then the condition `$json.data?.status !== 'scraping'` is checked (while). If still scraping, it waits 5 seconds and loops; if done, it exits to the Aggregate node. The `maxIterations: 30` cap ensures the loop never runs for more than 2.5 minutes regardless of scrape duration.

## 🔗 Nodes Used

Google Sheets, Gmail, Filter, AI Agent, Basic LLM Chain, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
