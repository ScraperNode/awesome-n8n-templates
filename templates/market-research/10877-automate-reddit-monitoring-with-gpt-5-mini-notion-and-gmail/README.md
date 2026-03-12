# 📊 Automate Reddit Monitoring with GPT-5-Mini, Notion, and Gmail

> ⚡ **244 views** · 📊 [Market Research & Insights](../)

## Description

## Instantly Track Reddit Discussions and Generate Insights

Manually monitoring Reddit for relevant discussions can be overwhelming. This automation does all the heavy lifting by automatically searching for **keywords across selected subreddits or the entire Reddit**, analyzing each post with **GPT-5-Mini**, and saving structured insights in your **Notion database**. Optionally, receive daily email notifications summarizing new discussions without lifting a finger.

---

## **Key Features**

* **Daily Automated Reddit Monitoring**  
  Checks Reddit once a day for new posts matching your keywords in selected subreddits or across all of Reddit.

* **AI-Powered Analysis with Custom Prompts**  
  Uses GPT-5-Mini to:  
  - Assign a **relevance score** to each post based on your defined priorities.  
  - Generate a **suggested comment** tailored to your audience or engagement strategy.  
  - Allow custom prompts so you can tweak AI behavior for lead generation, competitor monitoring, or brand mentions.

* **Notion Integration**  
  Saves all posts, relevance scores, and AI-generated comments directly into your Notion database for easy tracking and collaboration.  
  ![Notion ScreenShot](https://res.cloudinary.com/datbbikfe/image/upload/v1763283388/n8n/Screenshot_2025-11-16_at_1.23.50_PM_brfh94.png)

* **Optional Email Alerts**  
  Sends a clean, HTML-formatted email summarizing new discussions and insights.  
  ![Email Screenshot](https://res.cloudinary.com/datbbikfe/image/upload/v1763283525/n8n/Screenshot_2025-11-16_at_1.21.31_PM_bdnc5g.png)

* **No API Keys Required for Reddit**  
  Works with the official Reddit API without requiring users to create credentials.

* **Customizable Inputs**  
  Users define keywords, subreddits, relevance criteria, custom prompts, and notification preferences with minimal setup.

---

## **Setup Instructions**

### 1. Configure Keywords and Subreddits

1. Open the **Define Keywords and Subreddits** node.  
2. Enter your target keywords and choose specific subreddits, or enable search across all Reddit.  
3. Map the inputs to the workflow’s search nodes.

---

### 2. Connect OpenAI (GPT-5-Mini)

1. Create an OpenAI account and obtain your **API key**.  
2. Open the **AI Analysis Node** in the workflow.  
3. Paste your OpenAI API key into the credentials field.  
4. Customize your prompts to define how GPT-5-Mini:  
   - Scores relevance based on your specific criteria.  
   - Generates suggested comments tailored to your objectives (e.g., lead generation, brand engagement, competitor analysis).  
5. Test the node to ensure relevance scoring and suggested comments are generated correctly.

---

### 3. Connect Notion

1. Duplicate the provided Notion template into your workspace.  
2. Obtain your **Notion integration secret** from Notion settings.  
3. Paste the secret into the **Add Each Post to Notion Database** node.  
4. Test the connection to ensure posts are saved correctly.  

---

### 4. Optional Email Notifications

1. Setup **Google API credentials** in the Google Cloud Console.  
2. Authenticate Gmail in the workflow.  
3. Map the recipient email and customize the notification format.  
4. Test sending an email to confirm delivery.

---

### 5. Configure Workflow Trigger

1. Import the workflow into n8n.  
2. Ensure the daily trigger is enabled.  
3. Optionally adjust schedule or notification settings.

---

## **How It Works**

1. **Daily Trigger:** Starts the workflow once per day.  
2. **Reddit Search:** Queries new posts based on user-defined keywords.  
3. **AI Analysis:** GPT-5-Mini evaluates **relevance score** and generates **suggested comments** based on your custom prompts.  
4. **Save & Notify:** Posts are saved to Notion and optionally summarized via email.

---

## **Example Use Cases**

* Generate **leads** by identifying potential prospects discussing your industry or product.  
* Monitor **brand mentions** to stay on top of conversations around your company.  
* Track **competitor activity** across relevant subreddits.  
* Keep a daily digest of trending posts for **market research or content ideas**.  
* Automate engagement by posting AI-generated **suggested comments**.

---

## **Requirements**

| Tool           | Purpose                                           |
| -------------- | ------------------------------------------------- |
| Notion Account | Store posts, relevance scores, and comments      |
| Gmail Account  | Optional daily email notifications               |
| n8n            | Run, schedule, and manage the workflow           |
| OpenAI API Key | Access GPT-5-Mini for relevance scoring and AI-generated comments |

---

## 🔗 Nodes Used

HTTP Request, Gmail, Notion, Schedule Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
