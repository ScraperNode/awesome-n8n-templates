# 🎬 Generate blog posts and social media content with GPT-4.1 and Pexels images

> ⚡ **474 views** · 🎬 [Content Creation & Video](../)

## Description

## AI Content Generator with Auto Pexels Image Matching

This n8n template demonstrates how to use AI to generate engaging content and automatically find matching royalty-free images based on the content context.

Use cases are many: Try creating blog posts with hero images, generating social media content with visuals or drafting email newsletters with relevant photos.

### Good to know

- At time of writing, Pexels offers free API access with up to 200 requests per hour. See [Pexels API](https://www.pexels.com/api) for updated info.
- OpenAI API costs vary by model. GPT-4.1 mini is cheaper while normal GPT-4.1 and above offer deeper content generation but cost more per request.
- Using the floating JavaScript node can reduce token usage by processing content and keyword extraction in a single prompt.

### How it works

1. We'll collect a content topic or idea via a manual form trigger.
2. OpenAI generates initial content based on your input topic.
3. The AI extracts suitable keywords from the generated content to find matching images.
4. The keywords are sent to Pexels API, which searches for relevant royalty-free stock images.
5. OpenAI creates the final polished content that complements the selected image.
6. The result is displayed as a formatted HTML template combining content and image together.

### How to use

- The manual trigger node is used as an example, but feel free to replace this with other triggers such as webhook or even a form.
- You can batch-generate multiple pieces of content by looping through a list, but of course, the processing will take longer and cost more.

### Requirements

- OpenAI API key (get one at [https://platform.openai.com](https://platform.openai.com))
- Pexels API key (get free access at [https://www.pexels.com/api](https://www.pexels.com/api))
- Valid content topics or ideas to generate from

### Customizing this workflow

- **Optimize token usage**: Connect the floating "Extract Content and Image Keyword" JavaScript node to process everything in one prompt and minimize API costs. If you use this option, update the expressions in the "Pexels Image Search" node and "Create Suitable Content Including Image" node to reference the extracted keywords from the JS node.
- Upgrade to GPT-4.1, GPT-5.1, or GPT-5.2 for more advanced and creative content generation.
- Change the HTML template output to other formats like Markdown, plain text, or JSON for different publishing platforms.
- For long term, store the results in a database like Supabase or Google Sheets if you are planning to reuse the contents.

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
