const NEW_SITE_URL = "https://navaratech.ai/";

export default function AnnouncementBanner() {
  return (
    <a
      href={NEW_SITE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="announcement-banner"
    >
      PieQ is now Navara Tech!{" "}
      <br className="announcement-banner__break" />
      Please visit our new website <span aria-hidden="true">→</span>
    </a>
  );
}
