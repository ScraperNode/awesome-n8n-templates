# 🎬 Automatically generate burn-in video captions with json2video

> ⚡ **4,694 views** · 🎬 [Content Creation & Video](../)

## Description

## Automatically Add Captions to Your Video

![](https://aiatelier.s3.eu-west-1.amazonaws.com/workflows-material/json2video/json2video-auto-caption-illustration.png)

## Who Is This For?

This workflow is ideal for content creators, marketers, educators, and businesses that regularly produce video content and want to enhance accessibility and viewer engagement by effortlessly adding subtitles.

## What Problem Does This Workflow Solve?

Manually adding subtitles or captions to videos can be tedious and time-consuming. Accurate captions significantly boost viewer retention, accessibility, and SEO rankings.

## What Does This Workflow Do?

This automated workflow quickly adds accurate subtitles to your video content by leveraging the Json2Video API.

- It accepts a publicly accessible video URL as input.
- It makes an HTTP request to Json2Video, where AI analyzes the video, generates captions, and applies them seamlessly.
- The workflow returns a URL to the final subtitled video.

The second part of the workflow periodically checks the Json2Video API to monitor the processing status at intervals of 10 seconds.

### [👉🏻 Try Json2Video for Free 👈🏻](https://json2video.com/?afco=manu)

### Key Features

- **Automatic & Synced Captions:** Captions are generated automatically and synchronized perfectly with your video.
- **Fully Customizable Design:** Easily adjust fonts, colors, sizes, and more to match your unique style.
- **Word-by-Word Display:** Supports precise, word-by-word captioning for improved clarity and viewer engagement.
- **Super Fast Processing:** Rapid caption generation saves time, allowing you to focus more on creating great content.

## Preconditions

To use this workflow, you must have:

- A Json2Video API account.
- A video hosted at a publicly accessible URL.

## Why You Need This Workflow

Adding subtitles to your videos significantly enhances their reach and effectiveness by:

- Improving SEO visibility, enabling search engines to effectively index your video content.
- Enhancing viewer engagement and accessibility, accommodating viewers who watch without sound or who have hearing impairments.
- Streamlining your content production process, allowing more focus on creativity.

## Specific Use Cases

- **Social Media Content:** Boost viewer retention by adding subtitles.
- **Educational Videos:** Enhance understanding and improve learning outcomes.
- **Marketing Videos:** Reach broader and more diverse audiences.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
