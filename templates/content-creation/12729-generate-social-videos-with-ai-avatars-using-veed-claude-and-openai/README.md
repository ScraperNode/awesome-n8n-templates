# 🎬 Generate social videos with AI avatars using VEED, Claude, and OpenAI

> ⚡ **243 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

# Generate social videos with AI avatars using VEED and Claude

## Overview

This n8n workflow automatically generates **TikTok/Reels-ready talking head videos** from scratch. You provide a topic and intention, and the workflow handles everything: scriptwriting, avatar generation, voiceover creation, and video rendering.

**Output**: Vertical (9:16) AI-generated videos with lip-synced avatars, ready for social media posting.

---

## What It Does

```
Topic + Intention → Claude writes script → OpenAI generates avatar → OpenAI creates voiceover → VEED renders video → Saved to Google Drive + logged to Sheets
```

### Pipeline Breakdown

| Step | Tool | What Happens |
|------|------|--------------|
| 1. Script Generation | Claude Sonnet 4 | Creates hook, script (30-45 sec), caption, and image prompt based on your topic and intention |
| 2. Avatar Generation | OpenAI gpt-image-1 | Generates photorealistic portrait image (1024×1536) |
| 3. Voiceover | OpenAI TTS-1-HD | Converts script to natural speech (Nova voice) |
| 4. Video Rendering | VEED Fabric 1.0 | Lip-syncs avatar to audio, creates final video |
| 5. Storage | Google Drive | Uploads final MP4 |
| 6. Logging | Google Sheets | Records all metadata (script, caption, URLs, timestamps) |

---

## Required Connections

### API Keys (entered in Configuration node)

| Service | Key Type | Where to Get |
|---------|----------|--------------|
| **Anthropic** | API Key | https://console.anthropic.com/settings/keys |
| **OpenAI** | API Key | https://platform.openai.com/api-keys |

&gt; ⚠️ **OpenAI Note**: `gpt-image-1` requires organization verification. Go to https://platform.openai.com/settings/organization/general to verify.

### n8n Credentials (connect in n8n)

| Node | Credential Type | Purpose |
|------|-----------------|---------|
| **�� Generate Video (VEED)** | FAL.ai API | VEED video rendering |
| **�� Upload to Drive** | Google Drive OAuth2 | Store final videos |
| **�� Log to Sheets** | Google Sheets OAuth2 | Track all generated content |

---

## Configuration Options

Edit the **⚙️ Workflow Configuration** node to customize. The configuration uses a JSON format:

```json
{
  "topic": "AI video creation tools",
  "intention": "informative",
  "brand_name": "YOUR_BRAND_NAME",
  "target_audience": "content creators and marketers",
  "trending_hashtags": "#AIvideo #ContentCreation #VideoMarketing #AItools #TikTokTips",
  "num_videos": 1,
  "anthropic_api_key": "YOUR_ANTHROPIC_API_KEY",
  "openai_api_key": "YOUR_OPENAI_API_KEY",
  "video_resolution": "720p",
  "video_aspect_ratio": "9:16",
  "custom_avatar_description": "",
  "custom_script": ""
}
```

### Configuration Fields Explained

| Field | Required | Description |
|-------|----------|-------------|
| `topic` | ✅ | The subject of your video (e.g., "AI productivity tools") |
| `intention` | ✅ | Content style: `informative`, `lead_generation`, or `disruption` |
| `brand_name` | ✅ | Your brand/product name to mention |
| `target_audience` | ✅ | Who you're creating content for |
| `trending_hashtags` | ✅ | Hashtags to include in the caption |
| `num_videos` | ✅ | How many videos to generate (1-5 recommended) |
| `anthropic_api_key` | ✅ | Your Anthropic API key |
| `openai_api_key` | ✅ | Your OpenAI API key |
| `video_resolution` | ✅ | Video quality: `720p` or `1080p` |
| `video_aspect_ratio` | ✅ | Aspect ratio: `9:16` (vertical) or `16:9` (horizontal) |
| `custom_avatar_description` | ❌ | Optional: Describe your avatar (leave empty for AI-generated) |
| `custom_script` | ❌ | Optional: Your own script (leave empty for AI-generated) |

### Intention Types

| Intention | Content Style | Best For |
|-----------|---------------|----------|
| `informative` | Educational, value-driven, builds trust | Thought leadership, tutorials |
| `lead_generation` | Creates curiosity, soft CTA | Product awareness, funnels |
| `disruption` | Bold, provocative, scroll-stopping | Viral potential, brand awareness |

---

## Custom Avatar & Script Options

The workflow supports flexible content generation - you can let Claude generate everything, or provide your own inputs.

### Custom Avatar Description

Leave `custom_avatar_description` empty to let Claude decide, or provide your own:

```json
"custom_avatar_description": "a female influencer in her 30s, with a coworking space in the background, attractive but charismatic"
```

**Examples:**
- `"a woman in her 20s with gym clothes"`
- `"a bearded man in his 30s wearing a hoodie"`
- `"a professional woman with glasses in business casual"`

### Custom Script

Leave `custom_script` empty to let Claude write it, or provide your own:

```json
"custom_script": "This is my custom script. VEED is a great platform for creating videos like this. You can try it too!"
```

**Guidelines for custom scripts:**
- Keep it 30-45 seconds when read aloud
- Maximum ~450 characters
- Avoid special characters for TTS compatibility
- Write naturally, as if speaking

### Behavior Matrix

| custom_avatar_description | custom_script | What Claude Generates |
|---------------------------|---------------|----------------------|
| Empty | Empty | Avatar + Script + Caption |
| Provided | Empty | Script + Caption |
| Empty | Provided | Avatar + Caption |
| Provided | Provided | Caption only |

---

## Content Angles (auto-rotated)

When generating multiple videos, the workflow automatically varies the approach:

| # | Angle | Hook Style |
|---|-------|------------|
| 1 | Problem-solution | Opens with a question |
| 2 | Myth-busting | Opens with controversial statement |
| 3 | Quick-tip | Opens with a number/statistic |
| 4 | Before-after | Opens with transformation |
| 5 | Trend-commentary | Opens with news/timely angle |

---

## Output

### Per Video Generated

| Asset | Format | Location |
|-------|--------|----------|
| Final Video | MP4 (720p, 9:16) | Google Drive folder |
| Avatar Image | PNG (1024×1536) | tmpfiles.org (temporary) |
| Voiceover | MP3 | tmpfiles.org (temporary) |
| Metadata | Row entry | Google Sheets |

### Google Sheets Columns

| Column | Description |
|--------|-------------|
| topic | Video topic |
| intention | Content intention used |
| brand_name | Brand mentioned |
| content_theme | 2-3 word theme summary |
| script_audio | Full voiceover script |
| script_image | Image generation prompt |
| caption | Ready-to-post TikTok caption with hashtags |
| image_url | Temporary avatar image URL |
| audio_url | Temporary audio URL |
| video_url | Google Drive link to final video |
| status | done/error |
| created_at | Timestamp |

---

## Estimated Costs Per Video

| Service | Usage | Approximate Cost |
|---------|-------|------------------|
| Claude Sonnet 4 | ~2K tokens | ~$0.01 |
| OpenAI gpt-image-1 | 1 image (1024×1536) | ~$0.04-0.08 |
| OpenAI TTS-1-HD | ~450 characters | ~$0.01 |
| VEED/FAL.ai | 1 video render | ~$0.10-0.20 |
| **Total** | | **~$0.15-0.30 per video** |

&gt; Costs vary based on script length and current API pricing.

---

## Setup Checklist

### Step 1: Import Workflow
- [ ] Import `generate-social-videos-with-ai-avatars-using-veed-and-claude.json` into n8n

### Step 2: Configure API Keys
- [ ] Open the **⚙️ Workflow Configuration** node
- [ ] Replace `YOUR_ANTHROPIC_API_KEY` with your actual Anthropic API key
- [ ] Replace `YOUR_OPENAI_API_KEY` with your actual OpenAI API key
- [ ] Verify your OpenAI organization at https://platform.openai.com/settings/organization/general (required for gpt-image-1)

### Step 3: Connect n8n Credentials
- [ ] Click on **�� Generate Video (VEED)** node → Add FAL.ai credential
- [ ] Click on **�� Upload to Drive** node → Add Google Drive OAuth2 credential
- [ ] Click on **�� Log to Sheets** node → Add Google Sheets OAuth2 credential

### Step 4: Configure Storage
- [ ] Update the **�� Upload to Drive** node with your Google Drive folder URL
- [ ] Update the **�� Log to Sheets** node with your Google Sheets URL
- [ ] Create column headers in your Google Sheet: `topic`, `intention`, `brand_name`, `content_theme`, `script_audio`, `script_image`, `caption`, `image_url`, `audio_url`, `video_url`, `status`, `created_at`

### Step 5: Customize Content
- [ ] Update `topic`, `brand_name`, `target_audience`, and `trending_hashtags`
- [ ] Optionally add `custom_avatar_description` and/or `custom_script`

### Step 6: Test
- [ ] Set `num_videos: 1` for initial testing
- [ ] Execute the workflow
- [ ] Check Google Drive for the output video
- [ ] Verify metadata was logged to Google Sheets

---

## MCP Integration (Optional)

This workflow can also be exposed to Claude Desktop via n8n's Model Context Protocol (MCP) integration, allowing you to generate videos through natural language prompts.

### To enable MCP:

1. Add a **Webhook Trigger** node to the workflow (in addition to the Manual Trigger)
2. Connect it to the same **⚙️ Workflow Configuration** node
3. Go to **Settings** → **Instance-level MCP** → Enable the workflow
4. Configure Claude Desktop with your n8n MCP server URL

### Claude Desktop Configuration (Windows):

```json
{
  "mcpServers": {
    "n8n-mcp": {
      "command": "supergateway",
      "args": [
        "--streamableHttp",
        "https://YOUR_N8N_INSTANCE.app.n8n.cloud/mcp-server/http",
        "--header",
        "authorization:Bearer YOUR_MCP_ACCESS_TOKEN"
      ]
    }
  }
}
```

&gt; **Note**: Install `supergateway` globally first: `npm install -g supergateway`

---

## Limitations & Notes

### Technical Limitations

- **tmpfiles.org**: Temporary file URLs expire after ~1 hour. Final videos are safe in Google Drive.
- **VEED processing**: Takes 2-5 minutes per video depending on length.
- **n8n Cloud network**: Some external domains are blocked; workflow uses base64 for images to avoid this.

### Content Considerations

- Scripts are optimized for 30-45 seconds (TTS-friendly)
- Avatar images are AI-generated (not real people)
- Captions include hashtags automatically
- Each video in a batch gets a different content angle

### Best Practices

1. **Start small**: Test with 1 video before scaling to 5
2. **Review scripts**: Claude generates good content but review before posting
3. **Monitor costs**: Check API usage dashboards weekly
4. **Backup sheets**: The Google Sheet serves as your content database

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Organization must be verified" | Verify at platform.openai.com/settings/organization/general |
| VEED authentication error | Re-add FAL.ai credential to VEED node |
| Google Drive "no binary field" | Ensure Download Video outputs to field named `data` |
| JSON parse error from Claude | Workflow has fallback content; check Claude node output |
| Image URL blocked | Workflow uses base64 to avoid this; ensure gpt-image-1 model |
| MCP "Server disconnected" (Windows) | Install supergateway globally: `npm install -g supergateway` |
| MCP path error on Windows | Use `supergateway` directly instead of `npx` |

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 2.0 | Jan 2026 | Added custom avatar/script options, MCP integration support, improved configuration |
| 1.0 | Jan 2026 | Initial release with portrait mode, gpt-image-1, native VEED node |

---

## Credits

Built with:
- **n8n** - Workflow automation
- **Anthropic Claude** - Script generation
- **OpenAI** - Image & audio generation
- **VEED Fabric** - AI video rendering
- **Google Workspace** - Storage & logging

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
