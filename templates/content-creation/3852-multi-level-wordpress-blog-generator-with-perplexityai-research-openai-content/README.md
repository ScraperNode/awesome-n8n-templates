# 🎬 Multi-level WordPress blog generator with PerplexityAI research & OpenAI content

> ⚡ **1,304 views** · 🎬 [Content Creation & Video](../)

## Description

## **WordPress Auto-Blogging Pro v2 \- with DEEPER RESEARCH \- Advanced Content Automation**

**(This version is an upgrade from v1: [WordPress Auto-Blogging Pro \- with DEEP RESEARCH \- Content Automation Machine v1](https://n8n.io/workflows/3041-wordpress-auto-blogging-pro-with-deep-research-content-automation-machine/))**

Take your content automation to unprecedented depths\! This v2 template enhances the acclaimed "WordPress Auto-Blogging Pro \- with DEEP RESEARCH" by introducing **Deeper Research**, a multi-level research capability designed to generate exceptionally comprehensive, long-form content like detailed articles, reports, and even e-books. 

If you need more than just standard blog posts and crave truly authoritative, data-driven content generated automatically, this workflow is built for you. It optionally goes beyond simple topic research by breaking down subjects into sub-topics, and then *further* into sub-sub-topics, conducting real-time online research (powered by the Research Tool Sub-Flow using PerplexityAI) at each stage. This ensures unparalleled depth and coverage, perfect for tackling complex subjects. Combined with enhanced automation features for batch processing, categorization, tagging, linking, and image generation (using OpenAI's latest image model `gpt-image-1` accessed via API), this is the ultimate engine for serious content automation on WordPress.

It operates using a **three-flow system**: a Trigger Flow acts as a scheduler and dispatcher, a powerful Main Flow executes the complex content generation process, and a dedicated Research Tool Sub-Flow handles interactions with PerplexityAI.

Visit [AI Automation Pro’s website](https://aiautomationpro.org/) for more powerful n8n templates.

![AI_Automation_Pro_WordPress_Blog_Automation_Deeper_Research_v2_1.jpeg](fileId:1254)![AI_Automation_Pro_WordPress_Blog_Automation_Deeper_Research_v2_2_1.jpeg](fileId:1260)![AI_Automation_Pro_WordPress_Blog_Automation_Deeper_Research_v2_2.jpeg](fileId:1255)![AI_Automation_Pro_WordPress_Blog_Automation_Deeper_Research_v2_3.jpeg](fileId:1258)![AI_Automation_Pro_WordPress_Blog_Automation_Deeper_Research_v2_4.jpeg](fileId:1263)

### **What problem is this workflow solving? / Use cases**

Standard content automation often struggles with producing truly in-depth, comprehensive content on complex or rapidly evolving topics. This workflow addresses that challenge by:

* **Automating Multi-Level Research:** Optionally eliminates the manual effort required to deeply research topics, sub-topics, and sub-sub-topics, ensuring content is thorough and well-supported when needed.  
* **Generating Long-Form Content:** Enables the creation of detailed articles, comprehensive reports, or even initial e-book drafts automatically.  
* **Scaling Content Production:** Efficiently handles lists of topics from Google Sheets, processing them sequentially for reliable, automated content creation over time.  
* **Enhancing SEO Automatically:** Integrates best practices like sitemap-based internal linking, external source linking, automatic categorization, tag generation/management, and Table of Contents generation (with “Deeper Research” articles).  
* **Streamlining Complex Tasks:** Combines research (basic or deep), writing, image generation, SEO optimization, publishing, and comprehensive backup (Google Docs, Drive, Sheets) into a single, automated system.

Ideal use cases include creating cornerstone content, detailed guides, industry reports, niche site authority building, and automating the production of deeply researched articles where maximum depth is required.

### **Who is this for?**

This advanced workflow is designed for demanding users who require robust, comprehensive content automation:

* **Content Marketers & Strategists:** Needing to produce authoritative, long-form content at scale, with options for varying research depth.  
* **SEO Professionals:** Aiming to build topical authority with well-researched, structured, and highly optimized content featuring strong internal/external linking.  
* **Niche Site Builders & Affiliates:** Seeking to dominate specific topics with comprehensive guides and articles.  
* **Agencies:** Managing large-scale content production for clients requiring in-depth material.  
* **Researchers & Analysts:** Looking to automate the drafting of reports or summaries based on online data.  
* **Power Users of v1:** Ready to upgrade to the next level of research depth, flexibility, and automation features.

### **Unique Features**

This v2 workflow introduces significant upgrades and retains the best features of v1:

![AI_Automation_Pro_WordPress_Blog_Automation_Deeper_Research_v2_5_2.jpeg](fileId:1261)![AI_Automation_Pro_WordPress_Blog_Automation_Deeper_Research_v2_6.jpeg](fileId:1259)![AI_Automation_Pro_WordPress_Blog_Automation_Deeper_Research_v2_7.jpeg](fileId:1257)

* **Conditional Deeper Research:** Choose per-topic whether to activate multi-level research (topic \-\&gt; sub-topic \-\&gt; sub-sub-topic) for maximum depth or use standard chapter-level research.  
* **Modular Three-Flow Architecture:** Robust system with a Trigger Flow for scheduling, a Main Flow for generation, and a dedicated Research Tool Sub-Flow.  
* **Table of Contents Generation:** Automatically creates a ToC for improved readability and SEO on long articles.  
* **Latest AI Image Models:** Optimized for high-quality images using OpenAI's latest model (`gpt-image-1` via API), with easy node setup to switch to alternatives.  
* **Automatic Categorization & Tag Management:** AI assigns posts to the most relevant existing WordPress category and creates/assigns relevant tags.  
* **Dual Trigger Options:** Use Google Sheets for batch processing lists of topics or n8n's Native Form for single, ad-hoc topic submission.  
* **Batch Topic Processing:** Handles multiple topic inputs efficiently via the Trigger Flow loop, processing them sequentially with status tracking.  
* **Advanced External & Internal Linking:** Automatically inserts relevant internal links (from sitemap) and external source links (from research).  
* **Comprehensive Backup System:** Saves final content in multiple formats and locations: Markdown to Google Docs, Images to Google Drive, Final URLs and details to Google Sheets.  
* **Centralized Control Interface:** Google Sheets acts as the primary interface for bulk input, parameter setting (like `Have Deeper Research`), and status monitoring.  
* **Direct WordPress Integration:** Seamlessly publishes content, metadata, tags, categories, and images.  
* **Rate-Limit Aware:** Includes configurable Wait nodes to prevent API errors during intensive processing.  
* **Robust Error Catching:** Uses 'If' nodes to validate AI outputs and ensure smooth data flow.

### **How this workflow works**

![AI_Automation_Pro_WordPress_Blog_Automation_Deeper_Research_v2_8.jpeg](fileId:1256)

This template utilizes three interconnected n8n flows: a Trigger Flow, a Main Flow, and a Research Tool Sub-Flow, orchestrated primarily via Google Sheets.

#### **1\. Trigger Flow (Scheduler & Dispatcher):**

* **Trigger:** Activates via a Schedule (e.g., every 10 minutes) to check for new tasks OR via a direct n8n Form submission.  
* **Select Topics:** Reads rows from a specific Google Sheet (e.g., `Deeper Research - Create Topics` \-\&gt; `Create Topic` sheet) where the `Status` column is 'To Do'.  
* **Loop & Dispatch:** Processes each 'To Do' topic one by one. For each topic, it executes the **Main Flow**, passing the topic details and parameters.  
* **Wait:** Pauses for a configurable duration (default: 1 hour) after each topic's processing is initiated by the Sub-Workflow, helping manage API limits and pacing.

#### **2\. Main Flow (Content Generation Engine):**

* **Trigger:** Starts when called by the Trigger Flow.  
* **Setup:** Receives topic parameters (Topic, Audience, Style, Word Count, `Have Deeper Research` flag, etc.) from the Trigger Flow. Updates the topic's `Status` to 'In Progress' in the Google Sheet.  
* **Internal Link Gathering:** Fetches your website's sitemap XML, parses it, and extracts a set number (e.g., up to 50\) of internal URLs for later use.  
* **Initial Research & Planning:** Executes the **Research Tool Sub-Flow** to perform initial online research on the main topic. An AI Agent ("Blog Planner") then uses this research to outline the entire article: Title, Subtitle, Introduction, Slug, Meta Description, Tags, Chapter outlines, and prompts for chapter/featured images.  
* **Conditional Content Creation (Based on `Have Deeper Research` flag):**  
  * **If YES:** Executes the *Deeper Research* path: Loops through planned chapters \-\&gt; Executes **Research Tool Sub-Flow** for Chapter Research \-\&gt; AI splits chapter into subchapters \-\&gt; Loops through subchapters \-\&gt; Executes **Research Tool Sub-Flow** for Subchapter Research \-\&gt; AI ("Subchapter Copywriter") writes detailed content for each subchapter \-\&gt; Aggregates subchapters back into the main chapter content.  
  * **If NO:** Executes the *Standard Research* path: Loops through planned chapters \-\&gt; Executes **Research Tool Sub-Flow** for Main Chapter Research \-\&gt; AI ("Chapter Copywriter") writes content for each chapter.  
* **Image Generation & Upload:** Generates images (using OpenAI's `gpt-image-1` or equivalent via HTTP Request) for each main chapter and a featured image. Resizes images and uploads them to both your WordPress Media Library and a specified Google Drive folder.  
* **Tag Management:** Checks if the AI-generated tags exist in WordPress. Creates new tags if necessary and retrieves the IDs for all relevant tags.  
* **Article Assembly:** Combines Introduction, finalized chapter content (from either research path), Conclusion, CTA, etc., into a complete article structured in Markdown format (using a Code node).  
* **HTML Conversion:** Converts the final Markdown content to HTML suitable for WordPress.  
* **Backup \- Google Docs:** Saves the final Markdown version of the article as a new document in a specified Google Drive folder. **Note:** saving to Google Docs only works on "My Drive" and will NOT work on a Shared Drive due to Google Drive API restrictions.  
* **Publish to WordPress:** Creates a new post on your WordPress site with the Title, HTML content, Slug, assigned Category (auto-detected or default), Tag IDs, and sets the generated Featured Image. Also sets the Meta Description and Post Excerpt.  
* **Backup \- Google Sheets:** Saves the final details (Published URL, Markdown, HTML, Tags, Meta info, Slug, Excerpt, etc.) to a dedicated sheet (e.g., `Final Blogs`) within your main Google Sheet workbook.  
* **Final Status Update:** Updates the topic's `Status` to 'Done' in the original `Create Topic` sheet.

#### **3\. Research Tool Sub-Flow (PerplexityAI Interaction):**

* **Trigger:** Starts when called by the Main Flow.  
* **Setup:** Receives parameters like the research query, model (`sonar` or `sonar-deep-research`), system message, and max tokens.  
* **API Call:** Makes a POST request to the PerplexityAI API with the provided parameters and authentication.  
* **Response Handling:** Extracts the content from the API response.  
* **Output:** Returns the research content back to the calling Main Flow.

### **Requirements**

* **n8n Instance**.  
* **OpenAI API Key:** Or equivalent credentials for a powerful text generation model (default to GPT-4o) and an image generation model (like `gpt-image-1`, compatible with OpenAI node or direct HTTP Request).  
* **Perplexity API Key:** Or equivalent for an online research tool API (used via HTTP Request node in the Research Tool Sub-Flow).  
* **WordPress Website:** REST API enabled, with an Application Password granting permissions to create/edit posts, upload media, manage categories, and manage tags. Needs an accessible `post-sitemap.xml`.  
* **Google Account:** For Google Sheets (trigger, control parameters, status tracking, backup), Google Drive (image/text backup), and Google Docs (Markdown backup).

### **Setup Step-by-Step**

1. **Import Workflows:** Download the three `.json` files (**Trigger Flow**, **Main Flow**, **Research Tool Sub-Flow**) and import them into your n8n instance. Name them clearly (e.g., "WP Deeper Research \- Trigger Flow", "WP Deeper Research \- Main Flow", "WP Deeper Research \- Research Tool Sub-Flow").  
2. **Configure Google Sheet:**  
   * Clone or create a Google Sheet workbook (e.g., `Deeper Research - Create Topics`).  
   * Ensure two sheets within it: `Create Topic` and `Final Blogs`.  
   * Set up required columns in `Create Topic` (e.g., `Topic`, `Status`, `Have Deeper Research`, `Audience`, `Style`, etc. \- **match these exactly** to the names used in the workflow nodes).  
   * Set up columns in `Final Blogs` for backup (e.g., `Topic Name`, `Final URL`, `Markdown`, `HTML`, etc. \- match workflow nodes).  
   * Update all Google Sheets nodes in the Trigger Flow and Main Flow to point to the correct Workbook Name, Sheet Name, and ensure column names match.  
3. **Link Flows:**  
   * In the **Trigger Flow**, locate the "Execute Workflow" node (e.g., "Execute Workflow \- Create A Topic"). Edit this node and select the imported **Main Flow** from the dropdown.  
   * In the **Main Flow**, locate all "Execute Workflow" nodes that perform research. Edit these nodes and select the imported **Research Tool Sub-Flow** from the dropdown.  
4. **Configure Credentials:** In n8n, add credentials for: OpenAI, PerplexityAI, WordPress (using Application Password), Google (ensure Sheets, Drive, Docs permissions).  
5. **Connect Workflow Nodes:** Open all three workflows. Go through each node requiring authentication (OpenAI, Perplexity HTTP Request, WordPress, Google Sheets, Google Drive, Google Docs) and assign the correct credential. Pay close attention to HTTP Request nodes, ensuring API keys are correctly placed.  
6. **Configure Triggers:** In the Trigger Flow, configure the Schedule Trigger interval (default 10 mins) or the n8n Form Trigger fields as needed. Ensure only one trigger is active unless you intend both.  
7. **Customize Inputs & Parameters:** Review key nodes:  
   * Trigger Flow: Adjust Wait time if needed.  
   * Main Flow: Verify Website URL (for sitemap), AI prompts (Planner, Copywriters), default Category ID, internal link limit, image sizes.  
   * Research Tool Sub-Flow: Review default model (`sonar`), system message, max tokens if needed.  
8. **Test Connections:** Perform test runs on individual nodes within each workflow (e.g., read Google Sheet, call Perplexity via Research Tool Sub-Flow, connect to WordPress) to verify credentials and configurations.  
9. **Initial Test Run:** Add one test topic to your `Create Topic` sheet (set `Status` to 'To Do', specify 'Yes' or 'No' for `Have Deeper Research`). Manually trigger the Trigger Flow once (or wait for the schedule). Verify the process completes and check outputs (WordPress post, Google Drive folder, Google Doc, `Final Blogs` sheet, `Create Topic` status update).  
10. **Activate Workflows:** Toggle the "Active" switch ON for the **Trigger Flow** in your n8n instance. The Sub-Workflows should *remain inactive* as they are triggered by other flows.  
11. **Start Automating:** Add content topics to the `Create Topic` sheet (set Status='To Do'), and the scheduled Trigger Flow will pick them up.

### **Tips for Pros**

* **Control Research Depth:** Use the `Have Deeper Research` column ('Yes'/'No') in your Google Sheet to control the level of research per topic, optimizing for cost and complexity where needed.  
* **AI Model Selection:** Experiment with different models in the AI/Image nodes. An alternative to OpenAI’s image model is Flux.1, which can yield superior images. For research, test Perplexity's `sonar-deep-research` model (by passing it as a parameter to the Research Tool Sub-Flow if needed) if the standard `sonar` isn't deep enough.  
* **Wait Times:** Adjust the Trigger Flow's "Wait" node duration based on your API plan limits, the typical runtime of the Main Flow, and desired posting frequency.  
* **Prompt Engineering:** Refine the prompts within the Main Flow's AI nodes (Blog Planner, Chapter/Subchapter Copywriters, Image Prompts) and the Research Tool Sub-Flow's system message to fine-tune the output style, tone, structure, and image relevance.  
* **Sitemap Accessibility:** Ensure your `post-sitemap.xml` is publicly accessible and correctly formatted for the parsing node to work reliably for internal linking.

### **Important Considerations**

* **API Costs:** Deep research (especially the sub-sub-topic level) and generating multiple high-quality images per post can consume significant API credits. Monitor your costs closely. Use the `Have Deeper Research` flag wisely.  
* **API Rate Limits:** Even with Wait nodes, high volume can hit API rate limits. Be aware of your plan limits (OpenAI, Perplexity) and adjust workflow timing (schedule interval, wait time) accordingly.  
* **Sub-Workflow Runtime:** The Main Flow can take a considerable amount of time to run, especially with Deeper Research enabled. Factor this into scheduling and expectations.  
* **Tool Dependencies:** The workflow relies heavily on the specific functionalities and APIs of OpenAI, Perplexity, Google Workspace, and WordPress. Changes in these platforms might require workflow adjustments.  
* **Initial Setup Complexity:** Due to the advanced features, three-flow structure, and multiple integrations, the initial setup requires careful configuration of credentials, node settings (especially Google Sheets names/columns), and workflow linking. Test thoroughly.  
* For inquiries about this template, please contact [AI Automation Pro](https://aiautomationpro.org/contact/).
![AI_Automation_Pro_WordPress_Blog_Automation_Deeper_Research_v2_10.jpeg](fileId:1262)

## 🔗 Nodes Used

Edit Image, Google Sheets, HTTP Request, Google Drive, Execute Sub-workflow, Wordpress

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
