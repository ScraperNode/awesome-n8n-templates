# 📊 Monitor .my domains with MYNIC RDAP and send alerts via Gmail and Discord

> ⚡ **4 views** · 📊 [Market Research & Insights](../)

## Description

Secure your perfect Malaysian identity with the Khaisa Domain Sniper. This n8n workflow monitors specific .my domains using the free MYNIC RDAP API, instantly triggering Gmail and Discord alerts the moment a domain becomes available for registration, ensuring you never miss a high-value branding opportunity again.

## Why Use This Workflow?

**Time Savings:** Eliminates the need for manual WHOIS lookups, saving roughly 2 hours of repetitive checking per week.  

**Error Prevention:** Automated 24/7 monitoring ensures you are notified within 30 minutes of a domain status change, preventing competitors from "sniping" your target.  

**Scalability:** Effortlessly monitor a list of 10, 50, or 100+ domains by simply adding rows to a Google Sheet.

## Ideal For

- **Digital Agencies:** Monitor expiring client brand names or high-value industry keywords for SEO benefits.
- **Startup Founders:** Secure the perfect .my or .com.my domain for a new venture as soon as it is released.
- **Domain Investors:** Automate the "sniping" process for expired Malaysian domains to build a valuable portfolio.

## How It Works

1. **Trigger:** A scheduled trigger initiates the process every 30 minutes.
2. **Data Collection:** The workflow pulls a list of target domains from a Google Sheet where the status is marked as "no" (not available).
3. **Processing:** A loop iterates through each domain, preparing individual requests.
4. **Intelligence Layer:** The workflow queries the official MYNIC RDAP public API to check the real-time registration status.
5. **Output & Delivery:** If the API confirms availability, the system sends a professionally styled HTML email via Gmail and a notification to a Discord channel.
6. **Storage & Logging:** The Google Sheet is automatically updated to "yes" for available domains to prevent duplicate alerts.

## Setup Guide

### Prerequisites

| Requirement | Type | Purpose |
|-------------|------|---------|
| [n8n instance](https://n8n.partnerlinks.io/khmuhtadin) | Essential | Workflow execution platform |
| Google Sheets | Essential | Central database for target domains |
| Gmail Account | Essential | To send stylized HTML availability alerts |
| Discord Bot | Optional | For instant push notifications to your team |
| MYNIC RDAP | Public | No API key required for .my domain lookups |

### Installation Steps

1. Import the JSON file to your [n8n instance](https://n8n.partnerlinks.io/khmuhtadin)
2. **Configure credentials:**
   - **Google Sheets:** Connect your Google account and select your "Domain Target" spreadsheet.
   - **Gmail:** Authenticate the Gmail node to allow the system to send alerts from your address.
   - **Discord:** Add your Bot Token and Channel ID if you wish to receive Discord alerts.
3. **Prepare your Google Sheet:**
   - Create two columns: `Domain` and `isAvailable`.
   - Add your target domains (e.g., `brandname.my`) and set `isAvailable` to `no`.
4. **Customize settings:**
   - Adjust the **Schedule Trigger** to your preferred frequency (e.g., every 15 or 30 minutes).
5. **Test execution:**
   - Run the workflow manually with one "available" test domain to confirm the email and Discord formatting.

## Technical Details

### Core Nodes

| Node | Purpose | Key Configuration |
|------|---------|-------------------|
| RDAP: Check Status | Fetch API Data | Uses `https://rdap.mynic.my/rdap/domain/{domain}` |
| Domain Available? | Logic Gate | Checks if response contains "is available for registration" |
| Gmail Alert | Notification | Sends custom HTML template with "Register Now" button |
| Update Sheet | Data Sync | Switches `isAvailable` to `yes` upon discovery |

### Workflow Logic

The workflow uses a "Split in Batches" approach combined with a 10-second **Wait Node**. This is critical for performance as it prevents hitting MYNIC rate limits when checking long lists of domains, ensuring high reliability and preventing your IP from being temporarily blocked.

## Customization Options

**Basic Adjustments:**
- **Check Frequency:** Change the cron schedule from 30 minutes to 5 minutes for high-priority domains.
- **Wait Duration:** Increase the 10-second wait if you are monitoring more than 100 domains in a single run.

**Advanced Enhancements:**
- **Auto-Registration:** Connect a registrar API (like OpenSRS or Hexonet) to automatically attempt registration.
- **Multi-Extension:** Expand the logic to check .com, .net, or .io domains by adding conditional URL logic for different RDAP providers.

## Performance & Optimization

| Metric | Expected Performance | Optimization Tips |
|--------|---------------------|-------------------|
| Execution time | ~12s per domain | Parallel processing can be enabled for small lists |
| API calls | 1 per domain | Only processes domains marked as `isAvailable = no` |
| Error handling | "Never Error" active | HTTP node is set to continue even if the API times out |

## Troubleshooting

**Common Issues:**

| Problem | Cause | Solution |
|---------|-------|----------|
| 429 Too Many Requests | Checking too fast | Increase the time in the **Wait 10 Seconds** node |
| Gmail Authentication Error | Token expired | Re-connect your Google OAuth2 credentials |
| Sheet not updating | Column name mismatch | Ensure headers in GSheets match the node mapping exactly |

## Use Case Examples

### Scenario 1: Brand Protection
**Challenge:** A competitor currently owns a .my domain that matches your .com brand, and you are waiting for it to expire.  
**Solution:** This workflow monitors the domain 24/7 and alerts your legal team the moment it hits the "Available" status.  
**Result:** You secure your local brand identity without paying a premium to a domain broker.

### Scenario 2: Professional Domain Flipping
**Challenge:** You have a list of 50 high-value keywords you want to acquire as they drop from the registry.  
**Solution:** Add the list to Google Sheets. The workflow checks them every 30 minutes and notifies your Discord "Sniper" channel.  
**Result:** You are always the first to know, allowing you to register prime digital real estate before others.

---

**Created by:** [Khaisa Studio](https://khaisa.studio)  
**Category:** Productivity | **Tags:** Domain, Automation, Monitoring, MYNIC, RDAP  
**Need custom workflows?** [Contact us](https://khaisa.studio/contact)

**Connect with the creator:**  
[Portfolio](https://khmuhtadin.com) • [Workflows](https://khaisa.studio/products/) • [LinkedIn](https://www.linkedin.com/in/khmuhtadin/) • [Medium](https://medium.com/@khaisastudio) • [Threads](https://www.threads.com/@khmuhtadin)

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, Discord, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
