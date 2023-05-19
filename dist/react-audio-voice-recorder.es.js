(function(){"use strict";(r=>{try{if(typeof window>"u")return;var e=document.createElement("style");e.appendChild(document.createTextNode(r)),document.head.appendChild(e)}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})(".audio-recorder{background-color:#ebebeb;box-shadow:0 2px 5px #bebebe;border-radius:20px;box-sizing:border-box;color:#000;width:40px;display:flex;align-items:center;transition:all .2s ease-in;-webkit-tap-highlight-color:transparent}.audio-recorder-mic{box-sizing:content-box;cursor:pointer;height:16px;color:#000;padding:12px}.audio-recorder .audio-recorder-mic{border-radius:20px}.audio-recorder.recording .audio-recorder-mic{border-radius:0}.audio-recorder-timer,.audio-recorder-status{color:#000;margin-left:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;font-weight:400;line-height:1}.audio-recorder-status{margin-left:15px;display:flex;align-items:baseline;flex-grow:1;animation-name:fading-ar-status;animation-duration:2s;animation-iteration-count:infinite}.audio-recorder-status-dot{background-color:#d00;border-radius:50%;height:10px;width:9px;margin-right:5px}.audio-recorder-options{box-sizing:content-box;height:16px;cursor:pointer;padding:12px 6px 12px 12px}.audio-recorder-options~.audio-recorder-options{padding:12px 12px 12px 6px;border-radius:0 5px 5px 0}.recording{border-radius:12px;width:300px;transition:all .2s ease-out}.display-none{display:none}@keyframes fading-ar-status{0%{opacity:1}50%{opacity:0}to{opacity:1}}")})();
import N, { useState as t, useCallback as Q, useEffect as Y } from "react";
const b = () => {
  const [d, g] = t(!1), [o, c] = t(!1), [M, a] = t(0), [e, j] = t(), [i, I] = t(), [w, n] = t(), z = () => {
    const D = setInterval(() => {
      a((L) => L + 1);
    }, 1e3);
    I(D);
  }, r = () => {
    i != null && clearInterval(i), I(void 0);
  };
  return {
    startRecording: Q(() => {
      i == null && navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: !1,
          noiseSuppression: !1
        }
      }).then((D) => {
        g(!0);
        const L = new MediaRecorder(D);
        j(L), L.start(), z(), L.addEventListener("dataavailable", (s) => {
          n(s.data), L.stream.getTracks().forEach((y) => y.stop()), j(void 0);
        });
      }).catch((D) => console.log(D));
    }, [i]),
    stopRecording: () => {
      e == null || e.stop(), r(), a(0), g(!1), c(!1);
    },
    togglePauseResume: () => {
      o ? (c(!1), e == null || e.resume(), z()) : (c(!0), r(), e == null || e.pause());
    },
    recordingBlob: w,
    isRecording: d,
    isPaused: o,
    recordingTime: M,
    mediaRecorder: e
  };
}, x = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ3MCA0NzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3MCA0NzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCgk8Zz4NCgkJPHBhdGggZD0iTTIzNSwzMDIuMjk2YzQ3LjE3NywwLDg1LjQyMy0zOC4yNDUsODUuNDIzLTg1LjQyM1Y4NS40MjNDMzIwLjQyMywzOC4yNDUsMjgyLjE3NywwLDIzNSwwcy04NS40MjMsMzguMjQ1LTg1LjQyMyw4NS40MjMNCgkJCXYxMzEuNDUxQzE0OS41NzcsMjY0LjA1MSwxODcuODIzLDMwMi4yOTYsMjM1LDMwMi4yOTZ6Ii8+DQoJCTxwYXRoIGQ9Ik0zNTAuNDIzLDEzNi4xNDh2MzBoMTV2NTAuNzI2YzAsNzEuOTE1LTU4LjUwOCwxMzAuNDIzLTEzMC40MjMsMTMwLjQyM3MtMTMwLjQyMy01OC41MDctMTMwLjQyMy0xMzAuNDIzdi01MC43MjZoMTV2LTMwDQoJCQloLTQ1djgwLjcyNkM3NC41NzcsMzAwLjI3MywxMzguNTUxLDM2OSwyMjAsMzc2LjU4OVY0NDBoLTkwLjQ0NHYzMGgyMTAuODg5di0zMEgyNTB2LTYzLjQxMQ0KCQkJYzgxLjQ0OS03LjU4OSwxNDUuNDIzLTc2LjMxNywxNDUuNDIzLTE1OS43MTZ2LTgwLjcyNkgzNTAuNDIzeiIvPg0KCTwvZz4NCjwvc3ZnPg0K", k = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDcuNjA3IDQ3LjYwNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcuNjA3IDQ3LjYwNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KCTxnPg0KCQk8cGF0aCBkPSJNMTcuOTkxLDQwLjk3NmMwLDMuNjYyLTIuOTY5LDYuNjMxLTYuNjMxLDYuNjMxbDAsMGMtMy42NjIsMC02LjYzMS0yLjk2OS02LjYzMS02LjYzMVY2LjYzMUM0LjcyOSwyLjk2OSw3LjY5OCwwLDExLjM2LDANCgkJCWwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+DQoJCTxwYXRoIGQ9Ik00Mi44NzcsNDAuOTc2YzAsMy42NjItMi45NjksNi42MzEtNi42MzEsNi42MzFsMCwwYy0zLjY2MiwwLTYuNjMxLTIuOTY5LTYuNjMxLTYuNjMxVjYuNjMxDQoJCQlDMjkuNjE2LDIuOTY5LDMyLjU4NSwwLDM2LjI0NiwwbDAsMGMzLjY2MiwwLDYuNjMxLDIuOTY5LDYuNjMxLDYuNjMxVjQwLjk3NnoiLz4NCgk8L2c+DQo8L3N2Zz4NCg==", Z = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ5NC4xNDggNDk0LjE0OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk0LjE0OCA0OTQuMTQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTQwNS4yODQsMjAxLjE4OEwxMzAuODA0LDEzLjI4QzExOC4xMjgsNC41OTYsMTA1LjM1NiwwLDk0Ljc0LDBDNzQuMjE2LDAsNjEuNTIsMTYuNDcyLDYxLjUyLDQ0LjA0NHY0MDYuMTI0DQoJCQkJYzAsMjcuNTQsMTIuNjgsNDMuOTgsMzMuMTU2LDQzLjk4YzEwLjYzMiwwLDIzLjItNC42LDM1LjkwNC0xMy4zMDhsMjc0LjYwOC0xODcuOTA0YzE3LjY2LTEyLjEwNCwyNy40NC0yOC4zOTIsMjcuNDQtNDUuODg0DQoJCQkJQzQzMi42MzIsMjI5LjU3Miw0MjIuOTY0LDIxMy4yODgsNDA1LjI4NCwyMDEuMTg4eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9zdmc+DQo=", O = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0xNy44NSAzLjE1bC0yLjk5LTNBLjUwOC41MDggMCAwIDAgMTQuNSAwSDEuNEExLjQxNyAxLjQxNyAwIDAgMCAwIDEuNDN2MTUuMTRBMS40MTcgMS40MTcgMCAwIDAgMS40IDE4aDE1LjJhMS40MTcgMS40MTcgMCAwIDAgMS40LTEuNDNWMy41YS40Ny40NyAwIDAgMC0uMTUtLjM1ek0yIDVWM2ExIDEgMCAwIDEgMS0xaDhhMSAxIDAgMCAxIDEgMXYyYTEgMSAwIDAgMS0xIDFIM2ExIDEgMCAwIDEtMS0xem03IDExYTQgNCAwIDEgMSA0LTQgNCA0IDAgMCAxLTQgNHoiLz4NCjwvc3ZnPg0K", P = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDYuNzM0IDQ2LjczNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDYuNzM0IDQ2LjczNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQxLjM0NiwwSDUuMzg4QzIuNDE3LDAsMCwyLjQxNywwLDUuMzg4djM1Ljk1OGMwLDIuOTcxLDIuNDE3LDUuMzg4LDUuMzg4LDUuMzg4aDM1Ljk1OGMyLjk3MSwwLDUuMzg4LTIuNDE3LDUuMzg4LTUuMzg4DQoJCVY1LjM4OEM0Ni43MzMsMi40MTcsNDQuMzE2LDAsNDEuMzQ2LDB6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==";
const G = ({
  onRecordingComplete: d,
  recorderControls: g,
  downloadOnSavePress: o = !1,
  downloadFileExtension: c = "mp3",
  classes: M
}) => {
  var C, D, L, s, y, m;
  const {
    startRecording: a,
    stopRecording: e,
    togglePauseResume: j,
    recordingBlob: i,
    isRecording: I,
    isPaused: w,
    recordingTime: n
  } = g != null ? g : b(), [z, r] = t(!1), l = (T = !0) => {
    r(T), e();
  }, A = (T) => {
    const S = new Blob([T], {
      type: `audio/${c}`
    }), E = URL.createObjectURL(S), u = document.createElement("a");
    u.style.display = "none", u.href = E, u.download = `audio.${c}`, document.body.appendChild(u), u.click(), u.remove();
  };
  return Y(() => {
    (z || g) && i != null && d != null && d(i), o && i != null && A(i);
  }, [i]), /* @__PURE__ */ N.createElement("div", {
    className: `audio-recorder ${I ? "recording" : ""} ${(C = M == null ? void 0 : M.AudioRecorderClass) != null ? C : ""}`,
    "data-testid": "audio_recorder"
  }, /* @__PURE__ */ N.createElement("img", {
    src: I ? O : x,
    className: `audio-recorder-mic ${(D = M == null ? void 0 : M.AudioRecorderStartSaveClass) != null ? D : ""}`,
    onClick: I ? () => l() : a,
    "data-testid": "ar_mic",
    title: I ? "Save recording" : "Start recording"
  }), /* @__PURE__ */ N.createElement("span", {
    className: `audio-recorder-timer ${I ? "" : "display-none"} ${(L = M == null ? void 0 : M.AudioRecorderTimerClass) != null ? L : ""}`,
    "data-testid": "ar_timer"
  }, Math.floor(n / 60), ":", String(n % 60).padStart(2, "0")), /* @__PURE__ */ N.createElement("span", {
    className: `audio-recorder-status ${I ? "" : "display-none"} ${(s = M == null ? void 0 : M.AudioRecorderStatusClass) != null ? s : ""}`
  }, /* @__PURE__ */ N.createElement("span", {
    className: "audio-recorder-status-dot"
  }), "Recording"), /* @__PURE__ */ N.createElement("img", {
    src: w ? Z : k,
    className: `audio-recorder-options ${I ? "" : "display-none"} ${(y = M == null ? void 0 : M.AudioRecorderPauseResumeClass) != null ? y : ""}`,
    onClick: j,
    title: w ? "Resume recording" : "Pause recording",
    "data-testid": "ar_pause"
  }), /* @__PURE__ */ N.createElement("img", {
    src: P,
    className: `audio-recorder-options ${I ? "" : "display-none"} ${(m = M == null ? void 0 : M.AudioRecorderDiscardClass) != null ? m : ""}`,
    onClick: () => l(!1),
    title: "Discard Recording",
    "data-testid": "ar_cancel"
  }));
};
export {
  G as AudioRecorder,
  b as useAudioRecorder
};
