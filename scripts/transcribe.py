from faster_whisper import WhisperModel
from pathlib import Path
import json
m=WhisperModel('small',device='cpu',compute_type='int8',cpu_threads=6)
out={}
for p in Path('assets/audio').glob('*.mp3'):
 segs,info=m.transcribe(str(p),language='it',beam_size=3,word_timestamps=True)
 out[p.name]=[{'start':s.start,'end':s.end,'text':s.text,'words':[{'start':w.start,'end':w.end,'word':w.word} for w in s.words]} for s in segs]
 print(p.name, ''.join(s['text'] for s in out[p.name]),flush=True)
 Path('out/transcripts.json').write_text(json.dumps(out,ensure_ascii=False,indent=2))
