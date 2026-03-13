# 🤖 Find jobs via Telegram bot: AI-powered LinkedIn, Indeed & Monster scraper

> ⚡ **1,362 views** · 🤖 [AI Chatbots & Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## 🚀 Transform Your Job Hunt with AI-Powered Telegram Bot

Turn job searching into a conversational experience! This intelligent Telegram bot automatically scrapes job postings from LinkedIn, Indeed, and Monster, filters for sales & marketing positions, and delivers personalized results directly to your chat.

## ✨ Key Features

- **Interactive Telegram Commands**: Simple `/jobs [keyword] [location]` searches
- **Multi-Platform Scraping**: Simultaneous data collection from 3 major job boards
- **AI-Powered Filtering**: Smart relevance detection and experience level classification
- **Real-Time Notifications**: Instant job alerts delivered to Telegram
- **Automated Data Storage**: Saves results to Google Sheets and Airtable
- **Duplicate Removal**: Advanced deduplication across platforms
- **Mobile-First Experience**: Full job search functionality through Telegram

## 🎯 Perfect For

- **Sales Professionals**: Account managers, sales representatives, business development
- **Marketing Experts**: Digital marketers, marketing managers, growth specialists  
- **Recruiters**: Streamlined candidate sourcing and job market analysis
- **Job Seekers**: Hands-free job discovery with instant notifications

## 🛠️ Setup Requirements

### Required Credentials:
- **Telegram Bot Token**: Create bot via @BotFather
- **Bright Data API**: Professional web scraping service (LinkedIn/Indeed datasets)
- **Google Sheets OAuth2**: For spreadsheet integration
- **Airtable Token**: Database storage and management

### Prerequisites:
- n8n instance with HTTPS enabled (required for Telegram webhooks)
- Valid domain name with SSL certificate
- Basic understanding of Telegram bot commands

## 🔧 How It Works

### **User Experience:**
1. Send `/start` to activate the bot and see available commands
2. Use `/jobs sales manager New York` to search for specific positions
3. Receive formatted job results instantly in Telegram
4. Click "Apply Now" links to go directly to job postings
5. All jobs automatically saved to your connected spreadsheets

### **Behind the Scenes:**
1. **Command Processing**: Bot parses user input for keywords and location
2. **Parallel Scraping**: Simultaneous API calls to LinkedIn, Indeed, and Monster
3. **AI Processing**: Intelligent filtering, experience level detection, remote work identification
4. **Data Enhancement**: Salary extraction, duplicate removal, relevance scoring
5. **Multi-Format Storage**: Automatic saving to Google Sheets, Airtable, and JSON export
6. **Real-Time Response**: Formatted results delivered back to Telegram chat

## 🎨 Telegram Bot Commands

- `/start` - Welcome message and command overview
- `/jobs [keyword] [location]` - Search for jobs (e.g., `/jobs marketing manager remote`)
- `/help` - Show detailed help information
- `/status` - Check bot status and recent activity

## 📊 Sample Output

The bot delivers beautifully formatted job results:

🎯 Job Search Results 🎯

Found 7 relevant opportunities
Platforms: linkedin, indeed, monster
Remote jobs: 3

───────────────────

💼 Senior Sales Manager
🏢 TechCorp Industries
📍 New York, NY
💰 $80,000 - $120,000
🌐 Remote Available
📊 senior level
🔗 Apply Now


## 🔒 Security & Best Practices

- **Rate Limiting**: Built-in Telegram API compliance (30 requests/second)
- **Error Handling**: Graceful failure recovery with user-friendly messages  
- **Input Validation**: Sanitized user input to prevent injection attacks
- **Credential Management**: Secure API key storage using n8n credentials system
- **HTTPS Enforcement**: Required for production Telegram webhook integration

## 📈 Benefits & ROI

- **95% Time Reduction**: Automated job discovery vs manual searching
- **Multi-Source Coverage**: Access 3 major job platforms simultaneously  
- **Mobile Accessibility**: Search jobs anywhere using Telegram mobile app
- **Real-Time Alerts**: Never miss new opportunities with instant notifications
- **Data Organization**: Automatic spreadsheet management for job tracking
- **Market Intelligence**: Comprehensive job market analysis and trends

## 🚀 Advanced Customization

- **Custom Keywords**: Modify filtering logic for specific industries
- **Location Targeting**: Adjust geographic search parameters
- **Experience Levels**: Fine-tune senior/mid/entry level detection
- **Additional Platforms**: Easily add more job boards via HTTP requests
- **Notification Scheduling**: Set up periodic automated job alerts
- **Team Integration**: Deploy for multiple users or team channels

## 💡 Use Cases

- **Individual Job Seekers**: Personal job hunting assistant
- **Recruitment Agencies**: Streamlined candidate sourcing
- **Sales Teams**: Territory-specific opportunity monitoring  
- **Marketing Departments**: Industry trend analysis and competitor tracking
- **Career Coaches**: Client job market research and opportunity identification

Ready to revolutionize your job search? Deploy this workflow and start receiving personalized job opportunities directly in Telegram!

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Telegram, Telegram Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
