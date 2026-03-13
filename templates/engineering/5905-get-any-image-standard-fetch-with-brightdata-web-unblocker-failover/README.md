# ⚒️ Get any image: standard fetch with BrightData Web Unblocker failover

> ⚡ **276 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow is your ultimate solution for **reliable image retrieval from any web source**, including those heavily protected. 

It operates with a smart, cost-effective strategy: it first attempts to fetch the image using a **Classic Image Getter** node (a standard, free HTTP request). In approximately **80% of cases**, this method will be sufficient. 

However, for the remaining instances where you encounter **IP blocking, CAPTCHAs, rate limiting, or other advanced anti-bot measures**, the workflow seamlessly switches to a robust **BrightData Web Unblocker** service as a fallback. It leverages [BrightData’s Image Unblocker](https://get.brightdata.com/image-unlocker) to retrieve these **blocked images**.

This template is indispensable for anyone needing consistent and complete access to web images, ensuring you get the data you need without unnecessary overhead.

---

## Why Use This Image Scrapper Workflow?
* **Maximum Success Rate**: Retrieves images even from the most challenging or protected websites.
* **Cost-Optimized Strategy**: Prioritizes free, standard HTTP requests, only incurring costs when advanced unblocking is truly necessary.
* **Automated Resilience**: Intelligently handles failed direct attempts by automatically engaging the BrightData failover via the "Unlock Image" node.
* **Versatile Image Scraping**: Perfect for market research, content aggregation, or data enrichment that demands reliable image access.

---

## How It Works

1.  **When clicking ‘Execute workflow’**: The workflow is initiated manually, allowing for easy testing and integration into larger processes.
2.  **image**: A `Set` node defines the target image URL. This can be easily configured to accept dynamic URLs from preceding nodes.
3.  **Classic Image Getter**: This `HTTP Request` node performs a direct image download. It's the primary, free, and efficient method for readily accessible images.
4.  **Unlock Image (BrightData Web Unblocker)**: Configured as an **error handler** and **failover**, this `HTTP Request` node activates only if the "Classic Image Getter" encounters an error. It then routes the image URL through BrightData's Web Unblocker, designed to bypass advanced protective measures and successfully retrieve the image data.

---

## 🔑 Prerequisites

To enable the advanced capabilities of this workflow, specifically the **BrightData Web Unblocker** functionality, you will need a BrightData account and a correctly configured Web Unblocker zone.

### Setting Up Your BrightData Web Unblocker:

1.  **BrightData Account**: Ensure you have an active account with BrightData. If you don't, you can sign up on their [website](https://get.brightdata.com/image-unlocker).
2.  **Create a Web Unblocker Zone**:
    * Log in to your BrightData dashboard.
    * Navigate to the "Proxy & Scraping Infrastructure" section, then "Zones."
    * Click "Add new zone."
    * Select "Web Unblocker" as the product type.
    * Give your zone a clear name (e.g., `n8n-image-unlocker`).
    * Confirm the creation of the zone.
3.  **Retrieve API Key**:
    * Once your Web Unblocker zone is active, go to its settings.
    * Locate your API Key (often referred to as "password" for proxy access) within the "Access Parameters" or "Credentials" section.
4.  **Configure in n8n**:
    * In the **Unlock Image** HTTP Request node within this workflow, update the `Authorization` header. Replace `"Bearer yourkey"` with `"Bearer YOUR_BRIGHTDATA_API_KEY"`.
    * **Important**: For production workflows, it's highly recommended to use [n8n credentials](https://docs.n8n.io/integrations/builtin/credentials/) to store your BrightData API key securely, rather than hardcoding it directly in the node. This template uses a placeholder for demonstration purposes.
    * **Crucially**, ensure that the `zone` parameter in the `Unlock Image` node matches the **exact Zone ID** you created in your BrightData account. You will need to replace the placeholder `web_unlocker` with your actual BrightData zone ID.

---

[Phil | Inforeole](https://inforeole.fr) | [Linkedin](https://www.linkedin.com/in/philippe-eveilleau-inforeole/)

🇫🇷 Contactez nous pour automatiser vos processus

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
