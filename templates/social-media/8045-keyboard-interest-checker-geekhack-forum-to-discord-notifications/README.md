# 📱 Keyboard interest checker: GeekHack forum to Discord notifications

> ⚡ **80 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Geekhack Discord Updater

## How It Works

This n8n workflow automatically monitors GeekHack forum RSS feeds every hour for new keyboard posts in Interest Checks and Group Buys sections. When it finds a new thread (not replies), it:

1. **Monitors RSS Feeds**: Checks two GeekHack RSS feeds for new posts (50 items each)
2. **Filters New Threads**: Removes reply posts by checking for "Re:" prefix in titles
3. **Prevents Duplicates**: Queries PostgreSQL database to skip already-processed threads
4. **Scrapes Content**: Fetches the full thread page and extracts the original post
5. **Extracts Images**: Uses regex to find all images in the post content
6. **Creates Discord Embed**: Formats the post data into a rich Discord embed with up to 4 images
7. **Sends to Multiple Webhooks**: Retrieves all webhook URLs from database and sends to each one
8. **Logs Processing**: Records the thread as processed to prevent duplicates

The workflow includes a **webhook management system** with a web form to add/remove Discord webhooks dynamically, allowing you to send notifications to multiple Discord servers or channels.

## Steps to Set Up

### Prerequisites
- n8n instance running
- PostgreSQL database
- Discord webhook URL(s)

### 1. Database Setup
Create PostgreSQL tables:

**Processed threads table:**
```sql
CREATE TABLE processed_threads (
    topic_id VARCHAR PRIMARY KEY,
    title TEXT,
    processed_at TIMESTAMP DEFAULT NOW()
);
```

**Webhooks table:**
```sql
CREATE TABLE webhooks (
    id SERIAL PRIMARY KEY,
    url TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
```

### 2. n8n Configuration

#### Import Workflow
1. Copy the workflow JSON
2. Go to n8n → Workflows → Import from JSON
3. Paste the JSON and import

#### Configure Credentials
1. **PostgreSQL**: Create new PostgreSQL credential with your database connection details
2. All PostgreSQL nodes should use the same credential

### 3. Node Configuration

#### Schedule Trigger
- Already configured for 1-hour intervals
- Modify if different timing needed

#### PostgreSQL Nodes
- Ensure all PostgreSQL nodes use your PostgreSQL credential:
  - "Check if Processed"
  - "Update entry" 
  - "Insert rows in a table"
  - "Select rows from a table"
- Database schema should be "public"
- Table names: "processed_threads" and "webhooks"

#### RSS Feed Limits
- Both RSS feeds are set to limit=50 items
- Adjust if you need more/fewer items per check

### 4. Webhook Management

#### Adding Webhooks via Web Form
1. The workflow creates a form trigger for adding webhooks
2. Access the form URL from the "On form submission" node
3. Submit Discord webhook URLs through the form
4. Webhooks are automatically stored in the database

#### Manual Webhook Addition
Alternatively, insert webhooks directly into the database:
```sql
INSERT INTO webhooks (url) VALUES ('https://discord.com/api/webhooks/YOUR_WEBHOOK_URL');
```

### 5. Testing

#### Test the Main Workflow
1. Ensure you have at least one webhook in the database
2. Activate the workflow
3. Use "Execute Workflow" to test manually
4. Check Discord channels for test messages

#### Test Webhook Form
1. Get the form URL from "On form submission" node
2. Submit a test webhook URL
3. Verify it appears in the webhooks table

### 6. Monitoring
- Check execution history for errors
- Monitor both database tables for entries
- Verify all registered webhooks receive notifications
- Adjust schedule timing if needed

### 7. Managing Webhooks
- Use the web form to add new webhook URLs
- Remove webhooks by deleting from the database:
  ```sql
  DELETE FROM webhooks WHERE url = 'webhook_url_to_remove';
  ```

The workflow will now automatically post new GeekHack threads to all registered Discord webhooks every hour, with the ability to dynamically manage webhook destinations through the web form interface.

## 🔗 Nodes Used

HTTP Request, Postgres, RSS Read, Schedule Trigger, DebugHelper, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
