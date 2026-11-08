import type { ReactNode } from "react";

/**
 * Theme-aware cover illustrations for each project, drawn as inline SVG.
 * Colours come from Tailwind theme tokens, so they follow the selected theme.
 */
function Frame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={label}
      className="absolute inset-0 size-full"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function Caption({ x, y, children, anchor = "middle" }: CaptionProps) {
  return (
    <text x={x} y={y} textAnchor={anchor} className="fill-subtle font-mono text-[10px]">
      {children}
    </text>
  );
}

interface CaptionProps {
  x: number;
  y: number;
  children: ReactNode;
  anchor?: "start" | "middle" | "end";
}

function CinemaCover() {
  const booked = new Set([3, 4, 12, 13, 14, 25, 26, 33, 34, 35, 36, 47, 48, 52, 53]);
  const selected = new Set([22, 23]);
  return (
    <Frame label="Cinema seat map with booked and selected seats">
      <path d="M90 72 Q200 40 310 72" className="stroke-accent" strokeWidth={3} />
      <path d="M100 84 Q200 58 300 84" className="stroke-accent/30" strokeWidth={8} />
      <Caption x={200} y={102}>
        SCREEN
      </Caption>
      {Array.from({ length: 60 }, (_, i) => {
        const row = Math.floor(i / 10);
        const col = i % 10;
        const x = 92 + col * 22 + (col >= 5 ? 6 : 0);
        const y = 118 + row * 22;
        const className = selected.has(i)
          ? "fill-accent-2 stroke-accent-2"
          : booked.has(i)
            ? "fill-accent/70 stroke-accent"
            : "stroke-outline";
        return <rect key={i} x={x} y={y} width={16} height={13} rx={3} className={className} />;
      })}
      <Caption x={200} y={268}>
        ROW C · SEATS 3–4 · 19:30
      </Caption>
    </Frame>
  );
}

function MedicalCover() {
  const tooth =
    "M172 92 C176 74 224 74 228 92 C246 84 266 100 260 128 C254 158 248 182 240 210 C236 226 222 226 220 210 L212 170 C209 158 191 158 188 170 L180 210 C178 226 164 226 160 210 C152 182 146 158 140 128 C134 100 154 84 172 92 Z";
  return (
    <Frame label="Dental scan with a predicted segmentation mask learned from a few samples">
      {[78, 132, 186].map((y) => (
        <g key={y}>
          <rect x={36} y={y} width={48} height={38} rx={6} className="stroke-outline" />
          <circle cx={60} cy={y + 19} r={9} className="fill-accent/40" />
          <path d={`M88 ${y + 19} L128 150`} className="stroke-outline" strokeDasharray="3 4" />
        </g>
      ))}
      <Caption x={60} y={244}>
        3-shot
      </Caption>
      <path d={tooth} className="stroke-soft/50" strokeWidth={2} />
      <path
        d={tooth}
        transform="translate(200 150) scale(0.9) translate(-200 -150)"
        className="fill-accent/15 stroke-accent"
        strokeWidth={1.5}
        strokeDasharray="5 4"
      />
      {[
        [172, 92],
        [228, 92],
        [260, 128],
        [240, 210],
        [160, 210],
        [140, 128],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={3.5} className="fill-accent-2" />
      ))}
      <path d="M126 70 h14 M126 70 v14 M274 70 h-14 M274 70 v14" className="stroke-accent" />
      <path d="M126 236 h14 M126 236 v-14 M274 236 h-14 M274 236 v-14" className="stroke-accent" />
      <rect x={292} y={104} width={78} height={24} rx={12} className="fill-accent/15" />
      <text x={331} y={120} textAnchor="middle" className="fill-accent font-mono text-[10px]">
        mask 0.94
      </text>
    </Frame>
  );
}

function CoralsCover() {
  return (
    <Frame label="Coral reef with a growth chart">
      <path
        d="M20 244 Q70 232 120 244 T220 244 T320 244 T420 244"
        className="stroke-outline"
        strokeWidth={2}
      />
      <g className="stroke-accent-2" strokeWidth={5}>
        <path d="M96 244 V176 M96 206 L72 182 V158 M96 192 L120 168 V146 M72 170 L58 156 M120 160 L136 144" />
        <path
          d="M160 244 V196 M160 214 L146 198 M160 206 L176 188 V170 M176 182 L190 170"
          strokeWidth={4}
        />
      </g>
      <g className="fill-accent-2">
        {[
          [58, 156],
          [72, 158],
          [120, 146],
          [136, 144],
          [146, 198],
          [176, 170],
          [190, 170],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={4} />
        ))}
      </g>
      <path d="M232 92 V212 H372" className="stroke-outline" />
      {[122, 152, 182].map((y) => (
        <path key={y} d={`M232 ${y} H372`} className="stroke-line" strokeDasharray="2 4" />
      ))}
      <path
        d="M240 196 L264 182 L288 188 L312 150 L336 158 L360 112"
        className="stroke-accent"
        strokeWidth={2.5}
      />
      {[
        [240, 196],
        [264, 182],
        [288, 188],
        [312, 150],
        [336, 158],
        [360, 112],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={3.5} className="fill-bg stroke-accent" />
      ))}
      <Caption x={302} y={80}>
        reef health index
      </Caption>
      {[
        [312, 236, 4],
        [340, 226, 6],
        [262, 230, 3],
      ].map(([cx, cy, r]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} className="stroke-accent/50" />
      ))}
    </Frame>
  );
}

function OcrCover() {
  const sourceLines = [86, 74, 92, 60, 88, 70, 80, 52];
  const targetLines = [80, 90, 66, 84, 58, 92, 72, 64];
  return (
    <Frame label="Printed Sinhala document scanned and translated into Tamil">
      <rect x={52} y={56} width={124} height={188} rx={10} className="stroke-outline" />
      {sourceLines.map((width, i) => (
        <rect
          key={i}
          x={68}
          y={80 + i * 18}
          width={width}
          height={6}
          rx={3}
          className="fill-outline"
        />
      ))}
      <rect x={52} y={124} width={124} height={22} className="fill-accent/15" />
      <path d="M44 146 H184" className="stroke-accent" strokeWidth={2} />
      <Caption x={114} y={268}>
        සිංහල
      </Caption>

      <path d="M192 150 H210" className="stroke-accent-2" strokeWidth={2} />
      <path d="M204 143 L212 150 L204 157" className="stroke-accent-2" strokeWidth={2} />

      <rect x={224} y={56} width={124} height={188} rx={10} className="stroke-accent/50" />
      {targetLines.map((width, i) => (
        <rect
          key={i}
          x={240}
          y={80 + i * 18}
          width={width}
          height={6}
          rx={3}
          className="fill-accent/45"
        />
      ))}
      <Caption x={286} y={268}>
        தமிழ்
      </Caption>
    </Frame>
  );
}

function SurveillanceCover() {
  return (
    <Frame label="Security camera detecting an intruder and switching on a light">
      <path d="M44 52 H76 M60 52 V66" className="stroke-outline" strokeWidth={3} />
      <rect
        x={34}
        y={66}
        width={92}
        height={42}
        rx={9}
        className="stroke-soft/60"
        strokeWidth={2}
      />
      <circle cx={112} cy={87} r={11} className="fill-accent/20 stroke-accent" strokeWidth={2} />
      <circle cx={48} cy={78} r={3} className="fill-accent" />
      <path d="M122 96 L330 250 L176 266 Z" className="fill-accent/[0.07] stroke-accent/25" />

      <rect
        x={198}
        y={150}
        width={74}
        height={98}
        rx={4}
        className="stroke-accent"
        strokeWidth={1.5}
        strokeDasharray="6 4"
      />
      <circle cx={235} cy={178} r={13} className="fill-outline" />
      <path
        d="M210 246 C210 214 220 198 235 198 C250 198 260 214 260 246 Z"
        className="fill-outline"
      />
      <rect x={198} y={128} width={92} height={18} rx={4} className="fill-accent" />
      <text x={204} y={141} className="fill-bg font-mono text-[10px] font-semibold">
        intruder 0.97
      </text>

      <circle
        cx={330}
        cy={84}
        r={18}
        className="fill-accent-2/25 stroke-accent-2"
        strokeWidth={2}
      />
      <path d="M322 104 H338 M324 112 H336" className="stroke-accent-2" strokeWidth={2} />
      <path
        d="M330 50 V40 M358 60 L366 52 M302 60 L294 52 M366 84 H376 M294 84 H284"
        className="stroke-accent-2"
        strokeWidth={2}
      />
    </Frame>
  );
}

function MealCover() {
  const circumference = 2 * Math.PI * 58;
  const segments = [
    { share: 0.42, className: "stroke-accent" },
    { share: 0.28, className: "stroke-accent-2" },
    { share: 0.2, className: "stroke-subtle" },
    { share: 0.1, className: "stroke-outline" },
  ];
  let offset = 0;
  return (
    <Frame label="Meal tracking dashboard with a nutrition breakdown">
      <g transform="rotate(-90 140 150)">
        {segments.map((segment) => {
          const length = segment.share * circumference;
          const circle = (
            <circle
              key={segment.className}
              cx={140}
              cy={150}
              r={58}
              strokeWidth={20}
              strokeLinecap="butt"
              className={segment.className}
              strokeDasharray={`${length - 3} ${circumference - length + 3}`}
              strokeDashoffset={-offset}
            />
          );
          offset += length;
          return circle;
        })}
      </g>
      <text x={140} y={150} textAnchor="middle" className="fill-ink font-mono text-[18px]">
        1,840
      </text>
      <Caption x={140} y={168}>
        kcal today
      </Caption>
      {[
        ["carbs", 104, "fill-accent"],
        ["protein", 76, "fill-accent-2"],
        ["fat", 54, "fill-subtle"],
        ["fibre", 30, "fill-outline"],
      ].map(([label, width, className], i) => (
        <g key={label}>
          <Caption x={244} y={104 + i * 34} anchor="start">
            {label}
          </Caption>
          <rect x={244} y={110 + i * 34} width={110} height={8} rx={4} className="fill-line" />
          <rect
            x={244}
            y={110 + i * 34}
            width={Number(width)}
            height={8}
            rx={4}
            className={String(className)}
          />
        </g>
      ))}
    </Frame>
  );
}

function CryptoCover() {
  // [open, close, high, low] in SVG y-coordinates (smaller = higher price).
  const candles: Array<[number, number, number, number]> = [
    [140, 168, 120, 182],
    [168, 150, 136, 176],
    [150, 160, 140, 170],
    [160, 128, 116, 168],
    [128, 136, 118, 146],
    [136, 112, 100, 144],
    [112, 122, 104, 132],
    [122, 96, 84, 128],
    [96, 104, 88, 114],
    [104, 80, 68, 110],
  ];
  return (
    <Frame label="Live auction candlestick chart with a highest-bid ticker">
      {[90, 130, 170, 210].map((y) => (
        <path key={y} d={`M40 ${y} H360`} className="stroke-line" strokeDasharray="2 4" />
      ))}
      {candles.map(([open, close, high, low], i) => {
        const x = 56 + i * 30;
        const rising = close < open;
        return (
          <g key={i}>
            <path
              d={`M${x} ${high} V${low}`}
              className={rising ? "stroke-accent" : "stroke-subtle"}
            />
            <rect
              x={x - 7}
              y={Math.min(open, close)}
              width={14}
              height={Math.max(4, Math.abs(open - close))}
              rx={2}
              className={rising ? "fill-accent" : "fill-outline"}
            />
          </g>
        );
      })}
      <path d="M40 80 H360" className="stroke-accent-2" strokeDasharray="6 5" />
      <rect x={232} y={214} width={128} height={44} rx={10} className="fill-bg stroke-accent/60" />
      <circle cx={250} cy={236} r={4} className="fill-accent" />
      <Caption x={262} y={232} anchor="start">
        highest bid
      </Caption>
      <text x={262} y={248} className="fill-ink font-mono text-[12px]">
        0.42 BTC
      </text>
    </Frame>
  );
}

const covers: Record<string, () => ReactNode> = {
  "cinema-app": CinemaCover,
  "medical-annotation": MedicalCover,
  "corals-protector": CoralsCover,
  "sinhala-tamil-ocr": OcrCover,
  "secured-vision": SurveillanceCover,
  snat: MealCover,
  "crypto-bidding": CryptoCover,
};

export function hasCover(slug: string): boolean {
  return slug in covers;
}

export function ProjectCover({ slug }: { slug: string }) {
  const Cover = covers[slug];
  return Cover ? <Cover /> : null;
}
