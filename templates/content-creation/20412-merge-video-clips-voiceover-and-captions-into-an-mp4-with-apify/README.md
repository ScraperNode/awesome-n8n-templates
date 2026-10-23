# 🎬 Merge video clips, voiceover, and captions into an MP4 with Apify

> ⚡ **19 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Assemble 1–10 supplied clips, optional narration and timed SRT captions into an MP4, up to 60 seconds, from n8n Cloud. Try the cached demo first. Real renders cost $0.20 per successfully assembled video. Failed renders incur no video-assembly charge.

## How it works
1. Starts when you run the workflow manually.
2. Builds a video job payload that includes a list of clip URLs plus optional voiceover and SRT captions, along with orientation, fit mode, and a maximum duration.
3. Sends the job to the Apify Short Video Assembler API to scale/crop or pad clips, concatenate them, add the voiceover, and burn in captions into a single MP4.
4. Returns the resulting public MP4 URL along with the render duration and job status.

## Setup
1. Create an Apify account and copy your Apify API token from Apify Console.
2. In the HTTP request to Apify, add an HTTP Header Auth credential with `Authorization: Bearer <YOUR_APIFY_TOKEN>`.
3. First run with clips: [] for the cached demo. When ready to pay $0.20 for successful assembly, replace the entire JSON in Set video job with the sample below or your own public media URLs, then execute manually.

## Requirements
- Apify account (free tier works) and its API token
- Video clips and audio at public http(s) URLs
- Pay per use: $0.20 per finished video on Apify, no subscription

## Customization
- Set orientation to vertical (1080x1920), horizontal or square, and fit to crop or pad
- Limit length with max_seconds (1-60)
- Swap the manual trigger for a schedule, form or webhook, and send the video URL to YouTube, Google Drive or Slack

## Additional info
## Watch the narrated setup guide
[From free demo to your own MP4 (1:47)](https://youtu.be/l1pk2BPfYC8). Covers credentials, the cached demo, supplied media, billing and saving your result. Synthetic narration; the Actor itself does not generate voices or caption timings.

## Free demo versus real video
Empty clips returns the cached 12-second demo. In the Assemble video on Apify node output, demo=true and charged=false identify a demo. For your own media, demo=false; charged reports the actual charge result. The final Return video URL node currently selects only URL, duration and status.

## Optional first real render — $0.20 on successful assembly
Copy this JSON into Set video job only when ready for a paid run. This eight-second silent example uses a NASA public-domain clip from our showcase, with supplied caption timing. NASA does not endorse this tool. External media availability can change.

```json
{
  "clips": [
    "https://upload.wikimedia.org/wikipedia/commons/f/f1/SDO_Video_Toolkit_%28SVS14126_-_Canyon_of_Fire_New-Slow%29.webm"
  ],
  "voiceover_url": null,
  "captions_srt": "1\n00:00:00,000 --> 00:00:04,000\nMy first assembled video\n\n2\n00:00:04,000 --> 00:00:08,000\nFootage: NASA (public domain)\n",
  "orientation": "vertical",
  "fit": "pad",
  "max_seconds": 8
}
```

## Limits and billing
You supply the clips, narration and caption timing. No generated media, automatic caption timing or per-clip trimming. Original clip audio is discarded; add your own voiceover_url for narration. Up to 10 clips, 60 seconds output, 200 MB per file and 600 MB total downloads. Save the finished MP4 to your own storage promptly: the link is not permanent.

Failed renders incur no video-assembly charge. Demo runs have no video-assembly charge; compute is still incurred by the operator. If a request times out, check Apify Runs before retrying: the original render may still be running.

Disclosure: I built and operate this paid Apify Actor.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
