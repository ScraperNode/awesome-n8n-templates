# 🎬 Create photorealistic social media images with Flux Realism, LoRa models & Airtable

> ⚡ **1,203 views** · 🎬 [Content Creation & Video](../)

## Description

# AI Image Generation Workflow for Social Media Content

## Overview
This n8n workflow automates the creation of photorealistic AI-generated images for social media content. The workflow uses RunComfy (ComfyUI cloud service) combined with Airtable for data management to create high-quality images based on custom prompts and LoRa models.

## Key Features

**Automated Image Generation**: Creates photorealistic images using Flux Realism model and custom LoRa models

**Airtable Integration**: Centrally manages content requests, model information, and image status

**Cloud-based Processing**: Utilizes RunComfy servers for powerful GPU processing without local hardware requirements

**Status Tracking**: Monitors generation process and automatically updates database entries

**Telegram Notifications**: Sends success notifications after image completion

## Technical Workflow

1. **Server Initialization**: Starts RunComfy server with configured specifications
2. **Data Retrieval**: Fetches content requests from Airtable database
3. **Image Generation**: Sends prompts to ComfyUI with Flux Realism + LoRa models
4. **Status Monitoring**: Checks generation progress in 30-second intervals
5. **Download**: Downloads completed images
6. **Database Update**: Updates Airtable with image links and status
7. **Server Cleanup**: Deletes RunComfy server for cost optimization

## Prerequisites

- **RunComfy Membership** with API access
- **Airtable Account** with configured database
- **Telegram Bot** for notifications
- **Flux Realism Workflow** in RunComfy library
- **Uploaded LoRa Models** in RunComfy

## Airtable Schema

The database must contain these fields:
- `topic`: Content description
- `pose_1`: Detailed image prompt  
- `LoRa Name Flux`: LoRa model name
- `Model`: Character name
- `pose_1_drive_fotolink`: Link to generated image
- `Bilder erstellt`: Generation status

## Configuration Options

**Image Resolution**: Default 832x1216px (adjustable in ComfyUI parameters)

**Generation Parameters**: 35 steps, Euler sampler, Guidance 2.0

**Server Size**: "Large" for optimal performance (adjustable based on requirements)

**Time Intervals**: 30s status checks, 50s server initialization

This workflow is ideal for content creators who need regular, high-quality, character-consistent images for social media campaigns.

## 🔗 Nodes Used

Airtable, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
