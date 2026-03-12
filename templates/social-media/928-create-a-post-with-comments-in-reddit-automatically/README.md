# 📱 Create a post with comments in Reddit automatically

> ⚡ **4,164 views** · 📱 [Social Media & Email Marketing](../)

## Description

This workflow allows you to create a post a Reddit and add a comment on the post.

![workflow-screenshot](fileId:407)

**Reddit node:** This node creates a post in the subreddit `n8n`. If you want to create a post in a different subreddit, enter the name of that subreddit instead.

**Reddit1 node:** This node gets the post that we created previously. It returns the data like the post ID, title of the post, content of the post, etc.

**Reddit2 node:** This node adds a comment on the post that we created earlier.

## 🔗 Nodes Used

Start, Reddit

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
