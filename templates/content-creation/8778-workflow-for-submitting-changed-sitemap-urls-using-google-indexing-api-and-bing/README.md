# 🎬 Workflow for submitting changed sitemap URLs using Google Indexing API and Bing IndexNow

> ⚡ **681 views** · 🎬 [Content Creation & Video](../)

## Description

### This n8n template saves you hours of manual SEO work by automatically parsing your sitemap and submitting updated URLs to Google and Bing (IndexNow).

### Who’s it for

Site owners, SEOs, and marketers who want a single automation to notify Google (Indexing API) and Bing (via IndexNow) whenever site URLs are added or updated. No more need to update it manually. Hours saved

### What it does

This workflow parses your sitemap.xml, and for each URLs that have been changed on the last X days (this is a setting from Config node), submit them to Google and Bing via IndexNow. Before submitting to Google it checks the status. For IndexNow it just submits based on the last updated date it can find on the sitemap.


### How it works

* Parses your sitemap(s)to generate a list of urls ordered by lastmod date.
* Create a batch of the urls updated in the last X days (settings DAYS_BACK from the "Config" node)
* For Google, it first aks the current indexing notification status of this exact URL. If the sitemap shows the page was modified after the last submission, the workflow sends a new "URL_UPDATED" notification to Google. If Google has no record (404), it means the URL was never submitted and the workflow treats it as new and submits it. 
* For Bing through IndexNow, it only sends “recently changed URLs” based on the sitemap’s &lt;lastmod&gt; and the variable DAYS_BACK from the Config Node, by batches of 500 (current limit recommendation by Bing). IndexNow doesn't have an API to check the status of the url. 

Requirements

* Google Indexing API credentials (Service Account with https://www.googleapis.com/auth/indexing scope, added as Owner in Search Console).
* IndexNow API key: you can create it here https://www.bing.com/indexnow/getstarted.

How to use

* Edit the "Config" node with your data & preferences (everything explain in the workflow).
* Edit the "Check status (Google)" and "URL updated (Google)" node with your Google service account credentials.
* Execute the workflow to test it 
* Set up a cron with the "Schedule Trigger" node depending on your needs

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
