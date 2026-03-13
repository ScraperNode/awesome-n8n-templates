# 📊 Automate real-time SEO keyword research with DataForSEO and Google Sheets

> ⚡ **1,873 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.

## Description

### This n8n template automates real-time SEO keyword research, delivering comprehensive keyword insights, autocomplete suggestions, subtopics, SERP analysis, and more, straight into your Google Sheet.

Use cases are many: This workflow is perfect for bloggers, SEO professionals, affiliate marketers, e-commerce teams, and content creators who need fresh, actionable keyword data for planning, optimization, and content expansion - without endless manual research.

## How It Works
### Phase 1: Set Google Sheet ID & Input Target Keywords
- In n8n, enter the **Google Sheet ID** in the **Set Sheet ID** node. 
- In the connected Google Sheet, for the first tab **Main Keyword**, you manually add the main keywords that you want the tool to research and generate relevant keyword suggestions for. 
- Trigger the process by clicking **Test Workflow** or **Execute Workflow**.
- The workflow automatically reads your main keywords from the **Main Keyword** tab in your linked Google Sheet, only those marked with the status **Ready** will be processed.

### Phase 2: Automated Research & Data Collection
For your input main keyword (considering here you only set **Ready** for one main keyword in the connected Google Sheet), the workflow runs multiple automated queries in parallel:

**1. Get Related Keywords:**

- The workflow sends a **POST request** to the **DataForSEO API** endpoint to directly retrieve an array of related keywords.
- Then, the array of related keywords is parsed out, preparing each keyword as a separate record for further processing.
- It appends each extracted related keyword as a new row in the **Related KW** tab of your connected Google Sheet. The **Main Keyword** value from your input is included in **Column A** of the tab to maintain keyword context.
- Additionally, the workflow appends the related keywords  - along with the associated main keyword - to the **All Results** tab in your Google Sheet for consolidated tracking and future reference. This ensures you have both a dedicated list of related keywords and a master log of all research results in one place.


**2. Get Keyword Suggestions:**

- The workflow sends a **POST request** to the **DataForSEO API** endpoint to directly retrieve an array of keyword suggestions related to your main keyword.
- This array of keyword suggestions is then parsed, splitting out each suggestion as an individual record for further processing.
- Each extracted keyword suggestion is appended as a new row in the **KW Suggestion** tab of your connected Google Sheet. The original **Main Keyword** value from your input is included in Column A of the tab to maintain clear context.
- Additionally, the workflow appends all keyword suggestions - along with the associated main keyword - to the **All Results** tab in your Google Sheet for consolidated tracking and future reference. This ensures you have both a dedicated list of keyword suggestions and a master log of all research results in one place.


**3. Get Autocomplete Suggestions:**

- The workflow sends a **POST request** to the **DataForSEO API** endpoint to retrieve Google autocomplete keyword suggestions for your main keyword.
- The array of autocomplete keyword suggestions is parsed out as an individual record for processing.
- Each extracted autocomplete keyword is appended as a new row in the **Autocomplete Suggestion** tab of your connected Google Sheet. The Main Keyword is included alongside each entry for proper tracking.
- Additionally, the workflow appends all autocomplete keywords - along with the associated main keyword - to the **All Results** tab in your Google Sheet for consolidated tracking and future reference. This ensures you have both a dedicated list of autocomplete keywords and a master log of all research results in one place.


**4. Get Content Ideas:**

- The workflow sends a **POST request** to the DataForSEO API endpoint to retrieve content ideas and fresh topic suggestions based on your main keyword.
- The array of content ideas is then parsed; each idea is extracted as a separate record for further use.
- Every content idea is then appended as a new row in the **Content Idea** tab of your connected Google Sheet, with the Main Keyword included to provide context.
- Additionally, the workflow appends all content ideas, along with their related main keyword, to the **All Results** tab in your sheet for consolidated tracking and easy access. This ensures you have both a dedicated list of content ideas for brainstorming and a central log of all keyword research outputs in one place.


**5. Get SERPs:**

- The workflow sends a **POST request** to the DataForSEO API endpoint, retrieving both the current Google SERP (Search Engine Results Page) data and People Also Ask (PAA) questions related to your main keyword.
- Then, the data is split into two streams: one for standard SERP results and one for PAA questions.
- For Standard SERPs:
     + The workflow filters the SERP data to keep only the most relevant results.
     + Each SERP entry is appended as a new row in the **SERP** tab of your connected Google Sheet, providing insights into top-ranking pages and their attributes.
- For PAA (People Also Ask):
     + The PAA data is also filtered.
     + Each PAA question is split out and added as a new row in the **PAA** tab in your connected Google Sheet for focused tracking.
     + Additionally, all PAA questions are consolidated and appended, along with their related main keyword, to the **All Results** tab in your sheet for consolidated tracking and easy access. This ensures you have both a dedicated list of PAA questions for brainstorming and a central log of all research outputs in one place.

## Result Types

**Main Keyword**: Your original list of main keywords with status tracking.

**All Results**: A master log of all relevant keyword and idea research outputs for easy review.

**Related KW**: Lists of related keywords for each main keyword.

**KW Suggestion**: Suggested keyword ideas for broader targeting.

**Autocomplete Suggestion**: Google autocomplete keyword suggestions to capture real user queries.

**Content Idea**: Keyword-related content ideas to build out your content clusters.

**SERP**: top-ranking pages, including their URLs, page titles, and descriptions - perfect for quick competitor and content analysis.

**PAA**: People Also Ask questions for intent research and content expansion.

## How To Set Up
- Download the workflow package and import it into your n8n interface.
- Duplicate the [**Keyword Research**](https://docs.google.com/spreadsheets/d/1QiaKcy5MwLwmBqD4FrBTd_m3GCK1Jjll9IsNi7q96QA/edit?gid=0#gid=0) Google Sheet template to your Google Sheets account.
- Set up necessary credentials for tools access and usability:
     + For **Google Sheets** access, ensure each node is properly connected to the correct tab in your connected Google Sheet template: 
     Node **Get Main Keywords** → connected to the **Main Keyword** tab
     Node **Add Related KWs** → connected to the **Related KW** tab
     Node **Save Related KWs to All Results** → connected to the **All Results** tab
     Node **Add KW Suggestions** → connected to the **KW Suggestion** tab
     Node **Save KW Suggestions to All Results** → connected to the **All Results** tab
     Node **Add Autocomplete Suggestions** → connected to the **Autocomplete Suggestion** tab
     Node **Save Autocomplete Suggestions to All Results** → connected to the **All Results** tab
     Node **Add Content Ideas** → connected to the **Content Idea** tab
     Node **Save Content Ideas to All Results** → connected to the **All Results** tab
     Node **Add SERPs** → connected to the **SERP** tab
     Node **Add PAAs** → connected to the **PAA** tab
     Node **Save PAAs to All Results** → connected to the **All Results** tab
     + For DataForSEO access, set up API credentials (Basic Auth) along with correct **POST URL** for each query in the following node:
Node **Get Related KWs**
Node **Get KW Suggestions**
Node **Get Autocomplete Suggestions**
Node **Get Content Ideas**
Node **Get SERPs**
- Enter your **Google Sheet ID** in the **Set Sheet ID** node to link the workflow to your connected Google Sheet.
- Add your target keywords to **Column B** in the **Main Keyword** tab in the connected Google Sheet and set their status to **Ready**
- Run the workflow by clicking **Test Workflow** or **Execute Workflow** in n8n.
- Review the results across all output tabs in your connected Google Sheet.

## Requirements
- **n8n** instance (self-hosted or cloud).
- Basic setup in **Google Cloud Console** (OAuth or API Key method enabled) with enabled access to **Google Sheets**.
- **DataForSEO** API credentials.

## How To Customize
- **Add Extra Research Steps**: Expand the workflow by integrating additional research queries related to the main keywords - such as backlink analysis, competitor monitoring, or search trend tracking - to gather even more valuable insights alongside your keyword data.
- **Automate Scheduling & Notifications**: Set up an automatic schedule in n8n so the workflow runs at your preferred intervals. Connect notification tools like Telegram, Slack, or a chatbox to receive alerts whenever the process finishes, keeping you instantly updated without manual checks.
- **Personalize Data Mapping**: Tailor how the research results are saved to your Google Sheet by customizing column mapping and naming conventions. This lets you organize your data exactly how you want for easier analysis and reporting.

## Need Help?
If you’d like this workflow customized to fit your tools and platforms availability, or if you’re looking to build a tailored AI Agent for your own business - please feel free to reach out to [**Agent Circle**](https://www.agentcircle.ai/). We’re always here to support and help you to bring automation ideas to life.

Join our community on different platforms for support, inspiration and tips from others.
Website: https://www.agentcircle.ai/
Etsy: https://www.etsy.com/shop/AgentCircle
Gumroad: http://agentcircle.gumroad.com/
Discord Global: https://discord.gg/d8SkCzKwnP
FB Page Global: https://www.facebook.com/agentcircle/
FB Group Global: https://www.facebook.com/groups/aiagentcircle/
X: https://x.com/agent_circle
YouTube: https://www.youtube.com/@agentcircle
LinkedIn: https://www.linkedin.com/company/agentcircle

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
