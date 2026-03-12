# 💬 AI voice chatbot with ElevenLabs & OpenAI for customer service and restaurants

> ⚡ **67,189 views** · 💬 [Support Chatbots](../)

## Description

The "Voice RAG Chatbot with ElevenLabs and OpenAI" workflow in n8n is designed to create an interactive voice-based chatbot system that leverages both text and voice inputs for providing information. Ideal for shops, commercial activities and restaurants

### How it works:

Here's how it operates:

1. **Webhook Activation**: The process begins when a user interacts with the voice agent set up on [ElevenLabs](https://try.elevenlabs.io/ahkbf00hocnu), triggering a webhook in n8n. This webhook sends a question from the user to the AI Agent node.
2. **AI Agent Processing**: Upon receiving the query, the AI Agent node processes the input using predefined prompts and tools. It extracts relevant information from the knowledge base stored within the Qdrant vector database.
3. **Knowledge Base Retrieval**: The Vector Store Tool node interfaces with the Qdrant Vector Store to retrieve pertinent documents or data segments matching the user’s query.
4. **Text Generation**: Using the retrieved information, the OpenAI Chat Model generates a coherent response tailored to the user’s question.
5. **Response Delivery**: The generated response is sent back through another webhook to ElevenLabs, where it is converted into speech and delivered audibly to the user.
6. **Continuous Interaction**: For ongoing conversations, the Window Buffer Memory ensures context retention by maintaining a history of interactions, enhancing the conversational flow.

### Set up steps:

To configure this workflow effectively, follow these detailed setup instructions:

1. **ElevenLabs Agent Creation**:
	- Create a FREE account on [ElevenLabs](https://try.elevenlabs.io/ahkbf00hocnu)
   - Begin by creating an agent on ElevenLabs (e.g., named 'test_n8n').
   - Customize the first message and define the system prompt specific to your use case, such as portraying a character like a waiter at "Pizzeria da Michele".
   - Add a Webhook tool labeled 'test_chatbot_elevenlabs' configured to receive questions via POST requests.

2. **Qdrant Collection Initialization**:
   - Utilize the HTTP Request nodes ('Create collection' and 'Refresh collection') to initialize and clear existing collections in Qdrant. Ensure you update placeholders `QDRANTURL` and `COLLECTION` accordingly.

3. **Document Vectorization**:
   - Use Google Drive integration to fetch documents from a designated folder. These documents are then downloaded and processed for embedding.
   - Employ the Embeddings OpenAI node to generate embeddings for the downloaded files before storing them into Qdrant via the Qdrant Vector Store node.

4. **AI Agent Configuration**:
   - Define the system prompt for the AI Agent node which guides its behavior and responses based on the nature of queries expected (e.g., product details, troubleshooting tips).
   - Link necessary models and tools including OpenAI language models and memory buffers to enhance interaction quality.

5. **Testing Workflow**:
   - Execute test runs of the entire workflow by clicking 'Test workflow' in n8n alongside initiating tests on the ElevenLabs side to confirm all components interact seamlessly.
   - Monitor logs and outputs closely during testing phases to ensure accurate data flow between systems.

6. **Integration with Website**:
   - Finally, integrate the chatbot widget onto your business website replacing placeholder AGENT_ID with the actual identifier created earlier on ElevenLabs.

By adhering to these comprehensive guidelines, users can successfully deploy a sophisticated voice-driven chatbot capable of delivering precise answers utilizing advanced retrieval-augmented generation techniques powered by OpenAI and ElevenLabs technologies.

----
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
