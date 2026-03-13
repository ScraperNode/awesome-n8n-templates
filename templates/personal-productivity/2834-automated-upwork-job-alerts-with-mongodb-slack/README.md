# ⚡ Automated Upwork job alerts with MongoDB & Slack

> ⚡ **5,201 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## **Overview**  
This **automated workflow** fetches **Upwork job postings** using **Apify**, removes duplicate job listings via **MongoDB**, and sends new job opportunities to **Slack**.  

### **Key Features:**  
- **Automated job retrieval** from Upwork via Apify API  
- **Duplicate filtering** using MongoDB to store only unique jobs  
- **Slack notifications** for new job postings  
- **Runs every 20 minutes** during working hours (9 AM - 5 PM)  

This workflow **requires an active Apify subscription** to function, as it uses the Apify Upwork API to fetch job listings. 


## Who is This For?  
This workflow is ideal for:  
- Freelancers looking to track Upwork jobs in real time  
- Recruiters automating job collection for analytics  
- Developers who want to integrate Upwork job data into their applications  

## What Problem Does This Solve?  
Manually checking Upwork for jobs is time-consuming and inefficient. This workflow:  
- Automates job discovery based on your keywords  
- Filters out duplicate listings, ensuring only new jobs are stored  
- Notifies you on Slack when new jobs appear  

## How the Workflow Works  

### 1. Schedule Trigger (Every 20 Minutes)  
- Triggers the workflow at 20-minute intervals  
- Ensures job searches are only executed during working hours (9 AM - 5 PM)  

### 2. Query Upwork for Jobs  
- Uses Apify API to scrape Upwork job posts for specific keywords (e.g., "n8n", "Python")  

### 3. Find Existing Jobs in MongoDB  
- Searches MongoDB to check if a job (based on title and budget) already exists  

### 4. Filter Out Duplicate Jobs  
- The Merge Node compares Upwork jobs with MongoDB data  
- The IF Node filters out jobs that are already stored in the database  

### 5. Save Only New Jobs in MongoDB  
- The Insert Node adds only new job listings to the MongoDB collection  

### 6. Send a Slack Notification  
- If a new job is found, a Slack message is sent with job details  

## Setup Guide  

### Required API Keys  
- Upwork Scraper (Apify Token) – Get your token from Apify
- MongoDB Credentials – Set up MongoDB in n8n using your connection string  
- Slack API Token – Connect Slack to n8n and set the channel ID (default: #general)  

### Configuration Steps  
1. Modify search keywords in the 'Assign Parameters' node (startUrls)  
2. Adjust the Working Hours in the 'If Working Hours' node  
3. Set your Slack channel in the Slack node  
4. Ensure MongoDB is connected properly  
5. Adjust the 'If Working Hours' node to match your timezone and hours, or remove it altogether to receive notifications and updates constantly.

## How to Customize the Workflow  
- Change keywords: update the startUrls in the 'Assign Parameters' node to track different job categories  
- Change 'If Working Hours': Modify conditions in the IF Node to filter times based on your needs  
- Modify Slack Notifications: Adjust the Slack message format to include additional job details  

## Why Use This Workflow?  
- Automated job tracking without manual searches  
- Prevents duplicate entries in MongoDB  
- Instant Slack notifications for new job opportunities  
- Customizable – adapt the workflow to different job categories  

## Next Steps  
1. Run the workflow and test with a small set of keywords  
2. Expand job categories for better coverage  
3. Enhance notifications by integrating Telegram, Email, or a dashboard  

This workflow ensures real-time job tracking, prevents duplicates, and keeps you updated effortlessly.

## 🔗 Nodes Used

HTTP Request, Slack, MongoDB, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
