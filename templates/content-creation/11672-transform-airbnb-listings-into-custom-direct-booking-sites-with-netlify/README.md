# 🎬 Transform Airbnb listings into custom direct booking sites with Netlify

> ⚡ **216 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Direct Booking Site Generator Workflow
This workflow instantly transforms any Airbnb listing into a polished, mobile-ready direct booking site hosted on the Netlify platform.


## Requirements
### 1. Install the Airbnb Scraper Node
This workflow depends on the community package [`n8n-nodes-airbnb-scraper`](https://www.npmjs.com/package/n8n-nodes-airbnb-scraper). Install it on your n8n instance (Settings → Community Nodes) before importing the workflow.

### 2. Generate the Required API Tokens
| Credential | Purpose | Where to create it |
| --- | --- | --- |
| **Airbnb Scraper API Token** | Authenticates the `Airbnb Scraper` node so it can fetch listing data. | Sign up at [scraper.shortrentals.ai](https://scraper.shortrentals.ai/) and copy your API token from the dashboard.
| **Netlify Personal Access Token** | Allows the workflow to create sites and deploy ZIP assets through the Netlify API. | Go to [Netlify User Settings → Applications → Personal access tokens](https://app.netlify.com/user/applications#personal-access-tokens) and generate a token with *Deploy sites* permissions.

Store both tokens as credentials in n8n (`Airbnb Scraper API` and `Netlify API Token`) before executing the workflow.

## How the Workflow Works
1. **Manual Trigger & Listing Input** – Provide any Airbnb `listingId` and run the workflow.
2. **Data Collection** – `n8n-nodes-airbnb-scraper` pulls rich listing data (photos, amenities, host details, pricing, reviews, etc.).
3. **Static Site Generation** – The `Generate HTML Site` node transforms that data into a premium, mobile-responsive landing page with sticky booking card, amenities grid, gallery, and shortrentals.ai credit.
4. **ZIP Packaging** – `Prepare Binary` and `Create ZIP` convert the HTML into a Netlify-ready archive (rooted `index.html`).
5. **Netlify Deploy** –
   - `Create Netlify Site` spins up a new site (unique subdomain per run).
   - `Deploy ZIP` uploads the packaged site via Netlify’s deploy API.
6. **Output** – The final node returns the public URL, admin dashboard link, site ID, and deploy metadata so you can verify or reuse the site later.

## Need More Functionality?
If you require conversion-ready sites with payments, Calendar Sync sync, or Booking engine, head to **[sitebuilder.shortrentals.ai](https://sitebuilder.shortrentals.ai/)** to explore the full product suite.

## Questions or Custom Builds?
- Visit **[shortrentals.ai](https://shortrentals.ai/)** for product info and tutorials.
- Reach our team anytime at **hello@shortrentals.ai**.

Happy hosting! 🚀

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
