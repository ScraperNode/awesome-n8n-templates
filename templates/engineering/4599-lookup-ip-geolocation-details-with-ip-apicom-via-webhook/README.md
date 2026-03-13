# ⚒️ Lookup IP geolocation details with IP-API.com via webhook

> ⚡ **1,376 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n template enables you to instantly retrieve detailed geolocation information for any given IP address by simply sending a webhook request. Leverage the power of IP-API.com to gain insights into user locations, personalize experiences, or enhance security protocols within your automated workflows.

---

# 🔧 How it works
- Receive IP Webhook: This node acts as the entry point, listening for incoming POST requests. It expects a JSON body containing an ip property with the IP address you wish to look up.
- Get IP Geolocation: This node makes an HTTP GET request to the IP-API.com service, passing the IP address from your webhook. The API responds with a comprehensive JSON object detailing the IP's location (country, city, region), ISP, organization, and more.
- Respond with Geolocation Data: This node sends the full geolocation data received from IP-API.com back to the service that initiated the webhook.

---

# 👤 Who is it for?
### This workflow is ideal for:

- Marketing & Sales Teams: Personalize website content, offers, or ads based on a visitor's geographic location. Tailor email campaigns by region.
- Customer Support: Quickly identify a customer's location to provide more localized or relevant assistance.
- Security & Fraud Detection: Analyze incoming connection IPs to identify suspicious activity, block known malicious regions, or flag potential fraud.
- Analytics & Reporting: Augment your analytics data with geographical insights about your users or traffic.
- Developers & Integrators: Easily add IP lookup functionality to custom applications, internal tools, or monitoring systems.
- Content Delivery Networks (CDNs): Route users to the closest servers for faster content delivery (though advanced CDNs usually handle this automatically).

---

# 📑 Data Structure
When you trigger the webhook, send a POST request with a JSON body structured as follows:

```
{
  "ip": "8.8.8.8" // Replace with the IP address you want to look up
}
```

The workflow will return a JSON response similar to this (data will vary based on IP):

```
{
  "status": "success",
  "country": "United States",
  "countryCode": "US",
  "region": "VA",
  "regionName": "Virginia",
  "city": "Ashburn",
  "zip": "20149",
  "lat": 39.0437,
  "lon": -77.4875,
  "timezone": "America/New_York",
  "isp": "Google LLC",
  "org": "Google Public DNS",
  "as": "AS15169 Google LLC",
  "query": "8.8.8.8"
}
```

---

# ⚙️ Setup Instructions
- Import Workflow: In your n8n editor, click "Import from JSON" and paste the provided workflow JSON.
- Configure Webhook Path:
  - Double-click the Receive IP Webhook node.
  - In the 'Path' field, set a unique and descriptive path (e.g., /ip-lookup).
- Activate Workflow: Save and activate the workflow.

---

# 📝 Tips
This workflow, while simple, is a powerful building block. Here's how you can make it even more useful:

- Conditional Logic: Add IF nodes after "Get IP Geolocation" to create conditional branches. For example:
  - If countryCode is 'CN' or 'RU', send an alert to your security team.
  - If city is 'New York', route the request to a specific sales representative.
- Data Enrichment: Integrate this workflow into larger automation. For instance:
  - When a new sign-up occurs, pass their IP address to this workflow, then save the returned geolocation data (country, city, ISP) alongside their user profile in your CRM or database.
  - For e-commerce, use the location data to pre-fill shipping fields or suggest local currency/language.
- Logging & Analytics: Store the lookup results in a spreadsheet (Google Sheets), database (PostgreSQL, Airtable), or logging service. This can help you track where your users are coming from over time.
- Rate Limiting: IP-API.com has rate limits for its free tier. If you anticipate high usage, consider adding a Delay node or implementing a caching mechanism with a Cache node to avoid hitting limits. For heavy use, you might need to upgrade to a paid plan.
- Dynamic Response: Instead of returning the full JSON, you could use a Function node to extract only specific pieces of information (e.g., just the country and city) and return a more concise response.
- Input Validation: For robust production use, add a Function node after the webhook to validate that the incoming ip value is indeed a valid IP address. If it's not, you can return an error message to the caller.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
