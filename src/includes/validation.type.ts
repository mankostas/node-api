

export interface validationProps {
    title: string,
    description: string,
    eventDate: Date | string,
    location: string
}

export interface validationResponse {
    errors: validationProps,
    isValid: Boolean,
}