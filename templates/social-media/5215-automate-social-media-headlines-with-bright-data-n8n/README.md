# 📱 Automate social media headlines with Bright Data & n8n

> ⚡ **601 views** · 📱 [Social Media & Email Marketing](../)

## Description

# 
## Description

This workflow automatically finds trending headlines and content from various sources and posts them to your social media accounts. It helps maintain an active social media presence without the daily manual effort of content curation.

## Overview

This workflow automatically scrapes trending headlines and content from various sources and posts them to your social media accounts. It uses Bright Data to access content and n8n to schedule and post to platforms like Twitter, LinkedIn, or Facebook.

### Tools Used

*   **n8n:** The automation platform that orchestrates the workflow.
*   **Bright Data:** For scraping trending content from news sites, blogs, or other sources without getting blocked.
*   **Social Media APIs:** To post content to your accounts.

## How to Install

1.  **Import the Workflow:** Download the `.json` file and import it into your n8n instance.
2.  **Configure Bright Data:** Add your Bright Data credentials to the Bright Data node.
3.  **Connect Social Media:** Authenticate your social media accounts.
4.  **Customize:** Set your content preferences, posting schedule, and hashtag strategy.

## Use Cases

*   **Social Media Managers:** Automate content curation and posting.
*   **Content Creators:** Share trending topics in your niche.
*   **Businesses:** Maintain an active social media presence with minimal effort.

---

## Connect with Me

*   **Website:** [https://www.nofluff.online](https://www.nofluff.online)
*   **YouTube:** [https://www.youtube.com/@YaronBeen/videos](https://www.youtube.com/@YaronBeen/videos)
*   **LinkedIn:** [https://www.linkedin.com/in/yaronbeen/](https://www.linkedin.com/in/yaronbeen/)
*   **Get Bright Data:** [https://get.brightdata.com/1tndi4600b25](https://get.brightdata.com/1tndi4600b25) (Using this link supports my free workflows with a small commission)

#n8n #automation #socialmedia #brightdata #contentcuration #scheduling #socialmediaautomation #contentmarketing #socialmediamanagement #autoposting #trendingcontent #n8nworkflow #workflow #nocode #socialmediatools #digitalmarketing #contentcalendar #socialmediapresence #headlinecuration #trendalerts #socialmediaschedule #contentautomation #socialmediamarketing #contentdistribution #automatedposting #socialmediastrategy

## 🔗 Nodes Used

HTTP Request, X (Formerly Twitter), LinkedIn, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
