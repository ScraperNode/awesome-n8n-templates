# 🎣 Auto-schedule demos for high-intent leads with Clearbit, Slack, and Calendly

> ⚡ **128 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## This workflow automatically captures, enriches, scores, and routes website leads in real-time, scheduling high-intent prospects for demos within minutes instead of hours—dramatically improving conversion rates by eliminating response delays.

### **What Makes This Different:**
- **Real-Time Lead Processing** - Captures and processes leads instantly from website forms with zero delay
- **Intelligent Fit Scoring** - Automatically scores leads 0-100 based on company size, seniority, and revenue
- **Dual-Track Routing** - High-intent leads (60+) get fast-track treatment, others follow standard nurture
- **Live Calendar Integration** - Shows actual available Calendly slots, not fake placeholders
- **Automated Sales Alerts** - Posts rich lead details to Slack with booking links instantly
- **Smart Follow-Up** - Sends fallback email if sales team doesn't respond within 10 minutes
- **Complete CRM Automation** - Creates HubSpot contacts and deals automatically with enriched data
- **Full Audit Trail** - Logs everything to Google Sheets for analytics and reporting

### **Key Benefits of Instant Lead Response:**
- **Speed** - Minutes from form submission to scheduled demo, not hours or days
- **Conversion** - Respond while leads are hot, dramatically improving booking rates
- **Automation** - Zero manual work—enrichment, scoring, routing, and follow-up all automatic
- **Intelligence** - Data-driven scoring ensures sales focuses on best-fit prospects
- **Accountability** - Complete logging shows response times and follow-up actions
- **Scalability** - Handles unlimited lead volume without adding sales admin work

---

## Who's it for

This template is designed for **B2B SaaS companies, sales teams, and revenue operations professionals** who need to convert website leads faster. It's perfect for organizations that lose deals due to slow response times, want to prioritize high-intent prospects, need to automate CRM data entry, or want to ensure no hot lead falls through the cracks while sales is busy.

## How it works / What it does

This workflow creates an **end-to-end lead-to-meeting pipeline** that automatically processes inbound leads and schedules high-intent prospects for demos. The system:

1. **Receives lead submissions** via webhook from website forms or chat widgets
2. **Normalizes data** from different form providers into a standard format
3. **Enriches contact information** using Clearbit to get company size, revenue, job title, and industry
4. **Calculates fit score** (0-100) based on company metrics: size (40 pts), seniority (30 pts), revenue (30 pts)
5. **Routes intelligently** - High-intent leads (60+) → fast track | Standard leads → nurture channel
6. **Creates CRM records** - Automatically creates/updates HubSpot contact and deal with enriched data
7. **Fetches real availability** - Gets actual available Calendly demo slots via API (next 7 days)
8. **Alerts sales team** - Posts formatted message to Slack with lead details and booking links
9. **Monitors response** - Waits 10 minutes and checks if sales replied in Slack thread
10. **Sends fallback email** - Automatically emails lead with self-service booking link if no response
11. **Logs everything** - Records all data to Google Sheets for reporting and analytics

**Key Innovation: Smart Follow-Up Automation** - Unlike basic lead capture workflows, this system ensures accountability by automatically following up with leads if the sales team is unavailable, preventing lost opportunities while maintaining a professional response time.

## How to set up

### 1. Configure API Credentials
Add the following credentials in n8n:

**Clearbit** (Lead Enrichment)
- Create account at clearbit.com
- Generate API key from Settings → API
- Add as "Clearbit API" credential in n8n

**HubSpot** (CRM Integration)
- Create private app in HubSpot Settings → Integrations → Private Apps
- Grant scopes: `crm.objects.contacts.write`, `crm.objects.deals.write`
- Copy app token
- Add as "HubSpot App Token" credential in n8n

**Calendly** (Calendar Availability)
- Create OAuth app at calendly.com/integrations/api_webhooks
- Configure OAuth2 credentials in n8n
- Set environment variable: `CALENDLY_USER_URI` with your user URI
  - Get this from: `https://api.calendly.com/users/me` (returns your user URI)

**Slack** (Team Notifications)
- Create Slack app at api.slack.com/apps
- Add Bot Token Scopes: `channels:read`, `chat:write`, `channels:history`
- Install app to workspace and copy Bot User OAuth Token
- Add as "Slack API" credential in n8n
- Update channel names in nodes: change "hot-leads" and "leads" to your actual channel names

**SendGrid** (Email Fallback)
- Create account at sendgrid.com
- Generate API key from Settings → API Keys
- Verify sender email address
- Add as "SendGrid API" credential in n8n
- Update "from" email in "Send Fallback Email" node

**Google Sheets** (Activity Logging)
- Create Google Cloud project and enable Sheets API
- Configure OAuth2 credentials in n8n
- Create a Google Sheet with columns matching the workflow
- Replace `YOUR_GOOGLE_SHEET_ID` in "Log to Google Sheets" node with your actual sheet ID

### 2. Customize Fit Scoring Logic
Edit the "Calculate Fit Score" node to match your ideal customer profile:

**Default Scoring:**
- Company size 50-5,000 employees = 40 points
- Executive/Director seniority = 30 points  
- Annual revenue ≥ $1M = 30 points
- **Total possible:** 100 points | **High-intent threshold:** 60+ points

**To Customize:**
- Adjust company size ranges based on your target market
- Change seniority requirements (C-level, VP, Manager, etc.)
- Modify revenue thresholds
- Update the 60-point threshold for high-intent routing

### 3. Set Up Webhook Endpoint
**Get Webhook URL:**
- Activate the workflow
- Copy webhook URL from "Lead Form Webhook" node
- URL format: `https://your-n8n-instance.com/webhook/demo-request`

**Configure Form Provider:**
- Point your website form POST request to the webhook URL
- Send JSON body with fields: `email`, `name`, `company`, `phone`, `utm_source`, `utm_campaign`, `page_url`, `message`
- Or map your existing form fields to these names in "Normalize Lead Data" node

**Example Form Integration:**
```javascript
// HTML Form
fetch('https://your-n8n.com/webhook/demo-request', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    email: 'lead@company.com',
    name: 'John Doe',
    company: 'Acme Inc',
    phone: '+1234567890',
    utm_source: 'google',
    page_url: window.location.href
  })
})
```

### 4. Test the Workflow
**Initial Test:**
1. Activate the workflow
2. Submit test lead via webhook (use Postman or curl)
3. Verify Clearbit enrichment returns data
4. Check HubSpot for created contact and deal
5. Confirm Slack notification appears in correct channel
6. Verify Google Sheet receives log entry

**Response Test:**
1. Wait 10 minutes after Slack notification
2. Check if "Check Slack Replies" detects no response
3. Verify fallback email sends via SendGrid
4. Confirm lead receives booking email with Calendly link

**Calendly Test:**
1. Verify "Get Calendly Event Types" finds your Demo event
2. Check "Get Available Demo Slots" returns actual time slots
3. Confirm booking URLs work and pre-fill time selection

### 5. Monitor and Optimize
**Key Metrics to Track:**
- Time from form submission to Slack notification (target: &lt;30 seconds)
- Sales response rate within 10 minutes
- Fallback email send rate (lower is better)
- High-intent lead conversion rate (booked → closed)
- Average fit score of closed deals

**Optimization Tips:**
- Adjust fit score weights based on actual conversion data
- Tune the 60-point threshold for high-intent routing
- Customize Slack message format for your team's workflow
- Modify wait time (10 minutes) based on team availability
- Add custom fields to Google Sheet for additional tracking

## Requirements

**n8n Instance:**
- n8n Cloud or self-hosted (v1.0+)
- Code node execution enabled
- Webhook functionality active

**External Services:**
- **Clearbit** - Enrichment API (paid service, free trial available)
- **HubSpot** - CRM with API access (free tier available)
- **Calendly** - Scheduling platform with API access (paid plans)
- **Slack** - Workspace with bot integration capability
- **SendGrid** - Email API (free tier: 100 emails/day)
- **Google Sheets** - Google account with Sheets API enabled

**Technical Requirements:**
- Public webhook endpoint (HTTPS)
- Environment variable support for sensitive data
- OAuth2 authentication capability
- Minimum 256MB RAM for code node execution

**Data Privacy:**
- Ensure GDPR/CCPA compliance for lead data storage
- Review data retention policies for all connected services
- Configure appropriate data handling in Google Sheets
- Add privacy policy link to email templates

## Tips and best practices

**Fit Scoring:**
- Start with default scoring, then optimize based on actual conversion data
- Review monthly: which scores convert best? Adjust weights accordingly
- Consider adding industry filters for vertical-specific targeting
- Test different thresholds (50, 60, 70) to find optimal balance

**Lead Response:**
- Keep 10-minute wait time during business hours
- Consider longer wait for after-hours leads (use schedule trigger)
- Customize Slack urgency based on fit score (🔥 for 80+, ⚡ for 60-79)
- Add @mentions in Slack for specific team members based on lead attributes

**Calendar Management:**
- Use dedicated "Demo" event type in Calendly for consistent detection
- Ensure event name includes "demo" (case-insensitive) for workflow to find it
- Set appropriate buffer times between meetings in Calendly settings
- Review availability regularly to maintain high slot count

**Error Handling:**
- All critical nodes have `onError: continueRegularOutput` to prevent workflow stops
- Monitor execution logs daily for failed enrichments or CRM errors
- Set up n8n error workflow to alert on consistent failures
- Keep fallback booking URL updated in case Calendly API fails

**Performance:**
- Webhook responds immediately (within 2 seconds) even while processing continues
- Clearbit enrichment can take 3-5 seconds—this is expected
- Consider batching Google Sheets updates if processing &gt;100 leads/day
- Monitor n8n resource usage; Code nodes can be memory-intensive

**Privacy and Compliance:**
- Add unsubscribe link to fallback emails
- Include data handling disclosure in form
- Set Google Sheet permissions appropriately (team only)
- Review Clearbit's data sources for compliance requirements
- Configure data retention in HubSpot to match your policy

**Customization Ideas:**
- Add SMS notification for ultra-high fit scores (90+)
- Integrate with territory routing (route to specific sales rep by region)
- Add lead source scoring (paid &gt; organic &gt; referral)
- Create separate tracks for different product lines
- Build competitor mention detection in form messages
- Add qualification questions that influence fit score

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, HubSpot, Clearbit

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
