# 📱 Publish WordPress posts to social media X, Facebook, LinkedIn, Instagram with AI

> ⚡ **42,972 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Workflow Description for n8n: Social Media Post from Ideas Copy

This workflow automates the process of creating and publishing **social media posts** across multiple platforms (Twitter/X, Facebook, LinkedIn, and Instagram) based on content from a WordPress post. It uses **AI models** to generate platform-specific captions and images, and integrates with **Google Sheets**, **WordPress**, and various social media APIs. 

Is a powerful tool for automating social media post creation and publishing, saving time and ensuring consistent, platform-optimized content across multiple channels.

Below is a breakdown of the workflow:

---

#### **1. How It Works**
The workflow is designed to streamline the creation and publishing of social media posts. Here's how it works:

1. **Trigger**:
   - The workflow starts with a **Manual Trigger** node, which initiates the process when the user clicks "Test workflow."

2. **Fetch Data**:
   - The **Google Sheets** node retrieves the **WordPress Post ID** from a predefined Google Sheet.
   - The **Get Post** node fetches the corresponding WordPress post content using the retrieved Post ID.

3. **Generate Social Media Content**:
   - The **Social Media Manager** node uses an **AI model (OpenRouter)** to analyze the WordPress post and generate platform-specific captions for **Twitter/X**, **Facebook**, **LinkedIn**, and **Instagram**.
   - The AI ensures that each caption is tailored to the platform's audience, tone, and style, including hashtags and calls to action.

4. **Generate Images**:
   - The **Image Instagram** and **Image Facebook e Linkedin** nodes use **OpenAI** to generate platform-specific images for Instagram, Facebook, and LinkedIn posts.

5. **Publish on Social Media**:
   - The workflow publishes the generated content and images on the respective platforms:
     - **Publish on X**: Posts the caption on Twitter/X.
     - **Publish on LinkedIn**: Posts the caption and image on LinkedIn.
     - **Publish on Facebook**: Posts the caption and image on Facebook.
     - **Publish on Instagram**: Posts the caption and image on Instagram.

6. **Update Google Sheets**:
   - The workflow updates the Google Sheet to mark the posts as published (e.g., "X OK," "Facebook OK," "LinkedIn OK," "Instagram OK").

---

#### **2. Set Up Steps**
To set up and use this workflow in n8n, follow these steps:

1. **Google Sheets Setup**:
   - Create (or clone) a Google Sheet with columns for **POST ID**, **TEXT**, **TWITTER**, **FACEBOOK**, **INSTAGRAM**, and **LINKEDIN**.
   - Link the Google Sheet to the **Google Sheets** node by providing the **Document ID** and **Sheet Name**.

2. **WordPress Integration**:
   - Set up WordPress credentials in n8n for the **Get Post** node.
   - Ensure the WordPress site is accessible via its REST API.

3. **AI Model Configuration**:
   - Configure the **OpenRouter** credentials in n8n for the **Social Media Manager** node.
   - Ensure the AI model is set up to generate platform-specific captions.

4. **Image Generation**:
   - Set up **OpenAI** credentials for the **Image Instagram** and **Image Facebook e Linkedin** nodes to generate images.

5. **Social Media API Integration**:
   - Set up credentials for each social media platform:
     - **Twitter/X**: Configure the **Publish on X** node with Twitter OAuth2 credentials.
     - **LinkedIn**: Configure the **Publish on LinkedIn** node with LinkedIn OAuth2 credentials.
     - **Facebook**: Configure the **Publish on Facebook** and **Publish on Instagram** nodes with Facebook Graph API credentials.

6. **Test the Workflow**:
   - Click the **"Test workflow"** button in n8n to trigger the workflow.
   - The workflow will:
     - Fetch the WordPress post content.
     - Generate platform-specific captions and images.
     - Publish the posts on Twitter/X, Facebook, LinkedIn, and Instagram.
     - Update the Google Sheet to mark the posts as published.

7. **Optional Customization**:
   - Modify the workflow to include additional platforms or customize the AI-generated content further.


---


### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Wordpress, Facebook Graph API, X (Formerly Twitter), LinkedIn

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
