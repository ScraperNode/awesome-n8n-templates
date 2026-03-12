# ⚡ Monthly Spotify track archiving and playlist classification

> ⚡ **1,741 views** · ⚡ [Personal Productivity](../)

## Description

# Monthly Spotify Track Archiving and Playlist Classification

This n8n workflow allows you to automatically archive your monthly Spotify liked tracks in a Google Sheet, along with playlist details and descriptions. Based on this data, Claude 3.5 is used to classify each track into multiple playlists and add them in bulk.

## Who is this template for?
This workflow template is perfect for Spotify users who want to systematically archive their listening history and organize their tracks into custom playlists.

## What problem does this workflow solve?
It automates the monthly process of tracking, storing, and categorizing Spotify tracks into relevant playlists, helping users maintain well-organized music collections and keep a historical record of their listening habits.

## Workflow Overview
- **Trigger Options**: Can be initiated manually or on a set schedule.
- **Spotify Playlists Retrieval**: Fetches the current playlists and filters them by owner.
- **Track Details Collection**: Retrieves information such as track ID and popularity from the user’s library.
- **Audio Features Fetching**: Uses Spotify's API to get audio features for each track.
- **Data Merging**: Combines track information with their audio features.
- **Duplicate Checking**: Filters out tracks that have already been logged in Google Sheets.
- **Data Logging**: Archives new tracks into a Google Sheet.
- **AI Classification**: Uses an AI model to classify tracks into suitable playlists.
- **Playlist Updates**: Adds classified tracks to the corresponding playlists.

## Setup Instructions
1. **Credentials Setup**:  
   Make sure you have valid Spotify OAuth2 and Google Sheets access credentials.
2. **Trigger Configuration**:  
   Choose between manual or scheduled triggers to start the workflow.
3. **Google Sheets Preparation**:  
   Set up a Google Sheet with the necessary structure for logging track details.
4. **Spotify Playlists Setup**:  
   Have a diverse range of playlists and exhaustive description (see example) ready to accommodate different music genres and moods.

## Customization Options
- **Adjust Playlist Conditions**:  
   Modify the AI model’s classification criteria to align with your personal music preferences.
- **Enhance Track Analysis**:  
   Incorporate additional audio features or external data sources for more refined track categorization.
- **Personalize Data Logging**:  
   Customize which track attributes to log in Google Sheets based on your archival preferences.
- **Configure Scheduling**:  
   Set a preferred schedule for periodic track archiving, e.g., monthly or weekly.

## Cost Estimate 
For 300 tracks, the token usage amounts to approximately 60,000 tokens (58,000 for input and 2,000 for completion), costing around 20 cents with Claude 3.5 Sonnet (as of October 2024).

### Playlists' Description Examples


| Playlist Name           | Playlist Description                                                                                                                                             |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Classique               | Indulge in the timeless beauty of classical music with this refined playlist. From baroque to romantic periods, this collection showcases renowned compositions.   |
| Poi                     | Find your flow with this dynamic playlist tailored for poi, staff, and ball juggling. Featuring rhythmic tracks that complement your movements.                   |
| Pro Sound               | Boost your productivity and focus with this carefully selected mix of concentration-enhancing music. Ideal for work or study sessions.                           |
| ChillySleep             | Drift off to dreamland with this soothing playlist of sleep-inducing tracks. Gentle melodies and ambient sounds create a peaceful atmosphere for restful sleep.  |
| To Sing                 | Warm up your vocal cords and sing your heart out with karaoke-friendly tracks. Featuring popular songs, perfect for solo performances or group sing-alongs.      |
| 1990s                   | Relive the diverse musical landscape of the 90s with this eclectic mix. From grunge to pop, hip-hop to electronic, this playlist showcases defining genres.       |
| 1980s                   | Take a nostalgic trip back to the era of big hair and neon with this 80s playlist. Packed with iconic hits and forgotten gems, capturing the energy of the decade.|
| Groove Up               | Elevate your mood and energy with this upbeat playlist. Featuring a mix of feel-good tracks across various genres to lift your spirits and get you moving.       |
| Reggae & Dub            | Relax and unwind with the laid-back vibes of reggae and dub. This playlist combines classic reggae tunes with deep, spacious dub tracks for a chilled-out vibe.   |
| Psytrance               | Embark on a mind-bending journey with this collection of psychedelic trance tracks. Ideal for late-night dance sessions or intense focus.                        |
| Cumbia                  | Sway to the infectious rhythms of Cumbia with this lively playlist. Blending traditional Latin American sounds with modern interpretations for a danceable mix.  |
| Funky Groove            | Get your body moving with this collection of funk and disco tracks. Featuring irresistible basslines and catchy rhythms, perfect for dance parties.              |
| French Chanson          | Experience the romance and charm of France with this mix of classic and modern French songs, capturing the essence of French musical culture.                    |
| Workout Motivation      | Push your limits and power through your exercise routine with this high-energy playlist. From warm-up to cool-down, these tracks will keep you motivated.        |
| Cinematic Instrumentals | Immerse yourself in a world of atmospheric sounds with this collection of cinematic instrumental tracks, perfect for focus, relaxation, or contemplation.        |

## 🔗 Nodes Used

Google Sheets, HTTP Request, Spotify, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
