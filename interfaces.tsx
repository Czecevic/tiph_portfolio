import { StaticImageData } from "next/image";

export interface ImageItem {
  id: number;
  imglink: string;
}

export interface PhoneViewerProps {
  images: ImageItem[];
  currentIndex: number;
  onNext: () => void;
  getHighlightStyle: (index: number) => string;
}

export interface CharteGraphiqueProps {
  title?: string;
  desc_1?: string;
  desc_2?: string;
  desc_3?: string;
  imgCG?: string;
  imgCG_2?: string;
  logoEcrit?: string;
  logo?: string;
}

export interface WireframesProps {
  wireframesDesc?: string;
  wireframesDescSuite?: string;
  wireframes?: string[];
}

export interface CollectionProps {
  title: string;
}

export interface TopNavBarSimulationProps {
  nysos: StaticImageData | string;
}

export interface ProjectInfoProps {
  title: string;
  projectInfo: {
    id: number;
    title: string;
    value: string;
  }[];
}
export interface ItemProduct {
  id: number;
  linkImg: StaticImageData;
  title: string;
}

export interface ProductCardProps {
  item: ItemProduct;
  className?: string;
  imageClassName?: string;
}

export interface Project {
  id: number;
  title: string;
  imgPres: string;
  desc?: string;
  typeProject: string;
  role: string;
  objectif: string;
  date: string;
  titleBackoffice?: string;
  descBackoffice?: string;
  backoffice?: string;
  descTitle?: string;
  rechercheUtilisateur?: string;
  suiteRechercheUtilisateur?: string;
  recherche?: string[];
  recherche_2?: string;
  wireframes?: string[];
  wireframesDesc?: string;
  wireframesDescSuite?: string;
  ciblePrincipale?: string;
  ciblePrincipaleSuite?: string;
  charteGraphiqueTitle?: string;
  CGDesc_1?: string;
  CGDesc_2?: string;
  CGDesc_3?: string;
  CGImage?: string[];
  logo?: string;
  logoEcrit?: string;
  UI?: {
    id: number;
    imglink: string;
  }[];
  TU?: {
    id: number;
    imglink: string;
  }[];
  TU_2?: {
    id: number;
    imglink: string;
  }[];
}

export interface OtherProject {
  id: number;
  title: string;
  desc: string;
}

export interface FooterCategory {
  id: number;
  title: string;
  links: string[];
}

export interface IllustrationItem {
  id: number;
  name: string;
  link: StaticImageData;
  add: string;
}

export interface CollectionCarouselProps {
  title: React.ReactNode;
  items: IllustrationItem[];
}

export interface FooterWireFrameProps {
  nysos: StaticImageData | string;
}

export interface BundleItem {
  id: number;
  title: string;
  discountText: string;
}

export interface FeatureItem {
  label: string;
  value: string;
  valueColor?: string;
}

export interface ReviewItem {
  id: number;
  author: string;
  recommended: "Recommended" | "Not Recommended" | "Review";
  content: string;
  date: string;
  hours: string;
}
