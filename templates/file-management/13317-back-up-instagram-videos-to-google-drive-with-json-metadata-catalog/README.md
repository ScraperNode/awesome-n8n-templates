# 📁 Back up Instagram videos to Google Drive with JSON metadata catalog

> ⚡ **6 views** · 📁 [File Management](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.

## Description

# Instagram Video Backup to Google Drive

Automatically backup all your Instagram videos to Google Drive with a searchable metadata catalog in JSON format.

## What It Does

This workflow provides a complete backup solution for your Instagram video content with intelligent caption parsing:

1. **Fetches** your Instagram account ID and videos (VIDEO and REELS types)
2. **Parses captions** into structured fields:
   - **Title**: Everything before the first hashtag
   - **Description**: Everything after the first hashtag (includes all tags)
   - **Tag List**: All hashtags extracted as an array
   - **Description Full**: Complete original caption text
3. **Downloads** videos in maximum available quality from Instagram
4. **Uploads** videos to a designated Google Drive folder
5. **Creates/updates** a JSON metadata file with all video details
6. **Prevents duplicates** using n8n Data Tables with account-level filtering

## Key Features

**Account-Level Tracking**: The Data Table includes `accountId` so you can use the same table across multiple Instagram accounts. Each account's videos are tracked separately.

**Smart Caption Parsing**: Automatically splits Instagram captions into title (before first #) and description (all hashtags and text after), with full text preserved in `descriptionFull`.

**Portable Catalog**: The JSON file is stored **in Google Drive alongside your videos**, making it accessible anywhere without needing n8n.

**Maximum Quality**: Uses Instagram Graph API's `media_url` field for highest available quality.

**Hashtag Extraction**: Automatically extracts all hashtags into an array for easy filtering and analysis.

## Workflow Architecture

### Section 1: Fetch & Filter
```
Get Instagram Account Info → Configuration → Fetch Media → Split Out Items → Filter Videos Only
```

- **Get Instagram Account Info**: Fetches your Instagram account ID and username
- **Configuration**: Stores account ID, Google Drive folder ID, and settings
- **Fetch Media**: Gets up to 100 media items from Instagram
- **Split Out Items**: Separates each media item for individual processing
- **Filter Videos Only**: Keeps only VIDEO and REELS types (skips images)

### Section 2: Process Videos
```
Check If Backed Up → IF Not Backed Up → Wait → Parse Caption → Download → Upload → Extract Metadata → Save Record → Aggregate
```

**For each video:**
1. **Check If Already Backed Up**: Queries Data Table by `postId` to avoid duplicates
2. **IF Not Already Backed Up**: Skips if video already exists
3. **Wait**: 5-second delay between downloads (prevents API rate limits)
4. **Parse Caption**: Splits caption into title, description, tagList, descriptionFull
5. **Download Video**: Downloads video file from Instagram to memory
6. **Upload to Google Drive**: Uploads video to configured folder
7. **Extract Metadata**: Creates structured metadata object with all fields
8. **Save Backup Record**: Stores `accountId`, `postId`, `googleDriveFileId`, `backedUpAt` in Data Table
9. **Aggregate**: Collects all new video metadata for JSON update

### Section 3: Update JSON Catalog
```
End Loop → Download Existing JSON → Update JSON → Upload Updated JSON
```

**After all videos processed:**
1. **Download Existing Metadata JSON**: Gets current JSON file from Google Drive (if exists)
2. **Update Metadata JSON**: Appends new video metadata to existing catalog
3. **Upload Updated Metadata JSON**: Saves updated JSON back to Google Drive

## Setup Steps

### 1. Create Google Drive Folder

1. Go to [Google Drive](https://drive.google.com)
2. Create a new folder named `Instagram Video Backups` (or any name you prefer)
3. Open the folder and copy the **Folder ID** from the URL:
   ```
   https://drive.google.com/drive/folders/1ABC123xyz...
                                            ^^^^^^^^^^^
                                            This is your Folder ID
   ```

### 2. Create n8n Data Table

Create a Data Table for deduplication tracking with **account-level support**:

**Table Name**: `Instagram Video Backups`

**Schema**:
| Field Name | Type | Description |
|------------|------|-------------|
| `accountId` | string | Instagram account ID (allows multi-account use) |
| `postId` | string (Primary Key) | Instagram post ID |
| `googleDriveFileId` | string | Google Drive file ID for the video |
| `backedUpAt` | string | ISO timestamp of backup |

**Why accountId?** This allows you to use the same Data Table for multiple Instagram accounts. Each account's videos are tracked separately, preventing conflicts.

### 3. Configure Credentials

You'll need two credential sets:

#### Instagram Graph API (HTTP Bearer Auth)
1. In n8n, create new credential: **HTTP Bearer Auth**
2. Set header name: `Authorization`
3. Set header value: `Bearer YOUR_INSTAGRAM_ACCESS_TOKEN`
4. Name it: `Instagram Graph API`

**Getting Instagram Access Token**:
- Follow [Meta's Business Account setup guide](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started)
- Required permissions: `instagram_graph_user_media`
- Tokens expire after 60 days (requires manual refresh)

#### Google Drive OAuth2
1. In n8n, create new credential: **Google Drive OAuth2 API**
2. Follow OAuth flow to authorize your Google account
3. Name it: `Google Drive Account`

### 4. Update Configuration Node

In the workflow, open the **Configuration** node and update:

```json
{
  "googleDriveFolderId": "PASTE_YOUR_FOLDER_ID_HERE",
  "maxVideosPerRun": 100,
  "waitBetweenDownloads": 5,
  "metadataFileName": "instagram-backup-metadata.json"
}
```

**Settings Explained**:
- `googleDriveFolderId`: The folder ID you copied in step 1
- `maxVideosPerRun`: Max videos to process per run (100 is safe for API limits)
- `waitBetweenDownloads`: Seconds to wait between downloads (prevents rate limits)
- `metadataFileName`: Name of the JSON catalog file in Google Drive

**Note**: `accountId` and `accountUsername` are automatically populated from Instagram API.

### 5. Test & Activate

1. Click **Manual Trigger** to test the workflow
2. Check Google Drive folder for:
   - Video files named `instagram_{postId}.mp4`
   - JSON file named `instagram-backup-metadata.json`
3. Verify Data Table has records with `accountId` and `postId`
4. Activate the **Schedule Trigger** for daily automatic backups

## Metadata JSON Structure

The JSON file stored in Google Drive has this structure:

```json
{
  "lastUpdated": "2026-02-01T10:00:00Z",
  "totalVideos": 42,
  "videos": [
    {
      "accountId": "17841400123456789",
      "instagramId": "123456789",
      "permalink": "https://instagram.com/p/ABC123",
      "title": "Amazing sunset at the beach!",
      "description": "#travel #nature #sunset",
      "tagList": ["travel", "nature", "sunset"],
      "descriptionFull": "Amazing sunset at the beach! #travel #nature #sunset",
      "timestamp": "2026-01-15T08:30:00Z",
      "mediaType": "VIDEO",
      "googleDriveFileId": "1ABC123xyz...",
      "googleDriveFileName": "instagram_123456789.mp4",
      "backedUpAt": "2026-02-01T10:00:00Z"
    }
  ]
}
```

### Field Descriptions

- **accountId**: Instagram account ID (from Graph API `/me` endpoint)
- **instagramId**: Instagram post ID (unique identifier)
- **permalink**: Direct link to Instagram post
- **title**: Caption text before the first hashtag
- **description**: Caption text from first hashtag onward (includes all tags)
- **tagList**: Array of hashtags without the `#` symbol
- **descriptionFull**: Complete original caption (preserves full text)
- **timestamp**: When the video was originally posted to Instagram
- **mediaType**: `VIDEO` or `REELS`
- **googleDriveFileId**: Google Drive file ID (use to access file via Drive API)
- **googleDriveFileName**: Filename in Google Drive (`instagram_{postId}.mp4`)
- **backedUpAt**: When the video was backed up (ISO timestamp)

## Caption Parsing Logic

The **Parse Caption** Code node splits Instagram captions intelligently:

**Example Caption**:
```
"Amazing sunset at the beach! 🌅 #travel #nature #sunset"
```

**Parsed Fields**:
- **title**: `"Amazing sunset at the beach! 🌅"`
- **description**: `"#travel #nature #sunset"`
- **tagList**: `["travel", "nature", "sunset"]`
- **descriptionFull**: `"Amazing sunset at the beach! 🌅 #travel #nature #sunset"`

**Edge Cases**:
- **No hashtags**: Entire caption becomes `title`, `description` is empty
- **Hashtag at start**: `title` is empty, entire caption becomes `description`
- **Multiple lines**: Preserves all line breaks in `descriptionFull`

## Multi-Account Usage

**Using the same Data Table for multiple accounts**:

1. Import this workflow multiple times (once per Instagram account)
2. Configure each workflow with different Instagram credentials
3. **Use the same Data Table name** in all workflows: `Instagram Video Backups`
4. Each workflow automatically filters by its own `accountId`

**Benefits**:
- Single deduplication table for all accounts
- Easy to query all backups across accounts
- Prevents conflicts between accounts with same post IDs

**Querying specific account backups**:
```javascript
// In Data Table or external script
const accountBackups = allBackups.filter(
  backup =&gt; backup.accountId === "17841400123456789"
);
```

## API Quotas & Limits

### Instagram Graph API
- **Rate Limits**: 200 calls/hour per user token (standard)
- **This Workflow**: 2 calls total (1 for account info, 1 for media fetch)
- **Impact**: Can run safely within free tier limits

### Google Drive API
- **Rate Limits**: 1,000 requests per 100 seconds per user
- **This Workflow**: 2 calls per video (upload video + final JSON update)
- **Impact**: 100 videos = ~200 calls, well within limits

### Recommended Schedule
- **Daily (midnight)**: Default, safe for most accounts
- **Weekly**: Good for accounts with infrequent posting
- **Manual**: On-demand backups when needed

## Troubleshooting

### No videos are being backed up

**Check Instagram credentials**:
1. Open "Get Instagram Account Info" node
2. Click "Execute Node"
3. Look for error messages about authentication

**Verify account has videos**:
- Instagram Graph API only returns VIDEO and REELS
- Won't backup images or carousels (by design)

### accountId is empty in Data Table

**Account info fetch failed**:
- Check Instagram credentials have correct permissions
- Verify token hasn't expired (60-day limit)
- Test "Get Instagram Account Info" node separately

### JSON file has wrong title/description

**Caption parsing issue**:
1. Open "Parse Caption" Code node
2. Check the output to see parsed fields
3. Verify caption has hashtags (if no hashtags, entire caption becomes title)

**Custom parsing logic**:
Edit the "Parse Caption" Code node to adjust splitting logic:
```javascript
// Current: splits at FIRST hashtag
const firstHashtagIndex = caption.indexOf('#');

// Alternative: split at specific word
const splitWord = 'DESCRIPTION:';
const splitIndex = caption.indexOf(splitWord);
```

### Duplicate videos in Google Drive

**Data Table issues**:
- Verify table name is exactly: `Instagram Video Backups`
- Check table has `postId` as primary key
- Verify `accountId` field exists

**Workflow execution failed mid-run**:
- If workflow fails after upload but before saving to Data Table, video won't be tracked
- Safe to delete duplicate video in Google Drive and re-run

### Rate limit errors

**Instagram rate limits**:
- Reduce `maxVideosPerRun` to 50 or 25
- Increase `waitBetweenDownloads` to 10 seconds

**Google Drive rate limits**:
- Unlikely with default settings
- If occurs, reduce `maxVideosPerRun`

### Caption has special characters (emojis, line breaks)

**Emojis preserved**:
- All emojis are preserved in `descriptionFull`
- May appear in `title` or `description` depending on position

**Line breaks**:
- Line breaks are preserved in `descriptionFull`
- May affect title/description split if hashtags are on new lines

## Advanced Customization

### Change Backup Folder

Update `googleDriveFolderId` in Configuration node to any Google Drive folder ID.

### Change Schedule

Edit the **Schedule Trigger** node:
- Daily midnight: `0 0 * * *` (default)
- Every 12 hours: `0 */12 * * *`
- Weekly Sunday: `0 0 * * 0`
- Custom: Use [crontab.guru](https://crontab.guru) to generate expression

### Organize Videos by Date

To create monthly subfolders (e.g., `2026-02/video.mp4`):

1. Before "Upload to Google Drive" node, add "Google Drive - Create Folder" node
2. Folder name: `={{ $now.format('yyyy-MM') }}`
3. Parent folder: `={{ $('Configuration').item.json.googleDriveFolderId }}`
4. Update upload node to use created folder ID

### Download Videos Locally Too

To keep local copies in addition to Google Drive:

1. After "Download Video" node, add **Write Binary File** node
2. File path: `/path/to/backup/{{ $('Extract Metadata').item.json.googleDriveFileName }}`
3. Connect in parallel with "Upload to Google Drive"

### Custom Caption Parsing

To use different title/description split logic:

**Option 1: Split at specific keyword**
```javascript
const splitKeyword = 'DESCRIPTION:';
const splitIndex = caption.indexOf(splitKeyword);

if (splitIndex === -1) {
  title = caption.trim();
  description = '';
} else {
  title = caption.substring(0, splitIndex).trim();
  description = caption.substring(splitIndex + splitKeyword.length).trim();
}
```

**Option 2: Use first sentence as title**
```javascript
const sentenceEnd = caption.match(/[.!?]/);
const endIndex = sentenceEnd ? caption.indexOf(sentenceEnd[0]) + 1 : -1;

if (endIndex === -1) {
  title = caption.trim();
  description = '';
} else {
  title = caption.substring(0, endIndex).trim();
  description = caption.substring(endIndex).trim();
}
```

### Filter by Account in JSON

To create separate JSON files per account:

1. Update "Update Metadata JSON" Code node to filter by `accountId`
2. Change `metadataFileName` to include account username:
   ```
   instagram-backup-{{ $('Configuration').item.json.accountUsername }}.json
   ```

## Use Cases

### Search Videos by Hashtag

Download the JSON file from Google Drive, then:

```javascript
// Load JSON
const metadata = require('./instagram-backup-metadata.json');

// Find all #travel videos
const travelVideos = metadata.videos.filter(v =&gt;
  v.tagList.includes('travel')
);

console.log(`Found ${travelVideos.length} travel videos`);
```

### Find Videos by Date Range

```javascript
const startDate = new Date('2026-01-01');
const endDate = new Date('2026-01-31');

const videosInRange = metadata.videos.filter(v =&gt; {
  const videoDate = new Date(v.timestamp);
  return videoDate &gt;= startDate && videoDate &lt;= endDate;
});
```

### Generate Reports

Import JSON into Google Sheets or Excel to analyze:
- Most used hashtags
- Videos per month
- Backup coverage percentage
- Videos by account (if using multi-account setup)

### Migrate to Another Platform

The JSON catalog includes permalinks and timestamps, making it easy to:
- Re-upload to YouTube, TikTok, etc.
- Generate video sitemap for website
- Create video archive with searchable metadata

## Known Limitations

1. **Only videos**: Doesn't backup images or carousel posts (by design)
2. **Token expiration**: Instagram tokens expire after 60 days, requires manual refresh
3. **Storage limits**: Google Drive free tier is 15GB
4. **No analytics**: Doesn't track views, likes, or comments
5. **Single folder**: All videos in one folder (can be customized, see Advanced Customization)
6. **Caption parsing**: Assumes first hashtag splits title/description (customizable)

## Data Privacy

- Videos are downloaded to n8n temporarily, then uploaded to Google Drive
- n8n doesn't permanently store video files
- Metadata JSON contains only public Instagram data
- Google Drive files are private to your account
- Instagram access token is encrypted by n8n credentials system
- Account ID is public data from Instagram Graph API

## Version History

- **v1.0** (2026-02-01): Initial release
  - Daily automatic backups
  - Google Drive storage
  - JSON metadata catalog with smart caption parsing
  - Multi-account support via accountId
  - Deduplication via Data Tables
  - Title/description/tagList extraction

## Related Workflows

- **Upload from Instagram to YouTube**: Cross-post videos to YouTube with metadata
- **Instagram to X**: Share posts to Twitter/X
- **Instagram Account Information Tracker**: Track follower metrics and insights over time

## Additional Resources

- [Instagram Graph API Documentation](https://developers.facebook.com/docs/instagram-api)
- [Google Drive API Documentation](https://developers.google.com/drive/api/guides/about-sdk)
- [n8n Data Tables Guide](https://docs.n8n.io/data/database/)
- [Instagram Access Token Setup](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started)

## Support

If you encounter issues:
1. Check Troubleshooting section above
2. Review n8n execution logs for error details
3. Verify all credentials are active and have required permissions
4. Test with Manual Trigger before relying on Schedule Trigger
5. Check "Parse Caption" node output if title/description is incorrect

## 🔗 Nodes Used

HTTP Request, Google Drive, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
