import { describe, expect, it } from "vitest";
import { cleanTag, detectPlatform, goDestination } from "./go";

const IPHONE = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Safari/604.1";
const ANDROID = "Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 Chrome/130.0 Mobile Safari/537.36";
const DESKTOP = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Safari/605.1.15";

describe("detectPlatform", () => {
  it("tells iOS, Android and desktop apart", () => {
    expect(detectPlatform(IPHONE)).toBe("ios");
    expect(detectPlatform(ANDROID)).toBe("android");
    expect(detectPlatform(DESKTOP)).toBe("desktop");
    expect(detectPlatform(null)).toBe("desktop");
  });
});

describe("goDestination", () => {
  it("sends iOS to the App Store with ct", () => {
    expect(goDestination(IPHONE, { c: "reel-w1" })).toBe("https://apps.apple.com/app/id6812050509?ct=reel-w1");
  });
  it("sends Android to Play with an encoded referrer", () => {
    expect(goDestination(ANDROID, { c: "reel-w1", s: "instagram" })).toBe(
      "https://play.google.com/store/apps/details?id=app.orti&referrer=utm_source%3Dinstagram%26utm_campaign%3Dreel-w1",
    );
  });
  it("sends desktop to the home page download section", () => {
    expect(goDestination(DESKTOP, { c: "x" })).toBe("https://orti.app/#download");
  });
  it("falls back to bio and rejects unsafe tags", () => {
    expect(goDestination(IPHONE, {})).toContain("ct=bio");
    expect(cleanTag("a&b=c", "bio")).toBe("bio");
    expect(cleanTag("TikTok", "bio")).toBe("tiktok");
    expect(goDestination(ANDROID, { c: "x&referrer=evil" })).toContain("utm_campaign%3Dbio");
  });
});
