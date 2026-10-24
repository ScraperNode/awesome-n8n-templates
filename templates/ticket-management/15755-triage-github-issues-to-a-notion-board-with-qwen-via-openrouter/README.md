# 🎫 Triage GitHub issues to a Notion board with Qwen via OpenRouter

> ⚡ **27 views** · 🎫 [Ticket Management & Triage](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## WHAT IT DOES

When a new issue is opened on a GitHub repository, this workflow uses an AI model to classify it by type (bug, feature, question, documentation, other), assign a priority level (high, medium, low), and generate a one-sentence summary. Results are written to a Notion database and posted as a triage comment on the GitHub issue. No external triage service. No SaaS subscription. Runs on your own n8n instance.

## HOW IT WORKS


**1. GitHub Webhook Trigger**
Listens for the "issues" event with action "opened" on the configured repository. Fires only when a new issue is created. Does not trigger on comments, edits, or closes.

**2. Extract Issue Data**
Parses the webhook payload. GitHub Trigger wraps the full payload as a JSON string in the "body" field, so this node extracts the actual issue object, then pulls out the fields the workflow needs: issue number, title, body text (truncated to 2000 characters to stay within LLM token limits), URL, author, labels, and repository full name. Falls back to parsing the repository_url field if the repository object is missing from the payload.

**3. Duplicate Check (Notion)**
Queries the Notion database for an existing entry with the same Issue URL. If a match is found, the workflow stops — this issue was already triaged. If the Notion API fails (timeout, rate limit, invalid token), the error branch fires and the workflow continues anyway. A failed duplicate check should not block triage.

**4. AI Triage (Qwen 3 via OpenRouter)**
Sends the issue title and body to the model with a structured prompt that asks for: category, priority, summary, and suggested labels. The prompt includes clear definitions for each category and priority level so the model classifies consistently. If the LLM call fails, a fallback node assigns default values (category: other, priority: medium) so the issue is still tracked in Notion.

**5. Create Notion Entry**
Writes a new row to the Notion database with all triage fields populated: title, issue URL, author, category, priority, summary, suggested labels, status (Open), source (ai or fallback), and creation date.

**6. Post GitHub Comment**
Adds a formatted comment on the GitHub issue showing the triage result: category, priority, summary, and suggested labels. If the triage used fallback values because the LLM was unavailable, a warning is included in the comment so the team knows to review it manually.

## WHY THIS APPROACH


- Most issue triage tools push results back into GitHub as labels. This workflow pushes to Notion instead. The reason: teams already use Notion as their project management hub. Having issues auto-classified and waiting in a Notion database means you can filter, sort, and assign without switching tools. The Notion database becomes the single view where all incoming issues are triaged and prioritized before anyone touches them.
 
- The AI model does classification, not decision-making. It does not close issues or assign people - it categorizes and summarizes. A human reviews the Notion board and decides what to act on. This keeps the human in the loop while removing the 30-60 seconds of manual sorting per issue that adds up fast when you are getting 10+ issues a week.

- The duplicate check prevents wasted API calls. If an issue was already triaged (maybe someone triggered the webhook twice, or re-opened a closed issue), the workflow skips it instead of creating a duplicate Notion entry. If the duplicate check itself fails (Notion API timeout), the workflow continues to triage anyway — better to over-triage than to miss an issue because of a transient error.

- The fallback mechanism means the workflow never silently drops an issue. If the LLM is down, rate-limited, or returns garbage, the issue still gets a Notion entry with default values and a "fallback" source indicator. The GitHub comment warns the team that AI was unavailable.

- Self-hosted means your issue data never leaves your infrastructure. The only external call is to the LLM provider (OpenRouter by default), and you can replace that with a self-hosted model to keep everything internal.

### SETUP (10-15 min)


- Create a GitHub Fine-grained Personal Access Token: Settings → Developer settings → Fine-grained tokens. Permissions needed: Issues (read/write) and Webhooks (read/write). Scope it to the repository you want to watch.
- In n8n, add the GitHub credential using the token.
- **Create a Notion database with these properties:**

&gt;*1. Title (title)*
*2. Issue URL (url)*
*3. Author (rich_text)*
*4. Category (select: bug, feature, question, documentation, other)*
*5. Priority (select: high, medium, low)*
*6. Summary (rich_text)*
*7. Suggested Labels (rich_text)*
*8. Status (select: Open, Closed)*
*9. Source (select: ai, fallback)*
*10. Created (date)*

- Create a Notion internal integration at notion.so/my-integrations. Copy the token.
- In n8n, add the Notion credential using the integration token.
- Share the Notion database with the integration (database → ... → Connections → select integration).
- In the ***"When Issue Opened"*** node: set Owner and Repository to match your GitHub repo.
- In the ***"Verify Notion Duplicate"*** and "Add to Notion Board" nodes: set the Database to your Notion database.
- Add your OpenRouter API key to the ***"OpenAI Qwen-3 Model"*** node credential.
- Activate the workflow. Open a test issue on your GitHub repo.

## CUSTOMIZATION


**Swap the LLM:** Change the model in the "OpenAI Qwen-3 Model" node to any OpenRouter-supported model (GPT-4o, Claude, Gemini, etc.). Or point to a self-hosted model by changing the base URL in the credential.

**Adjust triage rules:** Edit the prompt in "Initiate AI Triage" to add custom categories specific to your project (e.g., ***"performance"***, ***"accessibility"***, ***"security"***). The model will use whatever definitions you provide in the prompt.

**Multi-repo:** Duplicate the workflow for each repo you want to triage, or modify the trigger to use a GitHub App that watches multiple repositories.

**Add team notifications:** After "Post GitHub Comment", add a Slack or Discord node to send a summary of high-priority issues to your team chat.

**Auto-assign:** Add logic after "Format AI Triage Results" to assign GitHub issues based on category (e.g., bugs to backend team, docs to content team).

**Auto-label:** Use the suggested labels from the AI to automatically apply labels on the GitHub issue. Requires creating the labels in your repo first.

## WHAT'S NEXT


This workflow is designed as a foundation. Here is where it can grow:


- Auto-label on GitHub — Use the suggested labels from AI to automatically apply labels on the issue. Requires label creation in the repo first, but once set up, removes another manual step.

- Batch triage — Add a ***"Triage All Open Issues"*** mode that processes existing untriaged issues on a schedule, not just new ones via webhook. Useful for backfills or when adopting the workflow on an active repo.

- Priority-based routing — High priority issues get a Slack or Discord notification immediately. Medium and low go to Notion only. Different response SLAs per priority level.

- Learning from feedback — Track when a human changes the AI-assigned category in Notion. Use those corrections as few-shot examples in the prompt to improve accuracy over time.

- Notion dashboard — Build a Notion view with filters by category and priority. Add a ***"Triage backlog"*** view sorted by priority so the team always knows what to work on next.

- Multi-source triage — Extend the trigger to also listen for GitLab issues, Linear tickets, or customer support emails. All triage results converge into the same Notion board.


The current version is intentionally simple. Simple means it runs cheap, breaks rarely, and is easy to debug. Complexity can be added when the use case demands it.

## REQUIREMENTS


- n8n instance (self-hosted or cloud)
- GitHub Fine-grained Personal Access Token (Issues read/write, Webhooks read/write)
- Notion account with internal integration
- OpenRouter API key (or any OpenAI-compatible endpoint)

## 🔗 Nodes Used

GitHub, Github Trigger, Notion, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
