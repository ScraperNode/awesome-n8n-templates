# 📱 Form-based X/Twitter poster

> ⚡ **1,009 views** · 📱 [Social Media & Email Marketing](../)

## Description

# 🚀 Form-Based X/Twitter Poster (v2)

A user-friendly n8n workflow that enables users to submit tweets through a simple web form — with optional image, video, or GIF uploads — and posts them to a connected X/Twitter account. Designed for ease of use, this workflow handles both media and text-only posts, providing clear feedback upon submission.

---

## 🧭 Overview

**Workflow Name:** Form-Based X/Twitter Poster (v2)  
**Goal:** Provide a web form for users to create tweets, upload optional media, and post directly to X/Twitter.

---

## 🛠 How It Works

### 1. **Form Submission Trigger**
- **Node:** `On form submission`
- **Type:** `formTrigger`
- **Purpose:** Renders a web form for tweet creation.
- **Fields:**
  - **Post Content:** Required textarea for tweet text.
  - **Media:** Optional file upload (.jpg, .png, .gif, .mp4, etc.).
- **Button:** "Submit"
- **Output:** JSON with text and binary media (if any).

---

### 2. **Extract Media Details**
- **Node:** `Extract Media Details`
- **Type:** `code`
- **Purpose:** Extracts tweet text, checks for media, determines media type.
- **Output Example:**
```json
{
  "content": "My tweet!",
  "mime_type": "image/jpeg",
  "media_type": "IMAGE"
}
```

---

### 3. **If Media Exists**
- **Node:** `If Media Exists`
- **Type:** `if`
- **Purpose:** Checks whether media was uploaded.
- **True Path:** Media was uploaded.
- **False Path:** No media uploaded.

---

### 4. **Upload Media to X/Twitter** (True path only)
- **Node:** `Upload Media (X)`
- **Type:** `httpRequest`
- **Purpose:** Uploads media to Twitter via API v1.1.
- **Media Category:** `TWEET_IMAGE` (can be customized)
- **Auth:** `Twitter OAuth1 API`
- **Output:** Includes `media_id_string`

---

### 5. **Post Tweet with Media** (True path)
- **Node:** `X`
- **Type:** `twitter`
- **Purpose:** Posts tweet with uploaded media.
- **Auth:** `Twitter OAuth2 API`

---

### 6. **Post Text-Only Tweet** (False path)
- **Node:** `X1`
- **Type:** `twitter`
- **Purpose:** Posts tweet without media.
- **Auth:** `Twitter OAuth2 API`

---

### 7. **Show Confirmation Message**
- **Node:** `End Form`
- **Type:** `form`
- **Purpose:** Displays thank-you message post-submission.
- **Title:** `Thank you so much for sharing your experience on X! 🖤`
- **Message:** `We truly appreciate your support and are so glad we could make a positive impact. Your words mean the world to us!`

---

## 🛠 How to Customize

- **Form Fields:** Change form title, labels, help texts, or file formats.
- **Media Logic:**
  - Add logic for distinguishing GIF vs VIDEO.
  - Adjust media upload URL dynamically:
    ```js
    https://upload.twitter.com/1.1/media/upload.json?media_category={{ $json.media_type === 'VIDEO' ? 'TWEET_VIDEO' : ($json.media_type === 'GIF' ? 'TWEET_GIF' : 'TWEET_IMAGE') }}
    ```
- **Error Handling:** Add `Error Trigger` nodes to catch and manage failures gracefully.
- **Tweet Text:** Customize tweet text with extra formatting or default content.
- **Advanced Ideas:** 
  - Schedule tweets
  - Post to multiple accounts
  - Add content approval steps

---

## 🔐 Required Credentials

### 1. **Twitter OAuth1 API**
- **Used by:** `Upload Media (X)`
- **Required for:** Media upload via v1.1
- **Credentials:** Consumer Key, Consumer Secret, Access Token, Access Token Secret
- **Workflow Credential Name:** `X OAuth - Akhil`

### 2. **Twitter OAuth2 API**
- **Used by:** `X`, `X1`
- **Required for:** Posting tweets
- **Scopes:** `tweet.read`, `tweet.write`, `users.read`, `offline.access`
- **Workflow Credential Name:** `X OAuth2 - Akhil`

---

## 💡 Use Cases

- **Easy Tweet Tool:** For non-technical users to share content.
- **Content Approval:** Internal review system before posting.
- **Announcements:** Quickly broadcast updates.
- **Campaign Posting:** Streamline recurring content sharing.

---

## 🧑‍💻 Node Naming Suggestions

| Old Name           | Suggested Name           |
|--------------------|--------------------------|
| If Image Exists    | If Media Exists          |
| X                  | Post Tweet with Media    |
| X1                 | Post Text-Only Tweet     |

---

## ❤️ Made with love by Akhil using [n8n](https://n8n.io)

## 🔗 Nodes Used

HTTP Request, X (Formerly Twitter), n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
