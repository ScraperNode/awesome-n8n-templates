# ⚡ User enablement demo

> ⚡ **8,638 views** · ⚡ [Personal Productivity](../)

## Description

This workflow was originally presented at the [February 2022 n8n Meetup](https://youtu.be/jG2aCOF0ICg?t=2994).

[![Enabling End-Users to Configure Workflows](https://res.cloudinary.com/marcomontalbano/image/upload/v1646311048/video_to_markdown/images/youtube--jG2aCOF0ICg-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://youtu.be/jG2aCOF0ICg?t=2994 "Enabling End-Users to Configure Workflows")

## Requirements
In order to use this workflow, you will need the following in place:
- A configured [Baserow](https://baserow.io/) account
  - A group in Baserow called *User Empowerment Demo*
  - A database in the *User Empowerment Demo* called *Office Shopping List*
  - Inside the *Office Shopping List* database, you will need two tables:
    - *Shopping List*:
      - Column 1 - Single line text column named *Item*
    - *Shopper*:
      - Column 1 - Single line text column named *Name*
      - Column 2 - Email column named *Email*
- An email account for sending out alerts

## Customization
To make this workflow work for you, please customize the following items:
- All Baserow nodes will need to be updated with your own credentials, database, tables and fields
- The *Send Shopping List* node will need to be configured with your email credentials and email addresses
- The *Create Shopper Form* Set node will need to have the code in the HTML *value* modified to reflect your Production URL from the *Submit Shopper* node (See [instructions below](#Changing_the_Webhook_URL_the_Webform_Posts_To_39))
- The Cron node will need to be modified to reflect the timing that you wish to use

## Modifying the Webform
The webform is the piece that people normally want to customize but is often the most complex because it is raw HTML. Here are some quick tips for making changes to the form.

### Webform Nodes
There are two nodes that control what you see in the form:
- *Create Shopper Form* - displays the form and submits it to the correct webhook
- *Create Response Page* - displays the results when the form is submitted

### Editing the Webform
The easiest way that I have found to edit the webform is to:
1. Open up the Set node (*Create Shopper Form* or *Create Response Page*) that contains the HTML you wish to edit.
2. Copy the contents of the HTML value to your favourite HTML editor
3. Make your changes
4. Paste the updated HTML back into the Set node

### Changing the Webhook URL the Webform Posts To
In order for the webform to work properly, do the following:
1. Determine the Production URL for the *Submit Shopper* webhook node
2. In the *Create Shopper Form* node, look for the following line in the HTML value:
`form action="https://tephlon.app.n8n.cloud/webhook/submit-shopper" method="POST"`
3. Replace `https://tephlon.app.n8n.cloud/webhook/submit-shopper` with your Production URL

### Changing the Webform Image
The image that is in the webform is actually embedded in the HTML in each of the *Create Shopper Form* or *Create Response Page* Set nodes and can be modified from there using these steps:
1. Open up the appropriate Set node
2. In the HTML value, find the line that starts with `background-image:`. It will be followed by a long string that looks like random characters
3. Using a tool like [Image to Base64 Converter](https://codebeautify.org/image-to-base64-converter), upload your image and generate a new CSS background source
4. Replace the original `background-image:` line (including all the "random" characters) with the new generated CSS background source

## 🔗 Nodes Used

Cron, Send Email, Start, Webhook, Baserow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
