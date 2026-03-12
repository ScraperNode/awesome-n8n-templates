# 📱 Track Facebook Page post Engagement (Comments, Like, Shares) in Google Sheets

> ⚡ **129 views** · 📱 [Social Media & Email Marketing](../)

## Description

This workflow automatically **retrieves engagement data (likes, comments, and shares) from a Facebook Page** and stores the results in a Google Sheets document for reporting and analysis.

This workflow is particularly useful for:

* Social Media Managers
* Marketing Agencies
* Performance Analysts
* Client reporting automation

It provides a lightweight but powerful engagement monitoring system without requiring expensive analytics tools.

---

### Key Advantages

#### 1. ✅ Automated Engagement Tracking

It eliminates manual data collection from Facebook Insights, saving time and reducing human error.

#### 2. ✅ Centralized Reporting

All engagement metrics (likes, comments, shares) are consolidated into a single Google Sheet, making it easy to:

* Build dashboards
* Share reports with clients or teams
* Track performance over time

#### 3. ✅ Scalable & Configurable

* The number of posts analyzed can be changed easily.
* The workflow can be scheduled instead of manually triggered.
* It can be extended to include additional metrics (e.g., reach, impressions).

#### 4. ✅ Structured Data Management

Using:

* POST ID as a unique key
* Append or Update mode

ensures data consistency and prevents duplication.

#### 5. ✅ API Rate-Limit Protection

The use of:

* Split in Batches
* Wait nodes

helps prevent hitting Facebook API rate limits.

#### 6. ✅ Modular & Maintainable Design

Each engagement type (comments, likes, shares) is handled in a separate branch, making:

* Debugging easier
* Future modifications simpler
* Extensions more structured


---

### How it works

The workflow follows this process:

1. **Trigger & Configuration**: The workflow is manually triggered and begins by setting a maximum number of posts to analyze (default: 3)

2. **Data Collection**:
   - Fetches basic page information using Facebook Graph API
   - Retrieves the page feed with the specified post limit
   - Splits the feed data into individual post items for processing

3. **Parallel Processing**: The workflow creates three parallel loops to handle different engagement metrics:
   - **Loop 1**: Processes comments for each post
   - **Loop 2**: Processes reactions/likes for each post  
   - **Loop 3**: Processes shares for each post

4. **API Calls**: Within each loop, the workflow makes specific Facebook Graph API calls to fetch:
   - Comments with summary statistics
   - Reactions with type breakdown
   - Share counts

5. **Data Storage**: Each metric is written to Google Sheets using separate Google Sheets nodes, updating rows based on POST ID matching to maintain data consistency

6. **Rate Limiting**: Wait nodes are placed after each Google Sheets operation to prevent hitting API rate limits

---

### Set up steps

1. **Facebook Graph API Setup**:
   - Obtain a temporary access token from [Facebook Graph API Explorer](https://developers.facebook.com/tools/explorer/) and select the Facebook App and your Facebook Page
   - Configure the "Facebook Graph" credential in n8n with your access token
   - Ensure your Facebook page ID is accessible via the "me" node endpoint

2. **Google Sheets Configuration**:
   - [Clone this Google Sheet](https://docs.google.com/spreadsheets/d/1tZgsygFZ4xXNJ-CYWzib9zlaw6ZH2AHS8JoAjlvY65A/edit?usp=sharing)
   - Set up the sheet with columns: POST ID, POST, LIKES, COMMENTS, SHARES
   - Configure Google Sheets OAuth2 credentials in n8n

3. **Workflow Customization**:
   - Adjust the `max_post` value in the "Set Max Posts" node to control how many posts to analyze
   - Modify the Wait node timings if needed (currently using default settings)
   - Update the Google Sheets document ID if using a different spreadsheet

4. **Testing**:
   - Execute the workflow manually to verify connections
   - Check Google Sheets for properly populated engagement data
   - Monitor n8n execution logs for any API errors or rate limiting issues

5. **Scheduling** (Optional):
   - Replace the manual trigger with a Schedule Trigger node to run automatically
   - Set desired frequency (daily, weekly, etc.) for regular engagement tracking
   
---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, Facebook Graph API

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
