# 🎬 Narrating over a video using multimodal AI

> ⚡ **9,818 views** · 🎬 [Content Creation & Video](../)

## Description

This n8n template takes a video and extracts frames from it which are used with a multimodal LLM to generate a script. The script is then passed to the same multimodal LLM to generate a voiceover clip.

This template was inspired by [Processing and narrating a video with GPT's visual capabilities and the TTS API](https://cookbook.openai.com/examples/gpt_with_vision_for_video_understanding)

## How it works
* Video is downloaded using the HTTP node.
* Python code node is used to extract the frames using OpenCV.
* Loop node is used o batch the frames for the LLM to generate partial scripts.
* All partial scripts are combined to form the full script which is then sent to OpenAI to generate audio from it.
* The finished voiceover clip is uploaded to Google Drive.

Sample the finished product here: [https://drive.google.com/file/d/1-XCoii0leGB2MffBMPpCZoxboVyeyeIX/view?usp=sharing](https://drive.google.com/file/d/1-XCoii0leGB2MffBMPpCZoxboVyeyeIX/view?usp=sharing)

## Requirements

* OpenAI for LLM
* Ideally, a mid-range (16GB RAM) machine for acceptable performance!

## Customising this workflow

* For larger videos, consider splitting into smaller clips for better performance
* Use a multimodal LLM which supports fully video such as Google's Gemini.

## 🔗 Nodes Used

Edit Image, HTTP Request, Google Drive, Basic LLM Chain, OpenAI Chat Model, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
