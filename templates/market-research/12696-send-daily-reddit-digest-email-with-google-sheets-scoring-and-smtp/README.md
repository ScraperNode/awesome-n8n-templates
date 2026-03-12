# 📊 Send daily Reddit digest email with Google Sheets scoring and SMTP

> ⚡ **25 views** · 📊 [Market Research & Insights](../)

## Description

### This N8N Template shows you how to create a basic Reddit scraper and email yourself the highest scoring threads 

This is for founders, service providers and anyone who wants to do more social listening but doesn't want to pay for an expensive tool. 

It uses a basic google sheet for configuration so you can manage and filter without updating any code. 


### How it works 
- We start with a scheduler (but you could manually trigger if you want) 
- We read in a google sheet with the configuration of which subreddits you want to search, as well as minimum scoring so you can weight importance of each subreddit. 
- Then you use an RSS feed to get the content 
- Next, we normalize the RSS feed so that we can extract the important information
- Then we go back to the Google sheet (this time a different tab) that has the keywords we want to look for. We also include key words we don't want. 
- We score each post based on the key words and additional pain points written into the scoring node. 
- Then we filter out the posts that don't score high enough, or that we've already "seen" 
- We keep track of the posts we've seen in another tab in the excel sheet. This prevents duplication
- Then we create the email, sending just the title as a link and send it via SMTP



### Requirements
- Google sheets account & credentials
- Google sheet with 
- Email for SMTP 

### How to Customize 
- Create your own Google Sheets Template like this: [Google Doc Template](https://docs.google.com/spreadsheets/d/1gNGrROwmz1l5eGFYAaQ3zMg2e_L8qQTEMVU19IogoGU/edit?usp=sharing)
- In the scoring node, update with painpoints (this could be added to Google Sheet config if you want) 
- Update weights and scoring metrics in scoring node
- Update with your email

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
