# 🎬 Create post‑trip journals and review drafts with Claude Sonnet Vision

> ⚡ **110 views** · 🎬 [Content Creation & Video](../)

## Description

Automatically transforms your travel photos and notes into beautiful journals, highlight reels, and review drafts using Claude's vision and language capabilities.

### How it works

1. **Trip Completion Trigger** - Webhook or scheduled check for recently ended trips
2. **Validate Trip Data** - Confirms trip details, dates, and destination information
3. **Fetch Photos from Google Photos** - Retrieves all photos from the trip date range
4. **Extract Photo Metadata** - Gets EXIF data (location, timestamps, camera settings)
5. **Fetch Trip Notes** - Pulls journal entries, receipts, bookings from Google Drive/Sheets
6. **AI Photo Analysis** - Claude Vision analyzes each photo for content, mood, significance
7. **Generate Chronological Story** - Creates narrative flow from photo sequence
8. **Create Travel Journal** - Formats beautiful journal document with photos and stories
9. **Draft Platform Reviews** - Generates review text for TripAdvisor, Google, social media
10. **Create Highlights Reel Script** - Suggests best photos and captions for video/slideshow
11. **Store Outputs** - Saves to Google Drive with organized folder structure
12. **Send Delivery Package** - Emails journal PDF, review drafts, and highlights to user
13. **Batch Processing** - Daily check for trips ended in last 7 days
14. **Analytics & Insights** - Tracks most memorable moments, photo quality scores

### Setup Steps

1. Import workflow into n8n
2. Configure credentials:
   - **Anthropic API** - Claude AI with vision for photo analysis
   - **Google Photos API** - Photo retrieval and metadata
   - **Google Drive API** - Trip notes and output storage
   - **Google Sheets** - Trip tracking and metadata
   - **SMTP / Gmail** - Delivery notifications
   - **OpenWeatherMap** (optional) - Historical weather data
3. Create Google Sheets with tabs:
   - `trips` - Trip records with start/end dates
   - `trip_notes` - Daily journal entries
   - `generated_content` - AI-generated journals and reviews
   - `analytics` - Photo quality and memory scores
4. Set up Google Drive folder structure:
   - `/Travel Memories/{Year}/{Trip Name}/Photos`
   - `/Travel Memories/{Year}/{Trip Name}/Journal`
   - `/Travel Memories/{Year}/{Trip Name}/Reviews`
5. Configure API keys and resource IDs
6. Activate both webhook and scheduled workflows

### Sample Trip Completion Payload
```json
{
  "tripId": "TRIP-2025-TOKYO-001",
  "userId": "USER-2025-1234",
  "userName": "Sarah Johnson",
  "userEmail": "sarah.j@example.com",
  "tripDetails": {
    "destination": "Tokyo, Japan",
    "startDate": "2025-03-15",
    "endDate": "2025-03-22",
    "tripType": "solo_adventure",
    "mainInterests": ["culture", "food", "temples", "photography"]
  },
  "photoSources": {
    "googlePhotosAlbumId": "ALBUM-TOKYO-2025",
    "includeSharedPhotos": true
  },
  "notesLocation": {
    "googleDriveFolderId": "FOLDER-ID-123",
    "googleSheetId": "SHEET-ID-456",
    "sheetTab": "tokyo_trip_notes"
  },
  "outputPreferences": {
    "journalStyle": "narrative",
    "includeMapRoute": true,
    "reviewPlatforms": ["tripadvisor", "google", "instagram"],
    "highlightCount": 10,
    "privacyLevel": "friends_only"
  },
  "deliveryOptions": {
    "emailPDF": true,
    "saveToDrive": true,
    "generateSlideshow": false
  }
}
```

### Features
- **AI Vision Analysis** - Claude analyzes photo content, composition, emotions
- **Intelligent Narrative** - Creates cohesive story from disconnected moments
- **Multi-Platform Reviews** - Tailored drafts for different review platforms
- **Photo Quality Scoring** - Identifies best shots for highlights
- **Location Intelligence** - Maps photo locations and suggests points of interest
- **Mood & Theme Detection** - Categorizes trip segments (relaxing, adventurous, cultural)
- **Automatic Captioning** - Generates engaging captions for social sharing
- **Memory Highlights** - AI-selected "best moments" based on uniqueness and quality
- **Timeline Reconstruction** - Chronological story even with mixed-up photo timestamps
- **Review Optimization** - SEO-friendly, platform-appropriate review text
- **Batch Processing** - Handles multiple trips efficiently
- **Privacy Controls** - Filters sensitive photos, respects sharing preferences

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
