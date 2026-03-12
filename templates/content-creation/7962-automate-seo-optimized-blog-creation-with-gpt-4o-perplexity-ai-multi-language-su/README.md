# 🎬 Automate SEO-Optimized blog creation with GPT-4o, Perplexity AI & multi-language support

> ⚡ **133 views** · 🎬 [Content Creation & Video](../)

## Description

## **WordPress Blog Automation Pro v2.1 – with DEEPER RESEARCH – Advanced Content Automation**

This advanced, dual-workflow system automates the entire lifecycle of creating in-depth, SEO-optimized blog posts. It transforms a simple topic from a Google Sheet into a fully researched, well-structured, and image-rich article published directly on your WordPress site, with all assets securely backed up to Google Drive. It leverages AI for multi-layered research, content generation, and image creation, streamlining your content pipeline.

This version 2.1 is an upgrade from the [WordPress Auto-Blogging Pro v2 \- with DEEPER RESEARCH \- Advanced Content Automation](https://n8n.io/workflows/3852-multi-level-wordpress-blog-generator-with-perplexityai-research-and-openai-content/).

For more powerful n8n templates, visit our website at [aiautomationpro.org](https://aiautomationpro.org/).

![AIAutomationProWordPressBlogAutomationDeeperResearchv2.11.jpeg](fileId:2259)![AIAutomationProWordPressBlogAutomationDeeperResearchv2.12.jpeg](fileId:2264)![AIAutomationProWordPressBlogAutomationDeeperResearchv2.13.jpeg](fileId:2258)![AIAutomationProWordPressBlogAutomationDeeperResearchv2.14.jpeg](fileId:2263)![AIAutomationProWordPressBlogAutomationDeeperResearchv2.15.jpeg](fileId:2262)![AIAutomationProWordPressBlogAutomationDeeperResearchv2.16.jpeg](fileId:2261)![AIAutomationProWordPressBlogAutomationDeeperResearchv2.17.jpeg](fileId:2260)

## **What's new in version 2.1**

Version 2.1 introduces several upgrades for efficiency and simplicity:

1. **Re-architecture of the core AI logic:** The initial AI research agent is now more powerful. It not only provides a general overview but also proactively defines and returns the complete chapter structure for the article in a single step. This integration results in a more coherent and logically structured article from the very beginning.  
2. **Multi-Language Support:** The workflow is now designed to support content creation in multiple languages, allowing you to scale your content strategy globally.  
3. **Simplified Architecture with Native Perplexity Node:** Thanks to updates in n8n's Perplexity node, the separate "Research Tool" sub-workflow has been eliminated. All research calls are now made directly within the Main Flow. This simplifies the template's structure from three workflows down to two, making it easier to set up, manage, and debug.  
4. **Enhanced AI Reliability:** The new version uses Structured Output Parsers within the LangChain framework. This ensures the AI's responses are always in a clean, predictable JSON format, drastically reducing errors and making the entire automation more resilient.

## **What problem is this workflow solving? / Use cases**

Standard content automation often struggles with producing truly in-depth, comprehensive content. This workflow addresses that challenge by:

* **Automating Multi-Level Research:** Optionally eliminates the manual effort required to deeply research topics, ensuring content is thorough and well-supported.  
* **Generating Long-Form Content:** Enables the creation of detailed articles, comprehensive reports, or even initial e-book drafts automatically.  
* **Scaling Content Production:** Efficiently handles lists of topics from Google Sheets, processing them sequentially for reliable, automated content creation over time.  
* **Enhancing SEO Automatically:** Integrates best practices like sitemap-based internal linking, external source linking, automatic categorization, and tag generation.  
* **Streamlining Complex Tasks:** Combines research, writing, image generation, SEO optimization, publishing, and comprehensive backups into a single, automated system.

## **Who is this for?**

This advanced workflow is designed for demanding users who require robust, comprehensive content automation:

* Content Marketers & Strategists  
* SEO Professionals  
* Niche Site Builders & Affiliates  
* Agencies  
* Researchers & Analysts  
* Power Users of previous versions ready to upgrade to a more powerful and streamlined architecture.

## **Unique Features**

* **Conditional Deeper Research:** Choose per-topic whether to activate multi-level research for maximum depth or use standard chapter-level research.  
* **Multi-Language Content Generation**: Define your desired output language in the Airtable settings to create content for different global audiences.  
* **Centralized Control Interface:** Google Sheets acts as the primary interface for bulk input, parameter setting, and status monitoring.  
* **Dual Trigger Options:** Use Google Sheets for batch processing lists of topics or n8n’s Native Form for single, ad-hoc topic submission.  
* **Latest AI Image Models:** Optimized for high-quality images using OpenAI’s latest models, with easy node setup to switch to alternatives.  
* **Multiple-Image Generation:** Generates and adds unique AI images for each chapter, as well as a featured image for the article.  
* **Automatic Categorization:** The AI intelligently assigns your post to the most relevant existing categories on your WordPress site.  
* **AI-Powered Tag Generation:** The workflow automatically generates a list of relevant SEO tags for your article to improve discoverability.  
* **Batch Topic Processing:** Handles multiple topic inputs efficiently via the Trigger Flow loop, processing them sequentially with status tracking.  
* **Advanced External & Internal Linking:** Automatically inserts relevant internal links by analyzing your sitemap and includes external source links from its research.  
* **Direct WordPress Integration:** Streamlines publication by automatically sending finalized content, metadata, tags, images, and categories to your WordPress site.  
* **Comprehensive Backup System:** Saves final content in multiple formats and locations: Markdown to Google Docs, Images to Google Drive, Final URLs and details to Google Sheets.  
* **Rate-Limit Aware:** Includes configurable Wait nodes to prevent API errors during intensive processing.  
* **Native Perplexity Integration:** Simplifies online research with n8n's built-in Perplexity node.

## **How this workflow works**

This template utilizes two interconnected n8n flows, orchestrated primarily via Google Sheets.

1. **Trigger Flow (Scheduler & Dispatcher):** Activates on a schedule or via a form. It reads rows from a Google Sheet where the Status is 'To Do' and executes the Main Flow for each topic, one by one.  
2. **Main Flow (Content Generation Engine):**  
   * **Setup:** Receives parameters from the Trigger Flow and updates the topic's status to 'In Progress'.  
   * **Research & Planning:** Gathers internal links from your sitemap and performs initial online research using the native Perplexity node. A LangChain-based AI agent then outlines the entire article.  
   * **Conditional Content Creation:** Based on the Have Deeper Research flag, it either performs multi-level research or standard chapter-level research.  
   * **Image Generation & Upload:** Generates and uploads a featured image and images for each chapter to WordPress and Google Drive.  
   * **Publishing & Backup:** Assembles the final article, converts it to HTML, publishes it to WordPress with all SEO metadata, and saves comprehensive backups to Google Sheets and Google Docs.  
   * **Finalize:** Updates the topic's Status to 'Done' in the Google Sheet.

## **Requirements**

* n8n Instance  
* OpenAI API Key  
* Perplexity API Key  
* WordPress Website (REST API enabled, with an Application Password)  
* Google Account (for Sheets, Drive, and Docs)

## **Setup Step-by-Step**

1. **Import Workflows:** Download and import the two .json files (**Trigger Flow** and **Main Flow**).  
2. **Configure Google Sheet:** Find the link to the Google Sheet template in the automated email you received after your order confirmation. You must make your own copy of this sheet. Do not request access to the original link. The sheet has two tabs: Create Topic and Final Blogs. Ensure the column headers in your copy match those used in the workflow nodes.  
3. **Create Google Drive Folder:** In your Google Drive, create a new folder where all your content backups (documents and images) will be stored. Copy the Folder ID from the URL (it's the string of letters and numbers at the end).  
4. **Link Flows:** In the **Trigger Flow**, open the "Execute Workflow" node and select your imported **Main Flow** from the dropdown menu.  
5. **Configure Credentials:** In n8n, add credentials for OpenAI, Perplexity, WordPress, and Google.  
6. **Connect Workflow Nodes:** Open both workflows and assign the correct credential to each relevant node. Update the "Google Sheets" nodes with your Sheet ID and the "Google Drive" nodes with the Folder ID you created in step 3\.  
7. **Initial Test Run:** Add a test topic to your sheet, manually trigger the workflow, and verify the process completes successfully.  
8. **Activate Workflow:** Toggle the "Active" switch ON for the **Trigger Flow**. The Main Flow should remain inactive as it is triggered by the other flow.  
9. **Finalize SEO in WordPress:** The workflow saves the generated SEO meta title and meta description to the Final Blogs tab in your Google Sheet. After the post is created in WordPress (as a draft), you must **manually copy these values** from the sheet and paste them into your SEO plugin's fields (e.g., Yoast, Rank Math) on the WordPress post editor.

## **How to customize the workflow**

* **Adjust the Schedule:** Change the interval in the "Schedule Trigger" node of the Trigger Flow to control how often it checks for new topics.  
* **Change Language:** To generate content in a different language, open the **Main Flow**, go to the **Global Configuration** node, and update the language field to your desired language (e.g., "Spanish", "French", "German").  
* **Refine AI Prompts:** Modify the prompts in the OpenAI nodes within the "Main Flow" to fine-tune the writing style, tone, and structure of your articles.  
* **Change Image Style:** Edit the prompts in the "Generate Image" section to alter the style of the generated images to match your brand.  
* **Customize Post Status:** Change the default publishing status in the "WordPress" node from "draft" to "publish" if you want to post directly without a final review.

## 🔗 Nodes Used

Edit Image, Google Sheets, HTTP Request, Google Drive, Execute Sub-workflow, Wordpress

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
