# 🎬 Automate blog creation from keywords with Dumpling AI, OpenAI, and Google Docs

> ⚡ **321 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

### Who is this for?  
This workflow is perfect for content marketers, bloggers, SEO professionals, and virtual assistants who need to transform keyword research into complete blog posts without spending hours writing and formatting.  

---  

### What problem is this workflow solving?  
Writing a blog post from scratch requires research, summarizing content, and structuring it into a polished article. This workflow automates that process by taking a single keyword, fetching related news articles, cleaning the data, and generating a professional blog draft automatically in Google Docs.  

---  

### What this workflow does  
The workflow begins when a keyword is submitted through a form. It expands the keyword into trending suggestions using Dumpling AI Autocomplete, then fetches recent news articles with Dumpling AI Google News. Articles are filtered to only include those published within the last 1–2 days, then scraped and cleaned for quality text. The aggregated content is sent to OpenAI, which generates a polished blog draft with a clear title. Finally, the draft is saved directly into Google Docs for easy editing and publishing.  

---  

### Nodes Overview  

1. Form Trigger – `Form Submission (Keywords)`  
   Starts the workflow when a keyword is submitted through a form.  

2. HTTP Request – `Dumpling AI Autocomplete`  
   Expands the keyword into multiple trending search suggestions.  

3. Split Out – `Split Autocomplete Suggestions`  
   Breaks the list of autocomplete suggestions into individual items for processing.  

4. Loop – `Loop Suggestions`  
   Iterates through each suggestion to process articles separately.  

5. Wait – `Delay Between Requests`  
   Adds a pause to avoid sending too many requests at once.  

6. HTTP Request – `Dumpling AI Google News`  
   Fetches recent news articles for each suggestion.  

7. Split Out – `Split News Articles`  
   Splits the returned news results into individual articles.  

8. Code – `Filter Articles (1–2 Days Old)`  
   Keeps only articles that are between 1 and 2 days old for fresh content.  

9. Limit – `Limit Articles`  
   Restricts the workflow to the top 2 articles for each suggestion.  

10. HTTP Request – `Dumpling AI Scraper`  
    Scrapes and cleans the full text content from the article URLs.  

11. Code – `Clean & Prepare Article Content`  
    Removes clutter like links, images, and unrelated sections to ensure clean input.  

12. Aggregate – `Aggregate Articles`  
    Combines the cleaned article content into one dataset.  

13. OpenAI – `Generate Blog Draft`  
    Uses OpenAI to create a polished blog post draft and title in Markdown format.  

14. Google Docs – `Create Blog File`  
    Creates a new Google Doc with the generated blog title.  

15. Google Docs – `Insert Blog Content`  
    Inserts the full blog draft into the created document.  

---  

### 📝 Notes  

- Set up Dumpling AI and generate your API key from: [Dumpling AI](https://www.dumplingai.com/)  
- OpenAI must be connected with an active API key for blog generation.  
- Google Docs must be connected with write permissions to create and update blog posts.  
- You can adjust the article filter (currently set to 1–2 days old) in the code node depending on your needs.

## 🔗 Nodes Used

HTTP Request, Google Docs, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
