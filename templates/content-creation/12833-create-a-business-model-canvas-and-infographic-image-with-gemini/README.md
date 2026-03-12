# 🎬 Create a Business Model Canvas and infographic image with Gemini

> ⚡ **92 views** · 🎬 [Content Creation & Video](../)

## Description

Generate a complete Business Model Canvas from a guided interview form. AI analyzes responses and creates a professional infographic image of all 9 canvas elements.


※ The form is hosted by n8n, so end users only interact with a simple web form. All AI processing happens behind the scenes.


### Who is this template for?

This template is designed for:
- **Business consultants and coaches** who want to offer BMC generation as a workshop tool
- **Educators and trainers** teaching business model concepts
- **Startup accelerators and incubators** supporting entrepreneurs
- **Anyone running n8n** who wants to provide a self-service BMC generator

### End User Experience

Users who access the form URL:
- No account registration required
- No software installation needed
- Simply answer the guided questions and receive a generated Business Model Canvas
- Works on any device with a web browser

2. **AI analyzes and enriches** the responses to generate all 9 BMC elements:
   - Customer Segments
   - Value Propositions
   - Channels
   - Customer Relationships
   - Revenue Streams
   - Key Resources
   - Key Activities
   - Key Partners
   - Cost Structure

3. **Validates input quality** to ensure meaningful business content (rejects gibberish or unrelated answers)

4. **Generates a professional infographic** image of the complete Business Model Canvas

---

## How it works

Transform your business idea into a professional Business Model Canvas infographic.

1. User fills out a form with business idea details (value proposition, customers, channels, etc.)
2. AI node structures the responses into the 9 Business Model Canvas elements
3. Gemini generates a professional infographic image from the structured canvas

The form is split into 4 sections: core value, customer touchpoints, delivery methods, and financials.


### Step-by-step:

1. **On form submission** - User completes Phase 1 (Core business concept)
2. **Form2** - Phase 2 questions (Customer touchpoints)
3. **Form3** - Phase 3 questions (Internal resources)
4. **Form4** - Phase 4 questions (Revenue and costs)
5. **Format Interview Responses** - Aggregates all form data into structured format
6. **AI Canvas Generator** - AI agent analyzes responses and generates the 9 BMC elements
7. **Validate Canvas Output** - Checks if AI output is valid or contains error
8. **If_is_error** - Routes to error page or continues to image generation
9. **Generate an image** - Creates professional infographic using Gemini
10. **Completed** - Displays the generated Business Model Canvas image

---

## Setup steps

### Required Credentials

#### 1. LLM for AI Canvas Generator (Customizable)

This template uses **AWS Bedrock (Claude)** by default, but you can replace it with any LLM provider supported by n8n:

| Provider | Node to Use |
|----------|-------------|
| AWS Bedrock (default) | AWS Bedrock Chat Model |
| OpenAI | OpenAI Chat Model |
| Anthropic API | Anthropic Chat Model |
| Azure OpenAI | Azure OpenAI Chat Model |
| Google Vertex AI | Google Vertex AI Chat Model |
| Ollama (self-hosted) | Ollama Chat Model |

Simply disconnect the default "AWS Bedrock Chat Model" node and connect your preferred LLM node to the "AI Canvas Generator" agent.

#### 2. Google Gemini API (for image generation)

- Google AI Studio API Key
- Model: `gemini-3-pro-image-preview` (or current image generation model)

&gt; **Note**: Image generation currently requires Gemini. If you don't need the infographic output, you can remove the image generation step and display the text-based BMC instead.

### Configuration Steps

1. Import the workflow into n8n
2. Configure AWS Bedrock credentials in the "AWS Bedrock Chat Model" node
3. Configure Google Gemini API credentials in the "Generate an image" node
4. (Optional) Customize form questions to match your needs
5. Activate the workflow
6. Share the Production URL with users

### Customization Options

- **Form Questions**: Edit the form nodes to add/modify interview questions
- **AI Prompt**: Modify the system message in "AI Canvas Generator" to change how the AI interprets responses
- **Image Style**: Adjust the prompt in "Generate an image" to change the visual style
- **Error Messages**: Customize error messages in the validation logic

---

## Nodes Used

| Node | Purpose |
|------|---------|
| Form Trigger | Collects Phase 1 responses |
| Form (x3) | Collects Phases 2-4 responses |
| Code (x2) | Formats data and validates output |
| AI Agent | Generates Business Model Canvas text |
| AWS Bedrock Chat Model | LLM for AI Agent |
| Google Gemini | Generates infographic image |
| IF | Routes based on validation result |
| Form (Completion) | Displays final result or error |

---

## Example Use Case

**Scenario**: A business consultant runs a startup workshop

1. Participants access the form URL on their devices
2. They answer guided questions about their business idea (5-10 minutes)
3. AI processes their responses and generates a complete BMC
4. Participants receive a professional infographic they can use in pitch decks

---

## Notes

- Processing time: Approximately 30-60 seconds (depends on AI response time)
- The workflow validates inputs to prevent processing of test/gibberish data
- Image generation requires a Gemini model with image output capability
- Form responses are not stored – each submission is processed independently

## 🔗 Nodes Used

AI Agent, n8n Form Trigger, AWS Bedrock Chat Model, n8n Form, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
