# 📱 Automate video story publishing to Facebook Page using Google Drive and Sheets

> ⚡ **670 views** · 📱 [Social Media & Email Marketing](../)

## Description

## **Automated Facebook Page Story Video Publisher (Google Drive → Facebook → Google Sheet)**
&gt; **Recommended:** Self-hosted via [tino.vn/vps-n8n?affid=388](https://tino.vn/vps-n8n?affid=388) — use code **VPSN8N** for up to **39% off**.

This workflow is an **automated solution for publishing video content from Google Drive to your Facebook Page Stories**, while using Google Sheets as a posting queue manager.

---

## **What This Workflow Does (Workflow Function)**

This automation orchestrates a complete multi-step process for uploading and publishing videos to Facebook Stories:

1. **Queue Management:** Every 2 hours and 30 minutes, the workflow checks a Google Sheet (`Get Row Sheet` node) to find the **first video** whose `Stories` column is empty — meaning it hasn’t been posted yet.
2. **Conditional Execution:** An **If** node confirms that the video’s `File ID` exists before proceeding.
3. **Video Retrieval:** Using the `File ID`, the workflow downloads the video from Google Drive (`Google Drive` node) and calculates its binary size (`Set to the total size in bytes` node).
4. **Facebook 3-Step Upload:** It performs the Facebook Graph API’s three-step upload process through HTTP Request nodes:

   * **Step 1 – Initialize Session:** Starts an upload session and retrieves the `upload_url` and `video_id`.
   * **Step 2 – Upload File:** Uploads the binary video data to the provided `upload_url`.
   * **Step 3 – Publish Video:** Finalizes and publishes the uploaded video as a Facebook Story.
5. **Status Update:** Once completed, the workflow updates the same row in Google Sheets (`Update upload status in sheet` node) using the `row_number` to mark the video as processed.

---

## **Prerequisites (What You Need Before Running)**

### 1. n8n Instance

&gt; **Recommended:** Self-hosted via [tino.vn/vps-n8n?affid=388](https://tino.vn/vps-n8n?affid=388) — use code **VPSN8N** for up to **39% off**.

### 2. Google Services

* **Google Drive Credentials:** OAuth2 credentials for Google Drive to let n8n download video files.
* **Google Sheets Credentials:** OAuth2 credentials for Google Sheets to read the posting queue and update statuses.
* **Google Sheet:** A spreadsheet (ID: `1RnE5O06l7W6TLCLKkwEH5Oyl-EZ3OE-Uc3OWFbDohYI`) containing:

  * `File ID` — the video’s unique ID in Google Drive.
  * `Stories` — posting status column (leave empty for pending videos).
  * `row_number` — used for updating the correct row after posting.

### 3. Facebook Setup

* **Page ID:** Your Facebook Page ID (currently hardcoded as `115432036514099` in the `info` node).
* **Access Token:** A **Page Access Token** with permissions such as `pages_manage_posts` and `pages_read_engagement`.
  This token is hardcoded in the `info` node and again in `Step 3. Post video`.

---

## **Usage Guide and Implementation Notes**

### **How to Use**

1. **Queue Videos:** Add video entries to your Google Sheet. Each entry must include a valid Google Drive **File ID**. Leave the **Stories** column empty for videos that haven’t been posted.
2. **Activate:** Save and **activate** the workflow. The `Schedule Trigger` will automatically handle new uploads every 2 hours and 30 minutes.

---

### **Implementation Notes**

* **⚠️ Token Security:** Hardcoding your **Access Token** inside the `info` node is **not recommended**. Tokens expire and expose your Page to risk if leaked.
  👉 **Action:** Replace the static token with a secure **Credential** setup that supports token rotation.

* **Loop Efficiency:** The **“false”** output of the `If` node currently loops back to the `Get Row Sheet` node. This creates unnecessary cycles if no videos are found.
  👉 **Action:** Disconnect that branch so the workflow stops gracefully when no unposted videos remain.

* **Status Updates:** To prevent re-posting the same video, the final `Update upload status in sheet` node must update the **Stories** column (e.g., write `"POSTED"`).
  👉 **Action:** Add this mapping explicitly to your Google Sheets node.

* **Automated File ID Sync:** This workflow assumes that the Google Sheet already contains valid File IDs.
  👉 You can build a **secondary workflow** (using `Schedule Trigger1 → Search files and folders → Append or update row in sheet`) to automatically populate new video File IDs from your Google Drive.

---

## ✅ **Result**

Once active, this workflow automatically:

* pulls pending videos from your Google Sheet,
* uploads them to Facebook Stories,
* and marks them as posted — all without manual intervention.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
