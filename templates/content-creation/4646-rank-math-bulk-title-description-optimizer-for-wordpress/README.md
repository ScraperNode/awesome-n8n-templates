# 🎬 Rank Math bulk title & description optimizer for WordPress

> ⚡ **739 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Bulk WordPress SEO Meta Optimizer with Rank Math & AI

This n8n workflow, along with its companion WordPress plugin (`rank_math_tools.zip`), automates the bulk optimization of your WordPress posts' Rank Math SEO titles and descriptions using AI. 

Stop manually crafting metas and let AI supercharge your SEO efforts efficiently!

[free version here.](https://n8n.io/workflows/2836-automate-rank-math-seo-field-updates-for-posts-and-products/)

**How it works:**

This workflow streamlines your SEO process through several automated steps:

* **Fetches Post IDs:** Retrieves all published post IDs from your WordPress site using a secure, custom API endpoint provided by the companion plugin.
* **Gathers Post Content:** For each identified post, it accesses the existing title, slug, and main rendered content to provide context for the AI.
* **AI-Powered Meta Generation:** Leverages an AI model of your choice via OpenRouter (defaulting to Claude 3.7 Sonnet) to generate an optimized SEO title and meta description. This generation is guided by a detailed, customizable prompt within the "Create Meta Infos" node, allowing you to define the style, tone, and SEO strategy.
* **Updates WordPress Metas:** Sends the newly generated SEO title and description back to your WordPress site via another custom API endpoint. The companion plugin then updates the specific Rank Math fields for each post.
* **Refreshes Modified Date:** The companion plugin automatically updates the post's 'last modified' date in WordPress whenever meta information is changed, which can be a positive signal for search engines.
* **Selective Processing:** An "IF" node ("Should I Rewrite") intelligently determines whether a post's metas need updating based on predefined conditions (e.g., empty metas or placeholder content), optimizing resource usage.

**Setup Steps:**

Get up and running in approximately 15-25 minutes by following these high-level steps. Detailed instructions are available in the comprehensive documentation provided with your purchase and within the sticky notes inside the n8n workflow itself.

1.  **Install the Companion WordPress Plugin:**
    * Download the `rank_math_tools.zip` file.
    * Upload and activate it on your WordPress site.
    * *(Estimated time: 2-5 minutes)*
2.  **Configure WordPress API Authentication:**
    * In your WordPress admin area, go to your user profile and create a new Application Password.
    * Ensure the user has at least an "Editor" role.
    * Copy the generated password.
    * *(Estimated time: 2-5 minutes)*
3.  **Set Up n8n Credentials:**
    * In n8n, create a new "WordPress API" credential using your WordPress username, the Application Password you just copied, and your site's Base URL.
    * Create a new "OpenRouter Api" credential using your OpenRouter API key.
    * *(Estimated time: 5-10 minutes, assuming you have your OpenRouter key ready)*
4.  **Import and Configure the n8n Workflow:**
    * Download the `Bulk_Wordpress_Meta_Data_Optimizer_Gumroad.json` workflow file.
    * Import it into your n8n instance.
    * Link your newly created WordPress and OpenRouter credentials to the respective nodes in the workflow.
    * Verify and update your WordPress site URL in the "settings" node (ensure it has a trailing slash `/`).
    * Review the "Limit" node – it's pre-set to process only 5 items for safe initial testing.
    * *(Estimated time: 5-10 minutes)*

**Benefits:**

* **Full SEO Meta Automation:** Drastically reduce manual effort by automatically generating and updating SEO titles and descriptions for all your posts.
* **Bulk Processing Power:** Efficiently handle meta optimization for hundreds or thousands of WordPress posts.
* **Highly Customizable AI Output:** Fine-tune the AI's generation style, keyword focus, and direct response techniques by editing the detailed prompt within the "Create Meta Infos" node.
* **Improved SEO Consistency & Quality:** Ensure all your articles have relevant, compelling, and optimized meta tags, adhering to best practices.
* **Signal Freshness to Search Engines:** The automatic update of the post 'last modified' date upon meta change can help improve crawl frequency and SEO.
* **Resource-Efficient Updates:** The "Should I Rewrite" node prevents unnecessary processing and API calls for posts that already have satisfactory meta information.
* **Save Time & Focus on Content:** Free up valuable time to concentrate on creating great content, rather than on repetitive SEO tasks.

---

To understand exactly how to use and customize this workflow in detail, please refer to the comprehensive step-by-step documentation provided with your purchase.

For professional n8n automation services for your business, contact:
[Phil | Inforeole](https://inforeole.fr)

## 🔗 Nodes Used

HTTP Request, Wordpress, Basic LLM Chain, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
