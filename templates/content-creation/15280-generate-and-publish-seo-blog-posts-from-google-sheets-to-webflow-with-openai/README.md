# 🎬 Generate and publish SEO blog posts from Google Sheets to Webflow with OpenAI

> ⚡ **36 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who it's for
This **n8n workflow** is designed for **SEO managers**, **content creators**, and **blog administrators** who want to automate their blog publishing pipeline. The workflow creates an end-to-end AI-powered system that can fetch content ideas from a Google Sheet, scrape existing competitor URLs, analyze SEO structure, generate high-quality articles, validate SEO scores, create thumbnail images, and automatically publish the final content to Webflow.

## Features
* **Automated Content Scheduling** – Runs every 2 hours (or manually) to process pending blog ideas from Google Sheets.
* **HTML Scraping & Cleaning** – Fetches competitor URLs and removes headers, scripts, and iframes to get clean content.
* **AI SEO Structure Analysis** – Uses `gpt-4.1-mini` to extract key sections and SEO bullet points.
* **AI Content Writer** – Uses `o4-mini` to rewrite articles with proper SEO, H2/H3 tags, and keyword optimization.
* **Output Parser Fixing** – Ensures the AI always returns clean, structured JSON (article + summary).
* **Internal Linking** – Pulls existing Webflow posts and adds relevant internal links automatically.
* **SEO Validation** – Checks SEO scores via sub-workflow before publishing.
* **AI Thumbnail Generation** – Creates a 16:9 cover image based on the article topic using DALL·E.
* **Auto-Publishing** – Publishes content to Webflow CMS with title, image, article, summary, and read time.
* **Sheet Update** – Marks the processed row as “Completed” in Google Sheets.
* **Error Notifications** – Sends alerts via Slack, Discord, Teams, Telegram, and WhatsApp if something fails.


## Requirements
- **OpenAI API Credentials**: For powering the content writer (o4-mini), structure analyzer (gpt-4.1-mini), prompt generator (o4-mini), and image generation (DALL-E 3).
- **Google Sheets API**: For reading pending blog ideas and updating their completion status.
- **Webflow OAuth2 API**: For fetching existing posts (for internal linking) and publishing new CMS items.
- **n8n Sub-Workflow**: A secondary workflow ID (`7FHTcSuCIjHvvBfe`) is called to evaluate the SEO score percentages of the generated content.
- **Communication Platform Credentials (Optional but recommended)**: API tokens for Slack, Discord, Microsoft Teams, Telegram, and Rapiwa for error notifications.

#### Configure Credentials
- **OpenAI API**: Ensure your account has access to `o4-mini`, `gpt-4.1-mini`, and DALL-E 3 models.
- **Google Sheets**: Configure with read/write permissions for the specific spreadsheet and tab (`Blogs (ideas)`).
- **Webflow API**: Set up OAuth2 with access to the specific Site ID and Collection ID where your blog is hosted.
- **Error Channels**: Add your specific Channel IDs, Chat IDs, and phone numbers to the respective notification nodes.

## Important Notes
- **Content Looping & Error Handling**: If the SEO score doesn't pass the validation check (e.g., required percentages aren't met), the workflow loops the content back to the AI writer for regeneration.
- **Competitor Name Replacement**: The AI prompt is strictly instructed to replace competitor names (like PixelCut, CreatorKit) with "ProductAI" to maintain brand consistency.
- **CTA Linking**: All Call-to-Action links within the generated articles are hard-coded in the prompt to point to `create.productai.photo`.
- **Image Processing Delay**: There is a 20-second "Wait" node implemented before publishing to Webflow to ensure the DALL-E generated image URL is active and accessible.
- **Dynamic Title Extraction**: The workflow uses a Regex code snippet to extract the first `<h2>` tag from the generated article to use as the Webflow post title (since H1 is omitted per SEO best practices).
- **Data Routing**: The `Execute Once` feature is enabled on error notification nodes to ensure you only receive one alert per failure, rather than spamming all connected channels simultaneously. 

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Telegram, Discord, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
