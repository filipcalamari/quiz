import { ImageResponse } from "next/og";

// Dynamic Open Graph image for the certificate. This is what LinkedIn (and any
// other scraper) renders as the preview graphic when the /certyfikat share URL
// is posted. It is personalized from ?name= and ?date= query params.
//
// Rendered by Satori (next/og), which only supports a subset of CSS — flexbox
// only, explicit `display: flex` on any element with multiple children, and no
// external SVG paths. The certificate look is approximated with plain divs.

// Standard OG card size.
const WIDTH = 1200;
const HEIGHT = 630;

const BLUE = "#0d1d44";
const GREEN = "#3dd193";
const TEXT_SECONDARY = "#344775";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = (searchParams.get("name") ?? "").trim() || "Uczestnik";
  const date = (searchParams.get("date") ?? "").trim();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 40,
          background: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: `10px solid ${GREEN}`,
            borderRadius: 32,
            padding: "56px 64px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative green band along the bottom edge (approximates the
              certificate waves, which Satori cannot render as SVG paths). */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 120,
              display: "flex",
              background: `linear-gradient(180deg, rgba(61,209,147,0) 0%, rgba(61,209,147,0.18) 100%)`,
            }}
          />

          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 3,
              fontWeight: 700,
              color: GREEN,
              textTransform: "uppercase",
            }}
          >
            Akademia Ocen Pracowniczych
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 28,
            }}
          >
            <div style={{ display: "flex", fontSize: 58, fontWeight: 700, color: BLUE }}>
              Certyfikat ukończenia
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: TEXT_SECONDARY,
              marginTop: 44,
            }}
          >
            {date
              ? `Niniejszym zaświadcza się, że dnia ${date}`
              : "Niniejszym zaświadcza się, że"}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 700,
              color: BLUE,
              marginTop: 12,
              textAlign: "center",
            }}
          >
            {name}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: TEXT_SECONDARY,
              marginTop: 16,
              maxWidth: 760,
              textAlign: "center",
            }}
          >
            ukończył(a) quiz wiedzy o procesie ocen okresowych.
          </div>
        </div>
      </div>
    ),
    { width: WIDTH, height: HEIGHT },
  );
}
