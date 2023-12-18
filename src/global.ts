import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--web-subheader-semibold: Inter;

/* font sizes */
--web-subheader-semibold-size: 0.75rem;
--web-body-regular-size: 0.88rem;

/* Colors */
--light-mode-neutrals-light-neutrals-30: #d2d5db;
--light-mode-semantic-danger-default: #e22853;
--light-mode-typography-on-color-white: #fff;
--light-mode-component-specific-input-border: #c5c5c5;
--light-mode-neutrals-black-neutrals-100: #000;
--light-mode-typography-support: #6b7280;
--light-mode-typography-primary: #1c3fca;
--light-mode-backgrounds-light: #f3f4f6;
--light-mode-neutrals-darker-neutrals-80: #1f2937;
--light-mode-backgrounds-dark: #08173a;
--light-mode-typography-disabled: #7189a7;
--light-mode-neutrals-lighter-neutrals-20: #e5e7eb;
--light-mode-neutrals-greyest-neutrals-60: #4b5563;

/* Gaps */
--gap-5xs: 0.5rem;
--gap-9xs: 0.25rem;
--gap-0: 0rem;
--gap-5xl: 1.5rem;

/* Paddings */
--padding-9xs: 0.25rem;
--padding-5xs: 0.5rem;
--padding-base: 1rem;
--padding-xl: 1.25rem;
--padding-xs: 0.75rem;

/* Border radiuses */
--br-31xl: 50px;
--br-5xs: 8px;
--br-9xs: 4px;
--br-3xs: 10px;
--br-base: 16px;

}
`;
