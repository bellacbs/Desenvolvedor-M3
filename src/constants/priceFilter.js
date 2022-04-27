export const priceFilter = [
    {
        name: "de R$0 até R$50", isChecked: false
    },
    {
        name: "de R$51 até R$150", isChecked: false
    },
    {
        name: "de R$151 até R$300", isChecked: false
    },
    {
        name: "de R$301 até R$500", isChecked: false
    },
    {
        name: "a partir de R$ 500", isChecked: false
    }
]

export const interval = {
    "de R$0 até R$50": [0, 50],
    "de R$51 até R$150": [51, 150],
    "de R$151 até R$300": [151, 300],
    "de R$301 até R$500": [301, 500],
    "a partir de R$ 500": [500, Number.MAX_SAFE_INTEGER]
}