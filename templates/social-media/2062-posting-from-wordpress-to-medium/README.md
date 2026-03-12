# 📱 Posting from Wordpress to Medium

> ⚡ **2,810 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Usage 
This workflow gets all the posts from your WordPress site and sorts them into a clear format before publishing them to medium.

Step 1. Set up the HTTP node and set the URL of the source destination. This will be the URL of the blog you want to use. We shall be using https://mailsafi.com/blog for this.

Step 2. Extract the URLs of all the blogs on the page
This gets all the blog titles and their URLs. Its an easy way to sort ou which blogs to share and which not to share.

Step 3. Split the entries for easy sorting or a cleaner view.

Step 4. Set a new https node with all the blog URLs that we got from the previous steps. 

Step 5. Extract the contents of the blog

Step 6. Add the medium node and then set the contents that you want to be shared out.

Execute your workflow and you are good to go

## 🔗 Nodes Used

HTTP Request, Medium

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
