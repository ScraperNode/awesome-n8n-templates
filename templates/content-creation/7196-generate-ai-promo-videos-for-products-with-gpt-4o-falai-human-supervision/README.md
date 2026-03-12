# 🎬 Generate AI promo videos for products with GPT-4o, Fal.ai & human supervision

> ⚡ **1,681 views** · 🎬 [Content Creation & Video](../)

## Description

![templateheaderimage.JPG](fileId:2009)

Generate AI video clips to promote products, services or events on social media. Use **gotoHuman** as an interface to control and supervise each step of the workflow to create content that's actually worth posting.
## How it works
gotoHuman will show the workflow steps that need approval or input in its' inbox and notify you via email or Slack.
![slacknotifyborder.JPG](fileId:2005)
1. We choose from different topics for our post suggested by AI
![topicsstepcropped.JPG](fileId:2006)
2. We select the image style, a product to show, and review an AI-generated tag line
![contentstep.JPG](fileId:2007)
3. We use Fal.ai to generate an image that serves as a reference image for our video clip. And we use Cloudinary to add an overlay for the tag line.
We review the image in gotoHuman and can iterate on it by retrying or even changing the prompt.
![imageaichat2.JPG](fileId:2008)
4. We review the video clip that's generated with Fal.ai based on the approved image and can, again, retry or reprompt.
![reviewclip.gif](fileId:2010)

## How to set up

1. **Most importantly, install the gotoHuman node before importing this template!**
(Just add the node to a blank canvas before importing)
2. Follow the instructions shown along the workflow and in the incl. video guide. You mainly need to
- set up your credentials for gotoHuman, OpenAI, Fal.ai and Cloudinary
- in gotoHuman, select and create the pre-built review template "Promo video agent" or import these IDs:
`Z7V1jyImY1pho9eY039R,0GBaOCWd27tqV562kkCL,E2wlCVPWmk2UnLHVt4uu,DitPdbIapS4rBxBTIYGt,Z2T7nFwkXVFQlD6z50eV`
- select these templates in the gotoHuman nodes
- do a quick setup for Cloudinary

## Requirements

You need accounts for
- gotoHuman (human supervision)
- OpenAI (ideation)
- Fal.ai (image/video generation)
- Cloudinary (text overlay)

## How to customize

- Adjust/Replace the workflow triggers as needed
- Change the prompt in the topics generation node
- Replace the product image URLs used in the "gotoHuman - Content" node
- Adjust the available styles for image generation in the gotoHuman review template and the prompts they link to in the "Set Initial Image Prompt" node
- Adjust the prompt used for video generation in the "Set Initial Video Prompt" node
- If you want to use a different service/model for image and video generation, replace the nodes related to Fal.ai.
- Also, if you do not need a text overlay, remove the Cloudinary nodes.

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
