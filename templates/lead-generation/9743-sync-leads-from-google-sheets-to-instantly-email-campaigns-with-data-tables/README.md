# 🎣 Sync leads from Google Sheets to instantly email campaigns with data tables

> ⚡ **505 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# 🚀 Automated Lead Management: Google Sheets → Instantly + n8n Data Tables

## 📋 Overview

This workflow automates lead management by syncing data from Google Sheets to Instantly email campaigns while maintaining tracking through n8n Data Tables. It processes leads in batches to avoid rate limits and ensures no duplicates are sent.

---

## ⚙️ Complete Setup Guide

### 1️⃣ **Create Your Google Sheet**

**Option A: Use Our Template (Recommended)**
1. Copy this template with test data: [Google Sheets Template](https://docs.google.com/spreadsheets/d/1eFXld6aiZvnQXg1lgt1COFyUh-zcy9VGx2GmFXwmYzM/edit?usp=sharing)
2. Click **File → Make a copy** to create your own version
3. Populate with your lead data

**Option B: Create Your Own**
Create a Google Sheet with these **required columns**:
- `Firstname` - Contact's first name
- `Email` - Contact's email address
- `Website` - Company website URL
- `Company` - Company name
- `Title` - Job title/position

**💡 Pro Tip:** Add as many leads as you want - the workflow handles batching automatically!

---

### 2️⃣ **Set Up n8n Data Table**

The workflow uses **one Data Table** to track leads and their sync status.

#### **Create the "Leads" Data Table:**

1. In your n8n workflow editor, add a **Data Table node**
2. Click **"Create New Data Table"**
3. Name it: **`Leads`**
4. Add the following columns:

| Column Name | Type | Purpose |
|------------|------|---------|
| `Firstname` | string | Contact's first name |
| `Lastname` | string | Contact's last name |
| `email` | string | Contact's email (unique identifier) |
| `website` | string | Company website |
| `company` | string | Company name |
| `title` | string | Job title |
| `campaign` | string | Sync status (e.g., "start", "added to instantly") |
| `focusarea` | string | Enriched data from Title field |

5. Click **Save**

**📌 Important:** The `campaign` field is crucial - it tracks which leads have been synced to prevent duplicates!

---

### 3️⃣ **Connect Your Google Sheets Account**

1. In the **"Get row(s) in sheet"** node, click **"Create New Credential"**
2. Select **Google Sheets OAuth2 API**
3. Follow the OAuth flow:
   - Sign in with your Google account
   - Grant n8n permission to access your sheets
4. Select your spreadsheet from the dropdown
5. Choose the correct sheet name (e.g., "instantly leads")
6. Test the connection to verify it works

---

### 4️⃣ **Connect Your Instantly Account**

1. Go to [Instantly.ai](https://app.instantly.ai) and log in
2. Navigate to **Settings → API**
3. Copy your **API Key**
4. Back in n8n, open the **"Create a lead"** node
5. Click **"Create New Credential"**
6. Select **Instantly API**
7. Paste your API key
8. **Important:** Update the campaign ID:
   - Current ID: `100fa5a2-3ed0-4f12-967c-b2cc4a07c3e8` (example)
   - Replace with your actual campaign ID from Instantly
   - Find this in Instantly under **Campaigns → Your Campaign → Settings**

---

### 5️⃣ **Configure the Data Table Nodes**

You'll need to update **three Data Table nodes** to point to your newly created "Leads" table:

#### **Node 1: "Get row(s)"**
- Operation: `Get`
- Data Table: Select **`Leads`**
- Filter: `campaign = "start"`
- This fetches only new, unsynced leads

#### **Node 2: "Update row(s)1"** (Top Flow)
- Operation: `Update`
- Data Table: Select **`Leads`**
- Filter: Match by `email` field
- Update: Set `focusarea` to Title value
- This enriches lead data

#### **Node 3: "Update row(s)"** (Bottom Flow)
- Operation: `Update`
- Data Table: Select **`Leads`**
- Filter: Match by `Email` field
- Update: Set `campaign = "added to instantly"`
- This prevents duplicate sends

---

### 6️⃣ **Configure the Schedule (Optional)**

The workflow includes a **Schedule Trigger** for automation:

**Default:** Runs every hour

**To customize:**
1. Click the **"Schedule Trigger"** node
2. Choose your interval:
   - Every 30 minutes
   - Every 2 hours
   - Daily at specific time
   - Custom cron expression

**💡 For testing:** Use the **"When clicking 'Execute workflow'"** manual trigger instead!

---

## 🔄 How It Works

### **Flow 1: Data Transfer (Top Path)**

This flow moves leads from Google Sheets → n8n Data Table

```
Manual Trigger → Get Google Sheets → Batch Split (30) → Update Data Table → Loop
```

**Step-by-step:**

1. **Manual Trigger** - Click to start the workflow manually
2. **Get row(s) in sheet** - Fetches ALL leads from your Google Sheet
3. **Loop Over Items** - Splits into batches of 30 leads
4. **Update row(s)1** - For each lead:
   - Searches Data Table by `email`
   - Updates or creates the lead record
   - Stores `Title` → `focusarea` for enrichment
5. **Loop continues** - Processes next batch until all leads transferred

**⚙️ Why 30 at a time?**
- Prevents API timeouts
- Respects rate limits
- Allows monitoring of progress
- Can be adjusted in the node settings

---

### **Flow 2: Instantly Sync (Bottom Path)**

This flow syncs qualified leads from Data Table → Instantly

```
Schedule Trigger → Get Data Table (filtered) → Individual Loop → Create in Instantly → Update Status
```

**Step-by-step:**

1. **Schedule Trigger** - Runs automatically (every hour by default)
2. **Get row(s)** - Queries Data Table for leads where `campaign = "start"`
   - Only fetches NEW, unsynced leads
   - Ignores leads already processed
3. **Loop Over Items1** - Processes ONE lead at a time
4. **Create a lead** - Sends lead to Instantly:
   - Campaign: "Launchday 1"
   - Maps: Email, Firstname, Company, Website
   - Adds to email sequence
5. **Update row(s)** - Updates Data Table:
   - Sets `campaign = "added to instantly"`
   - Prevents duplicate sends on next run
6. **Loop continues** - Next lead until all processed

**🔍 Why one at a time?**
- Instantly API works best with individual requests
- Ensures accurate status tracking
- Prevents partial failures
- Better error handling per lead

---



## ✅ Key Features Explained

### **Batch Processing**
- Processes 30 Google Sheet leads at once
- Configurable in **Loop Over Items** node
- Prevents timeouts on large datasets

### **Duplicate Prevention**
- Uses `campaign` field as status tracker
- Only syncs leads where `campaign = "start"`
- Updates to `"added to instantly"` after sync
- Re-running workflow won't create duplicates

### **Data Enrichment**
- Stores job title in `focusarea` field
- Can be used for personalization later
- Extensible for additional enrichment

### **Two-Trigger System**
- **Manual Trigger**: For testing and one-time runs
- **Schedule Trigger**: For automated hourly syncs
- Both triggers use the same logic

### **Error Tolerance**
- Individual lead processing prevents cascade failures
- One failed lead won't stop the entire batch
- Easy to identify and fix problematic records

---

## 🧪 Testing Your Workflow

### **Step 1: Test Data Transfer (Flow 1)**
1. Add 5 test leads to your Google Sheet
2. Click the **Manual Trigger** node
3. Click **"Execute Node"**
4. Check your **Leads Data Table** - should see 5 new rows
5. Verify `focusarea` field has data from `Title` column

### **Step 2: Test Instantly Sync (Flow 2)**
1. In Data Table, ensure at least one lead has `campaign = "start"`
2. Click the **Schedule Trigger** node
3. Click **"Execute Node"** (bypasses schedule for testing)
4. Check Instantly dashboard - should see new lead(s)
5. Check Data Table - `campaign` should update to `"added to instantly"`

### **Step 3: Test Duplicate Prevention**
1. Re-run the Schedule Trigger
2. No new leads should be created in Instantly
3. Data Table shows no changes (already marked as synced)

---

## 🚨 Troubleshooting

### **Issue: Google Sheets not fetching data**
- ✅ Check OAuth credentials are valid
- ✅ Verify spreadsheet ID in node settings
- ✅ Ensure sheet name matches exactly
- ✅ Check Google Sheet has data

### **Issue: Data Table not updating**
- ✅ Verify Data Table exists and is named "Leads"
- ✅ Check column names match exactly (case-sensitive)
- ✅ Ensure email field is populated (used for matching)

### **Issue: Instantly not receiving leads**
- ✅ Verify Instantly API key is correct
- ✅ Update campaign ID to your actual campaign
- ✅ Check `campaign = "start"` in Data Table
- ✅ Verify email format is valid

### **Issue: Workflow runs but nothing happens**
- ✅ Check if Data Table has leads with `campaign = "start"`
- ✅ Verify loop nodes aren't stuck (check execution logs)
- ✅ Ensure batch size isn't set to 0

---

## 💡 Pro Tips & Best Practices

### **For Beginners:**
1. **Start small** - Test with 5-10 leads first
2. **Use manual trigger** - Don't enable schedule until tested
3. **Check each node** - Execute nodes individually to debug
4. **Monitor Data Table** - Use it as your source of truth
5. **Keep backups** - Export Data Table regularly

### **For Optimization:**
1. **Adjust batch size** - Increase to 50-100 for large datasets
2. **Add delays** - Insert "Wait" nodes if hitting rate limits
3. **Filter in Google Sheets** - Only fetch new rows (use formulas)
4. **Archive old leads** - Move synced leads to separate table
5. **Add error notifications** - Connect Slack/email for failures

### **For Scaling:**
1. **Use multiple campaigns** - Add campaign selection logic
2. **Implement retry logic** - Add "IF" nodes to retry failed syncs
3. **Add data validation** - Check email format before syncing
4. **Log everything** - Add "Set" nodes to track execution details
5. **Monitor API usage** - Track Instantly API quota

---

## 📊 Expected Results

### **After Setup:**
- ✅ Google Sheets connected and fetching data
- ✅ Data Table populated with lead information
- ✅ Instantly receiving leads automatically
- ✅ No duplicate sends occurring
- ✅ Campaign status updating correctly

### **Performance Metrics:**
- **100 leads** - Processes in ~5-10 seconds
- **1000 leads** - Processes in ~15-20 seconds
- **Instantly API** - 1 lead per second typical speed
- **Schedule runs** - Every hour by default

---

## 📬 Need Help?

### **Customization Services:**
- Advanced filtering and segmentation
- Multi-campaign management
- Custom field mapping and enrichment
- Webhook integrations for real-time sync
- Error handling and monitoring setup
- Scale to 10K+ leads per day

### **Contact:**
- 📧 **david@daexai.com**
- 🎥 **[Watch Full Tutorial](https://www.youtube.com/watch?v=c8iv1u_jxDY)**

---

## 🎓 What You'll Learn

By setting up this workflow, you'll master:

✅ **n8n Data Tables** - Creating, querying, and updating data  
✅ **Batch Processing** - Handling large datasets efficiently  
✅ **API Integrations** - Connecting Google Sheets and Instantly  
✅ **Workflow Logic** - Building complex multi-path automations  
✅ **Error Prevention** - Implementing duplicate checking  
✅ **Scheduling** - Automating workflows with triggers  

---

*Happy Flogramming! 🎉*

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
