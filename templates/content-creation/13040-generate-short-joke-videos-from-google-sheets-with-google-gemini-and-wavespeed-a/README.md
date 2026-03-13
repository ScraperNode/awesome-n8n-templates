# 🎬 Generate short joke videos from Google Sheets with Google Gemini and Wavespeed AI

> ⚡ **29 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

🚀 Stop Editing. Start Automating.
Turn a simple spreadsheet of text into a limitless stream of viral video content.

This advanced n8n workflow builds a fully autonomous "Faceless Channel" factory. It takes a list of jokes (or facts/quotes) from a Google Sheet, uses Google Gemini to script a perfect 10-second viral scene, and uses Wavespeed AI (Wan 2.5) to generate high-quality animated videos—all without you lifting a finger.

Whether you run a TikTok page, Instagram Reels account, or YouTube Shorts channel, this workflow is your new production team.

⚡ How It Works
The Brain (Gemini): The workflow picks a joke from your list, checks if it's been used before, and scripts a visual scene with two distinct characters (Character A & Character B).

The Director (Prompt Engineering): It automatically generates detailed environment and action prompts for the video model.

The Studio (Wavespeed AI): It edits the background of your master image to match the joke's setting, then animates the scene using the powerful Wan 2.5 model.

The Delivery: It saves the final video URL, caption, and optimized hashtags back to your Google Sheet, ready for posting.

🔥 Key Features
Duplicate Protection: Automatically logs used jokes to a "Past Jokes" tab so you never repeat content.

Customizable Avatars: Easily swap in your own "Master Image" to use your specific characters or brand avatars.

Smart Environment Swapping: The AI understands the joke's context and changes the video background to match (e.g., a bar, a park, an office).

Viral Metadata: Automatically generates a catchy caption and 3 sets of tiered hashtags (Niche, Popular, Trending).

Plug & Play: Clean, annotated nodes with a setup guide included.

📋 Requirements
Before purchasing, please ensure you have the following:

n8n Instance: You need a working installation of n8n (Self-hosted or Cloud version).

Wavespeed AI Account: You will need an API key from Wavespeed to access the video generation models (Wan 2.5).

Google Gemini API Key: A free Google AI Studio key is required for the scripting logic.

Google Account: To access the Google Sheets integration.

A "Master Image": You need one image of your two characters to serve as the visual base for the automation.

📦 What's Inside?
The Full Workflow JSON: Cleaned, organized, and ready to import.

Sticky Note Setup Guide: Step-by-step instructions on connecting your sheets and API keys.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
