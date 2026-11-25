
export default function Marquee() {
  return (
    <>
      <div className="marquee-band" aria-label="Supported tools">
        <p className="marquee-label">Works inside the stack you already use</p>
        <div className="marquee"><div className="marquee-track" id="marqueeTrack">
          <span>Zendesk <i>◆</i> Intercom <i>◆</i> Gorgias <i>◆</i> Freshdesk <i>◆</i> Slack <i>◆</i> Notion <i>◆</i> Linear <i>◆</i> Salesforce Service Cloud <i>◆</i> HubSpot <i>◆</i> Front <i>◆</i></span>
        </div></div>
      </div>
    </>
  );
}
