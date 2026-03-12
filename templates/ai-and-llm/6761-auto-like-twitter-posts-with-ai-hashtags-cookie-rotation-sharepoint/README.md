# ✨ Auto-like Twitter posts with AI hashtags, cookie rotation & SharePoint

> ⚡ **78 views** · ✨ [AI & LLMs](../)

## Description

## Who’s it for  
Growth hackers, social-media managers, and brand builders who want to keep their Twitter (X) accounts active by automatically liking relevant posts on a set schedule—without manual scrolling.

## How it works / What it does  
1. **Schedule Trigger** runs every hour at a specified minute.  
2. **Select Cookie** chooses a rotating Twitter session-cookie (to stay under 1 000 likes/day).  
3. **AI Agent** generates a realistic AI/BPA-related hashtag.  
4. **Phantombuster Hashtag Agent** scrapes recent tweets for that hashtag → **Get Posts**.  
5. **Get Random Post** picks one tweet, checks it isn’t already liked (SharePoint CSV), and uploads a one-row `twitter_posts_to_like.csv`.  
6. **Phantombuster Autolike Agent** receives the CSV link and likes the tweet.  
7. The tweet URL is appended to `twitter_posts_already_liked.csv` to prevent duplicates.

## How to set up  
1. Create credentials: Phantombuster API key, SharePoint OAuth2, OpenAI API key.  
2. In SharePoint › “Phantombuster” folder add:  
   • `twitter_posts_already_liked.csv` (header `postUrl`).  
   • `twitter_session_cookies.txt` – one cookie per line.  
3. Adjust schedule if you need a different frequency.  
4. Activate the workflow—likes will start automatically.

## Requirements  
- n8n 1.33+  
- Phantombuster Growth plan (API access)  
- OpenAI account 
- Microsoft 365 SharePoint tenant

## How to customize  
- Change hashtag logic: edit the prompt in **AI Agent**.  
- Increase daily likes: add more cookies or shorten `Wait` nodes.  
- Swap SharePoint for Google Drive/Dropbox: replace the upload/download nodes.

## 🔗 Nodes Used

Phantombuster, Schedule Trigger, AI Agent, OpenAI Chat Model, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
