# 📊 Track TikTok Ads Library with Apify, Google Sheets & Slack/Telegram Notifications

> ⚡ **294 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

This workflow continuously monitors the TikTok Ads Library for new creatives from specific advertisers or keyword searches, scrapes them via Apify, logs them into Google Sheets, and sends concise notifications to Telegram or Slack with the number of newly discovered ads. It is built as a safe, idempotent loop that can run on a schedule without creating duplicates in your sheet.

#### **Use Case**
Manually checking the TikTok Ads Library for competitor creatives is time-consuming, and it's easy to lose track of which ads you've already seen. This workflow is ideal if you want to:
- **Track competitor creatives over time** in a structured Google Sheet.
- **Avoid duplicates** by matching ads via their unique `adId` field.
- **Get lightweight notifications** in Telegram or Slack that tell you *how many* new ads appeared, without spamming you with full ad lists.
- **Run the process on autopilot** (daily, weekly, etc.) with a single schedule.
- **Monitor by advertiser ID or keywords** with flexible search parameters.

#### **How it Works**

The workflow is organized into four logical blocks:

**1. Configuration & Date Conversion**
- **Configuration:** The `Set Parameters` Set node stores all key request variables:
  - `Ad target country` (e.g., `all` or specific ISO country codes),
  - `Ad published date From` (automatically set to yesterday by default),
  - `Ad published To` (automatically set to today by default),
  - `Advertiser name or keyword` (for keyword-based searches),
  - `adv_biz_ids` (advertiser business IDs for specific advertiser tracking),
  - `Ad limit` (optional limit on the number of results to scrape).
- **Date Conversion:** `Convert Dates to Unix` transforms the human-readable date format (DD/MM/YYYY) into Unix timestamps in milliseconds, which are required by the TikTok Ads Library API.

**2. Request Building & Data Fetching**
- **Body Construction:** `Build Apify Body` creates the JSON request body for the Apify actor:
  - Builds the TikTok Ads Library URL with all search parameters (region, date range, advertiser name/keyword, advertiser IDs).
  - Conditionally adds `resultsLimit` to the request body only if the `Ad limit` field is not empty, allowing you to scrape all results or limit them as needed.
- **Data Fetching:** `Get TT Ads through Apify` executes the Apify actor (Tiktok Ads Scraper) and retrieves all matching ads from the TikTok Ads Library.

**3. Data Preparation & De-duplication**
- **Data Extraction:** `Prepare Data for Sheets` safely extracts nested data from the API response:
  - Extracts the first video URL from the `videos` array (if available).
  - Extracts the cover image URL from the first video object.
  - Extracts the TikTok username from the `tiktokUser` object (if available).
  - Handles cases where arrays are empty or objects are missing without throwing errors.
- **Load Existing IDs:**  
  - `Read existing IDs` pulls the existing `adId` column from your Google Sheet (configured to read a specific column/range, e.g., column K).
  - `Collect ID list` converts these into a unique, normalized string array `existingIds`, which represents all ads you have already logged.
- **Attach State:**  
  - `Attach existing ids` (Merge node) combines, for each execution, the freshly fetched TikTok response with the historical `existingIds` array from Sheets.
- **Filter New Creatives:**  
  - `Filter new creatives` Code node compares each ad's `adId` (string) against the `existingIds` set and builds a new array containing **only ads that are not yet present** in the sheet.  
  - It also protects against duplicates inside the same batch by tracking seen IDs in a local `Set`.

**4. Data Logging & Notification**
- **Write New Ads:**  
  - `Append or update row in sheet` performs an `appendOrUpdate` into Google Sheets, mapping core fields such as `adId`, `adName`, `advertiserName`, `advertiserId`, `paidBy`, `impressions`, `regionStats`, `targeting`, `tiktokUser`, `startUrl`, `videos`, and `coverImageURL` (using the `=IMAGE()` formula to display images directly in the sheet).  
  - The column mapping uses `adId` as the matching column so that existing rows can be updated if needed.
- **Count:**  
  - In parallel with the write step, `Filter new creatives` also feeds into `Count new ads`.  
  - This Code node returns a single summary item with `newCount = items.length`, i.e., the total number of **new** creatives processed in this run.
- **Guard:**  
  - `Any new ads?` checks whether `newCount` is greater than `0`. If not, the workflow ends silently and no message is sent, avoiding noise.
- **Notify:**  
  - When there are new creatives, both `Send a text message` (Telegram) and `Send a message` (Slack) send notifications to the configured channels.  
  - The message includes `{{$json.newCount}}` and a fixed link to the Google Sheet, giving you a quick heads-up without listing individual ads.

---

### **Setup Instructions**

To use this template, configure the following components.

**1. Credentials**
- **Apify:**  
  - Configure the `Apify account` credentials used by `Get TT Ads through Apify`.
  - You'll need an Apify account with access to the [Tiktok Ads Scraper](https://console.apify.com/actors/AovGexsTSmlalAFzp/input) actor.
- **Google Sheets:**  
  - Connect your Google account in:
    - `Read existing IDs`,
    - `Append or update row in sheet`.
- **Telegram (optional):**  
  - Connect your `Telegram account` credentials in `Send a text message`.
- **Slack (optional):**  
  - Configure your Slack credentials in `Send a message`.

**2. The `Set Parameters` Node**
Open the `Set Parameters` Set node and customize:
- `Ad target country`: Which countries to monitor (`all` for all countries, or specific ISO 3166 country codes like `US`, `GB`, etc.).
- `Ad published date From`: Start date for the search range (defaults to yesterday using `{{ $now.minus({ days: 1 }).toFormat('dd/MM/yyyy') }}`).
- `Ad published To`: End date for the search range (defaults to today using `{{ $now.toFormat('dd/MM/yyyy') }}`).
- `Advertiser name or keyword`: Search by advertiser name or keywords (URL-encoded format, e.g., `%22Applicave%20LLC%22`).
- `adv_biz_ids`: Specific advertiser business IDs to track (comma-separated if multiple).
- `Ad limit`: Optional limit on the number of results (leave empty to scrape all available results).

**3. Google Sheets Configuration**
- **`Read existing IDs`**  
  - Set `documentId` and `sheetName` to your tracking spreadsheet and sheet (e.g., `Sheet1`).  
  - Configure the range to read only the column holding the ad `adId` values (e.g., column K: `K:K`).
- **`Append or update row in sheet`**  
  - Point `documentId` and `sheetName` to the same spreadsheet/sheet.  
  - Make sure your sheet has the columns expected by the node (e.g., `adId`, `coverImageURL`, `adName`, `Impressions`, `regionStats`, `targeting`, `tiktokUser`, `advertiserID`, `paidBy`, `advertiserName`, `startURL`, `videos`).  
  - Confirm that `adId` is included in `matchingColumns` so de-duplication works correctly.

**4. Notification Configuration**
- **Telegram:** In `Send a text message`, set:
  - `chatId`: Your target Telegram chat or channel ID.
  - `text`: Customize the message template as needed, but keep `{{$json.newCount}}` to show the number of new creatives.
- **Slack:** In `Send a message`, set:
  - `channelId`: Your target Slack channel ID.
  - `text`: Customize the message template as needed, but keep `{{$json.newCount}}` to show the number of new creatives.

**5. Schedule**
- Open `Schedule Trigger` and configure when you want the workflow to run (e.g., every morning).  
- Save and activate the workflow.

---

### **Further Ideas & Customization**

This workflow is a solid foundation for systematic TikTok competitor monitoring. You can extend it to:
- **Track multiple advertisers** by turning `adv_biz_ids` into a list and iterating over it with a loop or separate executions.
- **Enrich the log with performance data** by creating a second workflow that reads the sheet, pulls engagement metrics (likes, shares, comments) for each logged `adId` from TikTok's API (if available), and merges the metrics back.
- **Add more notification channels** such as email, or send a weekly summary that aggregates new ads by advertiser, format, or country.
- **Tag or categorize creatives** (e.g., "video vs image", "country", "language", "advertiser type") directly in the sheet to make later analysis easier.
- **Combine with Meta Ads monitoring** by running both workflows in parallel and creating a unified competitor intelligence dashboard.
- **Add image analysis** by integrating Google Vision API to automatically detect objects, text, and themes in the cover images, similar to the Meta Ads creative analysis workflow.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
