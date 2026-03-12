# 🎬 Create animated stories using GPT-4o-mini, Midjourney, Kling and Creatomate API

> ⚡ **14,836 views** · 🎬 [Content Creation & Video](../)

## Description

### What does the workflow do? 
This workflow is designed to generate high-quality short videos, primarily uses GPT-4o-mini (unofficial), Midjourney (unofficial) and Kling (unofficial) APIs from [**PiAPI**](https://piapi.ai) and [**Creatomate API**](https://creatomate.com) mainly for **content creator**, **social media bloggers** and **short-form video creators**. Through this short video workflow, users can quickly validate their creative ideas and focus more on enhancing the quality of their video concepts.

### Who is the workflow for?
1. **Social Media Influencers**: produce content videos based on inspiration efficiently.

2. **Vloggers**: generate vlogs based on inspiration.

3. **Educational Creators**: explain specific topics via animated short videos or demonstrate a specific imagined scenario to students for enhanced educational impact.

4. **Advertising Agencies**: generate short videos based on specific products.

5. **AI Tool Developers**: automatically generate product demo videos.

### Step-by-step Instructions
1. Fill in X-API-key of PiAPI account in Basic Params node.
2. Fill in the scenario of the image and video prompt.
3. Set a video template on Creatomate and make an API call in the final node with core and processing modules provided in Creatomate. Before full video generation, you can first use basic assets in Creatomate for a prototype demo, then integrate with n8n after verifying the expected results.
![Frame 3428](https://i.ibb.co/gLTdGkw6/Frame-3428.png)
4. Fill in your Creatomate account settings following the image guildline.
5. Click Test Workflow and wait for a generation (within 10~20min).

In this workflow, we've established a basic structure for image-to-video generation with subtitle integration. You can further enhance it by adding music nodes using either PiAPI's [audio models](https://piapi.ai/workspace/mmaudio) or your preferred music solution. All video elements will ultimately be composited through Creatomate. For best practice, please refer to **PiAPI**'s official [API documentation](https://piapi.ai/docs/overview) or **Creatomate**'s [API documentation](https://creatomate.com/docs/api/introduction) to comprehend more use cases.



### Use Case
**Params Settings**
 - style: a children’s book cover, ages 6-10. --s 500 --sref 4028286908  --niji 6

- character: A gentle girl and a fluffy rabbit explore a sunlit forest together, playing by a sparkling stream
- situational_keywords: Butterflies flutter around them as golden sunlight filters through green leaves. Warm and peaceful atmosphere

**Output Video**
 <video src="https://static.piapi.ai/n8n-instruction/short-video/example1.mp4" controls />

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
