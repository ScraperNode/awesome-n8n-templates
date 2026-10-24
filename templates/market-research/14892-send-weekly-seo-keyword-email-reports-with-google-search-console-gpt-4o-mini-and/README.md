# 📊 Send weekly SEO keyword email reports with Google Search Console, GPT-4o-mini and Gmail

> ⚡ **114 views** · 📊 [Market Research & Insights](../)

## Description

## 

Every Monday morning, this workflow pulls your top 10 keywords from Google Search Console, passes the data to GPT-4o-mini, and emails a polished 150–200 word SEO digest to your client — automatically. You configure it once with four values, and it runs on its own every week. Built for SEO agencies and freelancers who want to deliver consistent client reporting without spending an hour writing it manually.

---

## What This Workflow Does

**Scheduled weekly trigger** — Fires automatically every Monday at 8AM so you never miss a reporting week, with zero manual effort.

**Live GSC data pull** — Fetches the top 10 keywords by clicks from Google Search Console for the past 7 days, directly from the API.

**Clean keyword formatting** — Converts raw API data into a readable list showing keyword, clicks, impressions, CTR, and average position for every query.

**AI-written email body** — GPT-4o-mini reads the keyword data and writes a professional, conversational 150–200 word digest — no templates, no copy-paste.

**One-config setup** — All client details (site URL, client name, recipient email, agency name) live in a single node. Change it once to deploy for any client.

**Automated Gmail delivery** — The final report is sent from your connected Gmail account with a dynamic subject line including the date range and client name.

---

## Setup Requirements

### Tools and accounts needed:
- n8n instance (self-hosted or cloud)
- Google account with Google Search Console access (OAuth2 credential)
- Gmail account for sending reports (OAuth2 credential — can be the same Google account)
- OpenAI account with GPT-4o-mini API access

**Estimated Setup Time: 10–15 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON. Paste the workflow JSON and import. Confirm all 9 nodes are connected in a straight line.

2. **Connect your Google Search Console credential** — In n8n, go to Credentials → New → Google OAuth2 API. Complete the OAuth flow with the Google account that has access to your GSC property. Once connected, open the **3. HTTP — Fetch GSC Top Keywords** node and select this credential under the OAuth2 field.

   &gt; ⚠️ Your GSC property URL must match exactly. If your property is `https://www.example.com/`, the URL in the config must be identical — including the trailing slash.

3. **Connect your Gmail credential** — Go to Credentials → New → Gmail OAuth2. Complete the OAuth flow with the Gmail account you want to send reports from. Open the **9. Gmail — Send Weekly Report** node and select this credential.

4. **Add your OpenAI API key** — Go to Credentials → New → OpenAI API. Paste your API key from platform.openai.com. Open the **7. OpenAI — GPT-4o-mini Model** node and select this credential.

5. **Edit your config values** — Open the **2. Set — Config Values** node. This is the only node you need to change. Replace all four values:

   | Field | What to enter |
   |---|---|
   | `siteUrl` | Your exact GSC property URL (e.g. `https://www.example.com/`) |
   | `clientName` | Client business name (appears in the email greeting) |
   | `recipientEmail` | The email address to receive the weekly report |
   | `agencyName` | Your agency name (appears in the email footer) |

6. **Activate the workflow** — Toggle the workflow to Active. It will now run automatically every Monday at 8AM.

---

## How It Works (Step by Step)

**Step 1 — Schedule Trigger (Every Monday 8AM)**
The workflow fires automatically using a cron schedule set to every Monday at 8AM. No manual action is needed once the workflow is active.

**Step 2 — Set Config Values**
Four variables are stored here: the site URL, client name, recipient email, and agency name. These are referenced by every subsequent step so you only update them in one place.

**Step 3 — HTTP Request (Google Search Console API)**
An authenticated POST request goes to the Google Search Console Search Analytics API. It asks for the top 10 keywords by clicks for the past 7 days, automatically calculating the start and end dates based on today's date.

**Step 4 — Set (Extract Fields)**
The raw API response is captured alongside the config values. The keyword data is stored as a JSON string, and the date range (week start and week end) is formatted for display in the email.

**Step 5 — Code (Format Data for GPT)**
A short JavaScript block parses the keyword rows and builds a clean, numbered text list. Each keyword line includes the query, clicks, impressions, CTR percentage, and average position. If no data is found, a fallback message tells you to check your GSC URL and credentials.

**Step 6 — AI Agent (Write SEO Report Email)**
GPT-4o-mini receives the keyword list and a detailed prompt. It writes the full email body — a warm greeting, highlights of the top 3 keywords by name with stats, one positive observation about the week, and one actionable SEO tip for the following week. The output is plain text only, with no markdown or symbols.

**Step 7 — OpenAI Model (GPT-4o-mini)**
This is the language model powering the AI Agent in Step 6. It is set to GPT-4o-mini with a 500-token limit and a temperature of 0.6 for consistent, professional writing.

**Step 8 — Set (Prepare Final Email)**
The AI-written email body, subject line, recipient address, and agency name are assembled into one item. The subject line is dynamically built using the date range and client name.

**Step 9 — Gmail (Send Weekly Report)**
Gmail sends the final email to the recipient address. The body is the AI-written digest, followed by a footer identifying the agency, data source, and automation stack.

---

## Key Features

✅ **Zero-maintenance scheduling** — Runs every Monday at 8AM without any manual trigger or login required.

✅ **Dynamic date ranges** — Start and end dates are calculated automatically each week. No hardcoded dates to update.

✅ **Single config node** — All four client-specific values live in one place. Duplicating this workflow for a new client takes under 2 minutes.

✅ **Fallback message on empty data** — If the GSC API returns no rows, the workflow still runs and sends an alert message instead of failing silently.

✅ **AI-written in plain text** — GPT-4o-mini is explicitly instructed to avoid markdown, asterisks, or symbols — producing clean copy-paste-ready email content.

✅ **Professional subject line** — The email subject auto-includes the exact date range and client name, making reports easy to find in any inbox.

✅ **Footer attribution** — Every email ends with an auto-generated footer crediting your agency and the data source, reinforcing your brand on every send.

---

## Customisation Options

**Increase the keyword count** — In the **3. HTTP — Fetch GSC Top Keywords** node, change `"rowLimit": 10` to any number up to 25,000 to include more keywords in the AI's analysis.

**Change the send schedule** — In the **1. Schedule — Every Monday 8AM** node, edit the cron expression `0 8 * * 1` to any schedule you need. For example, `0 8 * * 5` sends on Fridays, or `0 9 1 * *` sends on the 1st of every month.

**Add a dimension for pages or countries** — In the **3. HTTP — Fetch GSC Top Keywords** node, add `"page"` or `"country"` to the `"dimensions"` array alongside `"query"` to include page-level or geographic data in the report.

**Send a CC copy to yourself** — In the **9. Gmail — Send Weekly Report** node, expand the options and add your own email address to the CC field to keep a copy of every client send.

**Adjust the email tone** — In the **6. AI Agent — Write SEO Report Email** node, edit the writing instructions in the prompt to match your agency's voice — more formal, more casual, longer, or shorter.

**Deploy for multiple clients** — Duplicate the entire workflow in n8n and update the **2. Set — Config Values** node for each client. Each copy runs independently on the same schedule.

---

## Troubleshooting

**GSC API returns a 403 or permission error:**
- Confirm your Google OAuth2 credential has access to the correct Search Console property
- Check that the `siteUrl` value in **2. Set — Config Values** exactly matches the GSC property URL, including the protocol (`https://`) and trailing slash
- Re-authenticate the Google credential if it has expired

**No keyword data in the email (fallback message appears):**
- Verify the site had traffic in the past 7 days in your GSC dashboard
- Check that the `siteUrl` is the domain-level property and not a URL-prefix property with a different format
- Run the workflow manually and inspect the output of **3. HTTP — Fetch GSC Top Keywords** to see the raw API response

**Gmail node fails to send:**
- Confirm your Gmail OAuth2 credential is properly connected and not expired
- Check that `recipientEmail` in **2. Set — Config Values** is a valid email address
- Check your Gmail sending limits if you are running this for many clients from one account

**AI Agent produces an empty or broken email body:**
- Open the **7. OpenAI — GPT-4o-mini Model** node and confirm the OpenAI credential is valid and has available API credits
- Check the n8n execution log for the AI Agent node to see if an OpenAI error message was returned

**Workflow not triggering on schedule:**
- Confirm the workflow is toggled to **Active** — saved workflows do not run unless activated
- Check your n8n instance timezone settings and compare to the cron expression — 8AM runs based on your server timezone

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: info@incrementors.com
🌐 Website: https://www.incrementors.com/contact-us/

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
