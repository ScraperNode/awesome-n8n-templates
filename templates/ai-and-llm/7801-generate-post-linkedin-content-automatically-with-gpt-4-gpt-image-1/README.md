# ✨ Generate & post LinkedIn content automatically with GPT-4 & GPT image 1

> ⚡ **141 views** · ✨ [AI & LLMs](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# **⚙ AI-Powered Social Media Automation for LinkedIn**

---

## **How It Works**
This workflow automates the entire social media content creation and publishing process for LinkedIn. It starts with a simple form to collect a topic or idea. The workflow then uses two AI agents to automatically generate both the written content and a unique image prompt. The AI-generated image is created, uploaded, and then downloaded before the final step, where both the content and the image are posted to your LinkedIn account.

---

## **Setup Steps**

Follow these steps to get the workflow running in your n8n instance.

### **1. Prerequisites**
You will need a working n8n instance and accounts for the following services:
* **OpenAI:** For AI content and image generation.
* **Google Drive:** To temporarily store the generated image.
* **Gmail:** For the file upload process.
* **LinkedIn:** To publish the final post.

### **2. Workflow Import**
Import the provided `.json` file into your n8n instance. All the necessary nodes will appear on your canvas.

### **3. Configure Credentials**
Connect the following credentials to their respective nodes:
* **OpenAI:** Connect to the `OpenAI Chat Model`, `AI Agent Content Generator`, `Ai Agent Prompt Image generator`, and `Image-1` nodes.
* **Google Drive:** Connect to the `Upload file` and `Download file` nodes.
* **Gmail:** Connect to the `Send a message` node.
* **LinkedIn:** Connect to the `Create a post` node.

### **4. Customize the Trigger Form**
1.  Click on the **`On form submission`** node.
2.  Review and customize the form fields to fit your specific needs (e.g., add fields for hashtags, target audience, etc.).
3.  Click **"Share Form"** to get the unique URL for your content ideas form.

### **5. Customize AI Prompts**
1.  Click on the **`AI Agent Content Generator`** node.
2.  Review and adjust the **`System Message`** to refine the writing style, tone, and character limits for your LinkedIn posts.
3.  Similarly, open the **`Ai Agent Prompt Image generator`** node and modify the **`System Message`** to guide the AI in creating images that match your brand identity.

### **6. Configure Google Drive**
1.  Click on the **`Upload file`** node.
2.  Under the **`Parameters`** tab, select the specific **`Drive ID`** and **`Folder ID`** where you want to temporarily store the generated images.

### **7. Configure the LinkedIn Post**
1.  Click on the **`Create a post`** node.
2.  Ensure that the `Text` and `shareMediaCategory` parameters are correctly mapped to the output of the preceding nodes to use the AI-generated text and image.

### **8. Activate the Workflow**
1.  Once all credentials and node configurations are complete, click **"Save"** at the top of the canvas.
2.  Finally, toggle the workflow to **"Active"**. The workflow is now live and will automatically create and publish content upon every form submission.

## 🔗 Nodes Used

Google Drive, Gmail, LinkedIn, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
