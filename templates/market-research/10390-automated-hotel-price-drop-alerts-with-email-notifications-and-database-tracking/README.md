# 📊 Automated hotel price drop alerts with email notifications and database tracking

> ⚡ **217 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow automatically tracks hotel room prices, detects price drops, and sends real-time email alerts with savings calculations. It continuously monitors multiple hotels and room types to help travelers, businesses, and agents secure the best rates.

### **Key Features**

* Automatically checks hotel prices every **6 hours**
* Monitors **multiple hotels and room categories**
* Detects and alerts when prices **drop**
* Compares **old vs new** pricing and highlights savings
* Sends **beautiful HTML email alerts**
* Logs price history for long-term insights
* Shows **availability changes** and urgency indicators

### **Price Drop Triggers**

Alerts are sent when:

* Price decreases by any amount
* Price drops by a certain percentage (configurable)
* Room becomes available again after being sold out

### **Email Alert Includes**

| Field                 | Details                         |
| --------------------- | ------------------------------- |
| Hotel Name & Location | ✅                               |
| Room Type & Plan      | ✅                               |
| Old Price             | Shown with **strikethrough**    |
| New Price             | Highlighted for visibility      |
| Savings Amount        | ₹ / $ value difference          |
| Savings %             | Percentage change               |
| Booking Link          | Direct hotel booking / OTA link |
| Urgency Badge         | Shows limited-time availability |

### **Workflow Logic**

1. **Schedule Trigger**
   Runs every **6 hours** (configurable)
2. **Fetch Hotel Price API**
   Calls hotel booking / OTA / aggregator API
3. **Compare With Stored Price**
   Retrieves previous price from database/storage
4. **Detect Price Drop & Availability Change**
5. **Save Latest Price**
   Updates price history record
6. **Send Email Alert**
   Sends formatted HTML email with price drop details
7. **Log Notification**
   Maintains complete log of events

### **Setup Requirements**

| Step | Action                                      |
| ---- | ------------------------------------------- |
| 1    | Schedule Trigger (cron: every 6 hours)      |
| 2    | Add Hotel API / scraping source credentials |
| 3    | Set up database or Google Sheet for storage |
| 4    | Configure SMTP for emails                   |
| 5    | Enter agent / user email address            |
| 6    | Populate hotel & room watchlist             |
| 7    | Test and verify price comparison logic      |

### **Best Use Cases**

* Travel agencies
* Corporate travel teams
* Personal trip planning
* Hotel revenue analysts
* Price intelligence dashboards

### **Extension Ideas**

* WhatsApp and Telegram alerts
* Push notifications to mobile apps
* Google Sheets dashboard
* Slack alerts for teams
* Price trend charts (Grafana / Google Charts)
* Integration with GPT for smart recommendations

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
