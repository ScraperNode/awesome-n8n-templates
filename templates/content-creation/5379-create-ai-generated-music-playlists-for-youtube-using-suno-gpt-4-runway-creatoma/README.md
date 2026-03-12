# 🎬 Create AI-generated music playlists for YouTube using Suno, GPT-4, Runway & Creatomate

> ⚡ **856 views** · 🎬 [Content Creation & Video](../)

## Description

# Automated AI Playlist Creator - Complete Music Production Pipeline

Demo Youtube Video: [https://www.youtube.com/watch?v=B_RDqM0kcgc](https://www.youtube.com/watch?v=B_RDqM0kcgc)

## Overview
Transform your music creation process with this comprehensive 11-workflow automation system that generates complete music playlists from concept to YouTube publication. Using advanced AI services, this template creates original songs, lyrics, cover art, animated videos, and handles the entire publishing pipeline automatically.

## What This Template Does
- **AI-Powered Song Creation**: Generates 20 unique song ideas based on your specifications
- **Lyric Generation**: Creates custom lyrics for each song using advanced AI
- **Music Production**: Produces high-quality audio tracks with AI music generation
- **Visual Content**: Creates cover art and animated cover videos
- **Video Compilation**: Renders complete playlist videos with all songs
- **Auto-Publishing**: Uploads finished videos directly to YouTube
- **Smart Selection**: Allows manual curation from multiple AI-generated versions

## Workflow Architecture

### Core Workflows (11 Total)
1. **Playlist Details Setup** - Telegram bot interface for configuration
2. **Database & Drive Configuration** - Automated folder structure and data management
3. **Song Ideas Generator** - AI-powered creative song concept generation
4. **Lyrics & Task Generation (Batch 1 & 2)** - Parallel lyric creation and task management
5. **Audio Fetch & Drive Upload** - Retrieves generated music and organizes files
6. **Song Selection Migration** - Handles user curation of AI-generated alternatives
7. **Cover Image Generation** - AI-powered visual artwork creation
8. **Cover Animation** - Dynamic video cover creation
9. **Video Rendering (20 Songs)** - Full playlist compilation
10. **Video Rendering (15 Songs)** - Alternative stable rendering option
11. **YouTube Upload & Publishing** - Automated social media publishing

## APIs & Services Used

### AI & Machine Learning
- **OpenAI GPT-4.1** - Conversational AI, lyrics generation, image creation
- **Suno API** - High-quality AI music generation
- **Runway ML** - AI-powered video animation and effects

### Media & Storage
- **Google Sheets** - Database and workflow management
- **Google Drive** - File storage and organization via Google Apps Script
- **ImageBB** - Image hosting and CDN services
- **Creatomate** - Professional video rendering and compilation

### Communication & Publishing
- **Telegram Bot API** - User interface and workflow control
- **YouTube Data API** - Automated video publishing
- **SerpAPI** - Optional web search for creative inspiration

## Key Features

### Intelligent Automation
- **Conversational Setup**: Natural language playlist configuration via Telegram
- **Batch Processing**: Efficient handling of multiple songs simultaneously  
- **Quality Control**: Multiple AI-generated versions with manual selection
- **Error Recovery**: Robust workflow design with alternative processing paths
- **Status Tracking**: Real-time progress monitoring through Google Sheets

### Professional Output
- **High-Quality Audio**: Professional-grade AI music generation
- **Custom Visuals**: Unique cover art and animated videos for each playlist
- **Optimized Rendering**: Smart video compilation with duration management
- **Platform-Ready**: Direct YouTube integration with metadata handling

### Flexibility & Customization
- **Adjustable AI Prompts**: Customize creativity and style parameters
- **Multiple Rendering Options**: Choose between 15 or 20 song compilations
- **Genre Versatility**: Works across all music genres and styles
- **Scalable Architecture**: Easily handle multiple playlists simultaneously

## Cost Breakdown (Per Playlist)

### API Service Costs
- **Suno API**: $2.40 (480 credits for 20 songs with 2 versions each)
- **OpenAI Services**: $0.50-$2.00 (varies by conversation length and customizations)
- **Runway ML**: $0.50 (10-second animated cover video)
- **Creatomate**: $0.20-$0.27 (within monthly plan of $45-$54/month)
- **ImageBB**: Free (within standard limits)

**Total Estimated Cost: $3.60-$5.17 per complete playlist**

*Additional services (Google, YouTube, Telegram) operate within free tiers for normal usage*

## Technical Requirements

### Platform Compatibility
- **N8N Instance**: Self-hosted or cloud deployment
- **Google Workspace**: Sheets and Drive integration
- **API Access**: Valid keys for all integrated services

### Setup Complexity
- **Beginner-Friendly**: Detailed documentation with step-by-step instructions
- **Template Database**: Pre-configured Google Sheets structure included
- **Guided Configuration**: Clear setup process for all API integrations

## Use Cases

### Content Creators
- Music channels and playlists
- Background music for videos
- Themed compilations and mixes

### Business Applications  
- Brand-specific playlists
- Marketing campaign soundtracks
- Event and presentation music

### Personal Projects
- Custom playlists for special occasions
- Experimental music creation
- Learning AI music production

## What's Included

### Complete Workflow Package
- 11 pre-configured N8N workflows
- Google Sheets database template
- Custom Google Apps Script for file management
- Creatomate video template (JSON)
- Comprehensive setup documentation

### Support Resources
- Step-by-step API configuration guides
- Troubleshooting documentation
- Customization instructions for AI prompts
- Performance optimization guidelines

## Performance & Reliability

### Processing Capacity
- **Concurrent Processing**: Multiple songs generated simultaneously
- **Batch Operations**: Efficient API usage with rate limit management
- **Alternative Pathways**: Backup workflows for enhanced reliability

### Quality Assurance
- **Multi-Version Generation**: Compare and select best AI outputs
- **Duration Management**: Smart handling of video length limitations
- **Error Handling**: Comprehensive workflow error recovery

---

*This template represents a complete AI-powered music production pipeline, transforming simple text descriptions into professional playlist videos ready for publication. Perfect for content creators, musicians, and businesses looking to automate their music content creation workflow.*

After the Purchase in Gumroad, you will have access to all the workflows JSON files, creatomate template, google script gs code and comprehensive documentation guide.

Reach out to me via email at joseph@uppfy.com incase you want a custom workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Google Drive, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
