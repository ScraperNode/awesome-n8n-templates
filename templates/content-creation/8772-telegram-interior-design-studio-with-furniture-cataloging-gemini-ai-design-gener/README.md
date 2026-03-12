# 🎬 Telegram interior design studio with furniture cataloging & Gemini AI design generation

> ⚡ **1,177 views** · 🎬 [Content Creation & Video](../)

## Description

# AI Interior Design Assistant: Your Digital Design Partner

## What This System Does

This n8n workflow transforms your Telegram into a professional interior design studio powered by artificial intelligence. Send a photo of furniture or a room space, and watch as the system intelligently catalogs items, documents spaces, and generates stunning custom interior designs tailored to your vision.

## The Magic Behind the Scenes

### Smart Image Recognition

When you upload a photo, the system immediately springs into action with sophisticated image analysis:

- **Furniture Detection**: Spots individual pieces like sofas, chairs, tables, and lamps with catalog-precision accuracy
- **Room Analysis**: Identifies complete spaces, architectural features, lighting conditions, and existing design elements
- **Style Classification**: Determines design styles from modern minimalist to traditional classic
- **Material Recognition**: Identifies wood types, fabric textures, metal finishes, and color palettes

### Intelligent Database Management

The workflow maintains three interconnected databases that work like a professional design firm's catalog system:

**Furniture Catalog** (`catalog_products`)
- Comprehensive product details including style, materials, dimensions, and compatibility
- Professional descriptions written for interior designers
- Searchable tags for quick design matching
- High-quality image storage for visual reference

**Room Documentation** (`rooms`)
- Detailed space analysis including size, style, and architectural features
- Color palette documentation and lighting assessment
- Existing furniture inventory for design planning
- Room-specific design recommendations

**Design Portfolio** (`ai_generated_images`)
- Archive of all AI-generated interior designs
- Original prompts and design descriptions
- Searchable by style, room type, or specific elements
- Ready for client presentations or further modifications

### AI-Powered Design Generation

The system's crown jewel is its ability to create stunning interior visualizations:

**Contextual Understanding**: Combines room characteristics with catalog products to create realistic design scenarios

**Professional Prompting**: Generates detailed, interior-design-specific prompts that result in high-quality, commercially viable designs

**Style Consistency**: Maintains design coherence across different elements while respecting user preferences

**Modification Capabilities**: Can reference and modify previous designs, allowing for iterative improvements

## The User Experience Journey

### Scenario 1: Building Your Furniture Catalog
1. **Upload**: Send photos of furniture pieces via Telegram
2. **Analysis**: AI examines each piece, identifying style, materials, dimensions, and design era
3. **Cataloging**: Items are professionally documented with searchable metadata
4. **Confirmation**: Receive detailed catalog entries for each piece

### Scenario 2: Documenting Your Spaces
1. **Room Photos**: Share images of your living spaces
2. **Space Analysis**: AI assesses room size, style, lighting, and architectural features
3. **Documentation**: Complete room profiles are created for design planning
4. **Inventory**: Existing furniture and design elements are noted

### Scenario 3: Creating Custom Designs
1. **Design Request**: Ask for specific interior modifications or new layouts
2. **Smart Matching**: System pulls relevant items from your catalog and room data
3. **AI Generation**: Gemini 2.5 Flash creates photorealistic interior designs
4. **Instant Delivery**: Receive professional-quality visualizations via Telegram

### Scenario 4: Design Evolution
1. **Reference Previous Work**: Mention earlier designs you want to modify
2. **Contextual Modification**: AI understands your reference and applies new changes
3. **Enhanced Generation**: Creates updated designs building on previous concepts
4. **Continuous Improvement**: Iterate until the design matches your vision

## Technical Sophistication

### Multi-AI Coordination
- **OpenAI GPT-4**: Handles complex reasoning, database operations, and user interaction
- **Google Gemini 2.5 Flash**: Specializes in high-quality image generation with interior design expertise
- **Intelligent Routing**: Automatically determines whether to catalog, document, or generate based on context

### Professional Data Structure
The database schema reflects real interior design workflows:
- Industry-standard categorization systems
- Professional terminology and measurements
- Design compatibility matrices
- Style and era classifications used by actual designers

### Seamless Integration
- **Telegram Interface**: No app downloads or complex interfaces - just send photos and text
- **Cloud Storage**: All images stored in Supabase with public URLs for easy access
- **Real-time Processing**: Immediate feedback and rapid design generation
- **Persistent Memory**: Everything is saved and searchable for future reference

## Why This Matters

This workflow bridges the gap between professional interior design tools and accessible consumer technology. It provides:

**For Design Professionals**: A powerful cataloging and visualization tool that streamlines client presentations and design iteration

**For Homeowners**: Professional-level design capability without the cost or complexity of traditional design software

**For Businesses**: A scalable solution for furniture visualization, space planning, and customer engagement

## The Innovation Factor

Unlike simple design apps that work with generic templates, this system:
- Learns your specific furniture and spaces
- Maintains design continuity across projects
- Provides professional-quality outputs
- Scales from single rooms to complete home designs
- Integrates seamlessly into your daily communication workflow

The result is a design assistant that feels less like software and more like having a professional interior designer available 24/7 through your phone.

## Future Possibilities

This foundation supports expansion into:
- Room dimension calculations and space optimization
- Integration with furniture retailers for purchase links
- 3D room modeling and virtual reality previews
- Style preference learning and automated suggestions
- Multi-user collaboration for design teams

The workflow represents a new paradigm where AI doesn't replace human creativity but amplifies it, making professional design capabilities accessible to anyone with a smartphone and an imagination.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Supabase, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
