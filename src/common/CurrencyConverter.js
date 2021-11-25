export const convertToCurrency = (n) => {
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(n)
}