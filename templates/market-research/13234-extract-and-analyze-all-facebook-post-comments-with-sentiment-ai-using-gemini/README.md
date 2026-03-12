# 📊 Extract and analyze 🔬 ALL Facebook post comments with sentiment AI using Gemini

> ⚡ **163 views** · 📊 [Market Research & Insights](../)

## Description

This workflow automates the process of collecting, analyzing, and storing **Facebook post comments** with AI-powered **sentiment analysis** about YOUR Facebook Page.

#### Typical Use Cases:

* Social media sentiment monitoring
* Brand reputation analysis
* Campaign performance evaluation
* Community management and moderation insights
* Reporting and analytics for marketing teams

---

### Key Advantages

#### ✅ 1. Full Automation

Eliminates manual work by automatically collecting and analyzing Facebook comments end-to-end.

#### ✅ 2. AI-Powered Sentiment Analysis

Uses Google Gemini to accurately classify user sentiment, enabling deeper insights into audience perception and engagement.

#### ✅  3. Structured Data Storage

Saves results directly into Google Sheets, making the data easy to analyze, share, and visualize with dashboards or reports.

#### ✅ 4. Duplicate-Safe Updates

The “append or update” logic ensures comments are not duplicated and can be refreshed if sentiment analysis changes.

#### ✅ 5. Scalable and Robust

Pagination handling, batch processing, and wait nodes allow the workflow to scale to large volumes of comments without hitting API limits.

#### ✅ 6. Modular Architecture

The use of sub-workflows makes the solution reusable and easy to integrate into larger automation pipelines (e.g. monitoring multiple posts or pages).

#### ✅ 7. Flexible Triggering

Can be run manually for testing or automatically as part of a broader workflow ecosystem.



---

### How it works

This workflow automates the process of fetching Facebook post comments, performing sentiment analysis on each comment, and storing the results in a Google Sheet. It operates in two modes:

1. **Manual execution mode**:
   - Starts with a Manual Trigger, where the user enters a Facebook Post ID.
   - The workflow fetches the post details, then retrieves all comments (including pagination).
   - It calls a separate "Facebook" workflow (via the `Call 'Facebook'` node) to process each comment batch through sentiment analysis and save results to Google Sheets.

2. **Triggered execution mode**:
   - Activated via the "When Executed by Another Workflow" trigger, receiving comment data directly.
   - It splits and batches the incoming comments, processes each through the sentiment analysis model (Google Gemini), and appends/updates records in Google Sheets.

---

### Set up steps

1. **Configure Facebook Graph API credentials**:
   - Add your Facebook Graph API credentials to both "Get Fb Post" and "Get Fb comments" nodes.

2. **Set up Google Gemini API credentials**:
   - Configure the "Google Gemini Chat Model" node with valid Google PaLM/Gemini API credentials.

3. **Prepare Google Sheet**:
   - Ensure the Google Sheet exists and is accessible via the Google Sheets OAuth2 credentials.
   - The sheet should have (or will automatically create) columns: `POST ID`, `COMMENT ID`, `COMMENT`, `SENTIMENT`.

4. **Configure the sub-workflow call**:
   - Ensure the "Call 'Facebook'" node points to a valid, existing workflow that can process comment data.

5. **Optional: Adjust batch and wait settings**:
   - Modify the "Loop Over Items" node if different batch sizes are needed.
   - Adjust the "Wait" node delay if required to avoid rate limits.

6. **Activate the workflow**:
   - Toggle the workflow to active if scheduled or webhook execution is desired.
   - Test using the Manual Trigger with a sample Facebook Post ID.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, Execute Sub-workflow, Facebook Graph API, Execute Workflow Trigger, Google Gemini Chat Model, Sentiment Analysis

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
