# 💬 🎙️ VoiceFlow AI: Telegram + Deepgram + OpenAI + Supabase audio assistant

> ⚡ **2,167 views** · 💬 [Support Chatbots](../)

## Description

## 🎙️ AI Audio Assistant with Voice-to-Voice Response

**Who is this for?**
Businesses, customer service teams, content creators, and organizations who want to provide intelligent voice-based interactions through Telegram. Perfect for accessibility-focused services, multilingual support, or hands-free customer assistance.

**What problem does this solve?**
- Enables natural voice conversations with AI
- Breaks down language and accessibility barriers
- Provides instant voice responses to customer queries
- Reduces typing requirements for users
- Offers 24/7 voice-based customer support
- Maintains conversation context across voice interactions

**What this workflow does:**
1. Receives voice messages via Telegram bot
2. Transcribes audio using Deepgram's advanced speech-to-text
3. Processes transcribed text through AI agent with knowledge base access
4. Generates intelligent responses based on conversation context
5. Converts AI response to natural-sounding speech using Deepgram TTS
6. Sends audio response back to user via Telegram
7. Maintains conversation memory for contextual interactions

## 🔧 Technical Architecture

**Core Components:**
- **Telegram Bot**: Receives and sends voice messages
- **Deepgram STT**: Transcribes voice to text with high accuracy
- **OpenAI GPT**: Processes queries and generates responses
- **Supabase Knowledge Base**: Stores and retrieves business information
- **Memory Management**: Maintains conversation context
- **Deepgram TTS**: Converts text responses to natural speech

**Data Flow:**
1. Voice Message → Telegram API → File Download
2. Audio File → Deepgram STT → Transcript
3. Transcript → AI Agent → Response Generation
4. Response → Deepgram TTS → Audio File
5. Audio Response → Telegram → User

## 🛠️ Setup Instructions

### Prerequisites
1. **Telegram Bot Token**
   - Create bot via @BotFather
   - Get bot token and configure webhook

2. **Deepgram API Key**
   - Sign up at deepgram.com
   - Get API key for STT and TTS services
   - Note: Currently hardcoded in workflow

3. **OpenAI API Key**
   - OpenAI account with API access
   - Configure in OpenAI Chat Model node

4. **Supabase Database**
   - Create Supabase project
   - Set up knowledge_base table
   - Configure API credentials

### Step-by-Step Setup

1. **Configure Telegram Bot**
   ```
   - Update telegramToken in "Prepare Voice Message Data" node
   - Set correct bot token in Telegram nodes
   - Test bot connectivity
   ```

2. **Set Up Deepgram Integration**
   ```
   - Replace API key in "Transcribe with Deepgram" node
   - Update TTS endpoint in "HTTP Request" node
   - Test voice transcription accuracy
   ```

3. **Configure Knowledge Base**
   ```sql
   -- Create knowledge_base table in Supabase
   CREATE TABLE knowledge_base (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     question TEXT NOT NULL,
     answer TEXT NOT NULL,
     category VARCHAR(100),
     keywords TEXT[],
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

4. **Customize AI Prompts**
   - Update system message in "Telegram AI Agent" node
   - Adjust temperature and max tokens in OpenAI model
   - Configure memory session keys

5. **Test End-to-End Flow**
   - Send test voice message to bot
   - Verify transcription accuracy
   - Check AI response quality
   - Validate audio output clarity

## 🎛️ Configuration Options

### Voice Recognition Settings
- **Model**: nova-2 (Deepgram's latest model)
- **Language**: English (en) - can be changed
- **Smart Format**: Enabled for better punctuation

### AI Response Settings
- **Temperature**: 0.3 (conservative responses)
- **Max Tokens**: 100 (adjust based on needs)
- **Memory**: Session-based conversation context

### Text-to-Speech Settings
- **Model**: aura-2-thalia-en (natural female voice)
- **Alternative voices**: Available in Deepgram TTS API
- **Audio Format**: Optimized for Telegram

## 🔒 Security Considerations

### API Key Management
```javascript
// Current implementation has hardcoded tokens
// Recommended: Use environment variables
const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
const deepgramKey = process.env.DEEPGRAM_API_KEY;
```

### Data Privacy
- Voice messages are processed by external APIs
- Consider data retention policies
- Implement user consent mechanisms
- Ensure GDPR compliance if applicable

## 📊 Monitoring & Analytics

### Key Metrics to Track
- Voice message processing time
- Transcription accuracy rates
- AI response quality scores
- User engagement metrics
- Error rates and failure points

### Recommended Logging
```javascript
// Add to workflow for monitoring
console.log({
  timestamp: new Date().toISOString(),
  user_id: userData.user_id,
  transcript_confidence: transcriptData.confidence,
  response_length: aiResponse.length,
  processing_time: processingTime
});
```

## 🚀 Customization Ideas

### Enhanced Features
1. **Multi-language Support**
   - Add language detection
   - Support multiple TTS voices
   - Translate responses

2. **Voice Commands**
   - Implement wake words
   - Add voice shortcuts
   - Create voice menus

3. **Advanced AI Features**
   - Sentiment analysis
   - Intent classification
   - Escalation triggers

4. **Integration Expansions**
   - Connect to CRM systems
   - Add calendar scheduling
   - Integrate with help desk tools

### Performance Optimizations
- Implement audio preprocessing
- Add response caching
- Optimize API call sequences
- Implement retry mechanisms

## 🐛 Troubleshooting

### Common Issues

**Voice Not Transcribing**
- Check Deepgram API key validity
- Verify audio format compatibility
- Test with shorter voice messages

**Poor Audio Quality**
- Adjust TTS model settings
- Check network connectivity
- Verify Telegram audio limits

**AI Responses Too Generic**
- Improve knowledge base content
- Adjust system prompts
- Increase context window

**Memory Not Working**
- Check session key configuration
- Verify user ID extraction
- Test conversation continuity

## 💡 Best Practices

### Voice Interface Design
- Keep responses concise and clear
- Use natural speech patterns
- Avoid technical jargon
- Provide clear next steps

### Knowledge Base Management
- Regular content updates
- Clear categorization
- Keyword optimization
- Quality assurance testing

### User Experience
- Fast response times (&lt;5 seconds)
- Consistent voice personality
- Graceful error handling
- Clear capability communication

## 📈 Success Metrics

### Technical KPIs
- Response time: &lt;3 seconds average
- Transcription accuracy: &gt;95%
- User satisfaction: &gt;4.5/5
- Uptime: &gt;99.5%

### Business KPIs
- Customer query resolution rate
- Support ticket reduction
- User engagement increase
- Cost per interaction decrease

## 🔄 Maintenance Schedule

### Daily
- Monitor error logs
- Check API rate limits
- Verify service uptime

### Weekly
- Review conversation quality
- Update knowledge base
- Analyze usage patterns

### Monthly
- Performance optimization
- Security audit
- Feature updates
- User feedback review

## 📚 Additional Resources

### Documentation Links
- [Deepgram STT API](https://developers.deepgram.com/reference/listen-live)
- [Deepgram TTS API](https://developers.deepgram.com/reference/text-to-speech-api)
- [Telegram Bot API](https://core.telegram.org/bots/api)
- [OpenAI API](https://platform.openai.com/docs)
- [Supabase Documentation](https://supabase.com/docs)

### Community Support
- n8n Community Forum
- Telegram Bot Developers Group
- Deepgram Developer Discord
- OpenAI Developer Community

---

**Note**: This template requires active API subscriptions for Deepgram and OpenAI services. Costs may apply based on usage volume.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
