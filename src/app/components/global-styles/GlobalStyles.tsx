import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* customization of rsuite button */
    .rs-btn {
        border-radius: 3px;
        padding: 11px 22px;

        &:hover {
            box-shadow: 0 3px 8px 0 rgba(0,0,0,.17);
        }

        &:active {
            box-shadow: 0 1px 3px 0 rgba(0,0,0,.17);
        }

        &.rs-btn-xs {
            font-size: 14px;
            border-radius: .1875rem;
            padding: 4px 15px;
            
        }

        &.rs-btn-sm {
            font-size: 14px;
            border-radius: .1875rem;
            padding: 8px 15px;
        }

        &.rs-btn-lg {
            font-size: 1em;
            border-radius: .25rem;
            padding: 16px 48px;
        }
    }

    /* customization of rsuite typography */
 
`;
