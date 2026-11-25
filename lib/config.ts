/* ============================================================
   HELIOS site configuration — the one place to change links.

   Cal.com is the site's only contact method. The booking
   section embeds the Cal.com event below via @calcom/embed-react
   (see components/CalEmbed.tsx). To point the site at a
   different Cal.com event, change CAL_LINK (and CAL_NAMESPACE
   if the embed namespace changes with it).
   ============================================================ */

/** Cal.com namespace for the embed (set in the Cal.com embed settings). */
export const CAL_NAMESPACE = "helios-customer-operations";

/** Cal.com event link, as used by the <Cal> embed component. */
export const CAL_LINK = "heliosrw/helios-customer-operations";

/** Full Cal.com booking page URL — fallback "open in a new tab" link. */
export const CAL_BOOKING_PAGE_URL = "https://cal.com/" + CAL_LINK;

/** Cal.com popup config string for data-cal-config */
export const CAL_POPUP_CONFIG = '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}';

export const LINKEDIN_COMPANY_URL =
  "https://www.linkedin.com/company/helios-customer-operations/";
