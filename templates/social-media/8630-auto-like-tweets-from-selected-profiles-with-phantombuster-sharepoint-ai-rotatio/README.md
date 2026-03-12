# 📱 Auto-like tweets from selected profiles with Phantombuster & SharePoint AI rotation

> ⚡ **238 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Who’s it for  
Growth hackers, community builders, and marketers who want to keep their Twitter (X) accounts active by *liking posts from selected profiles* automatically.  

## How it works / What it does  
1. **Schedule Trigger** fires hourly.  
2. **Profile Post Extractor** fetches up to 20 tweets for each profile in your CSV.  
3. **Select Cookie** rotates Twitter session-cookies.  
4. **Get Random Post** checks against `twitter_posts_already_liked.csv`.  
5. Builds `twitter_posts_to_like.csv`, uploads to SharePoint.  
6. **Phantombuster Autolike Agent** likes the tweet.  
7. Logs the liked URL to avoid duplicates.  

## How to set up  
- Add Phantombuster + SharePoint credentials.  
- In SharePoint “Phantombuster” folder:  
  • `twitter_session_cookies.txt`  
  • `twitter_posts_already_liked.csv` (header `postUrl`)  
  • `profiles_twitter.csv` (list of profiles).  

## Profile CSV format  
Your `profiles_twitter.csv` must contain a header `profileUrl` and direct links to the Twitter profiles. Example:  
```csv
profileUrl
https://twitter.com/elonmusk
https://twitter.com/openai

## 🔗 Nodes Used

HTTP Request, Phantombuster, Schedule Trigger, AI Agent, OpenAI Chat Model, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
