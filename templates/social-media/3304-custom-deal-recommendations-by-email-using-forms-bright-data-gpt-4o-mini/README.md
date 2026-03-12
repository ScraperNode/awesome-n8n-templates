# 📱 Custom deal recommendations by email using Forms, Bright Data & GPT-4o-mini

> ⚡ **1,427 views** · 📱 [Social Media & Email Marketing](../)

## Description

![image.png](fileId:1036)

This **n8n workflow template** automates the process of collecting and delivering the **"Top Deals of the Day" from MediaMarkt**, tailored to user preferences. By combining **user-submitted forms**, **Bright Data web scraping**, **GPT-4o-mini deal generation**, and **email delivery**, this workflow sends **personalized product recommendations** straight to a user’s inbox.

&gt; ⚠️ *Note: This workflow uses community nodes (Bright Data and Document Generator) which only work on **self-hosted n8n instances***.

---

### 🚀 **What It Does**

- Collects user preferences via a form (categories + email)
- Scrapes MediaMarkt’s deals page using [Bright Data](https://get.brightdata.com/ar8wlq0xkpv5)
- Uses GPT-4o-mini (OpenAI) to recommend top deals
- Generates a structured HTML email using a template
- Sends the personalized deals directly via email

---

### 🧩 **Community Node Integration**
We created and used the following community nodes:

- **[Bright Data](https://www.npmjs.com/package/n8n-nodes-brightdata)** – To scrape MediaMarkt deals using proxy-based scraping
- **[Document Generator](https://www.npmjs.com/package/n8n-nodes-document-generator)** – To generate a templated HTML document from deal data

These nodes are **not available in n8n Cloud** and require **self-hosted n8n**.

---

### 🛠️ **Step-by-Step Setup**

1. **Install Community Nodes**  
   Make sure you're on a self-hosted n8n instance. Install:
   - `n8n-nodes-brightdata`
   - `n8n-nodes-document-generator`

2. **Configure Credentials**  
   - **Bright Data API Key** (Proxy + Scraping setup)
   - **OpenAI API Key** (GPT-4o-mini access)
   - **SMTP Credentials** for sending emails

3. **Customize the Form**  
   Adapt the form node to collect desired categories and email addresses. Typical categories include appliances, phones, laptops, etc.

4. **Design Your HTML Template**  
   In the Document Generator node, you can tweak the HTML/CSS to change how deals appear in the final email.

5. **Test the Workflow**  
   Submit the form with test data and check that the entire flow—from scraping to email—executes as expected.

---

### 🧠 **How It Works: Workflow Overview**

1. **User Interaction via Form**  
   Users select product categories and enter their email. This triggers the workflow.

2. **Data Extraction via Bright Data**  
   Bright Data scrapes the [MediaMarkt offers page](https://www.mediamarkt.es/es/campaign/campanas-y-ofertas) and returns HTML content.

3. **HTML Parsing**  
   Key elements like product names, prices, and links are extracted for processing.

4. **GPT-4o-mini Recommendation Generation**  
   The extracted data is sent to OpenAI (GPT-4o-mini), which filters, ranks, and enhances deals based on the user’s preferences.

5. **Data Structuring & Split**  
   The result is split into individual deal items to be formatted.

6. **HTML Document Creation**  
   Document Generator populates a clean HTML template with the top recommended deals.

7. **Email Delivery**  
   The final document is emailed via SMTP to the user with a friendly message.

---

### 📨 **Final Output**

Users receive a **custom HTML email** featuring a curated list of top MediaMarkt deals based on their selected categories.

---

### 🔐 **Credentials Used**

- **Bright Data API** – Web scraping with proxy support  
- **OpenAI API** – Generating personalized recommendations  
- **SMTP** – Sending personalized deal emails

---

### ✨ **Customization Tips**

- **Change the Data Source**: You can adapt this to scrape other e-commerce sites.
- **Update the Email Template**: Make it match your branding or include images.
- **Extend the Form**: Add preferences like price range or specific brands.
- **Add Scheduling**: Use Cron to run the workflow daily or weekly.

---

### ❓Questions?

Template and node created by [**Miquel Colomer**](https://www.linkedin.com/in/miquelcolomersalas/) and [**n8nhackers.com**](https://n8nhackers.com).  

Need help customizing or deploying? [**Contact us**](mailto:contact@n8nhackers.com) for consulting and support.

## 🔗 Nodes Used

Send Email, n8n Form Trigger, OpenAI, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
