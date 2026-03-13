# 📊 Monitor competitor Meta Ads creatives and send alerts with Google Sheets & Telegram

> ⚡ **517 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

This workflow continuously monitors the Meta Ads Library for new creatives from a specific competitor pages, logs them into Google Sheets, and sends a concise Telegram notification with the number of newly discovered ads. It is built as a safe, idempotent loop that can run on a schedule without creating duplicates in your sheet.

#### **Use Case**
Manually checking the Meta Ads Library for competitor creatives is time‑consuming, and it’s easy to lose track of which ads you’ve already seen. This workflow is ideal if you want to:
- **Track competitor creatives over time** in a structured Google Sheet.
- **Avoid duplicates** by matching ads via their unique `id` field.
- **Get lightweight notifications** in Telegram that tell you *how many* new ads appeared, without spamming you with full ad lists.
- **Run the process on autopilot** (daily, weekly, etc.) with a single schedule.

#### **How it Works**

The workflow is organized into three logical blocks:

**1. Fetch Ads & Handle Pagination**
- **Configuration:** The `Add parameters` Set node stores all key request variables:
  - `ad_active_status` (e.g. `active`),
  - `search_page_ids` (competitor page IDs),
  - `ad_reached_countries`,
  - `access_token`.
- **Routing:** `Page or keywords` routes execution into one of two HTTP Request nodes:
  - `Facebook Ads API by page` — the main branch that queries ads by page ID.
  - `Facebook Ads API by keywords` — an optional branch for keyword‑based searches.
- **Normalization:** `Facebook Ads API by ...` returns the raw `ads_archive` response. `Check the pagination` then:
  - extracts `data` (array of ad objects) into a dedicated field,
  - reads `paging.next` into `next_url` for pagination.
- **Pagination Loop:**  
  - `If` checks whether `next_url` is not empty.  
  - `Set Next URL` assigns `next_url` to a generic `url` field.  
  - `Facebook Ads API pagination` requests the next page and feeds it back into `Check the pagination`.  
  This loop continues until there is no `next_url`, ensuring all pages of the Ads Library response are processed.

**2. De‑duplicate Ads & Log to Google Sheets**
- **Load Existing IDs:**  
  - `Read existing IDs` pulls the existing `id` column from your Google Sheet (configured to read a specific column/range).  
  - `Collect ID list` converts these into a unique, normalized string array `existingIds`, which represents all ads you have already logged.
- **Attach State:**  
  - `Attach existing ids` (Merge node) combines, for each execution, the freshly fetched Meta response (`data`) with the historical `existingIds` array from Sheets.
- **Filter New Creatives:**  
  - `Filter new creatives` Code node compares each ad’s `id` (string) against the `existingIds` set and builds a new `data` array containing **only ads that are not yet present** in the sheet.  
  - It also protects against duplicates inside the same batch by tracking seen IDs in a local `Set`.
- **Write New Ads:**  
  - `Split Out` expands the filtered `data` array into individual items (one item per new ad).  
  - `Add to sheet` then performs an `appendOrUpdate` into Google Sheets, mapping core fields such as `id`, `ad_creation_time`, `page_name`, `ad_creative_bodies`, `ad_snapshot_url`, `languages`, `publisher_platforms`, and link fields.  
  - The column mapping uses `id` as the matching column so that existing rows can be updated if needed.

**3. Count New Ads & Notify in Telegram**
- **Count:**  
  - In parallel with the write step, `Split Out` also feeds into `Count new ads`.  
  - This Code node returns a single summary item with `newCount = items.length`, i.e. the total number of **new** creatives processed in this run.
- **Guard:**  
  - `Any new ads?` checks whether `newCount` is greater than `0`. If not, the workflow ends silently and no message is sent, avoiding noise.
- **Notify:**  
  - When there are new creatives, `Send a text message` sends a Telegram message to the configured `chatId`.  
  - The message includes `{{$json.newCount}}` and a fixed link to the Google Sheet, giving you a quick heads‑up without listing individual ads.

---

### **Setup Instructions**

To use this template, configure the following components.

**1. Credentials**
- **Meta Ads / HTTP Header Auth:**  
  - Configure the `Meta Ads` HTTP Header credentials used by:
    - `Facebook Ads API by page`,
    - `Facebook Ads API by keywords`,
    - `Facebook Ads API pagination`.
- **Google Sheets:**  
  - Connect your Google account in:
    - `Read existing IDs`,
    - `Add to sheet`.
- **Telegram:**  
  - Connect your `Telegram account` credentials in `Send a text message`.

**2. The `Add parameters` Node**
Open the `Add parameters` Set node and customize:
- `ad_active_status`: Which ads to monitor (`active`, `all`, etc.).
- `search_page_ids`: The numeric ID of the competitor Facebook Page you want to track.
- `ad_reached_countries`: Comma‑separated list of country codes (`US`, `US, CA`, etc.).
- `access_token`: A valid long‑lived access token with permission to query the Ads Library.

**3. Google Sheets Configuration**
- **`Read existing IDs`**  
  - Set `documentId` and `sheetName` to your tracking spreadsheet and sheet (e.g. an `ads` tab).  
  - Configure the range to read only the column holding the ad `id` values.
- **`Add to sheet`**  
  - Point `documentId` and `sheetName` to the same spreadsheet/sheet.  
  - Make sure your sheet has the columns expected by the node (e.g. `id`, `creation time`, `page`, `title`, `description`, `delivery_start_time`, `snapshot`, `languages`, `platforms`, `link`).  
  - Confirm that `id` is included in `matchingColumns` so de‑duplication works correctly.

**4. Telegram Configuration**
- In `Send a text message`, set:
  - `chatId`: Your target Telegram chat or channel ID.
  - `text`: Customize the message template as needed, but keep `{{$json.newCount}}` to show the number of new creatives.

**5. Schedule**
- Open `Schedule Trigger` and configure when you want the workflow to run (e.g. every morning).  
- Save and activate the workflow.

---

### **Further Ideas & Customization**

This workflow is a solid foundation for systematic competitor monitoring. You can extend it to:
- **Track multiple competitors** by turning `search_page_ids` into a list and iterating over it with a loop or separate executions.
- **Enrich the log with performance data** by creating a second workflow that reads the sheet, pulls spend/impressions/CTR for each logged `ad_id` from Meta, and merges the metrics back.
- **Add more notification channels** such as Slack or email, or send a weekly summary that aggregates new ads by page, format, or country.
- **Tag or categorize creatives** (e.g. “video vs image”, “country”, “language”) directly in the sheet to make later analysis easier.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
