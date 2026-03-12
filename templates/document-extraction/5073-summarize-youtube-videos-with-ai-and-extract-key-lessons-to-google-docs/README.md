# 🔬 Summarize YouTube videos with AI and extract key lessons to Google Docs

> ⚡ **1,244 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who is this template for?
This template is for learners, researchers, students and professionals who want to quickly capture the essence of a YouTube video. 

Steps in the workflow: 
- Gets the transcript from any YouTube video through Supadata. 
- Process the result from Supadata to one text 
- Process the text with AI (any LLM of your choice)

Final result: Produces a summary accompanied with the most important lessons and interesting facts mentioned in the video.  

The workflow automatically creates a new Google Doc wiht this output, in a folder of your choice on your Google Drive. 

_(If you want to convert the markdown text to real markup after the Google Doc is created: just select all text (Ctrl-A or CMD-A), Cut the text (Ctrl-X or CMD-X and then go to Edit &gt; Paste from Markdown.)_

## Setup
- Edit your Supadata credentials in the second node (you can start for free)
- Choose your favourite LLM for AI processing
- Edit your Google Drive credentials. 

## How to adjust it to your needs
- If you want the outcome to be different, edit the Prompt in "Proces transcript to summary template". 
- The file name is a combination of ‘transcript ‘ and the date and time. You can change this to whatever you need in the Google Drive node. 
- Supadata offers more details and options (or even translation) when working with transcripts. Check the options here: https://supadata.ai/documentation/youtube/get-transcript

## 🔗 Nodes Used

HTTP Request, Google Drive, Basic LLM Chain, Chat Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
