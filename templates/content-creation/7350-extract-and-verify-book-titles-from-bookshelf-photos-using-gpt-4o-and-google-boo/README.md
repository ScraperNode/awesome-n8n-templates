# 🎬 Extract and verify book titles from bookshelf photos using GPT-4o and Google Books

> ⚡ **553 views** · 🎬 [Content Creation & Video](../)

## Description

**Use Case: **
Analyze images with multiple subjects. In this use case I have a bookshelf and am extracting and verifying book titles/authors from a bookshelf photo.

**How it works: **
1) **Webhook** receives an image url from a front end in which a user can upload a picture. 
	- In this use case, it is an image of a book shelf.  
2) **Edit Field (Set)**: Saves image in a consistent location so AI can find it.
3) **Analyze Image**: Image is analyzed. 
	- Extracts titles from the book spines 
4) **Code**: Splits extracted subjects to single item to be able to validate each item separately. 
	- Books are individualized to their own entity
5) **HTTP Request **validates each subject. 
	- Queries Google Books to validate books in case only partial titles were found. 
6) **Edit Field (Set)**: Tidies the result. 
7) **Code**: Aggregates and deduplicates 
	- Titles and authors are aggregate into a list
8) **Respond to Webhook** returns list to front end

**How to use:** 
Use with a frontend that can capture images and receive back the result. For this use case Supabase was used to store images from which the image analyzer could reference.

## 🔗 Nodes Used

HTTP Request, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
