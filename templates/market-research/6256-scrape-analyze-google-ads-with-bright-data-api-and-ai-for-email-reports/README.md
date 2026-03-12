# 📊 Scrape & analyze Google Ads with Bright Data API and AI for email reports

> ⚡ **1,079 views** · 📊 [Market Research & Insights](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow is a gem for all PPC managers and experts out there looking to keep track of competitor ads and the campaigns they are running and generate an email report 
![image.png](fileId:1819)
How does it work
1. We use Bright Data API to scrap Google for a given keyword that can trigger an ad. We then extract and analyse different components of the ads to get insights and data rekevant for our processes 

Setting it up
1. Make a copy of this workflow to your canvas
2. Make a copy of this [google sheet](https://docs.google.com/spreadsheets/d/1QU9rwawCZLiYW8nlYYRMj-9OvAUNZoe2gP49KbozQqw/edit#gid=0)
3. Add high intent commercial keywords to your google sheet. These are relevant to trigger ads
4. Set your Bright Data API credentials and update the zone to your respective zone as set on your Bright Data account
5.  We filter only if ads are found and if true extract the top and botton ads
6. This routes the results via different paths

   1. Store raw Ad results
   2. Process the Ads to get new insights and data

7. Map the raw data to match your account
8. You can adjust the prompt to provide any data as needed
9. Connect your emailing platform or tool and update the to email

## Setting up Bright Data serp API and Zone

1. On Bright Data, go to the [Proxies & Scraping](https://brightdata.com/cp/zones) tab
2. Under SERP API, create a new zone
3. Give it a suitable name and description. The default is `serp_api`
3. Add this to your account
 
If you have any questions, feel free to reach out via [linkedin](https://www.linkedin.com/in/zacharia-kimotho/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Filter, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
