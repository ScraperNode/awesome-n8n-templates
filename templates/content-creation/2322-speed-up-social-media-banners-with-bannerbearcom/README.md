# 🎬 Speed Up Social Media Banners With BannerBear.com

> ⚡ **5,495 views** · 🎬 [Content Creation & Video](../)

## Description

This n8n workflow shows an easy way to automate the creation of social media assets using AI and a service like BannerBear.

Designed for the busy marketer, leveraging AI image generation capabilities can help cut down production times and allow reinvesting into higher quality content.

## How it works
* This workflow generates social media banners for online events. Using a form trigger, a user can define the banner text and suggest an image to be generated.
* This request is passed to OpenAI's Dalle-3 image generation service to produce a relevant graphic for the event banner.
* This generated image is uploaded and sent to BannerBear where a template will use it and the rest of the form data to produce the banner.
* BannerBear returns the final banner which can now be used in an assortment of posts and publications.

## Requirements
* A BannerBear.com account and template is required
* An OpenAI account to use the Dalle-3 service.

## Customising the workflow

We've only shown a small section of what BannerBear has to offer. With experimentation and other asset generating services such as AI audio and video, you should be able to generate more than just static banners!

## 🔗 Nodes Used

HTTP Request, Discord, Bannerbear, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
