# 📁 Auto-download Reddit memes to Google Drive with duplicate detection & Telegram alerts

> ⚡ **375 views** · 📁 [File Management](../)

## Description

## 🎯 What this workflow does

This workflow automatically monitors Reddit subreddits for new image posts and downloads them to Google Drive. It's perfect for content creators, meme collectors, or anyone who wants to automatically archive images from their favorite subreddits without manual work.

The workflow intelligently prevents duplicate downloads by checking existing files in Google Drive and sends you Telegram notifications about the download status, so you always know when new content has been saved.

## 🚀 Key Features

- **Multi-subreddit monitoring**: Configure multiple subreddits to monitor simultaneously
- **Smart duplicate detection**: Never downloads the same image twice
- **Automated scheduling**: Runs on a customizable cron schedule
- **Real-time notifications**: Get instant Telegram updates about download activity
- **Rate limit friendly**: Built-in delays to respect Reddit's API limits
- **Cloud storage integration**: Direct upload to organized Google Drive folders

## 📋 Prerequisites

Before using this workflow, you'll need:

- **Reddit Developer Account**: Create an app at [reddit.com/prefs/apps](https://reddit.com/prefs/apps)
- **Google Cloud Project**: With Drive API enabled and OAuth2 credentials
- **Telegram Bot**: Created via @BotFather with your chat ID
- **Basic n8n knowledge**: Understanding of credentials and node configuration

## ⚙️ Setup Instructions

### 1. Configure Reddit API Access
- Visit reddit.com/prefs/apps and create a new "script" type application
- Note your Client ID and Client Secret
- Add Reddit OAuth2 credentials in n8n

### 2. Set up Google Drive Integration
- Enable Google Drive API in Google Cloud Console
- Create OAuth2 credentials with appropriate scopes
- Configure Google Drive OAuth2 credentials in n8n
- Update the folder ID in the workflow to your desired destination

### 3. Configure Telegram Notifications
- Create a bot via @BotFather on Telegram
- Get your chat ID (message @userinfobot)
- Add Telegram API credentials in n8n

### 4. Customize Your Settings
Update the Settings node with:
- Your Telegram chat ID
- List of subreddits to monitor (e.g., `['memes', 'funny', 'pics']`)
- Optional: Adjust wait time between requests
- Optional: Modify the cron schedule

## 🔄 How it works

1. **Scheduled Trigger**: The workflow starts automatically based on your cron configuration
2. **Random Selection**: Picks a random subreddit from your configured list
3. **Fetch Posts**: Retrieves the latest 30 posts from the subreddit's "new" section
4. **Image Filtering**: Keeps only posts with i.redd.it image URLs
5. **Duplicate Check**: Searches Google Drive to avoid re-downloading existing images
6. **Download & Upload**: Downloads new images and uploads them to your Drive folder
7. **Notification**: Sends a Telegram message with the download summary

## 🛠️ Customization Options

### Scheduling
- Modify the cron trigger to run hourly, daily, or at custom intervals
- Add timezone considerations for your location

### Content Filtering
- Add upvote threshold filters to get only popular content
- Filter by image dimensions or file size
- Implement NSFW content filtering

### Storage & Organization
- Create subfolders by subreddit
- Add date-based folder organization
- Implement file naming conventions

### Notifications & Monitoring
- Add Discord webhook notifications
- Create download statistics tracking
- Log failed downloads for debugging

## 📊 Use Cases

- **Content Creators**: Automatically collect memes and trending images for social media
- **Digital Marketers**: Monitor visual trends across different communities  
- **Researchers**: Archive visual content from specific subreddits for analysis
- **Personal Use**: Build a curated collection of images from your favorite subreddits

## 🎯 Best Practices

- **Respect Rate Limits**: Keep the wait time between requests to avoid being blocked
- **Monitor Storage**: Regularly check Google Drive storage usage
- **Subreddit Selection**: Choose active subreddits with regular image posts
- **Credential Security**: Use n8n's credential system and never hardcode API keys

## 🚨 Important Notes

- This workflow only downloads images from i.redd.it (Reddit's image host)
- Some subreddits may have bot restrictions
- Reddit's API has rate limits (~60 requests per minute)
- Ensure your Google Drive has sufficient storage space
- Always comply with Reddit's Terms of Service and content policies

## 🔗 Nodes Used

HTTP Request, Telegram, Google Drive, Reddit, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
