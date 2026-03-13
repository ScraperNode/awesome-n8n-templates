# ⚡ Personalized Taiwan indie music recommendations with AI, star sign & weather via Spotify

> ⚡ **675 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This n8n workflow recommends Taiwan indie music based on a user's city, mood, birthday, today's weather, and star sign. Here's a concise overview:

1. **Trigger**: Starts manually with the "When clicking ‘Test workflow’" node.
2. **Input Setup**: The "infomation" node sets user inputs (e.g., city: Taipei, mood: Happy, birthday: 1996/11/21).
3. **Song Recommendation**: The "get song recommendation" node uses OpenAI's GPT-4o-mini to:
   - Fetch today's weather for the specified city.
   - Determine the user's zodiac sign from their birthday.
   - Check the zodiac sign's daily fortune.
   - Recommend a Taiwan indie song considering weather and fortune.
   - Explain the song choice and highlight its features.
   - Return results in JSON format.
4. **Data Extraction**: The "Information Extractor" node parses the JSON output, extracting fields like date, city, weather, zodiac sign, fortune, song, artist, and additional info.
5. **Spotify Search**: The "Spotify" node searches for the recommended song using the artist and song name, retrieving a Spotify URL.
6. **Final Output**: The "Final Output" node compiles all data, including the Spotify link, into a structured format.
7. **Additional Note**: A "Sticky Note" provides context about the workflow's purpose and credits the creator, n8nguide.

This workflow integrates AI, weather data, astrology, and Spotify to deliver personalized Taiwan indie music recommendations.

## 🔗 Nodes Used

Spotify, OpenAI Chat Model, OpenAI, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
