# 📊 Submit sitemap URLs from Oncrawl to Google Indexing API and IndexNow

> ⚡ **95 views** · 📊 [Market Research & Insights](../)

## Description

# Summary

This workflow enables the submission of business-critical URLs via the Google Indexing API and IndexNow.

Why is this important for SEO?

- If your objective is visibility within AI-powered search and answer engines (such as Copilot, Perplexity, or OpenAI tools), the IndexNow integration is particularly relevant. IndexNow accelerates URL discovery for Bing and Yandex, which are key retrieval sources for several LLM-based platforms.
- In parallel, Google remains the dominant search engine, representing ~80% of global search traffic. Gemini is deeply integrated into Google’s ecosystem and, when grounding is enabled, can leverage Google Search as an external retrieval source. Ensuring fast and reliable indexation of critical URLs therefore remains a strategic foundation for both traditional SEO and AI-assisted search experiences.

# Description

This workflow uses OnCrawl API endpoint to automatically discover your `sitemaps.xml` and submit their latest updates to both Google Indexing API and IndexNOW.

It includes two variations:

- Index orphan pages detected in `sitemap.xml` and submit them to Google and IndexNow.
- Index newly released pages by identifying indexable canonical URLs added between a pre-release crawl and a post-release crawl.

# How it works

This workflow works for Oncrawl users with API access enabled in their plan.

if you are not an Oncrawl users, please refer to: [https://n8n.io/workflows/8778-workflow-for-submitting-changed-sitemap-urls-using-google-indexing-api-and-bing-indexnow/](https://n8n.io/workflows/8778-workflow-for-submitting-changed-sitemap-urls-using-google-indexing-api-and-bing-indexnow/)

To get an API Key, just go in your User Account profile &gt; tokens &gt; + Add API access token:

- Description: any name
- Scope: select all checkboxes
- Click in Create token. Keep your API secret safe

## Discover & parse Sitemaps

- Create your first crawl by: Clicking in Create configuration &gt; choose a template &gt; Automate &gt; Webhook.
- Webhook Node: In n8n, copy paste the Webhook callback URL into the Oncrawl Webhook section. At the end, Oncrawl sends a POST HTTP request to n8n containing: `Workspace_ID`, `Project_ID`, `Crawl_ID`. More details in Webhook Documentation: [https://developer.oncrawl.com/#notification](https://developer.oncrawl.com/#notification)
- `Discover_sitemaps` endpoint:  documentation: [https://developer.oncrawl.com/](https://developer.oncrawl.com/). This endpoint checks the Sitemaps declared in your robots.txt file. You can filter the output to avoid duplicate sitemaps
- Config: It’s an initiation node that populate variables such as:
    - `Crawl_ID`: Fetch from Webhook Node
    - `SITE_URL`: Your site with the following format: https://your-site.com
    - `SITEMAP_URL`: For subdomain sitemaps, you can duplicate this field.
    - `INDEXNOW_KEY`: You can create it in the Bing Webmaster tools here [https://www.bing.com/indexnow/getstarted](https://www.bing.com/indexnow/getstarted)
    - `INDEXNOW_KEY_UR`L: it's usually your domain and the INDEXNOW_KEY: [wwww.example.com/](http://wwww.example.com/) &lt;INDEXNOW_KEY&gt;
    
    Variables you can update depending on your specs:
    
    - `DAYS_BACK`: 7 by default.
    - `BATCH_SIZE`: 500 it's the default recommended by IndexNow
    - `USE_GOOGLE`, `USE_INDEXNOW`: by default it's true which means the process will run for both Google and IndexNow


## Google Node

### Check Status Node (**OAuth Setup**):
   - documentation: [https://developers.google.com/webmaster-tools/v1/urlInspection.index/inspect](https://developers.google.com/webmaster-tools/v1/urlInspection.index/inspect)
    Create credentials: [https://console.cloud.google.com/apis/credentials]([https://console.cloud.google.com/apis/credentials)
- Enable Google Search Console API
- Download the Client ID / Client Secret JSON
	- Connect n8n using:
        - Client ID
        - Client Secret
        - Scopes
        - Google Search Console account
    - All explanations are contained in these tutorials: [https://www.youtube.com/watch?v=HT56wExnN5k](https://www.youtube.com/watch?v=HT56wExnN5k) | [https://www.youtube.com/watch?v=FBGtpWMTppw](https://www.youtube.com/watch?v=FBGtpWMTppw)
    Scopes reference: [https://developers.google.com/identity/protocols/oauth2/scopes](https://developers.google.com/identity/protocols/oauth2/scopes)

### Google Index API:

- Create a service account here [https://console.cloud.google.com/iam-admin/serviceaccounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
    - Assign role: Owner
- Generate a **JSON key** (contains email + private key)
- For the two Google API nodes:
    - Authentication: **Predefined credential type**
    - Credential Type: **Google Service Account API**
- Credential configuration:
    - Region: Your project region
    - Service Account Email / Private Key: From the JSON key
    - Enable “Set up for use in HTTP Request node”
    - Scope: [https://www.googleapis.com/auth/indexing](https://www.googleapis.com/auth/indexing)
    - ⚠️ **Important:** once you have created a "Service account email" you need to add a user with this email and permission "Owner" in your Google Search Console: 
[https://search.google.com/search-console/users](https://search.google.com/search-console/users)
- Others Nodes
    - Gate: Google Is `USE_GOOGLE = true` from Cofig?
    - Check status: Useful to get the `coverageState` and `lastCrawlTime` of a given URL given by Google Search Console
    - Loop Over Items: Prevents rate-limiting
    - Switch:
        - Case: coverageState= “`Submitted and indexed`” -&gt; Push to "isNew" node
        - Case: coverageState= “`Crawled - currently not indexed`” -&gt; Push to "URL Updated" node
    - Is New: URLs from Sitemap with Last modification date AFTER the GoogleLast Crawl date
        - If true, we submit URLs to Index API
        - If false, no need to push that URL for indexation
    - URL Updates
        - doc: [https://developers.google.com/search/apis/indexing-api/v3/using-api#gettinginfo](https://developers.google.com/search/apis/indexing-api/v3/using-api#gettinginfo)
        - Endpoint: [https://indexing.googleapis.com/v3/urlNotifications:publish](https://indexing.googleapis.com/v3/urlNotifications:publish)
        - We call the Update URL request
    - Wait: Generates a random delay between 0.30 and 1.50 seconds, rounded to 2 decimals

**⚠️ Google alternative to batch index URLs consists in using Premium Service to by pass the URL inspection tool: [https://fr.speedyindex.com/](https://fr.speedyindex.com/)**


## IndexNow auto-submitting

- documentation: [https://www.bing.com/indexnow/getstarted](https://www.bing.com/indexnow/getstarted)
- Gate: IndexNow: Is USE_INDEXNOW is true from Config?
- Split in Batches: split in batch of 500 URLs max to avoid rate Limiting issues
- Build IndexNow payload: description in the node name
- IndexNow Submit: Submit the URLs to indexNow

## VariationA:  Index orphan pages

- API documentation: [https://developer.oncrawl.com/#Data-API](https://developer.oncrawl.com/#Data-API)
- OQL definition: Get orphan pages for both sitemaps & logs
- Merge node: Merge Items that InnerJoin `loc`, `url` fields. This is useful to recover the `lastmod` from Orphan pages referenced into Sitemaps.
This data can be shared into Google Node afterward.
Input1 should be: "`Assign mandatory sitemap fields`" Node

Next nodes

- change "Set Node" name in the script variables

## VariationB: Index newly added pages between a Crawl 1 & a Crawl2

- API documentation: [https://developer.oncrawl.com/#Data-API](https://developer.oncrawl.com/#Data-API)
- OQL definition: Returns indexable canonical pages added in Crawl 2
- Merge node: Merge Items that match between `loc`, `url` fields. This is useful to recover the `lastmod` data for Google Node
Input1 should be: "`Assign mandatory sitemap fields"` Node

Next nodes

- change "Set Node" name in the script variables

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
