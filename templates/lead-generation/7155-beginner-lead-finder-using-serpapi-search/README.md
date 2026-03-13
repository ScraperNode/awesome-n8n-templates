# 🎣 Beginner lead finder using SerpAPI search

> ⚡ **1,874 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow finds experts on **any topic**, scrapes their websites, and pulls out contact emails automatically.  
Core services used: **SerpAPI (google search)** · **Apify (website crawler)** · **OpenAI (GPT-4o email extraction)**.

---

## 🛠️ Step-by-Step Setup & Execution

### 1️⃣ Run Workflow (Manual Trigger)
| Node | Type | Purpose |
|------|------|---------|
| `Run Workflow` | Manual Trigger | Start the workflow on demand while you test. |

---

### 2️⃣ Set Your Topic
| Node | Type | How to configure |
|------|------|------------------|
| `Set Topic` | **Set** | Add a string field **Topic** – e.g. `"n8n"`. This keyword drives every subsequent step. |

---

### 3️⃣ Search Google (Results 1-10)
| Node | Type | API Credential |
|------|------|----------------|
| `Search Google (top 10)` | **SerpAPI** | **Create SerpAPI credential**<br>1. Sign up → copy API key → n8n → **Credentials → New → SerpAPI** → paste.<br>2. Select the credential in this node. |
| **Key Params** | |  |
| `q` |  | `={{ $json.Topic }} Expert` |
| `location` |  | Region code (ex `585069efee19ad271e9c9b36`) |
| `additionalFields.start` |  | `"10"` (Google position 1-10)|

---

### 4️⃣ Search Google (Results 11-20)
| Node | Type | Notes |
|------|------|-------|
| `Search Google (11-20)` | **SerpAPI** (same credential) | Remove `start` or set to 20+ to fetch next page. |

---

### 5️⃣ Extract URL Lists
| Node | Type | Script Purpose |
|------|------|----------------|
| `Extract Url` & `Extract Url 2` | **Code** | Loop `data.organic_results` → output `{ title, link, displayed_link }` for each result. |

---

### 6️⃣ Combine Both Result Sets
| Node | Type | Details |
|------|------|---------|
| `Append Results` | **Merge (combineAll)** | Merges arrays from steps 3 & 4 into a single list for processing. |

---

### 7️⃣ Loop Over Every URL
| Node | Type | Configuration |
|------|------|---------------|
| `Loop Over Items1` | **Split In Batches** | Default batch = 1 (process one page at a time).<br>`onError = continueRegularOutput` keeps loop alive on failures. |

---

### 8️⃣ Scrape Webpage Content (Apify)
| Node | Type | API Credential |
|------|------|----------------|
| `Scrape URL with apify` | **HTTP Request** | **Create Apify credential**<br>1. Sign up at https://console.apify.com<br>2. Account → **API tokens** → copy.<br>3. n8n → **Credentials → New → HTTP Query Auth** → set query param `token=YOUR_TOKEN`. |
| **Request Details** |  |  |
| Method | POST |
| URL | `https://api.apify.com/v2/acts/6sigmag~fast-website-content-crawler/run-sync-get-dataset-items` |
| JSON Body | ```json { "startUrls": ["{{ $json.link }}"] } ``` |

---

### 9️⃣ Extract Email with OpenAI
| Node | Type | API Credential |
|------|------|----------------|
| `Extract Email from webpage` | **LangChain Agent** | **Create OpenAI credential**<br>1. Generate key at https://platform.openai.com/account/api-keys<br>2. n8n → **Credentials → New → OpenAI API** → paste key. |
| Prompt (system) | ```extract the email address from the text. if there is no email address, output null.``` |
| **Output Parser** | `Structured Output Parser2` expects → `{ "email": "address OR null" }` |

---

### 🔟 Loop Continues & Final Data
- The extracted result returns to **Loop Over Items1** until every URL is processed.  
- **Typical final item JSON**:
  ```json
  {
    "title": "How to Build n8n Workflows",
    "link": "https://example.com",
    "email": "info@example.com"
  }

💡 Optional Enhancements
Idea	How
Save Leads	Add a Google Sheets or Airtable node after the loop.
Validate Emails	Chain a ZeroBounce / Hunter.io verification API before saving.
Parallel Crawling	Increase SplitInBatches size (watch Apify rate limits).

🙋‍♂️ Need More Help?
Robert Breen – Automation Consultant & n8n Expert
📧 robert.j.breen@gmail.com
🔗 https://www.linkedin.com/in/robert-breen-29429625/
🌐 https://ynteractive.com

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
