(function(){"use strict";(r=>{try{if(typeof window>"u")return;var e=document.createElement("style");e.appendChild(document.createTextNode(r)),document.head.appendChild(e)}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})(".audio-recorder{background-color:#ebebeb;box-shadow:0 2px 5px #bebebe;border-radius:20px;box-sizing:border-box;color:#000;width:40px;display:flex;align-items:center;transition:all .2s ease-in;-webkit-tap-highlight-color:transparent}.audio-recorder-mic{box-sizing:content-box;cursor:pointer;height:16px;color:#000;padding:12px}.audio-recorder .audio-recorder-mic{border-radius:20px}.audio-recorder.recording .audio-recorder-mic{border-radius:0}.audio-recorder-timer,.audio-recorder-status{color:#000;margin-left:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;font-weight:400;line-height:1}.audio-recorder-status{margin-left:15px;display:flex;align-items:baseline;flex-grow:1;animation-name:fading-ar-status;animation-duration:2s;animation-iteration-count:infinite}.audio-recorder-status-dot{background-color:#d00;border-radius:50%;height:10px;width:9px;margin-right:5px}.audio-recorder-options{box-sizing:content-box;height:16px;cursor:pointer;padding:12px 6px 12px 12px}.audio-recorder-options~.audio-recorder-options{padding:12px 12px 12px 6px;border-radius:0 5px 5px 0}.recording{border-radius:12px;width:300px;transition:all .2s ease-out}.display-none{display:none}@keyframes fading-ar-status{0%{opacity:1}50%{opacity:0}to{opacity:1}}")})();
(function(o,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],e):(o=typeof globalThis<"u"?globalThis:o||self,e(o.AudioRecorder={},o.React))})(this,function(o,e){"use strict";const a=(d=>d&&typeof d=="object"&&"default"in d?d:{default:d})(e),T=()=>{const[d,u]=e.useState(!1),[I,L]=e.useState(!1),[M,s]=e.useState(0),[i,w]=e.useState(),[g,t]=e.useState(),[D,n]=e.useState(),r=()=>{const N=setInterval(()=>{s(c=>c+1)},1e3);t(N)},C=()=>{g!=null&&clearInterval(g),t(void 0)};return{startRecording:e.useCallback(()=>{g==null&&navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1},video:!1}).then(N=>{u(!0);const c=new MediaRecorder(N);w(c),c.start(),r(),c.addEventListener("dataavailable",z=>{n(z.data),c.stream.getTracks().forEach(S=>S.stop()),w(void 0)})}).catch(N=>console.log(N))},[g]),stopRecording:()=>{i==null||i.stop(),C(),s(0),u(!1),L(!1)},togglePauseResume:()=>{I?(L(!1),i==null||i.resume(),r()):(L(!0),C(),i==null||i.pause())},recordingBlob:D,isRecording:d,isPaused:I,recordingTime:M,mediaRecorder:i}},x="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ3MCA0NzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3MCA0NzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yMzUsMzAyLjI5NmM0Ny4xNzcsMCw4NS40MjMtMzguMjQ1LDg1LjQyMy04NS40MjNWODUuNDIzQzMyMC40MjMsMzguMjQ1LDI4Mi4xNzcsMCwyMzUsMHMtODUuNDIzLDM4LjI0NS04NS40MjMsODUuNDIzCgkJCXYxMzEuNDUxQzE0OS41NzcsMjY0LjA1MSwxODcuODIzLDMwMi4yOTYsMjM1LDMwMi4yOTZ6Ii8+CgkJPHBhdGggZD0iTTM1MC40MjMsMTM2LjE0OHYzMGgxNXY1MC43MjZjMCw3MS45MTUtNTguNTA4LDEzMC40MjMtMTMwLjQyMywxMzAuNDIzcy0xMzAuNDIzLTU4LjUwNy0xMzAuNDIzLTEzMC40MjN2LTUwLjcyNmgxNXYtMzAKCQkJaC00NXY4MC43MjZDNzQuNTc3LDMwMC4yNzMsMTM4LjU1MSwzNjksMjIwLDM3Ni41ODlWNDQwaC05MC40NDR2MzBoMjEwLjg4OXYtMzBIMjUwdi02My40MTEKCQkJYzgxLjQ0OS03LjU4OSwxNDUuNDIzLTc2LjMxNywxNDUuNDIzLTE1OS43MTZ2LTgwLjcyNkgzNTAuNDIzeiIvPgoJPC9nPgo8L3N2Zz4K",b="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDcuNjA3IDQ3LjYwNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcuNjA3IDQ3LjYwNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoJPGc+CgkJPHBhdGggZD0iTTE3Ljk5MSw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzFDNC43MjksMi45NjksNy42OTgsMCwxMS4zNiwwCgkJCWwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+CgkJPHBhdGggZD0iTTQyLjg3Nyw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzEKCQkJQzI5LjYxNiwyLjk2OSwzMi41ODUsMCwzNi4yNDYsMGwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+Cgk8L2c+Cjwvc3ZnPgo=",Y="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ5NC4xNDggNDk0LjE0OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk0LjE0OCA0OTQuMTQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTQwNS4yODQsMjAxLjE4OEwxMzAuODA0LDEzLjI4QzExOC4xMjgsNC41OTYsMTA1LjM1NiwwLDk0Ljc0LDBDNzQuMjE2LDAsNjEuNTIsMTYuNDcyLDYxLjUyLDQ0LjA0NHY0MDYuMTI0CgkJCQljMCwyNy41NCwxMi42OCw0My45OCwzMy4xNTYsNDMuOThjMTAuNjMyLDAsMjMuMi00LjYsMzUuOTA0LTEzLjMwOGwyNzQuNjA4LTE4Ny45MDRjMTcuNjYtMTIuMTA0LDI3LjQ0LTI4LjM5MiwyNy40NC00NS44ODQKCQkJCUM0MzIuNjMyLDIyOS41NzIsNDIyLjk2NCwyMTMuMjg4LDQwNS4yODQsMjAxLjE4OHoiLz4KCQk8L2c+Cgk8L2c+Cjwvc3ZnPgo=",k="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTE3Ljg1IDMuMTVsLTIuOTktM0EuNTA4LjUwOCAwIDAgMCAxNC41IDBIMS40QTEuNDE3IDEuNDE3IDAgMCAwIDAgMS40M3YxNS4xNEExLjQxNyAxLjQxNyAwIDAgMCAxLjQgMThoMTUuMmExLjQxNyAxLjQxNyAwIDAgMCAxLjQtMS40M1YzLjVhLjQ3LjQ3IDAgMCAwLS4xNS0uMzV6TTIgNVYzYTEgMSAwIDAgMSAxLTFoOGExIDEgMCAwIDEgMSAxdjJhMSAxIDAgMCAxLTEgMUgzYTEgMSAwIDAgMS0xLTF6bTcgMTFhNCA0IDAgMSAxIDQtNCA0IDQgMCAwIDEtNCA0eiIvPgo8L3N2Zz4K",O="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDYuNzM0IDQ2LjczNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDYuNzM0IDQ2LjczNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik00MS4zNDYsMEg1LjM4OEMyLjQxNywwLDAsMi40MTcsMCw1LjM4OHYzNS45NThjMCwyLjk3MSwyLjQxNyw1LjM4OCw1LjM4OCw1LjM4OGgzNS45NThjMi45NzEsMCw1LjM4OC0yLjQxNyw1LjM4OC01LjM4OAoJCVY1LjM4OEM0Ni43MzMsMi40MTcsNDQuMzE2LDAsNDEuMzQ2LDB6Ii8+CjwvZz4KPC9zdmc+Cg==",W="",Q=({onRecordingComplete:d,recorderControls:u,downloadOnSavePress:I=!1,downloadFileExtension:L="mp3",classes:M})=>{var y,N,c,z,S,v;const{startRecording:s,stopRecording:i,togglePauseResume:w,recordingBlob:g,isRecording:t,isPaused:D,recordingTime:n}=u!=null?u:T(),[r,C]=e.useState(!1),l=(m=!0)=>{C(m),i()},A=m=>{const B=new Blob([m],{type:`audio/${L}`}),Z=URL.createObjectURL(B),j=document.createElement("a");j.style.display="none",j.href=Z,j.download=`audio.${L}`,document.body.appendChild(j),j.click(),j.remove()};return e.useEffect(()=>{(r||u)&&g!=null&&d!=null&&d(g),I&&g!=null&&A(g)},[g]),a.default.createElement("div",{className:`audio-recorder ${t?"recording":""} ${(y=M==null?void 0:M.AudioRecorderClass)!=null?y:""}`,"data-testid":"audio_recorder"},a.default.createElement("img",{src:t?k:x,className:`audio-recorder-mic ${(N=M==null?void 0:M.AudioRecorderStartSaveClass)!=null?N:""}`,onClick:t?()=>l():s,"data-testid":"ar_mic",title:t?"Save recording":"Start recording"}),a.default.createElement("span",{className:`audio-recorder-timer ${t?"":"display-none"} ${(c=M==null?void 0:M.AudioRecorderTimerClass)!=null?c:""}`,"data-testid":"ar_timer"},Math.floor(n/60),":",String(n%60).padStart(2,"0")),a.default.createElement("span",{className:`audio-recorder-status ${t?"":"display-none"} ${(z=M==null?void 0:M.AudioRecorderStatusClass)!=null?z:""}`},a.default.createElement("span",{className:"audio-recorder-status-dot"}),"Recording"),a.default.createElement("img",{src:D?Y:b,className:`audio-recorder-options ${t?"":"display-none"} ${(S=M==null?void 0:M.AudioRecorderPauseResumeClass)!=null?S:""}`,onClick:w,title:D?"Resume recording":"Pause recording","data-testid":"ar_pause"}),a.default.createElement("img",{src:O,className:`audio-recorder-options ${t?"":"display-none"} ${(v=M==null?void 0:M.AudioRecorderDiscardClass)!=null?v:""}`,onClick:()=>l(!1),title:"Discard Recording","data-testid":"ar_cancel"}))};o.AudioRecorder=Q,o.useAudioRecorder=T,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});