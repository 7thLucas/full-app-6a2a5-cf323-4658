/*
 * Default Configurable Data — seeded into Mongo on first boot.
 *
 * BEFORE EDITING: read ./RULES.md (especially R5: schema and defaults must
 * stay in sync) and ./configurables.schema.ts. For per-type schema and
 * default-value samples, see RULES.md §5 "Field Type Reference".
 */

export type TBrandColor = {
  primary: string;
  secondary: string;
  accent: string;
};

export type TDefaultConfigurableData = {
  appName: string;
  logoUrl: string;
  brandColor: TBrandColor;
  heroBackground?: string;
  tagline: string;
  supportingLine?: string;
  ctaLabel: string;
  ctaUrl: string;
};

export const defaultConfigurablesData: TDefaultConfigurableData = {
  appName: "SusieQ Kitchen",
  logoUrl: "FILL_LOGO_URL_HERE",
  brandColor: {
    primary: "#E0285A",
    secondary: "#FFF0F3",
    accent: "#F7A8C0",
  },
  heroBackground: "#FFF0F3", // fill it here — soft pink background tint
  tagline: "Homemade comfort, made with love.", // fill it here
  supportingLine: "Freshly cooked dishes from our kitchen to your table.", // fill it here
  ctaLabel: "Order Now", // fill it here
  ctaUrl: "mailto:hello@susieqkitchen.com", // fill it here
  // ─────────────────────────────────────────────────────────────────────
  // Add new field defaults here. See RULES.md §5 for per-type shape.
  // Required branding fields → use the FILL_X_HERE placeholder pattern.
  // Optional/typed defaults → real value with a "// fill it here" comment:
  //
  //   maxItemsPerPage: 12,                     // fill it here
  //   enableNotifications: true,               // fill it here
  //   featuredCategories: [],                  // fill it here
  //   defaultLanguage: "en",                   // must match enum options
  //   launchDate: "2025-01-01T00:00:00.000Z",  // ISO-8601
  //   heroImage: "",                           // resolved URL after upload
  //   galleryImages: [],                       // array of resolved URLs
  // ─────────────────────────────────────────────────────────────────────
};
