function ADD(t,c){let ch=document.getElementById('chat');let d=document.createElement('div');d.className=c;d.innerHTML=t;ch.appendChild(d);ch.scrollTop=9999}
function DRIVER(raw){
 if(!raw) return;
 ADD('🎙️ '+raw,'u');
 let o=raw.toLowerCase();
 if(o.includes('crm')){ ADD('✅ OPENING CRM - new tab, you can go back to HQ','a'); window.open('https://docs.google.com/spreadsheets/','_blank'); return; }
 if(o.includes('pullman')){ ADD('✅ OPENING PULLMAN - new tab','a'); window.open('https://www.pullmanalbertpark.com.au/','_blank'); return; }
 if(o.includes('email')){ ADD('✅ OPENING EMAIL','a'); window.open('https://mail.google.com/','_blank'); return; }
 if(o.includes('whatsapp')){ ADD('✅ OPENING WHATSAPP','a'); window.open('https://web.whatsapp.com/','_blank'); return; }
 ADD('✅ DONE: '+raw,'a');
}
function VOICE(){
 let SR=window.SpeechRecognition||window.webkitSpeechRecognition;
 if(!SR){alert('Use Chrome');return;}
 let r=new SR(); r.lang='en-AU';
 document.getElementById('mic').innerText='● LISTENING...';
 r.onresult=e=>{DRIVER(e.results[0][0].transcript); document.getElementById('mic').innerText='🎙️ TAP TO SPEAK';};
 r.onend=()=>document.getElementById('mic').innerText='🎙️ TAP TO SPEAK';
 r.start();
  }
