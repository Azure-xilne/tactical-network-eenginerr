class AudioController {
  private ctx: AudioContext | null = null;
  private initialized = false;
  private humOsc: OscillatorNode | null = null;
  private humGain: GainNode | null = null;

  init() {
    if (this.initialized) return;
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      this.ctx = new AudioContextClass();
      this.initialized = true;
      
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      // Initialize speech synthesis voices early
      if (window.speechSynthesis) {
        window.speechSynthesis.getVoices();
      }
    }
  }

  startBootSequence() {
    this.startHum();
  }

  stopBootSequence() {
    this.stopHum();
  }

  private startHum() {
    if (!this.ctx) return;
    if (this.humOsc) return;
    try {
      this.humOsc = this.ctx.createOscillator();
      this.humGain = this.ctx.createGain();
      
      // Low frequency drone/hum for atmospheric sci-fi feel
      this.humOsc.type = 'sine';
      this.humOsc.frequency.setValueAtTime(40, this.ctx.currentTime);
      
      this.humGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.humGain.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 2);
      
      this.humOsc.connect(this.humGain);
      this.humGain.connect(this.ctx.destination);
      this.humOsc.start();
    } catch (e) {
      console.warn("Audio play failed", e);
    }
  }

  private stopHum() {
    if (this.humOsc && this.humGain && this.ctx) {
      this.humGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1.5);
      this.humOsc.stop(this.ctx.currentTime + 1.5);
      this.humOsc = null;
      this.humGain = null;
    }
  }

  playTypingSound() {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gainNode = this.ctx.createGain();
      
      // Sawtooth with low-pass filter makes a "chunky" mechanical click
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(100 + Math.random() * 50, this.ctx.currentTime);
      
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1000, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.1);

      gainNode.gain.setValueAtTime(0.03, this.ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
      
      osc.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    } catch (e) {
      console.warn("Audio play failed", e);
    }
  }

  playOnlineSound() {
    if (!this.ctx) return;
    this.stopHum();
    
    try {
      const osc = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();
      
      osc.type = 'sine';
      osc2.type = 'sine';
      
      // Majestic activation chord
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.setValueAtTime(554.37, this.ctx.currentTime + 0.1);
      osc.frequency.setValueAtTime(659.25, this.ctx.currentTime + 0.2);
      osc.frequency.setValueAtTime(880, this.ctx.currentTime + 0.3);
      
      osc2.frequency.setValueAtTime(442, this.ctx.currentTime);
      osc2.frequency.setValueAtTime(556, this.ctx.currentTime + 0.1);
      osc2.frequency.setValueAtTime(661, this.ctx.currentTime + 0.2);
      osc2.frequency.setValueAtTime(882, this.ctx.currentTime + 0.3);
      
      gainNode.gain.setValueAtTime(0, this.ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.15, this.ctx.currentTime + 0.1);
      gainNode.gain.linearRampToValueAtTime(0.15, this.ctx.currentTime + 0.5);
      gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);
      
      osc.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(this.ctx.destination);
      
      osc.start();
      osc2.start();
      osc.stop(this.ctx.currentTime + 1.2);
      osc2.stop(this.ctx.currentTime + 1.2);
    } catch (e) {
      console.warn("Audio play failed", e);
    }

    // Use Web Speech API for voice announcement
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel(); // Cancel any existing speech
      
      const utterance = new SpeechSynthesisUtterance("System online.");
      utterance.lang = 'en-US';
      utterance.pitch = 0.6; // Slightly deeper, AI-like voice
      utterance.rate = 0.9;
      utterance.volume = 0.8;
      
      // Try to find a good English voice
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(v => 
        v.name.includes('Google UK English Female') || 
        v.name.includes('Microsoft Zira') || 
        (v.lang.startsWith('en') && v.name.includes('Female'))
      );
      
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      
      window.speechSynthesis.speak(utterance);
    }
  }
}

export const audioController = new AudioController();
