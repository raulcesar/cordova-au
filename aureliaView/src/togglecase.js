export class ToggleCaseValueConverter {
    toView(value, n) {
        return value.toLowerCase();
    }

    fromView(value, n) {
        return value.toUpperCase();
    }
}
