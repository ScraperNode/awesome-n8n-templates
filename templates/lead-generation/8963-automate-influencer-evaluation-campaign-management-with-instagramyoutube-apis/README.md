# 🎣 Automate influencer evaluation & campaign management with Instagram/YouTube APIs

> ⚡ **952 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

# Automated Influencer Campaign Management System

A comprehensive **n8n workflow template** for streamlining influencer application processing with **real-time social media data validation**, **intelligent scoring algorithms**, and **automated onboarding workflows**.

---

## Who’s It For

* Marketing agencies managing high-volume influencer applications
* Brand marketing teams screening social media creators
* Influencer platforms automating creator onboarding
* Digital marketing consultants reducing manual workload
* E-commerce brands building creator partnerships
* Social media management companies scaling operations

---

## How It Works

1. Capture influencer applications via **Webhook** (connected to forms/websites).
2. Validate applicant emails using **VerifiEmail** to prevent fake submissions.
3. Fetch real-time social data from **Instagram (via Instagram120 API)** and **YouTube (via YouTube138 API)**.
4. Calculate **engagement scores** using a weighted algorithm (Instagram 60% + YouTube 40%).
5. Auto-approve qualified influencers based on follower count & engagement thresholds.
6. Log approved applications in **Google Sheets** with complete metrics.
7. Send **personalized welcome emails** with campaign information & next steps.
8. Reject low-quality applications with detailed reasoning (for internal tracking).
9. Generate **scoring breakdown** with platform-specific analytics & tier classification.
10. Track **application volume and approval rates** for performance optimization.

**Offers:** Real-time API integration, intelligent scoring, automated actions, scalable processing.

---

## 🛠️ How to Set Up

1. Connect your application form to Webhook:

   ```http
   POST → https://[your-n8n-url]/webhook/influencer-signup
   ```
2. Sign up for **RapidAPI** and subscribe to **Instagram120 + YouTube138 APIs**.
3. Get **VerifiEmail API key** (100 free verifications/month).
4. Configure **Gmail OAuth2** in Google Cloud Console for email automation.
5. Create a **Google Sheets database** for approved influencer storage.
6. Add credentials in n8n: RapidAPI, VerifiEmail, Gmail, Google Sheets.
7. Customize **scoring thresholds** & **email templates** in Function nodes.
8. Test with sample data:

   ```json
   {
     "name": "Test Creator",
     "email": "test@gmail.com",
     "social_handles": {
       "instagram": "testuser",
       "youtube": "testchannel"
     },
     "niche": "fitness",
     "rate_card": 500
   }
   ```

---

## Requirements

* **n8n instance** (cloud or self-hosted)
* **API credentials**:

  * RapidAPI (Instagram120 + YouTube138 APIs)
  * VerifiEmail
  * Gmail OAuth2
  * Google Sheets access
* **Form/website integration** → sends webhook data
* **Google Sheets** for database & reporting

---

## RapidAPI Integration Details

### Instagram120 API

* **Pricing Plans:**

  * Free: 1,000 requests/month
  * Pro: 10,000 requests/month ($10/mo)
  * Ultra: 100,000 requests/month ($50/mo)
* **n8n Example:**

  ```json
  {
    "method": "POST",
    "url": "https://instagram120.p.rapidapi.com/api/instagram/profile",
    "headers": {
      "X-RapidAPI-Host": "instagram120.p.rapidapi.com",
      "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
      "Content-Type": "application/json"
    },
    "body": {
      "username": "{{ $('Data Sanitizer').item.json.social_handles.instagram }}"
    }
  }
  ```

### YouTube138 API

* **Pricing Plans:**

  * Free: 1,000 requests/month
  * Pro: 10,000 requests/month ($15/mo)
  * Ultra: 100,000 requests/month ($75/mo)
* **n8n Example:**

  ```json
  {
    "method": "GET",
    "url": "https://youtube138.p.rapidapi.com/channel/details",
    "headers": {
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY"
    },
    "queryParameters": {
      "id": "{{ $('Webhook').item.json.body.social_handles.youtube }}",
      "hl": "en",
      "gl": "US"
    }
  }
  ```

---

## Core Features

* **Social Media Validation**

  * Instagram follower counts, engagement, verification
  * YouTube subscriber counts, channel stats
  * Cross-platform scoring algorithm
  * Fraud prevention via email validation

* **Intelligent Scoring**

  * Multi-tier classification (Nano, Micro, Macro, Mega)
  * Engagement analysis per platform
  * Customizable approval thresholds

* **Automation Actions**

  * Auto-approve/reject with reasoning
  * Store results in Google Sheets
  * Send onboarding emails
  * Track performance stats

---

## Use Cases & Applications

* **Marketing Agencies** → Process 100+ daily influencer applications automatically
* **Brands** → Validate influencer metrics before partnerships
* **Platforms** → Qualify creators for platform admission automatically
* **E-commerce** → Build authentic influencer partnerships

---

## Key Benefits

✔️ Saves 80-90% processing costs
✔️ Cuts manual review time from **15 minutes → 30 seconds**
✔️ Prevents fraud with real-time validation
✔️ Scales infinitely with no extra staffing

---

## Technical Specifications

* **Execution time:** 30–45 sec per application
* **Throughput:** 100+ applications/hour
* **Success rate:** 95%+ valid applications
* **Cost:** ~$0.05–$0.15 per application

---

## ROI & Cost Breakdown

* **Manual:** $15–25/hour human review
* **Automated:** $0.05–0.15/application
* **Savings:** 80–90% at scale
* **Break-even:** 50–100 apps/month

---

## Integration Example

```javascript
// Example website form submission
fetch('https://your-n8n-instance.com/webhook/influencer-signup', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(formData)
});
```

Sample Application Data:

```json
{
  "name": "Sarah Johnson",
  "email": "sarah.fitness@gmail.com",
  "social_handles": {
    "instagram": "sarahfitlife",
    "youtube": "SarahFitnessJourney"
  },
  "niche": "fitness",
  "country": "US",
  "rate_card": 750
}
```

---

## Installation

1. Import workflow JSON file into n8n
2. Add API credentials (RapidAPI, VerifiEmail, Gmail, Sheets)
3. Configure Sheets with correct columns
4. Customize scoring & emails
5. Test with sample apps
6. Activate workflow

---

## Disclaimers

* Requires paid **RapidAPI plans** for scale
* API rate limiting applies
* Data accuracy depends on APIs
* Ensure **GDPR/CCPA compliance** before production
* Always test before live deployment

---

## License

This template is provided **as-is** for educational and commercial use.
Users are responsible for ensuring compliance with laws, platform TOS, and data privacy rules.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
