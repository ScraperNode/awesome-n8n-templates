# 📊 Analyze Meta ads creatives with Google Vision & Video Intelligence APIs

> ⚡ **1,807 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.

## Description

This workflow transforms your Meta Ads creatives into a rich dataset of actionable insights. It's designed for data-driven marketers, performance agencies, and analysts who want to move beyond basic metrics and understand the specific visual and textual elements that drive ad performance. By automatically analyzing every video and image with Google's powerful AI (Video Intelligence and Vision APIs), it systematically deconstructs your creatives into labeled data, ready for correlation with campaign results.

#### Use Case
You know some ads perform better than others, but do you know *why*? Is it the presence of a person, a specific object, the on-screen text, or the spoken words in a video? Answering these questions manually is nearly impossible at scale. This workflow automates the deep analysis process, allowing you to:
*   **Automate Creative Analysis:** Stop guessing and start making data-backed decisions about your creative strategy.
*   **Uncover Hidden Performance Drivers:** Identify which objects, themes, text, or spoken phrases correlate with higher engagement and conversions.
*   **Build a Structured Creative Database:** Create a detailed, searchable log of every element within your ads for long-term analysis and trend-spotting.
*   **Save Countless Hours:** Eliminate the tedious manual process of watching, tagging, and logging creative assets.

#### How it Works

The workflow is triggered on a schedule and follows a clear, structured path:

**1. Configuration & Ad Ingestion:**
*   The workflow begins on a schedule (e.g., weekly on Monday at 10 AM).
*   It starts by fetching all active ads from a specific **Meta Ads Campaign**, which you define in the **`Set Campaign ID`** node.

**2. Intelligent Branching (Video vs. Image):**
*   An **IF node** inspects each creative to determine its type.
*   **Video creatives** are routed to the Google Video Intelligence API pipeline.
*   **Image creatives** are routed to the Google Vision API pipeline.

**3. The Video Analysis Pipeline:**
*   For each video, the workflow gets a direct source URL, downloads the file, and converts it to a Base64 string.
*   It then initiates an asynchronous analysis job in the **Google Video Intelligence API**, requesting `LABEL_DETECTION`, `SPEECH_TRANSCRIPTION`, and `TEXT_DETECTION`.
*   A **loop with a wait timer** periodically checks the job status until the analysis is complete.
*   Finally, a **Code node** parses the complex JSON response, structuring the annotations (like detected objects with timestamps or full speech transcripts) into clean rows.

**4. The Image Analysis Pipeline:**
*   For each image, the file is downloaded, converted to Base64, and sent to the **Google Vision API**.
*   It requests a wide range of features, including label, text, logo, and object detection.
*   A **Code node** parses the response and formats the annotations into a standardized structure.

**5. Data Logging & Robust Error Handling:**
*   All successfully analyzed data from both pipelines is appended to a primary **Google Sheet**.
*   The workflow is built to be resilient. If an error occurs (e.g., a video fails to be processed by the API, or an image URL is missing), a detailed error report is logged to a separate **`errors` sheet** in your Google Sheet, ensuring no data is lost and problems are easy to track.

---

### Setup Instructions

To use this template, you need to configure a few key nodes.

**1. Credentials:**
*   Connect your **Meta Ads** account.
*   Connect your **Google** account. This account needs access to Google Sheets and must have the **Google Cloud Vision API** and **Google Cloud Video Intelligence API** enabled in your GCP project.

**2. The `Set Campaign ID` Node:**
*   This is the primary configuration step. Open this `Set` node and replace the placeholder value with the **ID of the Meta Ads campaign** you want to analyze.

**3. Google Sheets Nodes:**
You need to configure two Google Sheets nodes:
*   **`Add Segments data`:**
    *   Select your spreadsheet and the specific sheet where you want to save the successful analysis results.
    *   Ensure your sheet has the following headers: `campaign_id`, `ad_id`, `creative_id`, `video_id`, `file_name`, `image_url`, `source`, `annotation_type`, `label_or_text`, `category`, `full_transcript`, `confidence`, `start_time_s`, `end_time_s`, `language_code`, `processed_at_utc`.
*   **`Add errors`:**
    *   Select your spreadsheet and the sheet you want to use for logging errors (e.g., a sheet named "errors").
    *   Ensure this sheet has headers like: `error_type`, `error_message`, `campaign_id`, `ad_id`, `creative_id`, `file_name`, `processed_at_utc`.

**4. Activate the Workflow:**
*   Set your desired frequency in the `Run Weekly on Monday at 10 AM` (Schedule Trigger) node.
*   Save and activate the workflow.

---

### Further Ideas & Customization

This workflow provides the "what" inside your creatives. The next step is to connect it to performance.
*   **Build a Performance Analysis Workflow:** Create a second workflow that reads this Google Sheet, fetches performance data (spend, clicks, conversions) for each `ad_id` from the Meta Ads API, and merges the two datasets. This will allow you to see which labels correlate with the best performance.
*   **Create Dashboards:** Use the structured data in your Google Sheet as a source for a Looker Studio or Tableau dashboard to visualize creative trends.
*   **Incorporate Generative AI:** Add a final step that sends the combined performance and annotation data to an LLM (like in the example you provided) to automatically generate qualitative summaries and recommendations for each creative.
*   **Add Notifications:** Use the Slack or Email nodes to send a summary after each run, reporting how many creatives were analyzed and if any errors occurred.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Facebook Graph API, Schedule Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
