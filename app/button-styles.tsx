export type ButtonStyle =
    "primary"
    | "secondary"
    | "accent"
    | "primary-border"
    | "disabled"
    | "primary-border-selected"
    | "accent-border"

export const buttonStyles: { [x: string]: string } = {
    ["primary"]: "bg-primary-500 dark:hover:bg-primary-200 hover:bg-primary-300 cursor-pointer",
    ["secondary"]: "bg-secondary-500 dark:hover:bg-secondary-200 hover:bg-secondary-300 cursor-pointer",
    ["accent"]: "bg-accent-500 dark:hover:bg-accent-200 hover:bg-accent-300 cursor-pointer",
    ["accent-border"]: "border border-accent-500 dark:hover:bg-accent-700 hover:bg-accent-600 dark:text-white" +
    " hover:text-white cursor-pointer",
    ["primary-border"]: "border border-primary-500 dark:hover:bg-primary-800 hover:bg-primary-600 dark:text-white hover:text-white cursor-pointer",
    ["primary-border-selected"]: "border border-primary-500 dark:bg-primary-800 bg-primary-600 text-white" +
    " cursor-pointer",
    ["secondary-border"]: "border border-secondary-500 dark:hover:text-secondary-300 hover:text-primary-600" +
    " dark:text-white cursor-pointer",
    ["secondary-border-selected"]: "border border-secondary-500 dark:bg-secondary-800 bg-secondary-600 text-white" +
    " cursor-pointer",
    ["disabled"]: "bg-transparent border-2 dark:border-background-700 border-background-300 cursor-default dark:text-white",
} as const
