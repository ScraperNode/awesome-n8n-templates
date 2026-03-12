# 🔬 🌳 EU green legislation tracker with GPT-4o, Google Sheets and Tasks

> ⚡ **1,476 views** · 🔬 [Document Extraction & Analysis](../)

## Description

*Tags: EU Legislation, Sustainability, Automation, Web Scraping, OpenAI, Google Sheets, Policy Monitoring, Climate*

### Context

Hey! I’m [Samir](https://samirsaci.com), a Supply Chain Engineer and Data Scientist from Paris, and the founder of [LogiGreen Consulting](https://logi-green.com).

We use **AI, automation, and data** to support sustainable business practices for small, medium and large companies.

This workflow is part of our broader initiative to **monitor and act on sustainability legislation** in Europe.

[![Legislative Observatory](https://www.samirsaci.com/content/images/2025/04/image-10.png)](https://www.youtube.com/watch?v=f_nyArpH6kk)

&gt; How do you know if new EU laws will impact your business's sustainability goals?

This n8n workflow automatically scrapes the EU Parliament’s legislative portal to find and flag procedures related to **environmental sustainability**.

📬 For business inquiries, feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Who is this template for?

This workflow is useful for:
- **Sustainability consultants** monitoring legal frameworks
- **NGOs and researchers** tracking environmental regulations
- **Companies** aligning with **CSRD** or **EU Green Deal** objectives
- **Policy analysts** looking for automation tools

### What does it do?

This n8n workflow:
1. 🌐 Scrapes the **EU Parliament legislative portal** for yesterday’s entries  
2. 🧠 Uses **OpenAI** to classify if each procedure is related to **sustainability**  
3. 🗂️ Filters out irrelevant items  
4. 📊 Saves the results in a **Google Sheet**  
5. ✅ Creates a **Google Task** for each relevant file to review the legislation  

### How it works

[![EU Legislation Workflow](https://www.samirsaci.com/content/images/size/w1000/2025/04/image-8.png)](https://www.youtube.com/watch?v=f_nyArpH6kk)

1. **Trigger manually or on schedule**
2. **Scrape HTML blocks** for scheduled debates
3. **Parse each procedure** to extract Title, Committee, Rapporteur, PDF link
4. **Call GPT-4-turbo** to check if the topic matches sustainability criteria
5. **Filter responses** based on “yes” or “no”
6. **Store valid items** into Google Sheets
7. **Generate tasks** in Google Tasks

The AI only flags procedures that **directly impact the environment, circular economy, or pollution control**.

### What do I need to get started?

You’ll need:
- A **Google Sheet** connected to your n8n instance  
- An **OpenAI account** with GPT-4 access  
- A **Google Task List**

### Follow the Guide!
Follow the sticky notes in the workflow or **check my tutorial** to configure each node and start using AI to monitor sustainability regulations in Europe.

[![YouTube Tutorial](https://www.samirsaci.com/content/images/2025/04/temp-9.png)](https://www.youtube.com/watch?v=f_nyArpH6kk)

🎥 [Watch My Tutorial](https://www.youtube.com/watch?v=f_nyArpH6kk)


### Notes

- AI filters are strict — you can customise the system prompt to match your needs  
- This is ideal for tracking **legislative risk** for **climate regulations**

*This workflow was built using n8n version 1.85.4*  
*Submitted: April 21, 2025*

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Tasks, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
