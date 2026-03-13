# 📊 Analyze website page gaps with GPT-4.1-mini, Perplexity, and Google Docs

> ⚡ **18 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Description

An AI-powered workflow that analyzes any website to identify missing pages that would improve user experience and business performance. Submit a URL, and the system detects existing pages, researches competitors using Perplexity, and generates a professional gap analysis report with prioritized recommendations—saved directly to Google Docs.

---

## What this workflow does

This automation delivers a complete website page gap analysis:

- **Smart page detection:** Automatically scans website HTML and identifies 15 common page types (About, Contact, Services, Blog, Portfolio, Pricing, FAQ, Testimonials, Team, Careers, Privacy, Terms, etc.)
- **Business type classification:** Determines if the site is ecommerce, portfolio/agency, blog, SaaS, or service-based to tailor recommendations
- **Competitor research:** Uses Perplexity to research 5-7 top competitors in the same industry and identify their page structures
- **AI gap analysis:** GPT-4.1-mini with web search compares the website against industry standards and competitor best practices
- **Prioritized recommendations:** Generates High/Medium/Low priority suggestions with business value explanations and actionable content ideas
- **Google Docs report:** Saves a professional gap analysis report ready to share with clients or stakeholders

---

## Setup requirements

**Tools you'll need:**

- Active n8n instance (self-hosted or n8n Cloud)
- Google Docs with OAuth access
- OpenAI API key (GPT-4.1-mini access with web search)
- Perplexity API key (for competitor research)

**Estimated setup time:** 15–20 minutes

---

## Step-by-step setup

### 1. Connect Google Docs
- In n8n: **Credentials → Add credential → Google Docs OAuth2 API**
- Complete OAuth authentication
- Create a new Google Doc for storing reports (or use an existing one)
- Open **"Save Report to Google Docs"** node
- Paste the Google Doc URL in the **documentURL** field

### 2. Add OpenAI API credentials
- Get API key: https://platform.openai.com/api-keys
- In n8n: **Credentials → Add credential → OpenAI API**
- Paste your API key
- Open **"OpenAI GPT-4.1 Mini with Web Search"** node
- Select your OpenAI credential
- Ensure model is set to **gpt-4.1-mini**
- Verify **Web Search** is enabled in the built-in tools section

### 3. Add Perplexity API credentials
- Get API key: https://www.perplexity.ai/settings/api
- In n8n: **Credentials → Add credential → Perplexity API**
- Paste your API key
- Open **"Perplexity Competitor Research Tool"** node
- Select your Perplexity credential

### 4. Share the form URL
- Open **"Submit Website URL for Analysis"** node
- Copy the **Form URL** from the node settings
- Share this URL with anyone who needs to run website audits
- The form accepts a single field: Website URL

### 5. Test the workflow
- Open the Form URL in your browser
- Enter a test website: `https://example.com`
- Submit the form
- Wait 30-60 seconds for the analysis to complete
- Check your Google Docs—the gap analysis report should appear
- Verify that:
  - Existing pages are correctly detected
  - Business type is identified
  - Competitor research is included
  - Recommendations are prioritized and actionable

### 6. Activate the workflow
- Toggle the workflow to **Active** at the top
- The form will now accept submissions 24/7
- Each submission generates a new report appended to your Google Doc

---

## How it works

### 1. URL submission via form
User opens the form link and submits a website URL they want to analyze. The form triggers the workflow immediately.

### 2. HTML fetch and extraction
The workflow sends an HTTP request to the submitted URL and retrieves the complete HTML source code of the website's homepage.

### 3. Automated page detection
A code node analyzes the HTML to detect 15 common page types:
- **Navigation pages:** Home, About, Contact, Services, Products
- **Content pages:** Blog, Portfolio, Pricing, FAQ
- **Social proof pages:** Testimonials, Team, Careers
- **Legal pages:** Privacy Policy, Terms of Service

The detection works by:
- Scanning all internal links in the HTML
- Matching URL patterns (e.g., `/about`, `/contact-us`, `/services`)
- Searching for navigation keywords in anchor text
- Normalizing URLs (removing query params, anchors, trailing slashes)

### 4. Business type classification
The code also identifies the website's business type based on HTML content patterns:
- **Ecommerce:** Detects shopping cart, checkout, product pages
- **Portfolio/Agency:** Identifies portfolio, case studies, creative work
- **Blog/Content site:** Finds blog posts, articles, news sections
- **SaaS/Software:** Detects subscription, cloud platform, software keywords
- **Service/Agency:** Identifies consulting, marketing, agency services
- **General:** Default if no specific patterns match

### 5. Deep competitor research with Perplexity
The AI Agent instructs Perplexity to:
- Crawl the target website thoroughly (navigation, footer, hidden menus)
- Research 5-7 top competitors in the identified business type
- Document each competitor's page structure
- Identify industry-standard pages that successful sites consistently have

Perplexity focuses only on user-facing pages and ignores technical files (sitemap.xml, robots.txt, admin pages).

### 6. AI gap analysis and recommendations
GPT-4.1-mini with web search:
- Compares the website's existing pages against competitor structures
- Identifies genuinely missing pages (cross-references with detected existing pages)
- Prioritizes recommendations based on business impact (High/Medium/Low)
- Provides specific business value explanations for each recommendation
- Suggests actionable content for each missing page
- Includes competitor examples showing how others use these pages

**Critical filtering rules:**
- Never recommends pages already detected
- Excludes technical files and admin pages
- Only suggests pages with clear business value
- Each recommendation must be justified

### 7. Professional report generation
The AI Agent outputs a structured report containing:
- **Website Overview:** URL, business type, analysis date
- **Pages Confirmed as Existing:** Formatted list of detected pages
- **Gap Analysis Summary:** Total pages analyzed, existing vs. missing count
- **Recommended Pages to Add:** Detailed recommendations with priority, business value, content suggestions, and competitor examples
- **Implementation Priority Summary:** Quick-reference lists by priority level
- **Next Steps:** 2-3 actionable implementation steps

### 8. Save to Google Docs
The complete report is inserted into your Google Docs document. Each new analysis appends to the same document, creating a running archive of all audits performed.

---

## Key features

✅ **Automatic page detection:** Scans HTML and identifies 15 common page types without manual input—no need to know the site structure beforehand

✅ **Business type intelligence:** Classifies websites into 6 business categories to provide industry-relevant recommendations

✅ **Perplexity-powered research:** Deep competitor analysis covering 5-7 top sites in the same niche with complete page inventories

✅ **Smart filtering:** Never recommends pages that already exist, even if they use different naming conventions or URL structures

✅ **Priority-based recommendations:** Every suggestion labeled High/Medium/Low with clear business justification—know what to build first

✅ **Actionable content ideas:** Not just "add a blog"—specific suggestions for what content should go on each recommended page

✅ **Competitor examples:** See how successful competitors use each recommended page type in their own sites

✅ **Google Docs integration:** Professional reports saved automatically—no downloads, no formatting, ready to share

✅ **Form-based workflow:** Single URL submission—anyone can run audits without touching n8n

---

## Troubleshooting

### HTML fetch fails
- **SSL certificate issues:** Some websites block automated requests. Try adding `"rejectUnauthorized": false` in HTTP Request options.
- **Cloudflare/bot protection:** Sites with aggressive protection may block the request. Test with a simple site first (like your own).
- **Timeout errors:** Increase timeout setting in HTTP Request node to 30-60 seconds for slow-loading sites.

### Pages not detected correctly
- **Non-standard URL structure:** The workflow detects pages using common patterns (`/about`, `/contact`, etc.). If a site uses unusual URLs like `/company-info` instead of `/about`, manual review may be needed.
- **Single-page websites:** Sites built as SPAs (single-page applications) with JavaScript routing may not have distinct page URLs in HTML. The workflow works best with traditional multi-page sites.
- **Check detection details:** The code node outputs `detection_details` showing exactly what was found. Review this to debug false negatives.

### Perplexity API errors
- **Rate limits:** Perplexity has usage limits. If you hit them, wait or upgrade your plan.
- **API key invalid:** Verify the key is correct at https://www.perplexity.ai/settings/api
- **Quota exceeded:** Check your Perplexity dashboard for remaining credits.

### OpenAI web search not working
- **Web search disabled:** Ensure "Web Search" is enabled in the OpenAI Chat Model node under "Built-in Tools"
- **Search context size:** Set to "Medium" for balanced performance
- **Model compatibility:** Web search only works with GPT-4 models, not GPT-3.5

### Report not saving to Google Docs
- **Re-authenticate OAuth:** Go to Credentials → Google Docs OAuth2 API → Reconnect
- **Document URL format:** Ensure the URL is a valid Google Docs link (not a folder or Sheets link)
- **Permissions:** Verify the connected Google account has edit access to the document
- **Document locked:** Check if the document is open in another tab with unsaved changes

### AI recommendations are too generic
- **Perplexity research quality:** The AI relies on Perplexity's research. If competitors have similar structures, recommendations may overlap. Try analyzing a more unique website.
- **Business type misclassification:** Check the detected business_type in the code output. If it's wrong, the recommendations will be off-target.
- **Improve prompt:** Edit the AI Agent system prompt to emphasize more specific or creative recommendations for your niche.

---

## Use cases

**Web design agencies:** Audit client websites before proposals. Show exactly which pages are missing compared to competitors, with business justification for each recommendation. Win more projects by demonstrating data-driven insights.

**SEO consultants:** Include page gap analysis in site audits. Identify missing pages that competitors rank for (FAQ, pricing, testimonials). Provide clients with actionable roadmaps for site expansion.

**In-house marketing teams:** Analyze competitor websites quarterly to spot new page types or content strategies. Keep your site competitive by identifying gaps before leadership asks about them.

**Freelance developers:** Offer value-add services to existing clients. Run audits on their sites, identify quick wins (missing FAQ, testimonials, pricing pages), and sell additional development work.

**Startup founders:** Before hiring a design agency, understand what pages you actually need. Get a competitor-researched report showing industry standards for your business type—save time and budget.

**Content strategists:** Identify content opportunities beyond blog posts. See which informational pages (FAQ, case studies, resource libraries) competitors have that you're missing.

---

## Expected results

- **Time savings:** 2-3 hours saved per website audit (manual competitor research eliminated)
- **Analysis speed:** Complete gap analysis in 30-60 seconds vs. hours of manual work
- **Competitor coverage:** Research 5-7 competitors automatically vs. 1-2 manual comparisons
- **Report quality:** Professional, shareable reports vs. rough notes or spreadsheets
- **Actionability:** Prioritized recommendations with business value vs. generic "add more pages" advice
- **Scalability:** Run 50+ audits per day without additional effort

---

## Support

Need help or custom development?

📧 Email: [info@isawow.com](info@isawow.com)  
🌐 Website: [https://isawow.com/](https://isawow.com/)

## 🔗 Nodes Used

HTTP Request, Google Docs, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
