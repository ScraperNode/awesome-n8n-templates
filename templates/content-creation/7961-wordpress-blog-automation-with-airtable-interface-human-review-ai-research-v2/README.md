# 🎬 WordPress blog automation with Airtable interface, human review & AI research v2

> ⚡ **128 views** · 🎬 [Content Creation & Video](../)

## Description

## **WordPress Blog Automation with human-in-the-loop and deeper research in Airtable v2**

Take full control of your AI-powered content creation with this advanced human-in-the-loop workflow. Designed for power users who demand both automation and editorial oversight, this template transforms Airtable into a command center for producing deeply researched, long-form articles and publishing them directly to WordPress.

This system elevates content creation by introducing a hierarchical structure of chapters and subchapters, allowing you to build comprehensive articles, guides, or even e-books with unparalleled detail. From initial research to final publication, you guide the AI at every critical step \- from content structure to the final visuals \- ensuring the final output is high-quality, brand-aligned, and perfectly structured.

This version v2 is a major upgrade from the [HUMAN-IN-THE-LOOP Content Automation Pro with Deep Research & Airtable for Power Users \- Collaborative AI for WordPress Blog Automation](https://n8n.io/workflows/3725-wordpress-content-automation-machine-with-human-in-the-loop-and-deep-research/).

For more powerful n8n templates, visit our website at [aiautomationpro.org](https://aiautomationpro.org/).

![AIAutomationProWordPressBlogContentAutomationHumanintheloop1.jpeg](fileId:2256)![AIAutomationProWordPressBlogContentAutomationHumanintheloop2.jpeg](fileId:2255)![AIAutomationProWordPressBlogContentAutomationHumanintheloop3.jpeg](fileId:2253)![AIAutomationProWordPressBlogContentAutomationHumanintheloop4.jpeg](fileId:2257)![AIAutomationProWordPressBlogContentAutomationHumanintheloop5.jpeg](fileId:2254)

---

## **What's New in V2: Deeper Research & More Control**

This version introduces significant upgrades for creating more authoritative and well-structured content:

* **Conditional Deeper Research**: The workflow now generates both **chapters and subchapters**, allowing you to create more detailed, long-form articles with a clear, logical flow.  
* **Granular Research and Writing**: The AI performs research and writes content at the **subchapter level**, resulting in more in-depth and comprehensive articles before automatically compiling them into full chapters.  
* **Manual Image Override**: Gain full control over your article's visuals. You can now manually upload your own images for both the featured image and individual chapters, overriding the AI-generated suggestions.  
* **Multi-Language Support**: You can now define a target language in the Airtable settings, enabling the AI to generate content for different global audiences.  
* **Dynamic WordPress Categorization & Tagging**: The AI intelligently assigns your post to the most relevant existing WordPress categories and generates a list of relevant tags, improving on-site organization and SEO.  
* **Simplified Architecture with Native Perplexity Node:** Thanks to updates in n8n's Perplexity node, the separate "Research Tool" sub-workflow has been eliminated. All research calls are now made directly within the Main Flow. This simplifies the template's structure from three workflows down to two, making it easier to set up, manage, and debug.

---

## **What it does**

Fully automated content generation tools often lack the nuance, accuracy, and strategic control necessary for truly impactful content. This workflow solves that critical gap by integrating powerful AI capabilities into a structured, human-supervised content creation process. It automates the most repetitive tasks \- like research gathering and chapter ideation \- while embedding essential human review points at critical junctures.

Instead of simply providing a topic and receiving a finished article of uncertain quality, you actively guide the process step-by-step. This approach makes it perfect for creating high-quality, deeply researched, and brand-aligned blog posts for WordPress more efficiently, without ever sacrificing editorial control.

---

## **Who is this for?**

This workflow template is meticulously designed for individuals and teams who seek a powerful blend of AI-driven efficiency and human-controlled quality assurance:

* **Content Creators & Bloggers:** Who want to leverage AI for drafting and research but maintain full editorial control.  
* **Marketing Teams:** Looking to scale content production while ensuring brand voice and quality consistency.  
* **SEO Specialists:** Needing to produce well-researched, structured, and SEO-optimized content regularly.  
* **Agencies:** Managing content creation for multiple clients with a structured, repeatable process.  
* **Anyone who prefers a "human-in-the-loop" approach** over fully automated "black box" content generators.

---

## **How it works**

This template automates the WordPress content creation process using Airtable as the central hub and leveraging AI for research and copywriting. The system is composed of four interconnected processes within a single workflow, each triggered by specific changes in Airtable.

### **Content Creation Process in Airtable**

The entire journey from idea to published post is managed within your Airtable base.

1. **Configure Settings:** Define global parameters (website details, target audience, writing style, language, max word count, numbers of chapters and subchapters, etc.) in the “Settings” table.  
2. **Create Topics:** Add a new blog post idea and trigger the first process.  
3. **Generate Chapters:** The workflow performs online research and generates potential **chapters and subchapters** based on your topic.  
4. **Select Chapters to Write:** Review the suggested chapters and trigger the content generation phase.  
5. **Generate Content:** The second process researches each **subchapter** and generates draft content for your review and modification.  
6. **Select Chapter Content:** Approve the content for each chapter.  
7. **Select Chapter Images**: After content is approved, the workflow generates AI images for each chapter. In Airtable, you can review these images and choose to either keep them or manually upload your own for each chapter before triggering the final assembly.  
8. **Finalize Post:** The next process aggregates the content and images, generates the featured image (which you can also manually override in this step), creates the title and SEO metadata, and places the compiled information in the “Finalize Post” table.  
9. **Publish & Backup Post:** The final process publishes the post to your website and creates a backup record with the live URL.

### **n8n Workflow Functions**

The automation is handled by four separate triggers within the main workflow:

* **Flow 1 (Topic Initiation & Chapter/Subchapter Generation):** Fetches settings, performs initial research, and uses AI to generate chapter and subchapter outlines.  
* **Flow 2 (Content Generation & Internal Linking):** Gathers internal links, performs deep research **per subchapter**, and uses AI to write draft content.  
* **Flow 3 (Post Assembly & Image Generation):** Aggregates text, uses AI for metadata and image prompts, generates chapter images (with manual override), converts content to HTML, and saves the compiled post to Airtable.  
* **Flow 4 (WordPress Publishing & Backup):** Fetches finalized data, uploads the selected images, creates the WordPress post with dynamically assigned categories, and creates a backup record.

---

## **Unique Features**

* **Human-in-the-Loop Design:** Guarantees quality through mandatory user review and approval stages within Airtable.  
* **Airtable as Control Center:** Utilizes Airtable as an intuitive interface to manage the entire content lifecycle.  
* **Manual Image Override**: Maintain complete visual control by manually uploading your own featured and chapter images, overriding the AI-generated options at any stage.  
* **Conditional Deeper Research:** Choose on a per-topic basis whether to generate simple chapters or a more detailed structure with chapters and subchapters for maximum depth.  
* **Multi-Language Content Generation**: Define your desired output language in the Airtable settings to create content for different global audiences.  
* **Multiple-Image Generation:** Generates and adds unique AI images for each chapter, as well as a featured image for the article.  
* **Automatic Categorization:** The AI intelligently assigns your post to the most relevant existing categories on your WordPress site.  
* **AI-Powered Tag Generation:** The workflow automatically generates a list of relevant SEO tags for your article to improve discoverability.  
* **Advanced Internal & External Linking:** Automatically inserts relevant internal links by analyzing your sitemap and includes external source links from its research.  
* **Direct WordPress Integration:** Streamlines publication by automatically sending finalized content, metadata, tags, images, and categories to your WordPress site.  
* **Rate-Limit Aware:** Includes configurable Wait nodes to prevent API errors during intensive processing.  
* **Native Perplexity Integration:** Simplifies online research with n8n's built-in Perplexity node.

---

## **Requirements**

* **Airtable Account:** A [free Airtable account](https://airtable.com/invite/r/2iOynfoh) is sufficient to start.  
* **WordPress Website:** Requires an Application Password with permissions to create posts and upload media. Must have the REST API enabled.  
* **OpenAI API Key:** For text and image generation.  
* **Perplexity API Key:** Or an API key for your chosen online research tool.  
* **Google Drive:** for the backup feature.

---

## **Setup Step-by-Step**

1. **Import n8n Workflow:** Import the workflow JSON file into your n8n instance.  
2. **Get Airtable Base:** Duplicate the companion Airtable Base template. Find the link to the Airtable Base template in the automated email you received after order confirmation. Do not request access to the Airtable base linked in the n8n template itself, as this is a live production base.  
3. **Configure Credentials:** Add credentials in n8n for Airtable, WordPress, OpenAI, Perplexity, and Google Drive.  
4. **Connect Workflow Nodes:** Assign the correct credentials to every relevant node in the workflow.  
5. **Configure Airtable Nodes:** This step is critical. Warning: When you connect your own Airtable base to a node, n8n will automatically erase all pre-configured field mappings. To prevent losing these settings, you must copy them before connecting your base. Here are two recommended methods. Method 1 \- Side-by-Side Comparison: Import the template twice into n8n. Keep one workflow open as a reference, and customize the other. This allows you to easily copy and paste the field mappings from the original to your version after connecting your base. Method 2 \- Text Editor Method: Before connecting your base, open each Airtable node individually, copy its field settings into a text editor for safekeeping, connect your base, and then paste the settings back into the correct fields.  
6. **Populate Airtable Settings:** Fill in your details in the "Settings" table of your Airtable base.  
7. **Activate Workflow:** Toggle the "Active" switch ON for the workflow in n8n.  
8. **Start Creating:** Go to the "Create Topics" table in Airtable to begin. Go through all the tables in Airtable from left to right to complete all the steps of the content creation process and get the final blog post at the end.  
9. **Finalize SEO in WordPress:** The workflow saves the generated SEO meta title and meta description to the Backup Post table in your Google Sheet. After the post is created in WordPress (as a draft), you must **manually copy these values** from the table and paste them into your SEO plugin's fields (e.g., Yoast, Rank Math) on the WordPress post editor.

---

## **Tips for Pros**

* **AI Models:** The workflow is optimized for OpenAI's GPT-4o. You can swap in alternatives, but performance may vary. Perplexity's "sonar" model is used for research due to its speed and cost-effectiveness.  
* **AI Prompts:** Modify prompts in the AI nodes to refine tone, style, or formatting.  
* **Integrations:** Replace research tools, image generators, or modify the final step to publish to a different CMS.  
* **Error Handling:** For production reliability, connect an "Error Handling" workflow in n8n to catch failures and send notifications.

---

## **Important Considerations**

* **API Rate Limits:** The included **Wait** nodes help mitigate API rate limits, but may need adjustment based on your usage and API plans.  
* **Testing Costs:** API calls to AI models are not free. Monitor your usage and costs on your provider's billing dashboard.  
* **Sequential Processing:** The workflow processes one topic at a time to ensure stability.

## 🔗 Nodes Used

Airtable, Edit Image, HTTP Request, Google Drive, Wordpress, Airtable Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
