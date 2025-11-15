import type { ItemOnListDTO } from "$lib/dtos/item-dto";

export const claimFilter = (filter: string | null, ownerId: string, userId: string | null) => {
    if (filter === "unclaimed") {
        return (item: ItemOnListDTO) => item.isClaimable;
    } else if (filter === "claimed") {
        return (item: ItemOnListDTO) => {
            const userHasClaimed = item.claims.find((c) => userId && c.claimedBy?.id === userId);
            return !item.isClaimable || userHasClaimed;
        };
    } else if (filter === "owner") {
        return (item: ItemOnListDTO) => item.addedBy.id === ownerId;
    } else if (filter === "suggested") {
        return (item: ItemOnListDTO) => item.addedBy.id !== ownerId;
    }
    return (_item: ItemOnListDTO) => true;
};

export const decodeMultiValueFilter = (filter: string | null) => {
    if (filter === null) {
        return [] as string[];
    }
    return decodeURIComponent(filter).split(",");
};
