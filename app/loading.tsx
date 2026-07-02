import Image from "next/image";

export default function Loading() {
  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh", position: "fixed", inset: 0, zIndex: 9999, background: "#010101", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
        {/* Pulsing monogram logo */}
        <div style={{ animation: "velora-pulse 2s infinite ease-in-out" }}>
          <Image src="/brand/velora-monogram.png" alt="Velora" width={80} height={80} style={{ filter: "drop-shadow(0 0 15px rgba(200, 152, 72, 0.2))" }} priority />
        </div>
        {/* Sleek loading bar */}
        <div style={{ width: "120px", height: "2px", background: "rgba(255,255,255,0.08)", position: "relative", overflow: "hidden", borderRadius: "999px" }}>
          <div style={{ width: "60px", height: "100%", background: "linear-gradient(90deg, #c89848, #f8e8b0)", position: "absolute", left: 0, borderRadius: "999px", animation: "velora-loading-beam 1.4s infinite ease-in-out" }} />
        </div>
      </div>
      <style>{`
        @keyframes velora-pulse {
          0%, 100% { opacity: 0.42; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.02); }
        }
        @keyframes velora-loading-beam {
          0% { left: -60px; }
          100% { left: 120px; }
        }
      `}</style>
    </div>
  );
}
