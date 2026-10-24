# 🔬 Generate & Upload llms.txt for websites GEO optimization 🕸️🌐 with ScrapegraphAI

> ⚡ **124 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow automatically generates an `llms.txt` file (following the llmstxt.org specification) for any given website. It uses ScrapegraphAI to crawl and scrape pages, an OpenAI chat model to process content, and finally uploads the generated file via FTP.


---

### Key Advantages

#### **1. ✅ Automated `llms.txt` Generation**

The workflow fully automates the creation of a compliant `llms.txt` file, eliminating the need for manual documentation and reducing maintenance time.

#### **2. ✅ AI-Powered Website Understanding**

Using OpenAI and ScrapeGraphAI, the system intelligently analyzes:

* Website structure
* Internal pages
* Titles and descriptions
* Content relevance
* Logical page categorization

This produces a high-quality output specifically optimized for AI systems and LLM indexing.

#### **3. ✅ Dynamic Internal Link Discovery**

The crawler automatically extracts all internal links from the website, making the workflow scalable for:

* Small business websites
* Large corporate websites
* Ecommerce stores
* Blogs and documentation portals

#### **4. ✅ Intelligent Content Categorization**

Pages are automatically grouped into meaningful sections such as:

* Main Pages
* Services
* Products
* Portfolio
* Blog
* Company
* Contact
* Legal / Optional pages

This improves readability and machine interpretability.

#### **5. ✅ Multilingual Support**

The workflow preserves the original language of the website content, ensuring consistency and localization for international projects.

#### **6. ✅Fully Automated Publishing**

After generation, the workflow converts the output into a `.txt` file and uploads it directly to an FTP server or CDN, enabling instant deployment without manual intervention.

#### *7. ✅ Reduced Manual Work**

The entire process — from crawling to publishing — is automated inside n8n, significantly reducing operational effort for SEO teams, developers, and AI optimization workflows.

#### **8. ✅ AI & SEO Optimization**

The generated `llms.txt` file helps:

* AI crawlers better understand the website
* Improve AI discoverability
* Structure content for LLM consumption
* Support future AI search indexing strategies

#### **9. ✅ Modular and Scalable Architecture**

The workflow is built with reusable components:

* Crawler module
* Status monitoring
* AI analysis agent
* Scraper tool
* Binary conversion
* FTP deployment

This makes it easy to extend, customize, or integrate into larger automation systems.


#### Ideal Use Cases

* AI-ready website optimization
* Automated SEO infrastructure
* LLM indexing preparation
* Agency website automation
* Large-scale multi-site management
* Documentation platforms
* AI search visibility enhancement


---

### How it works

The process begins when the workflow is manually triggered. It then:

1. **Starts a crawl** of the specified domain using ScrapegraphAI’s smartcrawler. The crawler extracts all internal links from the domain (acting like a sitemap generator).
2. **Waits** for the crawl to complete (configurable wait time, default 20 units).
3. **Checks the crawler’s status** – if the crawl is still processing, the workflow waits again; if successful, it proceeds.
4. **Extracts the discovered internal links** and passes them to an AI agent.
5. **Uses an AI agent (with OpenAI GPT)** that:
   - Receives the list of internal URLs.
   - Uses a `Scraper` tool (via ScrapegraphAI) to scrape each URL’s content.
   - Follows a strict prompt to:
     - Analyze the homepage (title, description, language).
     - Extract concise descriptions for each internal page.
     - Group pages into logical sections (Main pages, Services, Portfolio, Contact, Optional, etc.).
     - Generate a clean Markdown file (`llms.txt`) following the official spec.
6. **Converts the Markdown output into a binary file** (llms.txt).
7. **Uploads the file to an FTP server** (configured for BunnyCDN or any FTP storage).
8. **Ends the workflow** once the upload is complete.

The AI agent is explicitly forbidden from inventing content – it must call the `Scraper` tool for every URL before describing it. The output is pure Markdown, starting with `#`.

---

### Setup steps

To use this workflow in n8n, follow these steps:

#### 1. Prerequisites
- An **n8n instance** (self-hosted or cloud).
- A **ScrapegraphAI account** with API access.
- An **OpenAI account** with API key (model used: `gpt-5.4-mini` – note: this may be a custom/typo; usual models are `gpt-4o-mini` or `gpt-4`).
- An **FTP server** (traditional FTP, or SFTP if modified).

#### 2. Configure credentials in n8n
Go to **Credentials** in n8n and add:

- **ScrapegraphAI API**  
  - Name: `ScrapegraphAI account`
  - API Key: your ScrapegraphAI API key

- **OpenAI API**  
  - Name: `OpenAi account (Eure)`
  - API Key: your OpenAI API key

- **FTP**  
  - Name: `FTP BunnyCDN`
  - Host, Port, Username, Password (or SSH key) for your FTP server

#### 3. Modify the domain
In the **Set domain** node, change the `your_domain` to your target domain (e.g., `example.com`).  
Do not include `https://` – only the domain name.

#### 4. Adjust wait time (optional)
In the **Wait** node, change the `amount` (default 20) to a higher value if the target site is large or slow to crawl.

#### 5. Update FTP upload path
In the **Upload to FTP** node, update the `path` field.  
Currently it is:  
`=/YOUR_PATH/{{$binary.data.fileName}}`  
Change `YOUR_PATH` to the actual remote directory (e.g., `/public_html/`).  
The file will be saved as `llms.txt`.

#### 6. (Optional) Modify the AI prompt
The prompt inside the **LLMS.txt Agent** node can be adapted for:
- Different section names
- Different output structure
- Different languages
- Exclusion of certain URL patterns

#### 7. Activate and execute
- Save the workflow.
- Toggle **Active** to enable manual execution.
- Click **‘Execute workflow’** on the Manual Trigger node.
- Monitor execution – the workflow will wait for the crawl, then process all pages, and upload the final file.

#### 8. Verify
Check your FTP server for the generated `llms.txt`.  
Test it by opening in a text editor – it should be pure Markdown starting with `# Site name`.

---


👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

FTP, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
