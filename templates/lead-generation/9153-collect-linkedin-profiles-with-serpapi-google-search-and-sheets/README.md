# 🎣 Collect LinkedIn profiles with SerpAPI Google Search and Sheets

> ⚡ **269 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# [LI] – Search Profiles

&gt; **⚠️ Self-hosted disclaimer:**  
&gt; This workflow uses the **SerpAPI community node**, which is available only on **self-hosted n8n instances**.  
&gt; For **n8n Cloud**, you may need to use an HTTP Request node with the SerpAPI REST API instead.

---
![Screenshot From 20251020 130253.png](fileId:3020)


---

## Who’s it for
Recruiters, talent sourcers, SDRs, and anyone who wants to **automatically gather public LinkedIn profiles** from Google search results based on keywords — across **multiple pages** — and log them to a Google Sheet for further analysis.

---

## What it does / How it works
This workflow extends the standard LinkedIn profile search to include **pagination**, allowing you to fetch results from **multiple Google result pages** in one go.

Here’s the step-by-step process:

1. **Form Trigger – “LinkedIn Search”**
   - Collects:
     - **Keywords (comma separated)** – e.g., `python, fintech, warsaw`
     - **Pages to fetch** – number of Google pages to scrape (each page ≈ 10 results)
   - Triggers the workflow when submitted.

2. **Format Keywords (Set)**
   - Converts the keywords into a Google-ready query string:
     ```
     ("python") ("fintech") ("warsaw")
     ```
   - These parentheses improve relevance in Google searches.

3. **Build Page List (Code)**
   - Creates a **list of pages** to iterate through.
   - For example, if “Pages to fetch” = 3, it generates 3 search batches with proper `start` offsets (`0`, `10`, `20`).
   - Keeps track of:
     - Grouped keywords (`keywordsGrouped`)
     - Raw keywords
     - Submission timestamp

4. **Loop Over Items (Split In Batches)**
   - Loops through the page list one batch at a time.
   - Sends each batch to **SerpAPI Search** and continues until all pages are processed.

5. **SerpAPI Search**
   - Queries Google with:
     ```
     site:pl.linkedin.com/in/ ("keyword1") ("keyword2") ("keyword3")
     ```
   - Fixed to the **Warsaw, Masovian Voivodeship, Poland** location.
   - The `start` parameter controls pagination.

6. **Check how many results are returned (Switch)**
   - If **no results** → Triggers **No profiles found**.
   - If **results found** → Passes data forward.

7. **Split Out**
   - Extracts each LinkedIn result from the `organic_results` array.

8. **Get Full Name to property of object (Code)**
   - Extracts a clean full name from the search result title (text before “–” or “|”).

9. **Append profile in sheet (Google Sheets)**
   - Saves the following fields into your connected sheet:
     | Column | Description |
     |---------|-------------|
     | **Date** | Submission timestamp |
     | **Profile** | Public LinkedIn profile URL |
     | **Full name** | Extracted candidate name |
     | **Keywords** | Original keywords from the form |

10. **Loop Over Items (continue)**
    - After writing each batch, it loops to the next Google page until all pages are complete.

11. **Form Response (final step)**
    - Sends a confirmation back to the user after all pages are processed:
      ```
      Check linked file
      ```

---

## 🧾 Google Sheets Setup

Before using the workflow, prepare your Google Sheet with these columns in **row 1**:

| Column Name | Description |
|--------------|-------------|
| **Date** | Automatically filled with the form submission time |
| **Profile** | LinkedIn profile link |
| **Full name** | Extracted name from search results |
| **Keywords** | Original search input |

&gt; You can expand the sheet to include optional fields like **Snippet**, **Job Title**, or **Notes** if you modify the mapping in the `Append profile in sheet` node.

---

## Requirements
- **SerpAPI account** – with API key stored securely in **n8n Credentials**.  
- **Google Sheets OAuth2 credentials** – connected to your target sheet with edit access.  
- **n8n instance (Cloud or self-hosted)**  
  &gt; Note: SerpAPI node is part of the **Community package** and may require **self-hosted n8n**.

---

## How to set up
1. Import the `[LI] - Search profiles` workflow into n8n.  
2. Connect your credentials:
   - **SerpAPI** – use your API key.
   - **Google Sheets OAuth2** – ensure you have write permissions.
3. Update the **Google Sheets node** to point to your own spreadsheet and worksheet.
4. (Optional) Edit the `location` field in **SerpAPI Search** for different regions.
5. Activate the workflow and open the public form (via webhook URL).
6. Enter your keywords and specify the number of pages to fetch.

---

## How to customize the workflow
- **Change search region:** Modify the `location` in the SerpAPI node or change the domain to `site:linkedin.com/in/` for global searches.  
- **Add pagination beyond 3–4 pages:** Increase “Pages to fetch” — but note that excessive pages may trigger Google rate limits.  
- **Avoid duplicates:** Add a **Google Sheets → Read** + **IF** node before appending new URLs.  
- **Add notifications:** Add **Slack**, **Discord**, or **Email nodes** after Google Sheets to alert your team when new data arrives.  
- **Capture more data:** Map additional fields like `title`, `snippet`, or `position` into your Sheet.

---

## Security notes
- Never store API keys directly in nodes — always use **n8n Credentials**.  
- Keep your Google Sheet **private** and limit edit access.  
- Remove identifying data before sharing your workflow publicly.

---

## 💡 Improvement suggestions

| Area | Recommendation | Benefit |
|-------|----------------|----------|
| **Dynamic location** | Add a “Location” field to the form and feed it to SerpAPI dynamically. | Broader and location-specific searches |
| **Rate limiting** | Add a short **Wait** node (e.g., 1–2s) between page fetches. | Prevents API throttling |
| **De-duplication** | Check for existing URLs before appending. | Prevents duplicates |
| **Logging** | Add a second sheet or log file with timestamps per run. | Easier debugging and tracking |
| **Data enrichment** | Add a LinkedIn or People Data API enrichment step. | Collect richer candidate data |

---

✅ **Summary:**  
This workflow automates the process of searching public LinkedIn profiles from Google across multiple pages. It formats user-entered keywords into advanced Google queries, iterates through paginated SerpAPI results, extracts profile data, and stores it neatly in a Google Sheet — all through a single, user-friendly form.

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
