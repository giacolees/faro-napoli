import puppeteer from 'puppeteer-core';
import fs from 'node:fs/promises';
import path from 'node:path';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
const page=await browser.newPage();await page.setViewport({width:1672,height:941});
const all={};let n=0;
for(const name of await fs.readdir('assets/slides')){
 if(!name.endsWith('.svg'))continue;
 await page.goto('file://'+path.resolve('assets/slides',name));
 await page.screenshot({path:`out/qa/source-${n}.png`});
 const layers=await page.evaluate(()=>Array.from(document.querySelector('svg > g').children).map((e,i)=>{let b=e.getBBox();return {i,tag:e.tagName,x:Math.round(b.x),y:Math.round(b.y),w:Math.round(b.width),h:Math.round(b.height),fill:e.getAttribute('fill')}}));
 all[name]={n,layers};n++;
}
await fs.writeFile('out/asset-inspection.json',JSON.stringify(all,null,2));await browser.close();
