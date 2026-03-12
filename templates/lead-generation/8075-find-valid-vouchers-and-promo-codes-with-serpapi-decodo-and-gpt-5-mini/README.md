# 🎣 Find valid vouchers and promo codes with SerpAPI, Decodo, and GPT-5 Mini

> ⚡ **434 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Promo Seeker finds fresh, working promo codes and vouchers on the web so your team never misses a deal. 

This n8n workflow uses SerpAPI and Decodo Scrapper for real-time search, an agent powered by GPT-5 Mini for filtering and validation, and Chat Memory to keep context—saving time, reducing manual checks, and helping marketing or customer support teams deliver discounts faster to customers (and yes, it's better at hunting promos than your inbox).

## 💡 Why Use Promo Seeker?

**Speed:** Saves hours per week by automatically finding and validating current promo codes, so you can publish deals faster.  
**Simplicity:** Eliminates manual searching across sites, no more copy-paste scavenger hunts.  
**Accuracy:** Reduces false positives by cross-checking results and keeping only working vouchers—fewer embarrassed "expired code" moments.  
**Edge:** Combine search APIs with an AI agent to surface hard-to-find, recently-live offers—win over competitors who still rely on manual scraping.

## ⚡ Perfect For

**Marketing teams:** Quickly populate newsletters, landing pages, or ads with valid promos.  
**Customer support:** Give verified discount codes to users without ping-ponging between tabs.  
**Deal aggregators & affiliates:** Discover fresh vouchers faster and boost conversion rates.

## 🔧 How It Works

**⏱ Trigger:** A user message via the chat webhook starts the search (Message node).  
**📎 Process:** The agent queries SerpAPI and Decodo Scrapper to collect potential promo codes and voucher pages.  
**🤖 Smart Logic:** The Promo Seeker Agent uses GPT-5 Mini with Chat Memory to filter for fresh, working promos and to verify validity and relevance.  
**💌 Output:** Results are returned to the chat with clear, copy-ready promo codes and source links.  
**🗂 Storage:** Chat Memory stores context and recent searches so the agent avoids repeating old results and can follow up with improved queries.

## 🔐 Quick Setup

1. Import JSON file to your [n8n instances](https://n8n.partnerlinks.io/khmuhtadin)  
2. **Add credentials:** SerpAPI, Azure OpenAI (Gpt 5 Mini), Decodo API  
3. **Customize:** Search parameters (brands, regions, validity window), agent system message, and result formatting  
4. **Update:** Azure OpenAI endpoint and API key in the Gpt 5 Mini credentials; add your SerpAPI key and Decodo key  
5. **Test:** Run a few queries like "latest Amazon promo" or "food delivery voucher" and confirm returned codes are valid

## 🧩 You'll Need

- Active [n8n instances](https://n8n.partnerlinks.io/khmuhtadin)  
- SerpAPI account and API key  
- Azure OpenAI (for GPT-5 Mini) with key and endpoint  
- [Decodo](decodo.com) account/API key  

## 🛠️ Level Up Ideas

- Push verified promos to a Slack channel or email digest for the team.  
- Add scheduled scans to detect newly expired codes and remove them from lists.  
- Integrate with a CMS to auto-post verified deals to landing pages.

**Made by:** [khaisa Studio](https://khaisa.studio)  
**Tags:** `promo, vouchers, discounts`  
**Category:** `Marketing Automation`  
**Need custom work?** [Contact Us](https://khaisa.studio/contact)

## 🔗 Nodes Used

AI Agent, Simple Memory, SerpApi (Google Search), Chat Trigger, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
