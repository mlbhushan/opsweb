import { defineQuery } from "next-sanity";

// ─── Blog ───
export const BLOG_POSTS_QUERY = defineQuery(/* groq */ `
  *[_type == "blogPost"] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    author,
    date,
    readTime,
    excerpt,
    "image": mainImage.asset->url,
    "imageAlt": mainImage.alt
  }
`);

export const BLOG_POST_QUERY = defineQuery(/* groq */ `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    author,
    date,
    readTime,
    excerpt,
    "image": mainImage.asset->url,
    "imageAlt": mainImage.alt,
    body
  }
`);

export const BLOG_SLUGS_QUERY = defineQuery(/* groq */ `
  *[_type == "blogPost" && defined(slug.current)]{ "slug": slug.current }
`);

// ─── Case Studies ───
export const CASE_STUDIES_QUERY = defineQuery(/* groq */ `
  *[_type == "caseStudy"] | order(_createdAt desc) {
    _id,
    company,
    "slug": slug.current,
    industry,
    companySize,
    headline,
    "image": mainImage.asset->url,
    "imageAlt": mainImage.alt,
    metrics
  }
`);

export const CASE_STUDY_QUERY = defineQuery(/* groq */ `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    company,
    "slug": slug.current,
    industry,
    companySize,
    headline,
    "image": mainImage.asset->url,
    "imageAlt": mainImage.alt,
    metrics,
    challenge,
    solution,
    results,
    quote
  }
`);

export const CASE_STUDY_SLUGS_QUERY = defineQuery(/* groq */ `
  *[_type == "caseStudy" && defined(slug.current)]{ "slug": slug.current }
`);

// ─── News ───
export const NEWS_QUERY = defineQuery(/* groq */ `
  *[_type == "newsItem"] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    date,
    excerpt,
    tag
  }
`);

// ─── Guides ───
export const GUIDES_QUERY = defineQuery(/* groq */ `
  *[_type == "guide"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    type,
    pageCount,
    featured,
    "fileUrl": file.asset->url
  }
`);

// ─── Webinars ───
export const WEBINARS_QUERY = defineQuery(/* groq */ `
  *[_type == "webinar"] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    duration,
    date,
    tag,
    videoUrl,
    "thumbnail": thumbnail.asset->url
  }
`);

// ─── Careers ───
export const CAREERS_QUERY = defineQuery(/* groq */ `
  *[_type == "careerOpening" && active == true] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    department,
    location,
    description
  }
`);

// ─── Integrations ───
export const INTEGRATIONS_QUERY = defineQuery(/* groq */ `
  *[_type == "integration"] | order(category asc, name asc) {
    _id,
    name,
    "slug": slug.current,
    category,
    description,
    "logo": logo.asset->url,
    url
  }
`);

// ─── Bot Knowledge Docs ───
export const KNOWLEDGE_DOCS_QUERY = defineQuery(/* groq */ `
  *[_type == "knowledgeDoc" && active == true] | order(_createdAt desc) {
    _id,
    title,
    category,
    content,
    tags,
    active,
    _createdAt,
    _updatedAt
  }
`);

export const ALL_KNOWLEDGE_DOCS_QUERY = defineQuery(/* groq */ `
  *[_type == "knowledgeDoc"] | order(_createdAt desc) {
    _id,
    title,
    category,
    content,
    tags,
    active,
    _createdAt,
    _updatedAt
  }
`);
