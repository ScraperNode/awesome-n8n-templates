# 🤖 Multi-functional Discord bot: Llama AI, image generation & knowledge base

> ⚡ **1,301 views** · 🤖 [AI Chatbots & Agents](../)

## Description

Multi-functional Discord Bot with Llama AI, Image Generation, and Knowledge Base Integration 🤖🎨🧠
## Overview 🔍
This workflow creates a Discord bot that can:

Monitor Discord messages from specific users 👀
Process different media types (images, audio, text) 🔎
Analyze images using AI 🖼️
Transcribe audio files 🎤
Generate responses using Llama AI 🦙
Create images from text prompts using Gemini AI 🎨

## Prerequisites ✅

n8n automation platform 💻
API keys for Discord, Groq, Google/Gemini, and SerpAPI 🔑
Ollama setup for Llama language model 🧠

Main Workflow Components 🛠️
1. Message Monitoring System 📨

Set up a Discord receiver to monitor messages in your server 💬
Add a filter to only process messages from specific users 🔍
Create a wait timer to control how often the bot checks for new messages ⏱️

2. Media Type Detection 🔄

Create a system that detects what kind of content was shared:

Audio files (by checking for waveform data) 🎵
Images (by checking content type) 🖼️
Text (default if no media detected) 💬


Add special detection for image creation commands 🎭

3. Image Processing 🖼️

Fetch the image from Discord 📥
Convert the image to a format the AI can understand 🔄
Send the image to Groq for analysis 🔍
Return the AI's description back to Discord 📤

4. Audio Processing 🎵

Fetch the audio file from Discord 📥
Send it to Groq's audio transcription service 🎤
Process the transcribed text with the AI assistant 🧠
Return the response to Discord 📤

5. Text Processing 💬

Send the text to an AI agent powered by Llama 🦙
Connect the agent to memory to maintain conversation context 🧠
Add knowledge tools like Wikipedia and search capabilities 🔍
Return the AI's response to Discord, with optional text-to-speech 🔊

6. Image Generation 🎨

Process the user's image creation request ✏️
Use an AI agent to refine the prompt for better results ✨
Send the enhanced prompt to Gemini for image generation 🖌️
Extract the generated image and post it to Discord 📤

Connecting the Components 🔗

Set up routing between components based on content type 🔀
Ensure all processes loop back to the message monitoring system ♻️
Add wait timers between operations to avoid rate limits ⏱️

Testing Tips 🐛

Test each type of content separately 🧪
Verify API connections and authentication 🔐
Check if responses are appropriate and timely ⏰

Optimization Suggestions ⚡

Adjust wait times based on your usage patterns ⏱️
Add more specific filters for message detection 🔍
Consider implementing caching for frequent requests 💾
Monitor performance and adjust as needed 📈

This Discord bot combines multiple AI services into a seamless experience, allowing users to interact with various AI capabilities through simple Discord messages. The modular design makes it easy to expand or modify specific features as needed! 🚀

## 🔗 Nodes Used

HTTP Request, Discord, n8n Trigger, AI Agent, Ollama Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
