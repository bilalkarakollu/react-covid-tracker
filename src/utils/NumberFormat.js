export const NumberFormat = (number) => {
    return new Intl.NumberFormat('en-US').format(number);
}