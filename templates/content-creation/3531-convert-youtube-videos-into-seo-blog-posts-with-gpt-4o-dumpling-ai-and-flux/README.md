# 🎬 Convert YouTube videos into SEO blog posts with GPT-4o, Dumpling AI, and Flux

> ⚡ **3,446 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

## Workflow Description

This workflow helps content creators automatically repurpose YouTube videos into SEO-friendly blog posts. It extracts the video transcript, uses AI to generate a full blog post with a relevant image, and sends the complete package via email, ready for publication.

## Prerequisites/Requirements

This workflow relies on external AI services. You will need:

1.  **OpenAI Account:** Used for generating the blog post text (specifically mentioned using GPT-4o in the workflow notes).
    * **Credentials:** Requires an API key from OpenAI.
    * **Cost:** OpenAI API usage is typically paid based on the amount of text processed (tokens). Check OpenAI's current pricing.
    * **Setup:** Sign up at [OpenAI](https://platform.openai.com/) and obtain your API key.
2.  **Dumpling AI Account:** Used for retrieving YouTube video transcript and generating the blog post image.
    * **Credentials:** Requires an API key from Dumpling AI.
    * **Cost:** Dumpling AI offers 250 free credits to start with and different plans for different levels of usage. Check the [pricing page](https://www.dumplingai.com/pricing) for more details.
    * **Setup:** Sign up at [Dumpling AI](https://www.dumplingai.com) and obtain your API key/credentials.
3.  **Email Account:** Credentials for the email service (e.g., Gmail) used to send the final result.


## How it works

1.  **Input Video Details:** You provide the YouTube video URL and your email address.
2.  **Get Transcript:** The workflow fetches the transcript of the specified YouTube video.
3.  **Generate Content:** An AI model crafts a blog post (title, description, body) based on the transcript.
4.  **Create Image:** Another AI model generates a suitable image for the blog post.
5.  **Format & Package:** The blog post is converted to HTML, and the image is prepared for sending.
6.  **Email Result:** The final HTML blog post and image are emailed to you.

***

![Screenshot 20250413 at 3.27.15 pm.png](fileId:1108)

***

## Set up steps

1.  **Configure Variables:** Enter the specific YouTube video URL and the recipient email address in the "Set Variables" node.
2.  **Connect Credentials:** Add your credentials for the services used (e.g., OpenAI for text generation, Dumpling AI for YouTube Transcript and AI image generation service).
3.  **Connect Email Credentials:** Authenticate your Gmail account (or chosen email provider) to allow the workflow to send the email.

## Take it to the next level

* **Direct Publishing:** Instead of emailing the result, connect directly to your CMS (like WordPress, Ghost, Webflow) to automatically create a draft or publish the blog post.
* **AI Agent Integration:** Replace the single "Generate Blog Post" step with an AI Agent for more sophisticated content generation, potentially researching topics or structuring the post section by section based on the transcript.
* **Social Media Snippets:** Add steps to generate companion social media posts (e.g., for Twitter, LinkedIn) summarizing the blog post.
* **Batch Processing:** Modify the trigger to read multiple YouTube URLs from a spreadsheet or database to convert videos in bulk.
* **Enhanced SEO:** Refine the AI prompts to specifically target keywords or incorporate SEO best practices more deeply into the generated content.
* **Multiple Image Options:** Generate several image variations and include them in the email or draft post for selection.

## 🔗 Nodes Used

HTTP Request, Gmail, Markdown, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
