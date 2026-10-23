# 📊 Generate SEO-friendly robots.txt with OpenAI and Google Drive

> ⚡ **71 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs manually to check a website’s existing robots.txt, detect the site’s CMS from the homepage HTML using OpenAI, and generate an optimized robots.txt (including the provided sitemap URL) that is saved as a file and uploaded to Google Drive.

## How it works
1. Starts when you click “Execute workflow” and sets the target website URL and sitemap URL.
2. Requests the site’s existing robots.txt via HTTP and checks whether the response returns status code 200.
3. If robots.txt exists, the workflow stops without making changes.
4. If robots.txt is missing, it fetches the website homepage HTML via HTTP.
5. Sends the HTML to OpenAI to detect the CMS and parses the model output into structured JSON.
6. Uses OpenAI again to generate a production-ready robots.txt tailored to the detected CMS and including the sitemap directive.
7. Converts the generated text into a robots.txt file and uploads it to a chosen folder in Google Drive.

## Setup
1. Add an OpenAI API credential and ensure the selected chat model is available for both CMS detection and robots.txt generation.
2. Add a Google Drive OAuth2 credential and choose the target Drive and folder for the uploaded robots.txt file.
3. Update the website URL and sitemap URL values to match your site.
4. Ensure the target website is publicly reachable so the HTTP requests can fetch /robots.txt and the homepage HTML.

## Additional info
### MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I'll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)

---

### Need help customizing?
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/)

## 🔗 Nodes Used

HTTP Request, Google Drive, Basic LLM Chain, OpenAI Chat Model, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
