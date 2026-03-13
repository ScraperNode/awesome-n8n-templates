# 📊 Monitor multiple YouTube channels with real-time RocketChat alerts

> ⚡ **153 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

## Workflow Overview

This n8n workflow provides automated monitoring of YouTube channels and sends real-time notifications to RocketChat when new videos are published. It supports all YouTube URL formats, uses dual-source video fetching for reliability, and intelligently filters videos to prevent duplicate notifications.

### Key Features

- **Multi-Format URL Support**: Handles @handle, /user/, and /channel/ URL formats
- **Dual Fetching Strategy**: Uses both RSS feeds and HTML scraping for maximum reliability
- **Smart Filtering**: Only notifies about videos published in the last hour
- **Shorts Exclusion**: Automatically excludes YouTube Shorts from notifications
- **Rate Limiting**: 30-second delay between notifications to prevent spam
- **Batch Processing**: Processes multiple channels sequentially
- **Error Handling**: Continues execution even if one channel fails
- **Customizable Schedule**: Default hourly checks, adjustable as needed

### Use Cases

Monitor competitor channels, track favorite creators, aggregate content from multiple channels, build content curation workflows, stay updated on educational channels, monitor brand mentions, track news channels for breaking updates.

---

## Setup Instructions

### Prerequisites

- n8n instance (self-hosted or cloud) version 1.0+
- RocketChat server with admin or bot access
- RocketChat API credentials
- Internet connectivity for YouTube access

### Step 1: Obtain RocketChat Credentials

**Create Bot User:**
1. Log in to RocketChat as administrator
2. Navigate to Administration → Users → New
3. Fill in details: Name (YouTube Monitor Bot), Username (youtube-bot), Email, Password, Roles (bot)
4. Click Save

**Get API Credentials:**
1. Log in as bot user
2. Navigate to My Account → Personal Access Tokens
3. Click Generate New Token
4. Enter token name: n8n YouTube Monitor
5. Copy generated token immediately
6. Note User ID from account settings

### Step 2: Configure RocketChat in n8n

1. Open n8n web interface
2. Navigate to Credentials section
3. Click Add Credential → RocketChat API
4. Fill in:
   - Domain: Your RocketChat URL (e.g., https://rocket.yourdomain.com)
   - User: Bot username (e.g., youtube-bot)
   - Password: Bot password or personal access token
5. Click Save and test connection

### Step 3: Prepare RocketChat Channel

1. Create new channel in RocketChat: youtube-notifications
2. Add bot user to channel:
   - Click channel menu → Members → Add Users
   - Search for bot username
   - Click Add

### Step 4: Collect YouTube Channel URLs

**Handle Format:** `https://www.youtube.com/@ChannelHandle`
**User Format:** `https://www.youtube.com/user/Username`
**Channel ID Format:** `https://www.youtube.com/channel/UCxxxxxxxxxx`

All formats supported. Find channel ID in page source or use browser extension.

### Step 5: Import Workflow

1. Copy workflow JSON
2. In n8n: Workflows → Import from File/URL
3. Paste JSON or upload file
4. Click Import

### Step 6: Configure Channel List

1. Locate Channel List node
2. Enter YouTube URLs in channel_urls field, one per line:
```
https://www.youtube.com/@NoCopyrightSounds/videos
https://www.youtube.com/@chillnation/videos
```
3. Include /videos suffix or workflow adds it automatically

### Step 7: Configure RocketChat Notification

1. Locate RocketChat Notification node
2. Replace YOUR-CHANNEL-NAME with your channel name
3. Select RocketChat credential
4. Customize message template if needed

### Step 8: Configure Schedule (Optional)

Default: Every 1 hour

To change:
1. Open Hourly Check node
2. Modify interval (Minutes, Hours, Days)

**Recommended Intervals:**
- Every hour (default): Good balance
- Every 30 minutes: More frequent
- Every 2 hours: Less frequent
- Avoid intervals less than 15 minutes

**Important:** YouTube RSS updates every 15 minutes. Hourly checks match 1-hour filter window.

### Step 9: Test the Workflow

1. Click Execute Workflow button
2. Monitor execution (green = success, red = errors)
3. Check node outputs:
   - Channel List: Shows URLs
   - Filter New Videos: Shows found videos (may be empty)
   - RocketChat Notification: Shows sent messages
4. Verify notifications in RocketChat

**No notifications is normal if no videos posted in last hour.**

### Step 10: Activate Workflow

1. Toggle Active switch in top-right
2. Workflow runs on schedule automatically
3. Monitor RocketChat channel for notifications

---

## How to Use

### Understanding Workflow Execution

**Default Schedule: Hourly**
- Executes every hour
- Checks all channels
- Processes videos from last 60 minutes
- Prevents duplicate notifications

**Execution Duration:** 1-5 minutes for 10 channels. Rate limiting adds 30 seconds per video.

### Adding New Channels

1. Open Channel List node
2. Add new URL on new line
3. Save (Ctrl+S)
4. Change takes effect on next run

### Removing Channels

1. Open Channel List node
2. Delete line or comment out with # at start
3. Save changes

### Changing Check Frequency

1. Open Hourly Check node
2. Modify interval
3. If changing from hourly, update Filter New Videos node:
   - Find: `cutoffDate.setHours(cutoffDate.getHours() - 1);`
   - Change -1 to match interval (-2 for 2 hours, -6 for 6 hours)

**Important:** Time window should match or exceed check interval.

### Understanding Video Sources

**RSS Feed (Primary):**
- Official YouTube RSS
- Fast and reliable
- 5-15 minute delay for new videos
- Structured data

**HTML Scraping (Fallback):**
- Immediate results
- Works when RSS unavailable
- More fragile

**Benefits of dual approach:**
- Reliability: If one fails, other works
- Speed: Scraping catches videos immediately
- Completeness: RSS ensures nothing missed
- Videos are deduplicated automatically

### Excluding YouTube Shorts

Shorts are filtered by checking URL for /shorts/ path.

**To include Shorts:**
1. Open Filter New Videos node
2. Find: `if (videoUrl && !videoUrl.includes('/shorts/'))`
3. Remove the !videoUrl.includes('/shorts/') check

### Rate Limiting

**30-second wait between notifications:**
- Prevents flooding RocketChat
- Allows users to read each notification
- Avoids rate limits

**Impact:** 5 videos = 2.5 minutes, 10 videos = 5 minutes

**To adjust:** Open Wait 30 sec node, change amount field (15-60 seconds recommended)

### Handling Multiple Channels

Channels processed sequentially:
- Prevents overwhelming workflow
- Ensures reliable execution
- One failed channel doesn't stop others
- Recommend 20-50 channels per workflow

---

## FAQ

**Q: How many channels can I monitor?**
A: Recommend 20-50 per workflow. Split into multiple workflows for more.

**Q: Why use both RSS and scraping?**
A: RSS is reliable but delayed. Scraping is immediate but fragile. Both ensures no videos missed.

**Q: Can I exclude specific video types?**
A: Yes, add filtering logic in Filter New Videos node. Already excludes Shorts.

**Q: Will this get my IP blocked?**
A: Unlikely with hourly checks. Don't check more than every 15 minutes.

**Q: How do I prevent duplicate notifications?**
A: Ensure time window matches schedule interval. Already implemented.

**Q: What if channel changes handle?**
A: Update URL in Channel List node. YouTube maintains redirects.

**Q: Can I monitor playlists?**
A: Not directly. Would need modifications for playlist RSS feeds.

---

## Technical Reference

### YouTube URL Formats

- Handle: `https://www.youtube.com/@handlename`
- User: `https://www.youtube.com/user/username`
- Channel ID: `https://www.youtube.com/channel/UCxxxxxx`

### RSS Feed Format

`https://www.youtube.com/feeds/videos.xml?channel_id=UCxxxxxx`

Contains up to 15 recent videos with title, link, publish date, thumbnail.

**APIs Used:** YouTube RSS (public), RocketChat API (requires auth)

**License:** Open for modification and commercial use

## 🔗 Nodes Used

Function, HTTP Request, RocketChat, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
