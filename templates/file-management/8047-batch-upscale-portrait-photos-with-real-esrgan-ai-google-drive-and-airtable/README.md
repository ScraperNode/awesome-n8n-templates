# 📁 Batch upscale portrait photos with Real-ESRGAN AI, Google Drive and Airtable

> ⚡ **436 views** · 📁 [File Management](../)

## Description

# Portrait Photo Upscaler Workflow

## Overview
Automated workflow that retrieves portrait photos from Airtable, upscales them using AI, and stores the enhanced images in Google Drive with organized folder structure.

## Features
- **Automated Folder Creation**: Creates timestamped folders in Google Drive
- **AI-Powered Upscaling**: Uses Replicate's Real-ESRGAN for 2x image enhancement
- **Batch Processing**: Handles multiple images efficiently with loop processing
- **Error Handling**: Continues processing even if individual images fail
- **Airtable Integration**: Retrieves images from specified database records

## Prerequisites

### Required Credentials
- **Google Drive OAuth2 API**: For folder creation and file uploads
- **Airtable Token API**: For accessing image records
- **Replicate HTTP Header Auth**: For AI upscaling service

### Airtable Setup
- Column name: `PortraitFotoAuswahl`
- Column type: Attachment field containing image files
- Required: Valid Airtable Base ID and Table ID

## Workflow Steps

1. **Manual Trigger**: Initiates the workflow execution
2. **Create Folder**: Generates new Google Drive folder with custom name
3. **Get Airtable Record**: Retrieves specified record containing portrait images
4. **Extract URLs**: Processes attachment URLs from Airtable field
5. **Loop Processing**: Iterates through each image for individual processing
6. **AI Upscaling**: Enhances images using Replicate's Real-ESRGAN (2x scale)
7. **Download Results**: Retrieves processed images from Replicate
8. **Upload to Drive**: Stores enhanced images in created folder

## Configuration

### Required Inputs
- **Folder Name**: Custom name for Google Drive folder
- **Record ID**: Airtable record identifier containing images
- **Base ID**:  (configurable)
- **Table ID**: (configurable)

### Upscaling Settings
- **Scale Factor**: 2x (configurable)
- **Face Enhancement**: Disabled (configurable)
- **Model**: Real-ESRGAN v1.3

## Technical Details

### Node Configuration
- **Error Handling**: Continue on individual failures
- **Response Format**: File binary for image processing
- **Naming Convention**: `LoRa{timestamp}.png`
- **Batch Processing**: Automatic item splitting

### API Endpoints
- **Replicate**: `https://api.replicate.com/v1/predictions`
- **Model Version**: `nightmareai/real-esrgan:f121d640bd286e1fdc67f9799164c1d5be36ff74576ee11c803ae5b665dd46aa`

## Use Cases
- Portrait photography enhancement
- Batch image processing for portfolios
- Automated content preparation workflows
- Quality improvement for archived images

## Output
- Enhanced images stored in Google Drive
- Organized folder structure with timestamps
- Preserved original filenames with processed variants
- Failed processes continue without stopping workflow

## Template Benefits
- **Scalable**: Processes unlimited images in single execution
- **Reliable**: Built-in error handling and continuation logic
- **Organized**: Automatic folder management and file naming
- **Professional**: High-quality AI upscaling for commercial use

## 🔗 Nodes Used

Airtable, HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
