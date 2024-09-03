export interface SearchParams {
    name?: string
    categoriesId?: number[] | null
    maxCost?: number
    destinationsId?: number[] | null
    grades?: number[] | null
}