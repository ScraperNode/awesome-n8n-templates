# 🎬 Rebuild product-focused reels shot by shot with Apify, Gemini, and fal.ai

> ⚡ **21 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Most reel cloners watch a video once and generate something loosely similar. This one takes the reel apart: it finds every cut, rebuilds each shot around your product, and reassembles them in the original order, so the finished video keeps the source's exact shot count and pacing.

## How it works
1. Send it a reel URL and the product you want to sell, either by hand or through the webhook.
2. Apify downloads the source reel, then a scene-detection actor finds every hard cut and saves one keyframe per shot.
3. That job is polled in the background rather than waited on, so long reels never time out mid-run.
4. All the keyframes go to Gemini Flash in a single call. It reads each shot's framing, angle, movement and lighting, then writes an image prompt and a motion prompt with your product substituted for whatever the source was selling.
5. fal.ai generates a still image for each scene and animates it with that scene's own motion prompt, one scene at a time.
6. Each clip is trimmed back to the exact length of the shot it replaces, joined in the original order, and the finished video and thumbnail are returned.

## Setup
1. Create three separate Header Auth credentials: Apify (Authorization: Bearer YOUR_TOKEN), Google Gemini (X-goog-api-key: YOUR_KEY) and fal.ai (Authorization: Key YOUR_KEY).
2. Attach each credential to its own nodes and then check them. n8n will happily reuse one Header Auth credential across different hosts, which silently sends the wrong key to the wrong service. Apify belongs on the five Apify nodes, Gemini on one, fal.ai on the rest.
3. Open Set Source Reel And Target Product and enter your reel URL and target product. That node holds every user-editable input, so nothing else needs touching. 

Then run it manually, or POST source_reel_url and target_product to the webhook and read the finished video URL from the response.

## Requirements
- An Apify account. The free plan renews $5 of credits a month, and a short reel costs roughly $0.03 to download and split, so about 150 runs a month.

A Google AI Studio API key. The free tier covers the shot analysis.

A fal.ai account with credit. Image and video generation are not free on any tier.

## Customization
- Lower scene_threshold to catch softer cuts, raise it for fewer scenes.

Set clip_aspect_ratio to match where the video will run.

The Gemini model is pinned rather than using the gemini-flash-latest alias, because that alias always tracks the newest Flash, which carries the tightest free-tier quota. Change it if you want a newer model.

The image and video nodes can be swapped for Claude (vision) and Higgsfield (image and video) for higher production quality, an available option rather than something tested here.

## Additional info
The costs scale with the number of cuts in the source reel, not its length, since one image and one clip are generated per detected scene. A three-cut reel is three generations.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
