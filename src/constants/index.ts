import { AuthFormProps, SIGN_IN_FORM, SIGN_UP_FORM } from "./forms"
// import {
//   GROUP_PAGE_MENU,
//   GroupMenuProps,
//   LANDING_PAGE_MENU,
//   MenuProps,
// } from "./menus"
// import {
//   CREATE_GROUP_PLACEHOLDER,
//   CreateGroupPlaceholderProps,
// } from "./placeholder"
// import { GROUP_LIST, GroupListProps } from "./slider"

import { LANDING_PAGE_MENU, MenuProps } from "./menus";

type GroupleConstantsProps = {
  landingPageMenu: MenuProps[]
  signUpForm: AuthFormProps[]
  signInForm: AuthFormProps[]
  // groupList: GroupListProps[]
  // createGroupPlaceholder: CreateGroupPlaceholderProps[]
  // groupPageMenu: GroupMenuProps[]
}

export const GROUPLE_CONSTANTS: GroupleConstantsProps = {
  landingPageMenu: LANDING_PAGE_MENU,
  signUpForm: SIGN_UP_FORM,
  signInForm: SIGN_IN_FORM,
  // groupList: GROUP_LIST,
  // createGroupPlaceholder: CREATE_GROUP_PLACEHOLDER,
  // groupPageMenu: GROUP_PAGE_MENU,
}


export const PLANS = [
  {
      name: "Free",
      info: "For most individuals",
      price: {
          monthly: 0,
          yearly: 0,
      },
      features: [
          { text: "Personalized Domain" },
          { text: "Up to 1 Domain"},
          { text: "Group collaboration" },
          { text: "Custom Hosting", tooltip: "shared" },
          { text: "Community support", tooltip: "Get answers your questions on e-mail" },
          { text: "AI powered transcription", tooltip: "Only for Paid users" },
      ],
      btn: {
          text: "Start for free",
          href: "/",
          variant: "default",
      }
  },
  {
      name: "Pro",
      info: "For small businesses",
      price: {
          monthly: 199,
          yearly: Math.round(199 * 12 * (1 - 0.12)),
      },
      features: [
          { text: "Personalized Domain" },
          { text: "Up to 50 Domains", limit: "50 domains" },
          { text: "Multiple groups" },
          { text: "Custom Hosting", tooltip: "premium hosting" },
          { text: "Community support", tooltip: "Whats groups" },
          { text: "Priority support", tooltip: "Get 24/7 chat support" },
          { text: "AI powered transcription", tooltip: "Get up 1 courses" },
      ],
      btn: {
          text: "Get started",
          href: "/",
          variant: "purple",
      }
  },
  {
      name: "Business",
      info: "For large organizations",
      price: {
          monthly: 399,
          yearly: Math.round(399 * 12 * (1 - 0.12)),
      },
      features: [
          { text: "Unlimited domains" },
          { text: "Customizable groups" },
          { text: "Custom Hosting", tooltip: "Unlimited" },
          { text: "Export transcript", tooltip: "Unlimited lines" },
          { text: "Dedicated manager", tooltip: "Get priority support from our team" },
          { text: "AI powered suggestions", tooltip: "Get unlimited AI powered suggestions" },
      ],
      btn: {
          text: "Contact team",
          href: "/",
          variant: "default",
      }
  }
];