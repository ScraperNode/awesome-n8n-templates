# 📁 Create screenshots with uProc, save to Dropbox and send by email

> ⚡ **2,469 views** · 📁 [File Management](../)

## Description

Do you want to create a website screenshot without browser extensions?

This workflow creates screenshots of any website using the uProc [**Get Screenshot by URL tool**](https://app.uproc.io/#/tools/processor/get/url/screenshot) and sends an email with the screenshots.

![workflow-screenshot](fileId:357)

You need to add your credentials (Email and API Key - real -) located at [**Integration section**](https://app.uproc.io/#/settings/integration) to n8n.

Node "Create Web + Email Item" can be replaced by any other supported service returning Website and Email values, like Google Sheets, Mailchimp, MySQL, or Typeform.

Every "uProc" node returns an image URL of the captured website. This generated URL will remain only 24 hours in our server.
 
You can set up the uProc node with several parameters:
- width: you can choose one of the predefined values to generate the screenshot, or you can set up a custom width you want.
- full-page: the tool will return a screenshot of the website from top to bottom with the defined width.

In our workflow, we generate two screenshots:
1) One screenshot of 640 pixels width.
2) One full-page screenshot of 640 pixels width.

Screenshots are downloaded by "Get File" nodes and saved to the screenshots folder in Dropbox.

![image.png](fileId:356)

Finally, we use the Amazon SES node to send an HTML email with both screenshots to the specified email.

We will receive the next email:

![image.png](fileId:355)

## 🔗 Nodes Used

Dropbox, Function Item, HTTP Request, Start, AWS SES, uProc

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
