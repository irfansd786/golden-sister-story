export function DreamyClouds() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 inset-x-0 h-[380px] w-full overflow-hidden z-0 select-none sm:h-[440px]"
      aria-hidden="true"
    >
      {/* Soft Ambient Night-Sky Atmospheric Glows */}
      <div className="absolute -bottom-16 left-[-8%] h-80 w-[50%] rounded-[100%] bg-gradient-to-t from-[#8E2C68]/25 via-[#46174A]/35 to-transparent blur-3xl" />
      <div className="absolute -bottom-16 right-[-8%] h-80 w-[50%] rounded-[100%] bg-gradient-to-t from-[#8E2C68]/25 via-[#46174A]/35 to-transparent blur-3xl" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#080718] via-[#100B25]/85 to-transparent" />

      {/* Layered Organic SVG Fantasy Clouds */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1440 440"
        fill="none"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          {/* Back Cloud Gradient */}
          <linearGradient id="cloud-grad-back" x1="0%" y1="100%" x2="40%" y2="0%">
            <stop offset="0%" stopColor="#080718" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#210C33" stopOpacity="0.85" />
            <stop offset="80%" stopColor="#4A184D" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#7B2962" stopOpacity="0.6" />
          </linearGradient>

          {/* Left Mid Cloud Gradient */}
          <linearGradient id="cloud-grad-left-mid" x1="0%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#0E061E" stopOpacity="0.98" />
            <stop offset="40%" stopColor="#361245" stopOpacity="0.9" />
            <stop offset="75%" stopColor="#7E2863" stopOpacity="0.85" />
            <stop offset="92%" stopColor="#C4487F" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F5A4C2" stopOpacity="0.85" />
          </linearGradient>

          {/* Right Mid Cloud Gradient */}
          <linearGradient id="cloud-grad-right-mid" x1="100%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#0E061E" stopOpacity="0.98" />
            <stop offset="40%" stopColor="#361245" stopOpacity="0.9" />
            <stop offset="75%" stopColor="#7E2863" stopOpacity="0.85" />
            <stop offset="92%" stopColor="#C4487F" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F5A4C2" stopOpacity="0.85" />
          </linearGradient>

          {/* Front Illuminated Top Light */}
          <linearGradient id="cloud-grad-front-light" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#19092B" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#551C53" stopOpacity="0.9" />
            <stop offset="80%" stopColor="#9C336F" stopOpacity="0.85" />
            <stop offset="95%" stopColor="#E2578C" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFD4E2" stopOpacity="0.9" />
          </linearGradient>

          {/* Golden Rim Accent */}
          <radialGradient id="cloud-gold-accent" cx="50%" cy="10%" r="55%">
            <stop offset="0%" stopColor="#F4C95D" stopOpacity="0.65" />
            <stop offset="50%" stopColor="#E2578C" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          {/* Soft Blur Filter for realistic misty cloud edges (No hard shapes or sphere outlines) */}
          <filter id="cloud-soft-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
          <filter id="cloud-haze-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="16" />
          </filter>
        </defs>

        {/* ========================================================= */}
        {/* LAYER 1: BACK DISTANT CLOUD HAZE                          */}
        {/* ========================================================= */}
        <g filter="url(#cloud-haze-blur)" opacity="0.65">
          {/* Left Back Soft Cloud Profile */}
          <path
            d="M-80,450 
               C-80,310 -20,250 50,270 
               C100,190 200,170 280,230 
               C340,180 430,220 470,290 
               C510,360 480,450 450,450 Z"
            fill="url(#cloud-grad-back)"
          />
          {/* Right Back Soft Cloud Profile */}
          <path
            d="M1520,450 
               C1520,310 1460,250 1390,270 
               C1340,190 1240,170 1160,230 
               C1100,180 1010,220 970,290 
               C930,360 960,450 990,450 Z"
            fill="url(#cloud-grad-back)"
          />
        </g>

        {/* ========================================================= */}
        {/* LAYER 2: MID-LAYER FLUFFY FANTASY CLOUDS                  */}
        {/* ========================================================= */}
        <g filter="url(#cloud-soft-blur)">
          {/* Left Mid-Cloud Silhouette (Organic Bezier Lobes) */}
          <path
            d="M-60,450 
               C-60,330 -10,240 60,260 
               C90,190 170,160 250,200 
               C300,140 390,160 440,230 
               C480,190 540,240 550,310 
               C560,380 500,450 460,450 Z"
            fill="url(#cloud-grad-left-mid)"
            opacity="0.88"
          />

          {/* Right Mid-Cloud Silhouette (Organic Bezier Lobes) */}
          <path
            d="M1500,450 
               C1500,330 1450,240 1380,260 
               C1350,190 1270,160 1190,200 
               C1140,140 1050,160 1000,230 
               C960,190 900,240 890,310 
               C880,380 940,450 980,450 Z"
            fill="url(#cloud-grad-right-mid)"
            opacity="0.88"
          />
        </g>

        {/* ========================================================= */}
        {/* LAYER 3: FOREGROUND ILLUMINATED SOFT CLOUD TOPS           */}
        {/* ========================================================= */}
        <g filter="url(#cloud-soft-blur)" opacity="0.92">
          {/* Foreground Left Cloud Silhouette */}
          <path
            d="M-40,450 
               C-40,350 20,280 80,300 
               C110,230 190,200 260,240 
               C310,190 390,210 430,270 
               C470,240 520,280 525,350 
               C530,410 470,450 440,450 Z"
            fill="url(#cloud-grad-front-light)"
          />

          {/* Foreground Right Cloud Silhouette */}
          <path
            d="M1480,450 
               C1480,350 1420,280 1360,300 
               C1330,230 1250,200 1180,240 
               C1130,190 1050,210 1010,270 
               C970,240 920,280 915,350 
               C910,410 970,450 1000,450 Z"
            fill="url(#cloud-grad-front-light)"
          />

          {/* Soft Golden Moonlit Highlight Curves on Upper Cloud Lobes */}
          <ellipse cx="260" cy="205" rx="75" ry="18" fill="url(#cloud-gold-accent)" opacity="0.7" />
          <ellipse cx="430" cy="235" rx="55" ry="14" fill="url(#cloud-gold-accent)" opacity="0.6" />
          <ellipse
            cx="1180"
            cy="205"
            rx="75"
            ry="18"
            fill="url(#cloud-gold-accent)"
            opacity="0.7"
          />
          <ellipse
            cx="1010"
            cy="235"
            rx="55"
            ry="14"
            fill="url(#cloud-gold-accent)"
            opacity="0.6"
          />
        </g>
      </svg>
    </div>
  );
}
