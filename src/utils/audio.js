// Web Audio API Synthesizer for Zen Ambient Soundscapes

let audioCtx = null;
let currentOscillators = [];
let gainNode = null;

export const playZenSound = (type = 'singing_bowl') => {
  try {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    // Stop previous sounds
    stopZenSound();

    gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gainNode.connect(audioCtx.destination);

    if (type === 'singing_bowl') {
      // 528 Hz Healing Love Frequency + Harmonic Overtones
      const freqs = [528, 1056, 1584, 264];
      freqs.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const oscGain = audioCtx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        
        // Gentle pulse modulation for soothing bowl ring
        const pulseVol = idx === 0 ? 0.3 : 0.08 / (idx + 1);
        oscGain.gain.setValueAtTime(pulseVol, audioCtx.currentTime);
        
        osc.connect(oscGain);
        oscGain.connect(gainNode);
        osc.start();
        currentOscillators.push(osc);
      });
    } else if (type === 'om_hum') {
      // Deep 136.1 Hz Om Frequency (Earth Tone)
      const osc = audioCtx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(136.1, audioCtx.currentTime);
      osc.connect(gainNode);
      osc.start();
      currentOscillators.push(osc);
    }
  } catch (err) {
    console.warn("Audio playback not supported or user context blocked", err);
  }
};

export const stopZenSound = () => {
  if (currentOscillators.length > 0) {
    currentOscillators.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {}
    });
    currentOscillators = [];
  }
};
