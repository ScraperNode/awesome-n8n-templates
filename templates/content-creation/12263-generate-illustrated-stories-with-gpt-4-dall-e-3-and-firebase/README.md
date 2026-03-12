# 🎬 Generate illustrated stories with GPT-4, DALL-E 3 and Firebase

> ⚡ **140 views** · 🎬 [Content Creation & Video](../)

## Description

Generate complete illustrated stories using AI. This workflow creates engaging narratives with custom DALL-E 3 images for each scene and saves everything to Firebase.

**How it works**
1. User fills out a form with story topic, language, art style, and number of scenes
2. GPT-4 generates a complete story with scenes, characters, and image prompts
3. DALL-E 3 creates unique illustrations for each scene
4. Images are uploaded to Firebase Storage for permanent hosting
5. Complete story data is saved to Firestore
6. Returns JSON with the full story and image URLs

**Set up steps** (10-15 minutes)
1. Add your OpenAI API credentials
2. Add Google Service Account credentials for Firebase
3. Update 3 variables in the Code nodes: `OPENAI_API_KEY`, `FIREBASE_BUCKET`, `FIREBASE_PROJECT_ID`
4. Activate and test with the form

**Features**
- 12 languages supported
- 10 art styles to choose from
- 1-12 scenes per story
- Automatic image hosting on Firebase
- Full story saved to Firestore database

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
