# 📊 Scrape Trustpilot reviews with DeepSeek, analyze sentiment with OpenAI

> ⚡ **12,870 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

### **Workflow Overview**  
This workflow automates the process of **scraping Trustpilot reviews**, extracting key details, analyzing sentiment, and saving the results to **Google Sheets**. It uses **OpenAI** for sentiment analysis and **HTML parsing** for review extraction.

---

### **How It Works**  

#### **1. Scrape Trustpilot Reviews**   
- **HTTP Request**:  
  - Fetches review pages from Trustpilot (`https://it.trustpilot.com/review/{{company_id}}`).  
  - Paginates through pages (up to `max_page` limit).  
- **HTML Parsing**:  
  - Extracts review URLs using CSS selectors
  - Splits the URLs into individual review links.  

#### **2. Extract Review Details**   
- **Information Extractor**:  
  - Uses DeepSeek to extract structured data from the review:  
    - **Author**: Name of the reviewer.  
    - **Rating**: Numeric rating (1-5).  
    - **Date**: Review date in `YYYY-MM-DD` format.  
    - **Title**: Review title.  
    - **Text**: Full review text.  
    - **Total Reviews**: Number of reviews by the user.  
    - **Country**: Reviewer’s country (2-letter code).  

#### **3. Sentiment Analysis**  
- **Sentiment Analysis Node**:  
  - Uses OpenAI to classify the review text as **Positive**, **Neutral**, or **Negative**.  
  - Example output:  
    ```json  
    {  
      "category": "Positive",  
      "confidence": 0.95  
    }  
    ```  

#### **4. Save to Google Sheets**  
- **Google Sheets Node**:  
  - Appends or updates the extracted data to a Google Sheet 

---

### **Set Up Steps**  

#### **1. Configure Trustpilot Scraping**  
- **Edit Fields1 Node**:  
  - Set `company_id` to the Trustpilot company name 
  - Set `max_page` to limit the number of pages scraped.  

#### **2. Configure Google Sheets**  
- **Google Sheets Node**:  
  - Update the `documentId` with your Google Sheet ID 
  - Ensure the sheet has the required columns (`Id`, `Data`, `Nome`, etc.).  

#### **3. Configure OpenAI**  
- **OpenAI Chat Model Node**:  
  - Add your OpenAI API key.  
- **Sentiment Analysis Node**:  
  - Ensure the `categories` match your desired sentiment labels (`Positive, Neutral, Negative`).  

---

### **Key Components**  
- **Nodes**:  
  - **HTTP Request/HTML**: Scrape and parse Trustpilot reviews.  
  - **Information Extractor**: Extract structured review data using DeepSeek.  
  - **Sentiment Analysis**: Classify review sentiment.  
  - **Google Sheets**: Save and update review data.  
- **Credentials**:  
  - OpenAI API key. 
  - DeepSeek API key.  
  - Google Sheets OAuth2.

## 🔗 Nodes Used

Google Sheets, HTTP Request, OpenAI Chat Model, Sentiment Analysis, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
