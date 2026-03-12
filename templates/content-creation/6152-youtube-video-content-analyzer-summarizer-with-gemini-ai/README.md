# 🎬 YouTube video content analyzer & summarizer with Gemini AI

> ⚡ **2,763 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow takes two inputs, **YouTube video URL** (required) and a **description of what information to extract** from the video. If the description/"what you want" field is left empty, the default prompt will **generate a detailed summary and description of the video's contents**. However, you can ask for something more specific using this field/input. ++ Don't forget to make the workflow Active and use the production URL from the form node.

## Benefits

- Instant Summary Generation - Convert hours of watching YouTube videos to familiar, structured paragraphs and sentences in less than a minute
- Live Integration - Generate a summary or extract information on the contents of a YouTube video whenever, wherever 
- Virtually Complete Automation - All that needs to be done is to add the video URL and describe what you want to know from the video
- Presentation - You can ask for a specific structure or tone to better help you understand or study the contents of the video


## How It Works

1. Smart Form Interface:

- Simple N8N form captures video URL and description of what's to be extracted
- Designed for rapid and repeated completion anywhere and anytime

2. Description Check:

- Uses JavaScript to determine if the description was filled in or left empty
- If the description field was left empty, the default prompt is, "Please be as descriptive as possible about the contents being spoken of in this video after giving a detailed summary."
- If the description field is filled, then the filled input will be used to describe what information to extract from the video

3. HTTP Request:

- We're using Gemini API, specifically the video understanding endpoint
- We make a post HTTP request passing the video URL and the description of what information to extract

## Setup Instructions:

HTTP Request Setup:

1. Sign up for a Google Cloud account, join the Developer Program and get your Gemini API key

2. Get curl for Gemini Video Understanding API 

The video understanding relies on the inputs from the form, code and HTTP request node, so correct mapping is essential for the workflow to function correctly.
Feel free to reach out for additional help or clarification at my Gmail: terflix45@gmail.com, and I'll get back to you as soon as I can.

## Setup Steps:

1. Code Node Setup:

- The code node is used as a filter to ensure a description prompt is always passed on. Use the JavaScript code below for that effect:
// Loop over input items and add a new field called 'myNewField' to the JSON of each one
for (const item of $input.all()) {
  item.json.myNewField = 1;

  if ($input.first().json['What u want?'].trim() == "") {
    $input.first().json['What do you want?'] = "Please be as descriptive as possible about the contents being spoken of this video after giving a detailed summary";
}

}

return $input.all();
// End of Code

2. HTTP Request:

- To use Gemini Video Understanding, you'll need your Gemini API key
- Go to https://ai.google.dev/gemini-api/docs/video-understanding#youtube. This link will take you directly to the snippet. Just select REST programming language, copy that curl command, then paste it into the HTTP Request node
- Replace "Please summarize the video in 3 sentences." with the code node's output, which should either be the default description or the one entered by the user (second output field variable)
- Replace "https://www.youtube.com/watch?v=9hE5-98ZeCg" with the n8n form node's first output field, which should be the YouTube video URL variable
- Replace $GEMINI_API_KEY with your API key

3. Redirect:

- Use n8n form node, page type "Final Ending" to redirect user to the initial n8n form for another analysis or preferred destination

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
