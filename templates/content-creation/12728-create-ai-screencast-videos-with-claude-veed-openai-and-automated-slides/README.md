# 🎬 Create AI screencast videos with Claude, VEED, OpenAI and automated slides

> ⚡ **136 views** · 🎬 [Content Creation & Video](../)

## Description

# Create AI screencast videos with VEED and automated slides

## Overview

This n8n workflow automatically generates **presentation-style "screen recording" videos** with AI-generated slides and a talking head avatar overlay. You provide a topic and intention, and the workflow handles everything: scriptwriting, slide generation, avatar creation, voiceover, and video composition.

**Output**: Horizontal (16:9) AI-generated videos with animated slides as the main content and a lip-synced avatar in picture-in-picture, ready for YouTube, LinkedIn, or professional presentations.

---

## What It Does

```
Topic + Intention → Claude writes script → Parallel processing:
                                            ├── OpenAI generates avatar → ElevenLabs voiceover → VEED lip-sync
                                            └── FAL Flux Pro generates slides
                                          → Creatomate composites everything → Saved to Google Drive + logged to Sheets
```

### Pipeline Breakdown

| Step | Tool | What Happens |
|------|------|--------------|
| 1. Script Generation | Claude Sonnet 4 | Creates hook, script (25-40 sec), slide prompts, caption, and avatar description |
| 2. Avatar Generation | OpenAI gpt-image-1 | Generates photorealistic portrait image (1024×1536) |
| 3. Slide Generation | FAL Flux Pro | Creates 5-7 professional slides (1920×1080) with text overlays |
| 4. Voiceover | ElevenLabs | Converts script to natural speech (multiple voice options) |
| 5. Talking Head | VEED Fabric 1.0 | Lip-syncs avatar to audio, creates 9:16 talking head video |
| 6. Video Composition | Creatomate | Combines slides + avatar in 16:9 PiP layout |
| 7. Storage | Google Drive | Uploads final MP4 |
| 8. Logging | Google Sheets | Records all metadata (script, caption, URLs, timestamps) |

---

## Required Connections

### API Keys (entered in Configuration node)

| Service | Key Type | Where to Get |
|---------|----------|--------------|
| **Anthropic** | API Key | https://console.anthropic.com/settings/keys |
| **OpenAI** | API Key | https://platform.openai.com/api-keys |
| **ElevenLabs** | API Key | https://elevenlabs.io/app/settings/api-keys |
| **FAL.ai** | API Key | https://fal.ai/dashboard/keys |
| **Creatomate** | API Key | https://creatomate.com/dashboard/settings |

&gt; ⚠️ **OpenAI Note**: `gpt-image-1` requires organization verification. Go to https://platform.openai.com/settings/organization/general to verify.

### n8n Credentials (connect in n8n)

| Node | Credential Type | Purpose |
|------|-----------------|---------|
| **🎬 Generate Talking Head (VEED)** | FAL.ai API | VEED video rendering |
| **📤 Upload to Drive** | Google Drive OAuth2 | Store final videos |
| **📝 Log to Sheets** | Google Sheets OAuth2 | Track all generated content |

---

## Configuration Options

Edit the **⚙️ Workflow Configuration** node to customize:

```javascript
{
  // 📝 CONTENT SETTINGS
  topic: "How AI is transforming content creation",
  intention: "informative",                    // informative, lead_generation, disruption
  brand_name: "YOUR_BRAND_NAME",
  target_audience: "sales teams and marketers",
  trending_hashtags: "#AIvideo #ContentCreation #VideoMarketing",
  
  // 🎨 SLIDE STYLE
  slide_style: "vibrant_colorful",            // See slide styles below
  
  // 🎥 VIDEO SETTINGS
  video_resolution: "720p",                   // VEED only supports 720p
  seconds_per_slide: 6,                       // How long each slide shows
  
  // 🖼️ BACKGROUND (Optional)
  background: "",                             // URL, gradient array, or empty
  
  // 🔑 API KEYS (Required)
  anthropic_api_key: "YOUR_ANTHROPIC_API_KEY",
  openai_api_key: "YOUR_OPENAI_API_KEY",
  elevenlabs_api_key: "YOUR_ELEVENLABS_API_KEY",
  creatomate_api_key: "YOUR_CREATOMATE_API_KEY",
  fal_api_key: "YOUR_FAL_API_KEY",
  
  // 🎤 VOICE SELECTION
  voice_selection: "susie",                   // cristina, enrique, susie, jeff, custom
  
  // 🎨 AVATAR OPTIONS (Optional)
  custom_avatar_description: "",              // Leave empty for AI-generated
  custom_avatar_image_url: "",                // Direct URL to use existing image
  
  // 📝 CUSTOM SCRIPT (Optional)
  custom_script: ""                           // Leave empty for AI-generated
}
```

### Slide Style Options

| Style | Description | Best For |
|-------|-------------|----------|
| `dark_professional` | Dark gradients, white text, sleek look | Tech, SaaS, premium brands |
| `light_modern` | Light backgrounds, dark text, clean | Corporate, educational |
| `vibrant_colorful` | Bold colors, energetic, eye-catching | Social media, startups |
| `minimalist` | Lots of whitespace, simple, elegant | Luxury, professional services |
| `tech_corporate` | Blue tones, geometric shapes | Enterprise, B2B |

### Background Options

| Type | Example | Description |
|------|---------|-------------|
| **None** | `""` | Full bleed layout, slides take 78% width |
| **URL** | `"https://example.com/bg.jpg"` | Image background with margins |
| **Gradient** | `["#ff6b6b", "#feca57", "#48dbfb"]` | Gradient background with margins |

### Voice Options

| Voice | Language | Description |
|-------|----------|-------------|
| `cristina` | Spanish | Female voice |
| `enrique` | Spanish | Male voice |
| `susie` | English | Female voice (default) |
| `jeff` | English | Male voice |
| `custom` | Any | Use your ElevenLabs voice clone ID |

### Intention Types

| Intention | Content Style | Best For |
|-----------|---------------|----------|
| `informative` | Educational, value-driven, builds trust | Thought leadership, tutorials |
| `lead_generation` | Creates curiosity, soft CTA | Product awareness, funnels |
| `disruption` | Bold, provocative, scroll-stopping | Viral potential, brand awareness |

---

## Custom Avatar & Script Options

### Custom Avatar Description

Leave `custom_avatar_description` empty to let Claude decide, or provide your own:

```javascript
custom_avatar_description: "female marketing influencer, cool, working in tech"
```

**Examples:**
- `"a woman in her 20s with gym clothes"`
- `"a bearded man in his 30s wearing a hoodie"`
- `"a professional woman with glasses in business casual"`

### Custom Avatar Image URL

Skip avatar generation entirely by providing a direct URL:

```javascript
custom_avatar_image_url: "https://example.com/my-avatar.png"
```

&gt; Image should be portrait orientation, high quality, with the subject looking at camera.

### Custom Script

Leave `custom_script` empty to let Claude write it, or provide your own:

```javascript
custom_script: "This is my custom script. AI is changing how we create content..."
```

**Guidelines for custom scripts:**
- Keep it 25-40 seconds when read aloud (60-100 words)
- Avoid special characters for TTS compatibility
- Write naturally, as if speaking

### Behavior Matrix

| custom_avatar_description | custom_avatar_image_url | custom_script | What Claude Generates |
|---------------------------|-------------------------|---------------|----------------------|
| Empty | Empty | Empty | Avatar + Script + Slides + Caption |
| Provided | Empty | Empty | Script + Slides + Caption |
| Empty | Provided | Empty | Script + Slides + Caption |
| Empty | Empty | Provided | Avatar + Slides + Caption |
| Provided | Provided | Provided | Slides + Caption only |

---

## Video Layout

The final video uses a picture-in-picture (PiP) layout:

### Without Background (Full Bleed)
```
┌─────────────────────────────────┬──────┐
│                                 │      │
│                                 │      │
│         SLIDES (78%)            │AVATAR│
│                                 │(22%) │
│                                 │      │
│                                 │      │
└─────────────────────────────────┴──────┘
```

### With Background (Margins + Rounded Corners)
```
┌─────────────────────────────────────────┐
│ BG ┌───────────────────────────┐ ┌────┐ │
│    │                           │ │    │ │
│    │       SLIDES (74%)        │ │AVA │ │
│    │                           │ │TAR │ │
│    │                           │ │20% │ │
│    └───────────────────────────┘ └────┘ │
└─────────────────────────────────────────┘
```

---

## Output

### Per Video Generated

| Asset | Format | Location |
|-------|--------|----------|
| Final Video | MP4 (1920×1080, 60fps) | Google Drive folder |
| Avatar Image | PNG (1024×1536) | tmpfiles.org (temporary) |
| Slide Images | PNG (1920×1080) | FAL CDN (temporary) |
| Voiceover | MP3 | tmpfiles.org (temporary) |
| Metadata | Row entry | Google Sheets |

### Google Sheets Columns

| Column | Description |
|--------|-------------|
| topic | Video topic |
| intention | Content intention used |
| brand_name | Brand mentioned |
| slide_style | Visual style used |
| content_theme | 2-3 word theme summary |
| script | Full voiceover script |
| caption | Ready-to-post caption with hashtags |
| num_slides | Number of slides generated |
| video_url | Google Drive link to final video |
| avatar_video_url | VEED talking head video URL |
| audio_url | Temporary audio URL |
| status | done/error |
| created_at | Timestamp |

---

## Estimated Costs Per Video

| Service | Usage | Approximate Cost |
|---------|-------|------------------|
| Claude Sonnet 4 | ~2K tokens | ~$0.01 |
| OpenAI gpt-image-1 | 1 image (1024×1536) | ~$0.04-0.08 |
| FAL Flux Pro | 5-7 images (1920×1080) | ~$0.10-0.15 |
| ElevenLabs | ~100 words | ~$0.01-0.02 |
| VEED/FAL.ai | 1 video render | ~$0.10-0.20 |
| Creatomate | 1 video composition | ~$0.10-0.20 |
| **Total** | | **~$0.35-0.65 per video** |

&gt; Costs vary based on script length and current API pricing.

---

## Setup Checklist

### Step 1: Import Workflow
- [ ] Import `create-ai-screencast-videos-with-veed-and-automated-slides.json` into n8n

### Step 2: Configure API Keys
- [ ] Open the **⚙️ Workflow Configuration** node
- [ ] Replace all `YOUR_*_API_KEY` placeholders with your actual API keys
- [ ] Verify your OpenAI organization at https://platform.openai.com/settings/organization/general

### Step 3: Connect n8n Credentials
- [ ] Click on **🎬 Generate Talking Head (VEED)** node → Add FAL.ai credential
- [ ] Click on **📤 Upload to Drive** node → Add Google Drive OAuth2 credential
- [ ] Click on **📝 Log to Sheets** node → Add Google Sheets OAuth2 credential

### Step 4: Configure Storage
- [ ] Update the **📤 Upload to Drive** node with your Google Drive folder URL
- [ ] Update the **📝 Log to Sheets** node with your Google Sheets URL
- [ ] Create column headers in your Google Sheet (see Output section)

### Step 5: Customize Content
- [ ] Update `topic`, `brand_name`, `target_audience`, and `trending_hashtags`
- [ ] Choose your preferred `slide_style` and `voice_selection`
- [ ] Optionally configure `background`, `custom_avatar_description`, and/or `custom_script`

### Step 6: Test
- [ ] Execute the workflow
- [ ] Check Google Drive for the output video
- [ ] Verify metadata was logged to Google Sheets

---

## MCP Integration (Optional)

This workflow can be exposed to Claude Desktop via n8n's Model Context Protocol (MCP) integration.

### To enable MCP:

1. Add a **Webhook Trigger** node to the workflow (in addition to the Manual Trigger)
2. Connect it to the **⚙️ Workflow Configuration** node
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
- **VEED processing**: Takes 1-3 minutes for the talking head.
- **Creatomate processing**: Takes 30-60 seconds for composition.
- **Total workflow time**: ~3-5 minutes per video.

### Content Considerations

- Scripts are optimized for 25-40 seconds (TTS-friendly)
- Avatar images are AI-generated (not real people)
- Slides are dynamically generated based on script length
- Slide count: 5-7 slides depending on script duration

### Best Practices

1. **Start simple**: Test with default settings before customizing
2. **Review scripts**: Claude generates good content but review before posting
3. **Monitor costs**: Check API usage dashboards weekly
4. **Use backgrounds**: Adding a background image creates a more polished look
5. **Match voice to content**: Use Spanish voices for Spanish content

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Organization must be verified" | Verify at platform.openai.com/settings/organization/general |
| VEED authentication error | Re-add FAL.ai credential to VEED node |
| Google Drive "no binary field" | Ensure Download Video outputs to binary field |
| JSON parse error from Claude | Workflow has fallback content; check Claude node output |
| Slides not matching script | Increase `seconds_per_slide` for fewer slides |
| Avatar cut off in PiP | Avatar is designed for right-side placement |
| MCP "Server disconnected" | Install supergateway globally: `npm install -g supergateway` |
| Render timeout | Increase wait time in "⏳ Wait for Render" node |

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 2.1 | Jan 2026 | Renamed workflow, improved documentation with section sticky notes, consolidated setup information |
| 2.0 | Jan 2026 | Added dynamic slide count, background options, FAL Flux Pro for slides, improved PiP layout |
| 1.0 | Jan 2026 | Initial release with fixed slide count, basic composition |

---

## Credits

Built with:
- **n8n** - Workflow automation
- **Anthropic Claude** - Script & slide prompt generation
- **OpenAI** - Avatar image generation
- **FAL.ai** - Slide image generation (Flux Pro)
- **ElevenLabs** - Voice synthesis
- **VEED Fabric** - AI lip-sync video rendering
- **Creatomate** - Video composition
- **Google Workspace** - Storage & logging

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
