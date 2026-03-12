# 🎬 Create & post viral news AI avatar videos to 9 platforms with Perplexity & HeyGen

> ⚡ **1,331 views** · 🎬 [Content Creation & Video](../)

## Description

## Description
This fully automated AI Twin Viral News system researches the latest trending news in any niche or industry, then generates talking-head AI clone videos WITHOUT having to film or edit yourself. This can easily be tailored to any particular niche, simply by updating the Perplexity research prompty.

It combines ChatGPT, Perplexity, HeyGen, and Blotato to research, create, and auto-post talking-head AI avatar videos to every social media platform, every single day.

## Who Is This For?

This is perfect for digital marketing agencies, small business owners, entrepreneurs, content creators, influencers, and social media agencies.

## How It Works

**1. Trigger**
- Schedule: configured to run once daily at 10am

**2. AI Researcher**

- Call Perplexity to research the top 10 latest news in your industry  
- Select news story most likely to go viral  
- Compile detailed factual report on selected news story

**3. AI Writer**
- AI writes monologue script, video caption, and short title

**4. Create Avatar Video**
- Call HeyGen API (requires paid API plan), specifying your avatar ID and voice ID  
- Create avatar video; optionally pass an image/video background if you have a green screen avatar

**5. Get Video**
- Wait awhile, then fetch completed avatar video  
- Upload video to Blotato

**6. Publish to Social Media via Blotato**
- Connect your Blotato account  
- Choose your social accounts  
- Either post immediately or schedule for later

## Setup & Required Accounts
- Sign up for Perplexity.ai and set up your API Billing  
- Generate your Perplexity API Key: https://www.perplexity.ai/account/api/keys
- Sign up for Blotato.com  
 - Generate Blotato API Key via Settings &gt; API &gt; Generate API Key (paid feature only)  
 - Ensure "Verified Community Nodes" enabled in n8n Admin Panel  
- Install "Blotato" verified community node  
- Create Blotato credential
- Sign up for HeyGen web plan and API plan  
- Paste your HeyGen API key, HeyGen avatar ID, and HeyGen voice ID
- Complete the 2 setup steps in BROWN sticky notes in this template

## Optional: Background Image/Video Behind Avatar
- Ensure you have an avatar with background removed (requires higher tier Heygen plan)  
- Open SETUP HEYGEN node and set parameter 'has_background_video' to `true`  
- Open SETUP HEYGEN node and replace video URL in parameter 'background_video_url'  
- Recommendation: Only enable after the basic workflow is operational, i.e. you can make avatar videos without a background

## Tips & Tricks
- Perplexity API account must have billing funded  
- HeyGen API requires paid plan  
- Make sure you copied your avatar ID correctly (not the group avatar ID)  
- If your script is long, it takes more time for your video to finish  
- While testing:
  - Enable only 1 social platform and deactivate the rest  
  - Update AI writer prompt to return a 5-second script instead of 30 seconds to reduce processing time
- Go to HeyGen and check that your avatar video is being processed  
- After the workflow finishes, check your social media account for the final post  
- If successful, enable another social media node and continue testing

## 📄 Documentation
[Full Tutorial](https://help.blotato.com/api/templates/4-viral-news-to-ai-avatar-videos)

## Troubleshooting
Check your [Blotato API Dashboard](https://my.blotato.com/api-dashboard) to see every request, response, and error. Click on a request to see the details.

## Need Help?
In the Blotato web app, click the orange button on the bottom right corner. This opens the Support messenger where I help answer technical questions.

**Connect with me: [Linkedin](https://www.linkedin.com/in/sabrinaramonov) | [Youtube](https://www.youtube.com/@sabrina_ramonov)**

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, OpenAI, Perplexity

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
