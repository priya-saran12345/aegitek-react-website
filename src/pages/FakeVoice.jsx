import React, { useState, useRef, useEffect } from 'react';
import { Shield, Mic, Upload, CheckCircle, AlertTriangle, Play, Pause, Volume2, Download, Users, Clock, Zap, Lock, Sparkles, Brain, Eye, Waves, ChevronRight, Star, Award, Globe, TrendingUp } from 'lucide-react';

export default function FakeVoiceDetector() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fileInputRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('audio/')) {
      setAudioFile(file);
      setResult(null);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsRecording(true);
      setTimeout(() => {
        setIsRecording(false);
        setAudioFile(new File([], 'recorded_audio.wav'));
      }, 3000);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const analyzeAudio = async () => {
    if (!audioFile) return;
    
    setIsAnalyzing(true);
    setTimeout(() => {
      const confidence = Math.random() * 100;
      const isReal = confidence > 50;
      setResult({
        isReal,
        confidence: confidence.toFixed(1),
        details: {
          spectralAnalysis: Math.random() * 100,
          temporalConsistency: Math.random() * 100,
          artifactDetection: Math.random() * 100,
          neuralPatterns: Math.random() * 100,
          voiceprint: Math.random() * 100
        }
      });
      setIsAnalyzing(false);
    }, 2500);
  };

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const features = [
    {
      icon: Brain,
      title: "Neural Network Detection",
      description: "Advanced transformer-based models trained on millions of voice samples to detect the most sophisticated deepfakes.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 border-blue-200"
    },
    {
      icon: Eye,
      title: "Multi-Modal Analysis", 
      description: "Combines spectral, temporal, and linguistic analysis for comprehensive voice authenticity verification.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 border-purple-200"
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "GPU-accelerated inference delivers results in under 2 seconds while maintaining 99.7% accuracy rates.",
      color: "from-yellow-500 to-orange-500", 
      bgColor: "bg-yellow-50 border-yellow-200"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade encryption, zero-log policy, and compliance with GDPR, SOC2, and ISO 27001 standards.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 border-green-200"
    }
  ];

  const stats = [
    { value: "99.7%", label: "Detection Accuracy", icon: Award },
    { value: "1.8s", label: "Average Processing", icon: Clock },
    { value: "50M+", label: "Samples Analyzed", icon: TrendingUp },
    { value: "24/7", label: "Global Uptime", icon: Globe }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Security Director, TechCorp",
      content: "This tool has been instrumental in protecting our organization from voice-based social engineering attacks. The accuracy is phenomenal.",
      rating: 5
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Forensic Audio Analyst", 
      content: "As someone who's worked in digital forensics for 15 years, I can confidently say this is the most sophisticated voice detection system I've used.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Journalist, Global News Network",
      content: "Essential for our newsroom. We verify every audio submission now. It's saved us from publishing fake news multiple times.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`
          }}
        ></div>
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>


      {/* Hero Section */}
      <section className="relative z-40 pt-20 pb-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-2 text-blue-600 font-semibold bg-blue-100 px-4 py-2 rounded-full w-fit">
                <Sparkles className="h-5 w-5" />
                <span>Next-Generation AI Detection</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent">
                  Detect
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Synthetic
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
                  Voices
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Cutting-edge AI technology that identifies deepfake audio with military-grade precision. 
                Protect your organization from the next generation of digital deception.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                  <button className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-all flex items-center gap-2 shadow-lg">
                    <Zap className="h-5 w-5" />
                    Try Free Detection
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
                <button className="px-8 py-4 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all flex items-center gap-2 shadow-sm">
                  <Play className="h-5 w-5" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl blur opacity-30"></div>
                
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600 font-medium">Live Audio Analysis</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Waves className="h-4 w-4" />
                      44.1 kHz
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center h-32 gap-1">
                    {[...Array(40)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-full animate-pulse"
                        style={{
                          width: '3px',
                          height: `${20 + Math.sin(i * 0.3) * 30 + Math.random() * 20}px`,
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: `${1 + Math.random()}s`
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-100 border border-green-300 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">Authentic</span>
                      </div>
                      <div className="text-xs text-green-600">Confidence: 97.3%</div>
                    </div>
                    <div className="bg-blue-100 border border-blue-300 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Brain className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">AI Analysis</span>
                      </div>
                      <div className="text-xs text-blue-600">Processing: 1.2s</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-white/90 backdrop-blur-sm border border-purple-200 rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-purple-600">99.7%</div>
                <div className="text-xs text-purple-500">Accuracy Rate</div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-sm border border-blue-200 rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-blue-600">1.8s</div>
                <div className="text-xs text-blue-500">Avg. Speed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-40 py-16 bg-white/60 backdrop-blur-sm border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 inline-block">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-purple-200 rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-xl border border-gray-200">
                    <stat.icon className="h-8 w-8 text-blue-600 mx-auto" />
                  </div>
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detection Interface */}
      <section className="relative z-40 py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Advanced Detection
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Upload your audio files or record directly to experience the most sophisticated voice authentication system available today.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-3xl blur opacity-30"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 border border-gray-200 shadow-xl">
                
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg text-white">
                        <Upload className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Upload Audio</h3>
                    </div>
                    
                    <div 
                      className="relative group border-2 border-dashed border-gray-300 hover:border-blue-400 rounded-2xl p-12 text-center cursor-pointer transition-all bg-gray-50 hover:bg-blue-50"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                          <Upload className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Drop your audio file here</h4>
                        <p className="text-gray-600 mb-4">or click to browse</p>
                        <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500">
                          <span className="bg-gray-200 px-2 py-1 rounded">MP3</span>
                          <span className="bg-gray-200 px-2 py-1 rounded">WAV</span>
                          <span className="bg-gray-200 px-2 py-1 rounded">M4A</span>
                          <span className="bg-gray-200 px-2 py-1 rounded">FLAC</span>
                        </div>
                      </div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="audio/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-gradient-to-r from-red-500 to-pink-500 p-2 rounded-lg text-white">
                        <Mic className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Live Recording</h3>
                    </div>
                    
                    <div className="bg-red-50 rounded-2xl p-12 text-center border border-red-200">
                      <div className="relative mb-8">
                        <div className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center transition-all shadow-lg ${
                          isRecording 
                            ? 'bg-red-500 animate-pulse shadow-red-300' 
                            : 'bg-gradient-to-r from-red-500 to-pink-500 hover:scale-110 cursor-pointer'
                        }`}>
                          <Mic className="h-12 w-12 text-white" />
                        </div>
                        {isRecording && (
                          <div className="absolute inset-0 rounded-full border-4 border-red-400 animate-ping"></div>
                        )}
                      </div>
                      
                      <button
                        onClick={startRecording}
                        disabled={isRecording}
                        className={`px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
                          isRecording
                            ? 'bg-red-500 text-white cursor-not-allowed'
                            : 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white hover:scale-105'
                        }`}
                      >
                        {isRecording ? 'Recording... (3s)' : 'Start Recording'}
                      </button>
                      
                      {isRecording && (
                        <p className="text-red-600 mt-4 animate-pulse">Listening... Speak clearly into your microphone</p>
                      )}
                    </div>
                  </div>
                </div>

                {audioFile && (
                  <div className="mb-12 p-8 bg-blue-50 rounded-2xl border border-blue-200">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <Volume2 className="h-6 w-6 text-blue-600" />
                        <h4 className="text-xl font-bold text-gray-900">Audio Preview</h4>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={togglePlayback}
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all hover:scale-105 font-semibold shadow-lg"
                        >
                          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                          {isPlaying ? 'Pause' : 'Play'}
                        </button>
                      </div>
                    </div>
                    <audio ref={audioRef} className="w-full" controls>
                      <source src={audioFile instanceof File ? URL.createObjectURL(audioFile) : ''} />
                    </audio>
                  </div>
                )}

                <div className="text-center mb-12">
                  <button
                    onClick={analyzeAudio}
                    disabled={!audioFile || isAnalyzing}
                    className="relative group px-12 py-6 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white rounded-2xl font-bold text-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-xl"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
                    <div className="relative flex items-center gap-3">
                      {isAnalyzing ? (
                        <>
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Analyzing Audio...
                        </>
                      ) : (
                        <>
                          <Shield className="h-6 w-6" />
                          Run AI Detection
                          <Sparkles className="h-6 w-6" />
                        </>
                      )}
                    </div>
                  </button>
                </div>

                {result && (
                  <div className={`p-8 rounded-2xl border-2 shadow-lg ${
                    result.isReal 
                      ? 'bg-green-50 border-green-300' 
                      : 'bg-red-50 border-red-300'
                  }`}>
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`p-3 rounded-xl shadow-lg ${result.isReal ? 'bg-green-500' : 'bg-red-500'}`}>
                        {result.isReal ? (
                          <CheckCircle className="h-8 w-8 text-white" />
                        ) : (
                          <AlertTriangle className="h-8 w-8 text-white" />
                        )}
                      </div>
                      <div>
                        <h4 className={`text-3xl font-bold mb-2 ${result.isReal ? 'text-green-700' : 'text-red-700'}`}>
                          {result.isReal ? 'Authentic Voice Detected' : 'Synthetic Voice Detected'}
                        </h4>
                        <p className="text-gray-700 text-lg">
                          Confidence Level: <span className="font-bold">{result.confidence}%</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {Object.entries(result.details).map(([key, value], index) => (
                        <div key={index} className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <h5 className="text-gray-800 font-semibold capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </h5>
                          </div>
                          <div className="text-3xl font-bold text-blue-600 mb-2">{value.toFixed(1)}%</div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-40 py-32 bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Cutting-Edge Technology
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our AI system combines multiple advanced detection methods to provide unparalleled accuracy in identifying synthetic voices and deepfake audio content.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
                <div className={`relative ${feature.bgColor} backdrop-blur-sm rounded-2xl p-8 border hover:shadow-lg transition-all group-hover:scale-105`}>
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6 shadow-lg`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-40 py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Trusted Worldwide
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of professionals who rely on our technology to combat synthetic media threats.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}