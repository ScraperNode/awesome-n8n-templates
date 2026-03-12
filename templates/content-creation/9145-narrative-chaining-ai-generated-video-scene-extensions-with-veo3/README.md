# 🎬 Narrative chaining: AI-generated video scene extensions with Veo3

> ⚡ **846 views** · 🎬 [Content Creation & Video](../)

## Description

## Structured Setup Guide: Narrative Chaining with N8N + AI

## 1. Input Setup
Use a Google Sheet as the control panel.
Fields required:
Video URL (starting clip, ends with .mp4)
Number of clips to extend (e.g., 2 extra scenes)
Aspect ratio (horizontal, vertical, etc.)
Model (V3 or V3 Fast)
Narrative theme (guidance for story flow)
Special requests (scene-by-scene instructions)
Status column (e.g., "For Production", "Done")
👉 Example scene inputs:
Scene 1: Naruto walks out with ramen is his hands
Scene 2: Joker joins with chips
## 2. Workflow in N8N
Step 1: Fetch Input
Get rows in sheet → fetch the next row where status = For Production.
Clear sheet 2 → reset the sheet that stores generated scenes.
Edit fields (Initial Values):
Video URL = starting clip
Step = 1
Complete = total number of scenes requested
Step 2: Looping Logic
Looper Node:
Runs until step = complete.
Carries over current video URL → feeds into next generation.
Step 3: Analyze Current Clip
Send video URL to File.AI Video Understanding API.
Request: Describe last frame + audio + scene details.
Output: Detailed video analysis text.
Step 4: Generate Prompt
AI Agent creates the next scene prompt using:
Context from video analysis
Narrative theme (from sheet)
Scene instructions (from sheet)
Aspect ratio, model preference, etc.
👉 Output = video prompt for next scene
Step 5: Extract Last Frame
Call File.AI Extract Frame API.
Parameters:
Input video URL
Frame = last
Output = JPG image (last frame of current clip).
Step 6: Generate New Scene
Use Key.AI (V3 Fast) for economical video generation.
POST request includes:
Prompt (from AI Agent)
Aspect ratio + model
Image URL (last frame) → ensures seamless chaining
Wait for generation to complete.
👉 Output = New clip URL (MP4)
Step 7: Store & Increment
Log new clip URL into Sheet 2.
Increment Step by +1.
Replace Video URL with the new clip.
Loop back if Step &lt; Complete.
## 3. Output Section
Once all clips are generated:
Gather all scene URLs from Sheet 2.
Use File.AI Merge Videos API to stitch clips together:
Original clip + all generated scenes.
Save final MP4 output.
Update Sheet 1 row with:
Final video URL
Status = Done
## 4. Costs
Video analysis: ~$0.015 per 8s clip
Frame extraction: ~0.002¢ (almost free)
Clip merging: negligible (via ffmpeg backend)
V3 Fast video generation (Key.AI): ~$0.30 per 8s clip

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model, Structured Output Parser, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
