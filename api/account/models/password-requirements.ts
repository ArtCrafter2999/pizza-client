export interface PasswordRequirements {
    requiredLength: number,
    requiredUniqueChars: number,
    requireNonAlphanumeric: boolean,
    requireLowercase: boolean,
    requireUppercase: boolean,
    requireDigit: boolean,
}

export interface PasswordSatisfied {
    [x: string]: boolean
}

export const defaultRequirements: PasswordRequirements =
{
    requiredLength: 3,
    requiredUniqueChars: 1,
    requireNonAlphanumeric: false,
    requireLowercase: false,
    requireUppercase: false,
    requireDigit: false
}