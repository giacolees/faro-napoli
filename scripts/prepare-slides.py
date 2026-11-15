from pathlib import Path
import xml.etree.ElementTree as E,json,shutil
E.register_namespace('', 'http://www.w3.org/2000/svg');E.register_namespace('xlink','http://www.w3.org/1999/xlink')
S=Path('assets/slides');out={}
def rng(a,b):return list(range(a,b+1))
configs={
'challenge':('La sfida abitativa di Napoli2.svg',{'base':rng(0,4)+rng(35,43),'heading':[18,44,45],'student':rng(5,10),'rent':rng(11,17),'emergency':rng(19,31),'conclusion':rng(32,34)}),
'architecture':(next(p.name for p in S.glob('HERO Napoli · La*')),{'base':[0,1]+rng(79,91),'heading':[77,78],'mission':rng(2,8),'home':rng(9,12),'activate':rng(13,16),'respond':rng(17,20),'users':rng(21,40),'inbound':[41],'orchestrator':[42],'outbound':[43],'houseAgent':rng(44,48),'activationAgent':rng(49,53),'servicesAgent':rng(54,58),'mobilityAgent':rng(59,63),'emergencyAgent':rng(64,68),'converge':[69],'result':rng(70,76)}),
'impacts':('Gli impatti per Napoli.svg',{'base':rng(0,4)+rng(53,61),'heading':rng(18,20),'connections':rng(5,17),'city':[21],'social':rng(22,27),'housing':rng(28,33),'property':rng(34,38),'resilience':rng(39,43),'planning':rng(44,48),'conclusion':rng(49,52)}),
 'team':('Team.svg',{'base':rng(0,4)+rng(25,33),'heading':[34,35],'giacomo':rng(5,12),'valerio':rng(13,20),'mission':rng(21,24)})}
for key,(name,groups) in configs.items():
 root=E.parse(S/name).getroot();els=list(list(root)[0]);defs=E.tostring(list(root)[1],encoding='unicode')
 assigned={i:k for k,indices in groups.items() for i in indices};assert len(assigned)==len(els),(key,len(assigned),len(els))
 out[key]={'defs':defs,'layers':[{'key':assigned[i],'svg':E.tostring(e,encoding='unicode')} for i,e in enumerate(els)]}
# Standalone brand emblem and landscape waves are original vector paths.
root=E.parse(S/'Team.svg').getroot();els=list(list(root)[0]);
out['brand']={'defs':'','layers':[{'key':'waves','svg':''.join(E.tostring(els[i],encoding='unicode') for i in range(1,5))},{'key':'emblem','svg':''.join(E.tostring(els[i],encoding='unicode') for i in range(25,34))}]}
Path('src/generated').mkdir(exist_ok=True);Path('src/generated/slides.json').write_text(json.dumps(out,ensure_ascii=False))
for src in Path('assets/videos').glob('*.mp4'):shutil.copy2(src,Path('public/videos')/src.name)
print('Prepared exact SVG layers and original videos')
