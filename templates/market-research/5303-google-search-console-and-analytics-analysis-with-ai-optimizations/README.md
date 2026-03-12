# 📊 Google Search Console and analytics analysis with AI optimizations

> ⚡ **12,224 views** · 📊 [Market Research & Insights](../)

## Description

## What Is This?

This workflow is a comprehensive solution for automating website audits and optimizations, leveraging advanced technologies to boost SEO effectiveness and overall site performance.

## Who Is It For?

Designed for SEO specialists, digital marketers, webmasters, and content teams, this workflow empowers anyone responsible for website performance to automate and scale their audit processes. Agencies managing multiple client sites, in-house SEO teams aiming to save time on routine checks, and developers seeking to integrate data-driven insights into their deployment pipelines will all find this solution invaluable.

By combining your site’s sitemap with Google Search Console and Google Analytics data, then applying AI-powered analysis, the workflow continuously uncovers actionable recommendations to boost search visibility, improve user engagement, and accelerate page performance. Whether you manage a single blog or oversee a sprawling e-commerce platform, this automated pipeline delivers precise, prioritized SEO improvements without manual data wrangling.

## How Does It Work?

This end-to-end site analysis automation consists of five main stages:

**1. URL Discovery**  
Processes the sitemap.xml using HTTP Request and XML nodes to extract all site URLs.

**2. Search Console Performance Analysis**  
Uses the Google Search Console API to fetch detailed metrics for each page, including search position, clicks, impressions, and CTR. 

**3. Analytics Data Collection**  
Connects to the Google Analytics API to automatically retrieve traffic metrics such as pageviews, average session duration, bounce rate, and conversions. 

**4. AI Data Processing**  
Employs OpenAI models to perform in-depth analysis of the collected data. The artificial intelligence engine merges insights from all sources, identifies patterns, and produces detailed optimization recommendations. AI analyses website itsefl aswell. **Consider testing different models**. I do recommend at least trying out o4-mini.

**5. Recommendation Generation**  
Creates tailored suggestions for each page, in form of HTML table, that is being sent to your email.

## How To Set It Up?

**Accounts:**  
An active n8n account or instance, API keys for Google Search Console and Google Analytics, an OpenAI access token.

**Enabled Google APIs:**
You will neeed at least following scopes:
- Google Search Console API
- Google Analytics Aadmin API
- Google Analytics Data API 

**Scheduling:**  
The workflow can run manually for ad hoc audits or be scheduled (daily, weekly) for continuous site monitoring.

**Testing:**  
There are two nodes that are optional:
- "Sort for testing purposes" and
- "Limit for testing purposes"
Together they randomly select items from sitemap and limit them to few so you don't need to run hundreds of sitemap.xml items at once, but you can run just a random batch first.

**Globals:**
There is node called "Globals- CHANGE ME!". You need to set up proper variables in there, which are:
- sitemap_url - self exlpainatory
- search_console_selector - for example "sc-domain:sailingbyte.com" but can be URL aswell- depends on how did you set up your search console
- analysis_start_date and analysis_end_date - date range for analytics, by default last 30 days
- analytics_selector_id - ID of Google Analytics setup, it is a large integer, you can find it in analytics url preceeded with letter "p", ex (your number is where there are X's): https://analytics.google.com/analytics/web/#/pXXXXXXXXX/reports/intelligenthome
- report_receiver - email which will receive report 

## What's More?

That's actually it. I hope that this automation will help your website improvement will be much easier!

## Thank you, perfect!

Glad I could help. Visit my profile for other automations for businesses. And if you are looking for dedicated software development, do not hesitate to reach out!

## 🔗 Nodes Used

Send Email, HTTP Request, Google Analytics, Markdown, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
