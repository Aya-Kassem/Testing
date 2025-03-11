export function calculateDiscount(total, isMember) {
    if (total < 0) return 0;
    if (isMember) {
        return total * 0.2; // 20% discount for members
    }
    return total * 0.1; // 10% discount for non-members
}


