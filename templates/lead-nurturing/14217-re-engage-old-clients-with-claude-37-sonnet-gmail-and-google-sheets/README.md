# 💬 Re-engage old clients with Claude 3.7 Sonnet, Gmail and Google Sheets

> ⚡ **88 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

### Description

Automatically re-engage old or inactive clients by sending AI-personalized follow-up emails using Claude 3.7 Sonnet, Gmail, and Google Sheets — with smart reply detection to avoid messaging clients who are already in active conversation.

---

### What this workflow does

This workflow runs every day on a schedule and processes your entire old client database automatically. For each client, it checks whether they've replied to any of your emails in the last 30 days. If they have, it pauses automation and flags that client for manual reply. If they haven't, it fetches their last 10 email conversations, pulls scenario-based AI prompts and follow-up message direction templates from your Google Sheet, feeds everything into Claude 3.7 Sonnet to draft a highly personalized re-engagement email, sends it via Gmail, and updates your tracking sheet — all without any manual intervention.

Perfect for agencies and freelancers who have past clients sitting idle in their database and want a fully automated, intelligent outreach system that feels human, not spammy.

---

### Key Features

**Smart 30-day reply detection:** Before sending any email, the workflow checks the client's most recent email timestamp. If they replied within the last 30 days, automation is skipped and the sheet is flagged as "Reply Manually" so your team knows to handle it personally.

**Scenario-based AI prompting:** Each client in your sheet is tagged with a Scenario. The workflow pulls the exact AI prompt and follow-up message direction that matches that scenario from your Google Sheet, so Claude always writes from the right context and angle.

**Full conversation context for Claude:** Instead of drafting blindly, Claude receives the last 10 email conversations with the client, their original goal when hiring your agency, the detailed reason their contract ended, their industry, industry vertical, and the specific services they used — resulting in emails that feel genuinely personalized.

**Structured email output:** Claude outputs a properly structured JSON with subject line, greeting, body content, and closing — ensuring the email is always cleanly formatted before sending.

**Live Google Sheets tracking:** After every email sent, the workflow increments the email count in your sheet and updates the workflow status, giving you a live dashboard of where each client stands in the re-engagement sequence.

**Rate limiting built-in:** A 1-minute wait between each client prevents Gmail API rate limit errors and ensures smooth processing even for large client lists.

**Loop-based batch processing:** Every client in your database is processed one by one in a controlled loop — no skipped records, no duplicates.

---

### How it works

**Step 1 — Daily trigger fires:** The workflow runs automatically every day using a Schedule Trigger. No manual action needed.

**Step 2 — Loads client database:** Reads all rows from the "Database" sheet in your Google Sheet where the "Manually Stop Workflow" column is not flagged, so already-stopped clients are excluded automatically.

**Step 3 — Loops through each client:** Passes each client record one by one into the processing loop using the Split In Batches node.

**Step 4 — Checks latest email from client:** Fetches the single most recent email from the client's address using Gmail's filter by sender.

**Step 5 — 30-day window check:** A JavaScript code node calculates how many days ago that email was sent, checks if it falls within the last 30 days, and formats the date cleanly (e.g., 21-Mar-2026).

**Step 6 — Routes based on reply status:** A Switch node branches the flow:
- If replied within 30 days → Updates sheet with "Reply Manually" status and the latest email content, then loops back to next client.
- If no recent reply → Continues to AI email generation path.

**Step 7 — Parallel data fetching:** Three nodes run in parallel — fetching the scenario-specific follow-up message template, the situation-based AI prompt, and the last 10 email conversations with the client from Gmail.

**Step 8 — Bundles email history:** All 10 fetched emails are aggregated into a single text bundle to be passed into Claude as conversation context.

**Step 9 — Merges all inputs:** A Merge node combines the follow-up template, situation prompt, and email conversation bundle into one unified data object.

**Step 10 — AI drafts the email:** Claude 3.7 Sonnet receives the full context — prompt, follow-up direction, conversation history, client's goal, reason for contract ending, industry details, and services used — and drafts a re-engagement email tailored specifically to that client.

**Step 11 — Structured output parsing:** The output is parsed into a clean JSON structure with subject, greeting, content, and closing fields using a Structured Output Parser.

**Step 12 — Sends email via Gmail:** The formatted email is sent directly from your Gmail account to the client.

**Step 13 — Updates sheet and loops:** The "Number of Emails Sent" counter is incremented in your sheet, the workflow waits 1 minute for rate limiting, then loops back to process the next client.

---

### Setup Requirements

**Tools you'll need:**

- Active n8n instance (self-hosted or n8n Cloud)
- Google Sheets with OAuth access for client database management
- Gmail account with OAuth credentials
- Anthropic API key (for Claude 3.7 Sonnet)

**Estimated setup time:** 20–30 minutes

---

### Configuration Steps

**Add credentials in n8n:**
- Google Sheets OAuth API
- Gmail OAuth2 API
- Anthropic API (for Claude 3.7 Sonnet)

**Set up your Google Sheet with these tabs:**

Tab 1 — **Database** (main client list)
- Client Name
- Email Address
- Scenario
- Number of Emails Sent
- Followup Workflow (Running / Reply Manually)
- Latest Email from Client
- Date of Latest Email from Client
- The goal which client wanted to achieve by hiring an agency
- Detailed Reason Why Contract Got Ended
- Client is from Industry of
- Client's Industry Vertical
- Specific services they used
- Manually Stop Workflow (STOP)

Tab 2 — **Follow-up Messages** (message templates)
- Scenario
- Number of Emails Sent
- Followup Message Direction

Tab 3 — **Situation** (AI prompts per scenario)
- Scenario
- Prompt

**Update the Google Sheet ID:** Replace all instances of `YOUR_GOOGLE_SHEET_ID` in the workflow nodes with your actual Google Sheet ID.

**Update the send email address:** In the "Send Re-engagement Email" node, replace `YOUR_EMAIL@yourdomain.com` with the Gmail address you want to send from.

**Fill your client database:** Add all old/inactive clients with their details, scenario tags, and goals into the Database tab.

**Create your scenarios and templates:** Fill the Follow-up Messages and Situation tabs with the re-engagement angles and AI prompt instructions relevant to your business.

**Activate the workflow:** Turn it on and let it run daily automatically.

---

### Use Cases

**Marketing & digital agencies:** Re-engage a full database of past clients who stopped using your services — automatically, every single day, with zero manual effort.

**Freelancers:** Keep past clients warm by sending intelligent, personalized check-in emails based on what they originally hired you for and why they left.

**SaaS companies:** Run structured win-back campaigns for churned users by mapping scenarios to different churn reasons and tailoring AI messages accordingly.

**Consultants:** Maintain long-term relationships with former clients by sending contextually relevant follow-ups that reference their original goals and show how you've improved.

**Sales teams:** Use the 30-day reply detection to automatically filter out recently responsive leads and focus AI outreach only on truly cold contacts in your pipeline.

---

### Customization Options

**Change the AI model:** Swap Claude 3.7 Sonnet for any other Anthropic model or replace with OpenAI GPT-4 in the LLM node — the agent and parser work with any LangChain-compatible model.

**Adjust the reply detection window:** Change the `30` in the Date Checker code node to any number of days that fits your follow-up cadence (e.g., 14 days for more aggressive outreach).

**Add more scenario types:** Simply add new rows to your Follow-up Messages and Situation sheets — the workflow dynamically fetches matching templates so no node changes are needed.

**Modify email structure:** Edit the Structured Output Parser schema to add or remove fields like a PS section, CTA button text, or custom signature block.

**Add notifications:** Connect a Slack, Discord, or webhook node after the Send Email node to notify your team every time a re-engagement email goes out.

**Expand tracking:** Add more columns to your Google Sheet update nodes (e.g., last sent date, email subject used) to build a richer outreach history.

---

### Troubleshooting

**Gmail not fetching emails:** Confirm your Gmail OAuth credentials are correctly connected and the sender filter is using the exact email address format from your sheet. Make sure Gmail API access is enabled in your Google Cloud Console.

**Claude not generating emails:** Verify your Anthropic API key is active and has sufficient credits. Check that the Merge node is receiving all 3 inputs before passing data to the AI agent.

**Sheet not updating:** Ensure the Google Sheets OAuth token has edit permissions on your spreadsheet. Confirm the "Email Address" column is set as the matching key in all update nodes.

**Emails sending to wrong address:** Double-check that the `sendTo` field in the Send Email node is pointing to `YOUR_EMAIL@yourdomain.com` or the correct dynamic field reference.

**Loop not processing all clients:** If some clients are being skipped, check the filter in the Old Client Database node — make sure the "Manually Stop Workflow (STOP)" column filter is only excluding rows where the value is explicitly set.

**Rate limit errors on Gmail:** Increase the wait time in the Rate Limit Wait node from 1 minute to 2–3 minutes if you have a large client list or are hitting Gmail's sending limits.

---

### Resources

- [n8n Documentation](https://docs.n8n.io)
- [Anthropic Claude API](https://docs.anthropic.com)
- [Gmail API Reference](https://developers.google.com/gmail/api)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [n8n LangChain Agent Node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/)

---

### Important Notes

This workflow is designed specifically for re-engagement outreach to past or inactive clients. It does not handle inbound replies — once a client responds, the workflow flags them for manual handling and stops automation for that contact. Make sure your Google Sheet is properly structured with all required columns before activating, as missing fields will cause the AI prompt to be incomplete and affect email quality. Always test with a small batch of 2–3 clients first before activating at full scale.

---

### Support

Need help setting this up or want a custom version built for your specific use case?

📧 Email: [info@isawow.com](info@isawow.com)
🌐 Website: [https://isawow.com/](https://isawow.com/)

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
