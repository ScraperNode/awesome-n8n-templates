# 📊 Curate key RSS articles with OpenAI, save to Notion, and notify via Telegram

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

## Description

## Think of this workflow as your personal news assistant that:
- Monitors multiple technology websites 24/7
- Uses AI to read and understand each article
- Filters out low-quality content automatically.
- Saves the best articles to Notion with summaries.
- Sends you Telegram alerts for must-read content.

---

## Prerequisites (What You Need Before Starting)

### 1. **Notion Account** (Free)
- Sign up at notion.so
- You'll store all curated articles here

### 2. **OpenAI Account** (Paid)
- Sign up at platform.openai.com
- Cost: ~$0.01-0.02 per article (~$15-30/month for 50 articles/day)
- Needed for AI content analysis

### 3. **Telegram Account** (Free)
- Download Telegram app
- Needed for instant notifications

### 4. **RSS Feed URLs** (Free)
- Included: TechCrunch, Dev.to, The Verge
- Optional: Add your own favorite tech blogs

---

## Step-by-Step Configuration

### STEP 1: Create Your Notion Database

#### 1.1 Create New Database
1. Open Notion (notion.so)
2. Click "+ New Page"
3. Select "Table" view
4. Name it "Content Curator"

#### 1.2 Add Required Properties
Click "+ New Property" and add each:
- **Title** (Rich Text) - Already exists by default
- **URL** (URL type)
- **Summary** (Rich Text)
- **Category** (Select) - Add options: Technology, AI, Business, DevOps, Other
- **Tags** (Rich Text)
- **Sentiment** (Select) - Add options: Positive, Neutral, Negative
- **Priority** (Number)
- **Source** (Rich Text)
- **Published** (Date)
- **Added Date** (Date)
- **Status** (Select) - Add options: New, Read, Archived

#### 1.3 Get Database ID
1. Open your Notion database
2. Click "Share" button (top right)
3. Click "Copy Link"
4. Extract the ID from URL:
   - URL: `https://www.notion.so/28e3a42420b2801e8ef5c680e49afc2e`
   - ID: `28e3a42420b2801e8ef5c680e49afc2e`
5. **Save this ID** - you'll need it multiple times

---

### STEP 2: Create Notion Integration

#### 2.1 Create Integration
1. Go to: notion.so/my-integrations
2. Click "+ New Integration"
3. Name: "RSS Content Curator"
4. Select your workspace
5. Click "Submit"
6. Copy the "Internal Integration Token" (starts with `secret_`)
7. **IMPORTANT: Save this token safely!**

#### 2.2 Connect Integration to Database
1. Open your "Content Curator" database in Notion
2. Click "•••" (three dots, top right)
3. Scroll to "Add connections"
4. Select "RSS Content Curator"
5. Click "Confirm"

---

### STEP 3: Set Up OpenAI

1. Go to: platform.openai.com
2. Sign up or log in
3. Add payment method (required)
4. Navigate to: platform.openai.com/api-keys
5. Click "+ Create new secret key"
6. Name: "n8n-content-curator"
7. Copy the key (starts with `sk-`)
8. **IMPORTANT: You can't see this key again - save it now!**

---

### STEP 4: Create Telegram Bot

#### 4.1 Create the Bot
1. Open Telegram app
2. Search for "@BotFather"
3. Start chat with BotFather
4. Send: `/newbot`
5. Follow prompts:
   - Bot name: "My Content Curator"
   - Username: "my_content_curator_bot"
6. Copy the HTTP API token
7. **Save this token**

#### 4.2 Get Your Chat ID
1. Search for your bot in Telegram
2. Start a chat and send any message
3. Open in browser:
   ```
   https://api.telegram.org/bot&lt;YOUR_BOT_TOKEN&gt;/getUpdates
   ```
   (Replace `&lt;YOUR_BOT_TOKEN&gt;` with your actual token)
4. Find `"chat":{"id":` followed by a number
5. Copy that number (e.g., `8346316847`)
6. **Save this Chat ID**

---

### STEP 5: Import Workflow to n8n

1. Log in to n8n
2. Click "Workflows" → "Add Workflow"
3. Click three dots (⋮) → "Import from File"
4. Select `RSS_AI_Content_Curator_Enhanced.json`
5. Click "Import"

---

### STEP 6: Configure Notion Credentials

**Four nodes need Notion connection:**
1. Get Existing Articles
2. Get Old Articles (&gt;30 days)
3. Save to Notion
4. Archive Old Articles

**For EACH node:**
1. Click the node
2. Find "Credential to connect with"
3. Click "Create New"
4. Select "Notion API"
5. Name: "My Notion Curator"
6. Paste your Integration Token from Step 2.1
7. Click "Save"

**Update Database IDs:**
1. In each Notion node, find "Database ID" field
2. Click refresh icon next to it
3. Select "From list"
4. Choose your "Content Curator" database
5. Test: Click "Execute Node"
6. Success = green checkmark ✓

---

### STEP 7: Configure OpenAI Credentials

1. Click on "AI Content Analysis" node
2. Find "Authentication" section
3. Under "HTTP Header Auth", click "Create New"
4. Fill in:
   - **Name:** `Authorization`
   - **Value:** `Bearer sk-YOUR_API_KEY_HERE`
   (Replace with your actual OpenAI key from Step 3)
5. Click "Save"

---

### STEP 8: Configure Telegram Credentials

1. Click on "Telegram Notification" node
2. Under "Credential to connect with", click "Create New"
3. Select "Telegram API"
4. Name: "My Telegram Bot"
5. Paste Bot Token from Step 4.1
6. Click "Save"

**Update Chat ID:**
1. In "Telegram Notification" node
2. Find "Chat ID" field
3. Paste your Chat ID from Step 4.2
4. Test: Click "Execute Node"

---

### STEP 9: Test the Workflow

#### Manual Test Run
1. Verify all nodes show green (no errors)
2. Click "Execute Workflow" (top right)
3. Watch nodes light up in sequence
4. Check for red error nodes
5. If all green:
   - Open Notion - should see new articles
   - Check Telegram - may see notification if high-priority article found

#### Expected Results:
- Workflow fetches from 3 RSS feeds
- Removes duplicate articles
- Checks which are new (not already in Notion)
- AI analyzes each article (summary, category, priority)
- Articles with priority ≥60 saved to Notion
- High-priority articles trigger Telegram notification

---

### STEP 10: Activate Automatic Execution

#### Replace Manual Trigger
1. Click "Manual Trigger" node
2. Press Delete
3. Click "+" to add node
4. Search "Schedule Trigger"
5. Select it

#### Configure Schedule
Choose one:
- **Every 4 hours:** More updates, higher cost
- **Every 6 hours:** Balanced (recommended)
- **Every 12 hours:** Lower cost
- **Daily at specific time:** Minimal cost

Example for every 6 hours:
- Mode: "Every X"
- Value: 6
- Unit: Hours

#### Activate
1. Click toggle switch (top right)
2. Should turn green: "Active"
3. Workflow now runs automatically!

## 🔗 Nodes Used

HTTP Request, RSS Read, Telegram, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
