# 🎬 Create lyric posters from Spotify tracks with Musixmatch and OpenAI

> ⚡ **43 views** · 🎬 [Content Creation & Video](../)

## Description

# Turn a song into a ready-to-hang poster, by using Musixmatch and AI

This n8n workflow turns a **song title and artist name into a gallery-ready poster** by combining **Musixmatch lyric intelligence** with a tightly controlled AI art direction pipeline.

At its core, Musixmatch is used to **identify the correct song and retrieve official lyrics**, which then drive a highly curated image-generation prompt and final poster artwork.

---

## What this workflow does

1. **Trigger via chat**
   - The workflow starts when a chat message is received.
   - The user provides a **song title and artist name**.

2. **Identify the correct track with Musixmatch**
   - The **Musixmatch “Match track by metadata”** node is used to:
     - Resolve ambiguities in song titles
     - Confirm the correct track
     - Retrieve a stable `commontrack_id`
   - This ensures all downstream steps reference the *correct* song.

3. **Retrieve full lyrics from Musixmatch**
   - Using the confirmed `commontrack_id`, the **Musixmatch lyrics endpoint** fetches the official song lyrics.
   - Lyrics are treated as authoritative source material for creative interpretation.

4. **AI Agent selects and interprets a lyric**
   - A dedicated AI Agent:
     - Selects **one single-line lyric** (strictly enforced constraints)
     - Analyzes its emotional and thematic meaning
     - Interprets mood, tension, and implied narrative
   - The lyric becomes the **conceptual anchor** of the poster.

5. **AI Agent constructs a high-fidelity image prompt**
   - The agent outputs a **fully structured, production-ready image-generation prompt** including:
     - Song metadata (reference only)
     - Emotional interpretation
     - Visual style choice
     - Composition and layout rules
     - Typography and legibility constraints
     - Quality and design guardrails
   - No drafts, explanations, or partial output are allowed.

6. **Generate the final poster image**
   - The completed prompt is passed directly to the image generation node.
   - The result is a **high-resolution, A4 portrait poster** designed to feel intentional, modern, and gallery-ready.


## Output

- A **single poster image** (1024×1536, A4 portrait ratio)
- Features:
  - One carefully chosen lyric line
  - Clean, modern typography
  - High-end contemporary poster design
  - Subtle film grain
  - Fully legible text and metadata

---

## Requirements

- **Musixmatch API credentials**
  - Track matching and lyric retrieval
- **OpenAI API credentials**
  - Language model for creative direction
  - Image model for poster generation

---

## Use cases

- Creating lyric posters for personal collections
- Album or song promotion visuals
- Editorial or social media artwork
- Print-ready music-inspired posters
- Exploring visual interpretations of song lyrics

## 🔗 Nodes Used

Spotify, AI Agent, OpenAI Chat Model, n8n Form Trigger, OpenAI, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
