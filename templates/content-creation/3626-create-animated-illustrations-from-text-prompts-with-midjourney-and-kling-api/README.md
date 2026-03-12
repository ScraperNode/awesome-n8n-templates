# 🎬 Create animated illustrations from text prompts with Midjourney and Kling API

> ⚡ **3,386 views** · 🎬 [Content Creation & Video](../)

## Description

### What does the workflow do?
This workflow is primarily designed to generate animated illustrations for content creators and social media professionals with Midjourney (unoffcial) and Kling (unofficial) API served by [**PiAPI**](https://piapi.ai). 
PiAPI is an API platform which provides professional API service. With service provided by PiAPI, users could generate a fantastic animated artwork simply using workflow on n8n without complex settings among various AI models.

### What is animated illustration?
An animated illustration is a digitally enhanced artwork that combines traditional illustration styles with subtle, purposeful motion to enrich storytelling while preserving its original artistic essence.

### Who is this workflow for?

1. **Social Media Content Creators**: Produces animated illustrations for social media posts.
2. **Digital Marketers**: Generates marketing materials with motion graphics.
3. **Independent Content Producers**: Creates animated content without specialized animation skills.

### Step-by-step Setting Instructions
To simplify workflow settings, usually users just need to change basic prompt of the image and the motion of the final video following the instrution below:
1. Sign in your PiAPI account and get your [X-API-Key](https://piapi.ai/workspace/key).
2. Fill in your [X-API-Key](https://piapi.ai/workspace/key) of PiAPI account in Midjourney and Kling nodes.
3. Enter your desired image prompt in the Prompt node.
4. Enter the motion prompt in Kling Video Generator node.

For more complex or customization settings, users could also add more nodes to get more output images and generate more videos. Also, they could change the target image to gain a better result. As for recommendation,  users could change the video models for which we would recommend live-wallpaper LoRA of [Wanx](https://piapi.ai/docs/wanx-lora/use-case). Users could check API doc to see more use cases of video models and image models for best practice.


### Use Case
**Input Prompt**
A gentle girl and a fluffy rabbit explore a sunlit forest together, playing by a sparkling stream. Butterflies flutter around them as golden sunlight filters through green leaves. Warm and peaceful atmosphere, 4K nature documentary style. --s 500 --sref 4028286908  --niji 6

**Output Video**
 <video src="https://static.piapi.ai/n8n-instruction/motion-illustration/example1.mp4" controls />
### When there is troubleshooting
1. Check if the X-API-Key has been filled in nodes needed.
2. Check your task status in Task History in [**PiAPI**](https://piapi.ai) to get more details about task status. 
![image](https://i.ibb.co/DDV4WDZ9/image.jpg)

### More Generation Case for Reference
<video src="https://static.piapi.ai/n8n-instruction/motion-illustration/example2.mp4" controls />

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
