# 🎬 Generate audio from text scripts using self-hosted Bark model and Google Drive

> ⚡ **840 views** · 🎬 [Content Creation & Video](../)

## Description

## Audio Generator – Documentation

🎯 Purpose:
Generate audio files from text scripts stored in Google Drive.

🔁 Flow:
1. Receive repo IDs.
2. Fetch text scripts.
3. Generate .wav files using local Bark model.
4. Upload back to Drive.

📦 Dependencies:
- Python script: `/scripts/generate_voice.py`
- Bark (voice generation system)
- n8n instance with access to local shell
- Google Drive OAuth2 credentials

✏️ Notes:
- Script filenames must end with `.txt`
- Only works with plain text
- No external API used = 100% free

📦 `/scripts/generate_voice.py`:
```python
import sys
import torch
import numpy
import re
from bark import SAMPLE_RATE, generate_audio, preload_models
from scipy.io.wavfile import write as write_wav

# Patch to allow numpy._core.multiarray.scalar during loading
torch.serialization.add_safe_globals([numpy._core.multiarray.scalar])

# Monkey patch torch.load to force weights_only=False
_original_torch_load = torch.load
def patched_torch_load(f, *args, **kwargs):
    if 'weights_only' not in kwargs:
        kwargs['weights_only'] = False
    return _original_torch_load(f, *args, **kwargs)
torch.load = patched_torch_load

# Preload Bark models
preload_models()

def split_text(text, max_len=300):
    # Split on punctuation to avoid mid-sentence cuts
    sentences = re.split(r'(?&lt;=[.?!])\s+', text)
    chunks = []
    current = ""
    for sentence in sentences:
        if len(current) + len(sentence) &lt; max_len:
            current += sentence + " "
        else:
            chunks.append(current.strip())
            current = sentence + " "
    if current:
        chunks.append(current.strip())
    return chunks

# Input text file and output path
input_text_path = sys.argv[1]
output_wav_path = sys.argv[2]

with open(input_text_path, 'r', encoding='utf-8') as f:
    full_text = f.read()

voice_preset = "v2/en_speaker_7"

chunks = split_text(full_text)

# Generate and concatenate audio chunks
audio_arrays = []
for chunk in chunks:
    print(f"Generating audio for chunk: {chunk[:50]}...")
    audio = generate_audio(chunk, history_prompt=voice_preset)
    audio_arrays.append(audio)

# Merge all audio chunks
final_audio = numpy.concatenate(audio_arrays)

# Write final .wav file
write_wav(output_wav_path, SAMPLE_RATE, final_audio)

print(f"Full audio generated at: {output_wav_path}")
```

## 🔗 Nodes Used

Google Drive, Execute Workflow Trigger, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
