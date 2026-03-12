# 📱 Schedule weekly Facebook posts from Google Sheets every Sunday

> ⚡ **68 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Schedule Weekly Facebook Posts from Google Sheets Every Sunday ✨ | 1-Click Weekly FB & IG Posts for Busy Solopreneurs 🧘‍♀️☕

Automate your social media with grace and simplicity. The **SoftTech Sunday Scheduler** is a no-code Google Sheets + Make (formerly Integromat) integration that lets solopreneurs plan, schedule, and publish a full week of Facebook and Instagram content in under a minute—every Sunday at 7 PM. Designed for gentle growth, this system blends soft-tech ease with technical precision, so you stay consistent without burnout.

---

## 🔧 Step-by-Step Setup Instructions

Follow these clear steps to get your SoftTech Sunday Scheduler up and running:

### 1. **Duplicate the Google Sheet Template**
- Open the provided [Google Sheets template](#) (link to your submission).
- Click **File &gt; Make a copy** to save it to your Google Drive.
- Rename it (e.g., “My Social Content Queue”).

### 2. **Enable Google Sheets API (if required)**
- If using Make or Zapier, ensure your Google account has **Google Sheets API access enabled**.
- Go to [Google Cloud Console](https://console.cloud.google.com/), create a project, enable the Sheets API, and link it to your automation tool.

### 3. **Connect Google Sheet to Make (Integromat)**
- Log in to your [Make.com](https://www.make.com) account.
- Import the **SoftTech Sunday Scheduler scenario** (provided in the template package).
- In the **Google Sheets module**, connect your copied sheet.
- Authorize access when prompted.

### 4. **Map the Scheduler Trigger**
- Locate the **Schedule** module in Make.
- Set it to run **weekly on Sundays at 7:00 PM** (adjust timezone as needed).
- This triggers the automation every week.

### 5. **Configure Social Media Publishing**
- Use the **Facebook Pages** and/or **Instagram Business** modules in Make.
- Connect your Facebook Developer account and assign your Page(s) and Instagram Business Account.
- Ensure your account is set up as a **Meta Business Suite user** with proper permissions.

### 6. **Test the Workflow**
- Add a test row in your Google Sheet (see column specs below).
- Manually run the Make scenario to verify:
  - Post text is pulled correctly.
  - Hashtags are appended.
  - Post is published to your selected platforms.
- Check your Facebook Page or Instagram feed for the live post.

### 7. **Go Live**
- Once tested, activate the scenario.
- Every Sunday at 7 PM, the system will:
  - Read the top **unpublished** row.
  - Publish the content.
  - Mark the row as “Published” with a timestamp.

---

## 📊 Google Sheet Column Specifications

Your sheet must follow this exact column structure for seamless automation:

| Column | Header | Required | Format & Notes |
|-------|--------|---------|----------------|
| A | `Post Date` | Yes | `MM/DD/YYYY` – Suggested publish date (for your reference) |
| B | `Content` | Yes | Plain text or rich text (emojis allowed). Max 2,200 characters. |
| C | `Hashtags` | No | Comma-separated or space-separated hashtags (e.g., `#MindfulMarketing, #SolopreneurLife`). Auto-appended to post. |
| D | `Media URL` | No | Direct public link to image or video (must be hosted online: Google Drive *shared link*, Imgur, etc.). GIFs and MP4s supported. |
| E | `Platform` | Yes | `Facebook`, `Instagram`, or `Both` – determines where the post goes. |
| F | `Status` | Auto | Leave blank initially. Will be auto-updated to `Published - [Timestamp]` after posting. |
| G | `Notes` | No | Optional internal notes (e.g., campaign name, draft source). |

&gt; ✅ **Tip**: Freeze Row 1 (header row) and use Data Validation in Column E (`Facebook`, `Instagram`, `Both`) to prevent input errors.

---

## 🔄 Workflow Explanation

The SoftTech Sunday Scheduler runs a fully automated weekly cycle:

1. **Every Sunday at 7:00 PM**, the Make scenario triggers.
2. It scans your Google Sheet starting from **Row 2**, looking for the **first row with an empty `Status` cell**.
3. It pulls:
   - `Content`
   - `Hashtags` (appends to content)
   - `Media URL` (if present)
   - `Platform` (determines destination)
4. Using the **Meta API**, it publishes the post to your connected Facebook Page and/or Instagram Business Account.
5. Upon successful posting, it updates the `Status` column with `Published - [YYYY-MM-DD HH:MM]`.
6. The next week, it moves to the next unpublished row—creating a **first-in, first-out content queue**.

🔁 **Evergreen Tip**: Duplicate your favorite content rows and insert them at the bottom to recycle high-performing posts.

---

## 🛠️ Pre-Conditions & Requirements

Before using this template, ensure you meet the following:

- ✅ **Google Account** with access to Google Sheets.
- ✅ **Make.com (Integromat) account** (Free plan supports this workflow).
- ✅ **Facebook Business Suite** with:
  - Admin access to a **Facebook Page**.
  - Connected **Instagram Business Account** (not personal).
- ✅ Media files hosted online with **public sharing enabled** (e.g., Google Drive link set to “Anyone with the link can view”).
- ✅ Google Sheet shared with your Make integration (via email connection).

&gt; ⚠️ **Note**: Instagram carousel posts are **not supported** in this version. Only single-image or video posts.

---

## 🎨 Customization Guidance

Make this system your own with these flexible tweaks:

### Change the Schedule
- In Make, edit the **Schedule module** to run on a different day/time (e.g., Saturday morning).

### Add Platforms
- Extend the workflow to **LinkedIn**, **Twitter (X)**, or **Pinterest** by adding new modules in Make and mapping the same sheet data.

### Enhance Content Logic
- Use **filters** in Make to:
  - Skip rows with `Status` already filled.
  - Only post if `Media URL` is valid.
  - Send email alerts on failure.

### Customize Hashtag Behavior
- Modify the **aggregator module** to:
  - Limit to top 5 hashtags.
  - Pull from a separate “Hashtag Bank” sheet tab.
  - Randomize hashtag selection for variety.

### Enable Draft Review
- Insert a **Google Form** to collect post ideas.
- Use Make to append form responses to the sheet—turning input into a team-friendly content hub.

---

## 🌿 Who It’s For

Perfect for:
- Coaches & consultants wanting consistent visibility
- Etsy sellers promoting new listings
- Mom-preneurs balancing business and family
- Wellness creators sharing mindful tips

This system grows with you—start solo, scale with automation.

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
